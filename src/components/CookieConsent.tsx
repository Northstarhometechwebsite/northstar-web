"use client";

import { useState, useEffect } from "react";

const COOKIE_NAME = "ns_cookie_consent";
const EXPIRY_DAYS = 365;

function getConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + COOKIE_NAME + "=([^;]+)"));
  return match ? match[2] : null;
}

function setConsent(value: string) {
  const expires = new Date(Date.now() + EXPIRY_DAYS * 864e5).toUTCString();
  document.cookie = `${COOKIE_NAME}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function enableTracking() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cookie_consent_granted",
    consent: { analytics: true, marketing: true },
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      enableTracking();
    }
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    enableTracking();
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent("declined");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className={`fixed bottom-0 left-0 right-0 z-[9999] bg-deep-navy text-cream px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <p className="font-body text-[14px] leading-relaxed max-w-[700px]">
        We use cookies to enhance your browsing experience and analyze site
        traffic. By clicking &ldquo;Accept,&rdquo; you consent to our use of
        cookies.{" "}
        <a
          href="/privacy"
          className="text-warm-taupe underline hover:text-cream transition-colors"
        >
          Privacy Policy
        </a>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={handleDecline}
          className="font-body text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-2.5 bg-transparent text-cream border border-cream/30 hover:border-cream transition-all duration-200 cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="font-body text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-2.5 bg-cream text-deep-navy hover:bg-white transition-all duration-200 cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
