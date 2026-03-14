import { NextRequest, NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID || "C04S9DR1J1H";
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

// ——— Rate Limiting (in-memory, per-IP) ———
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Clean up stale entries every 10 minutes
if (typeof globalThis !== "undefined") {
  const cleanup = () => {
    const now = Date.now();
    for (const [ip, entry] of rateMap.entries()) {
      if (now > entry.resetAt) rateMap.delete(ip);
    }
  };
  setInterval(cleanup, 10 * 60 * 1000);
}

// ——— Turnstile Verification ———
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true; // Skip if not configured
  if (!token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: token,
        remoteip: ip,
      }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    console.error("Turnstile verification failed");
    return true; // Fail open — don't block real users if Turnstile is down
  }
}

// ——— Slack Message ———
function buildSlackBlocks(
  name: string,
  email: string,
  phone?: string,
  projectType?: string,
  description?: string
) {
  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "🌟 New Website Inquiry",
        emoji: true,
      },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Name:*\n${name}` },
        { type: "mrkdwn", text: `*Email:*\n${email}` },
        { type: "mrkdwn", text: `*Phone:*\n${phone || "—"}` },
        { type: "mrkdwn", text: `*Project Type:*\n${projectType || "—"}` },
      ],
    },
    ...(description
      ? [
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Description:*\n${description}` },
          },
        ]
      : []),
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `Submitted from northstarhometechnologies.com • ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}`,
        },
      ],
    },
  ];
}

async function postViaWebhook(blocks: unknown[]) {
  if (!SLACK_WEBHOOK_URL) return false;
  const res = await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blocks }),
  });
  return res.ok;
}

async function postViaBotToken(blocks: unknown[]) {
  if (!SLACK_BOT_TOKEN) return false;
  const res = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL_ID,
      blocks,
      text: "New website inquiry received",
    }),
  });
  const data = await res.json();
  return data.ok === true;
}

// ——— Main Handler ———
export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit check
    if (isRateLimited(ip)) {
      console.log(`Rate limited: ${ip}`);
      // Return success to not reveal rate limiting to bots
      return NextResponse.json({ success: true });
    }

    const body = await req.json();
    const { name, email, phone, projectType, description, company, turnstileToken } = body;

    // Honeypot check — if the hidden "company" field is filled, it's a bot
    if (company) {
      console.log(`Honeypot triggered by ${ip}`);
      // Return success so the bot thinks it worked
      return NextResponse.json({ success: true });
    }

    // Turnstile verification
    const turnstileValid = await verifyTurnstile(turnstileToken || "", ip);
    if (!turnstileValid) {
      console.log(`Turnstile failed for ${ip}`);
      return NextResponse.json({ error: "spam" }, { status: 403 });
    }

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const blocks = buildSlackBlocks(name, email, phone, projectType, description);

    // Try webhook first, fall back to bot token
    let sent = await postViaWebhook(blocks);
    if (!sent) {
      sent = await postViaBotToken(blocks);
    }

    if (!sent) {
      console.error("No Slack delivery method configured or both failed.");
      console.log("Contact submission (undelivered):", JSON.stringify(body));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
