import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="font-forum text-[22px] tracking-[0.15em]">
                NORTHSTAR
              </span>
              <br />
              <span className="font-body text-[9px] font-semibold tracking-[0.2em] uppercase text-cream/70">
                HOME TECHNOLOGIES
              </span>
            </div>
            <p className="font-body text-[14px] text-warm-taupe leading-relaxed mb-6">
              {COMPANY.tagline}
            </p>
            <div className="space-y-1 text-[13px] text-cream/60">
              <p>{COMPANY.addresses.stillwater.street}</p>
              <p>
                {COMPANY.addresses.stillwater.city},{" "}
                {COMPANY.addresses.stillwater.state}{" "}
                {COMPANY.addresses.stillwater.zip}
              </p>
              <p className="mt-3">{COMPANY.addresses.minneapolis.street}</p>
              <p>
                {COMPANY.addresses.minneapolis.city},{" "}
                {COMPANY.addresses.minneapolis.state}{" "}
                {COMPANY.addresses.minneapolis.zip}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-warm-taupe mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[14px] text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-warm-taupe mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-[14px]">
              <p>
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-cream/70 hover:text-cream transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-cream/70 hover:text-cream transition-colors"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-cream/50 text-[13px] mt-4">{COMPANY.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-cream/40">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <p className="text-[12px] text-warm-taupe/60 italic font-body">
            {COMPANY.tagline}
          </p>
          <div className="flex gap-6 text-[12px] text-cream/40">
            <Link href="/privacy" className="hover:text-cream/70 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
