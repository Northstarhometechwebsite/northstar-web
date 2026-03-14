import { NextRequest, NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID || "C04S9DR1J1H";

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
      text: "New website inquiry received", // fallback for notifications
    }),
  });
  const data = await res.json();
  return data.ok === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, description } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
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

    // Always return success to the visitor
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
