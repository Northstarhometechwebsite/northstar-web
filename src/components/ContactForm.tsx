"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { trackFormSubmit } from "@/lib/analytics";

const PROJECT_TYPES = [
  "New Construction",
  "Renovation",
  "Lighting Design",
  "Automation Upgrade",
  "Service / Support",
  "Other",
];

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Load Turnstile widget
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;

    // Define callback before loading script
    (window as unknown as Record<string, unknown>).onTurnstileLoad = () => {
      if (turnstileRef.current && (window as unknown as Record<string, { render: (el: HTMLElement, opts: Record<string, unknown>) => void }>).turnstile) {
        (window as unknown as Record<string, { render: (el: HTMLElement, opts: Record<string, unknown>) => void }>).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const projectType = data.get("projectType") as string;

    // Track the form submission
    trackFormSubmit("contact", projectType);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType,
          description: data.get("description"),
          // Honeypot — bots will fill this, humans won't see it
          company: data.get("company"),
          // Turnstile token
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => null);
        if (result?.error === "spam") {
          // Silently "succeed" for spam — don't let bots know they were caught
          setSubmitted(true);
          return;
        }
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      alert(
        "Something went wrong. Please call us at (612) 254-2626 or email info@northstarhometech.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-forum text-deep-navy text-[28px] tracking-[0.03em] uppercase mb-4">
          Thank You
        </h3>
        <p className="font-body text-[17px] text-slate-blue leading-[1.7]">
          We&apos;ve received your inquiry and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field — hidden from humans, visible to bots */}
      <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-deep-navy mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white border border-warm-taupe/30 px-4 py-3 font-body text-[16px] text-deep-navy focus:outline-none focus:border-slate-blue transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-deep-navy mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white border border-warm-taupe/30 px-4 py-3 font-body text-[16px] text-deep-navy focus:outline-none focus:border-slate-blue transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-deep-navy mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white border border-warm-taupe/30 px-4 py-3 font-body text-[16px] text-deep-navy focus:outline-none focus:border-slate-blue transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="projectType"
            className="block font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-deep-navy mb-2"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full bg-white border border-warm-taupe/30 px-4 py-3 font-body text-[16px] text-deep-navy focus:outline-none focus:border-slate-blue transition-colors appearance-none"
          >
            <option value="">Select...</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-deep-navy mb-2"
        >
          Brief Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="w-full bg-white border border-warm-taupe/30 px-4 py-3 font-body text-[16px] text-deep-navy focus:outline-none focus:border-slate-blue transition-colors resize-none"
        />
      </div>

      {/* Cloudflare Turnstile widget */}
      {TURNSTILE_SITE_KEY && (
        <div ref={turnstileRef} className="cf-turnstile" />
      )}

      <button
        type="submit"
        disabled={submitting}
        className="font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-deep-navy text-cream hover:bg-slate-blue transition-all duration-300 disabled:opacity-50 cursor-pointer"
      >
        {submitting ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
