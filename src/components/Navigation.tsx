"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { trackCTAClick } from "@/lib/analytics";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span
              className={`font-forum text-[22px] lg:text-[26px] tracking-[0.15em] leading-tight transition-colors duration-500 ${
                scrolled ? "text-deep-navy" : "text-cream"
              }`}
            >
              NORTHSTAR
            </span>
            <span
              className={`font-body text-[9px] lg:text-[10px] font-semibold tracking-[0.2em] uppercase leading-tight transition-colors duration-500 ${
                scrolled ? "text-slate-blue" : "text-cream/60"
              }`}
            >
              HOME TECHNOLOGIES
            </span>
          </Link>

          {/* Desktop Nav — minimal, Savant-style */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[12px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-deep-navy/70 hover:text-warm-gold"
                    : "text-cream/70 hover:text-warm-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={COMPANY.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("nav_northstar_connect")}
              className="font-body font-semibold text-[11px] tracking-[0.12em] uppercase px-6 py-2.5 bg-slate-blue text-cream hover:bg-deep-navy transition-all duration-300"
            >
              NORTHSTAR CONNECT
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-[4.5px] bg-cream"
                  : scrolled
                  ? "bg-deep-navy"
                  : "bg-cream"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-deep-navy"
                  : "bg-cream"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[4.5px] bg-cream"
                  : scrolled
                  ? "bg-deep-navy"
                  : "bg-cream"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-deep-navy flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-forum text-cream text-[28px] tracking-[0.12em] uppercase hover:text-warm-gold transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-8 gold-rule" />
        <a
          href={COMPANY.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setMobileOpen(false);
            trackCTAClick("mobile_nav_northstar_connect");
          }}
          className="font-body font-semibold text-[12px] tracking-[0.12em] uppercase px-8 py-3 bg-slate-blue text-cream hover:bg-deep-navy transition-all duration-300"
        >
          NORTHSTAR CONNECT
        </a>
        <Link
          href="/contact"
          onClick={() => {
            setMobileOpen(false);
            trackCTAClick("mobile_nav_consultation");
          }}
          className="font-body text-[12px] tracking-[0.12em] uppercase text-warm-gold hover:text-cream transition-colors duration-300"
        >
          Schedule a Consultation
        </Link>
      </div>
    </>
  );
}
