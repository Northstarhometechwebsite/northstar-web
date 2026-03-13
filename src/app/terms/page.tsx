import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | NorthStar Home Technologies",
  description:
    "Terms and conditions for NorthStar Home Technologies services, management plans, and client agreements.",
};

const sections = [
  { id: "definitions", label: "Definitions" },
  { id: "acceptance", label: "Acceptance & Approval" },
  { id: "ip", label: "Intellectual Property" },
  { id: "scope", label: "Scope of Services" },
  { id: "payment", label: "Payment Terms" },
  { id: "timeline", label: "Project Timeline" },
  { id: "returns", label: "Returns & Exchanges" },
  { id: "cancellation", label: "Cancellation" },
  { id: "tier0", label: "Standard Installation (Tier 0)" },
  { id: "tier1", label: "Managed Client Plan (Tier 1)" },
  { id: "tier2", label: "Preferred Management (Tier 2)" },
  { id: "privacy", label: "Privacy Policy" },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-8 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h1 className="font-forum text-deep-navy text-[40px] lg:text-[56px] tracking-[0.03em] uppercase">
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-warm-taupe text-[14px] mt-4">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="bg-cream pb-[120px] lg:pb-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Table of Contents — sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <h3 className="font-body text-[12px] font-semibold uppercase tracking-[0.15em] text-warm-taupe mb-4">
                  Contents
                </h3>
                <nav className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="font-body text-[13px] text-slate-blue hover:text-deep-navy transition-colors leading-snug"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 font-body text-[16px] text-deep-navy leading-[1.8] space-y-16">
              {/* PART 1 */}
              <div>
                <h2 className="font-forum text-[28px] lg:text-[32px] tracking-[0.03em] uppercase mb-8 text-deep-navy">
                  Part 1: General Terms
                </h2>

                <div id="definitions" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    1. Definitions
                  </h3>
                  <ul className="space-y-2 text-slate-blue">
                    <li><strong className="text-deep-navy">Allowance:</strong> A combined total of the Installed Allowance and Material Allowance.</li>
                    <li><strong className="text-deep-navy">Installed Allowance:</strong> An amount designated for the installed cost of a specific item or category within the project scope.</li>
                    <li><strong className="text-deep-navy">Material Allowance:</strong> An amount designated for materials only, not including installation labor.</li>
                    <li><strong className="text-deep-navy">Punch List:</strong> A list of items requiring correction or completion following Substantial Completion.</li>
                    <li><strong className="text-deep-navy">Substantial Completion:</strong> The stage when the project is sufficiently complete for the client to use the system for its intended purpose.</li>
                    <li><strong className="text-deep-navy">Work:</strong> All services, labor, materials, and equipment provided by NorthStar Home Technologies, Inc. (&ldquo;NHT&rdquo;) as described in the applicable proposal or agreement.</li>
                  </ul>
                </div>

                <div id="acceptance" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    2. Acceptance &amp; Approval
                  </h3>
                  <p className="text-slate-blue mb-4">
                    Agreement terms are valid for thirty (30) days from the date of the proposal. Approval may be provided via text message, email confirmation, written signature, or submission of a down payment. Any of these actions constitutes acceptance of these Terms and Conditions in their entirety.
                  </p>
                </div>

                <div id="ip" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    3. Intellectual Property
                  </h3>
                  <p className="text-slate-blue mb-4">
                    All designs, proposals, drawings, and specifications prepared by NHT are the intellectual property of NHT. Unauthorized sharing, reproduction, or distribution of NHT proposals or design documents to third parties (including competing integrators) will result in a design fee of 6% of total project value for proposals under $500,000 and 10% for proposals over $500,000.
                  </p>
                  <p className="text-slate-blue">
                    Clients may purchase full intellectual property rights to their project designs. Terms and pricing for IP purchase are available upon request.
                  </p>
                </div>

                <div id="scope" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    4. Scope of Services
                  </h3>
                  <p className="text-slate-blue mb-4">
                    NHT provides design, procurement, installation, programming, and commissioning of smart home systems as described in the applicable proposal. The following are excluded unless explicitly stated: additional design revisions beyond three (3) rounds, building permits and associated fees, third-party service subscriptions (streaming, cloud storage, etc.), and work outside the scope defined in the proposal.
                  </p>
                </div>

                <div id="payment" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    5. Payment Terms
                  </h3>
                  <p className="text-slate-blue mb-4">
                    Payment is due upon completion unless otherwise specified in the proposal. Accounts outstanding beyond thirty (30) days are subject to a late fee of 1.5% per month (18% annually). Non-payment may result in suspension of services, deactivation of remote support, and/or legal action for collection.
                  </p>
                  <p className="text-slate-blue mb-4">
                    A 5% minor adjustment allowance is included for minor scope variations. All applicable sales tax will be added to invoices.
                  </p>
                </div>

                <div id="timeline" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    6. Project Timeline
                  </h3>
                  <p className="text-slate-blue mb-4">
                    NHT will target Substantial Completion by the date specified in the proposal. Delays caused by material shortages, third-party trades, weather, or client-requested changes may extend the timeline. Upon Substantial Completion, a walk-through will be scheduled to generate a Punch List of remaining items, which NHT will address within a reasonable timeframe.
                  </p>
                </div>

                <div id="returns" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    7. Returns &amp; Exchanges
                  </h3>
                  <p className="text-slate-blue mb-4">
                    Non-stocked items are subject to a 5% restocking fee. Items that have been delivered and/or unboxed are eligible for exchange only (not return) within thirty (30) days of delivery. Items must be in original packaging and undamaged condition to qualify for exchange.
                  </p>
                </div>

                <div id="cancellation" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    8. Cancellation
                  </h3>
                  <p className="text-slate-blue">
                    Cancellation requires fourteen (14) days written notice via email or through the NorthStar App portal. Billing will continue through the cancellation month. No refunds will be issued for unused portions of prepaid services.
                  </p>
                </div>
              </div>

              {/* PART 2 */}
              <div>
                <h2 className="font-forum text-[28px] lg:text-[32px] tracking-[0.03em] uppercase mb-8 text-deep-navy">
                  Part 2: Service Tiers &amp; Management Plans
                </h2>

                <div id="tier0" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    9. Standard Installation (Tier 0)
                  </h3>
                  <p className="text-slate-blue mb-4 italic">Included with every project · No contract required</p>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside">
                    <li>Bespoke system and installation designs</li>
                    <li>Standard business hours access (8AM–4PM, Monday–Friday) to the NHT Service Desk via text or call, on a first-come, first-serve basis</li>
                    <li>6-month in-house hardware warranty covering hardware replacement and labor</li>
                    <li>Lifetime workmanship warranty on installation quality and programming</li>
                    <li>Access to the NorthStar App for system information (WiFi/surveillance logins), payment management, and client updates</li>
                    <li>Additional work billed at $140/hour</li>
                  </ul>
                </div>

                <div id="tier1" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    10. Managed Client Plan (Tier 1) — $88/month · $1,056/year
                  </h3>
                  <p className="text-slate-blue mb-4 italic">1-year commitment required</p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Service Access</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Dedicated Managed Clients phone number (text or call)</li>
                    <li>Service Desk available 8AM–6PM Monday–Friday, 8AM–2PM Saturday</li>
                    <li>Same- or next-day priority scheduling guarantee (subject to emergency and weather exceptions)</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Support &amp; Rates</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Free daytime and Saturday remote support</li>
                    <li>Daytime and Saturday on-site support: $140/hour (1-hour minimum)</li>
                    <li>After-hours and Sunday on-site support: $210/hour (1-hour minimum)</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Hardware &amp; Warranty</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Advanced hardware replacement under manufacturer warranty (labor included; client covers shipping; 14-day return requirement for defective unit)</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">App &amp; Reviews</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Enhanced App access: knowledge base, support tickets, direct feedback, and client updates</li>
                    <li>Annual tech review (system performance assessment and new options)</li>
                    <li>Annual on-site system update and audit</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Payment &amp; Termination</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Payment due in advance via the NorthStar App</li>
                    <li>1.5% monthly late fee on past-due balances</li>
                    <li>Cancel via App before renewal date; no early termination; no refunds for unused portions</li>
                    <li>Rate adjustments require 30-day advance notice</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Legal</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside">
                    <li>Limitation of liability capped at total fees paid</li>
                    <li>Force majeure provisions apply</li>
                    <li>Dispute resolution: mediation followed by binding arbitration in Minnesota; class action waiver</li>
                  </ul>
                </div>

                <div id="tier2" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    11. Preferred Management Client Plan (Tier 2) — $399/month · $4,788/year
                  </h3>
                  <p className="text-slate-blue mb-4 italic">1-year commitment required</p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Service Access</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>24/7 access to dedicated Service Desk phone number (2-hour response target)</li>
                    <li>Guaranteed same-day scheduling for requests received before 2PM</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Support &amp; Rates</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Free 24/7 remote support including weekends</li>
                    <li>Free daytime on-site support (8AM–6PM, Monday–Friday)</li>
                    <li>After-hours on-site support: $210/hour (1-hour minimum, no truck roll fee)</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Hardware &amp; Warranty</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Advanced hardware replacement with priority procurement (labor included)</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">App &amp; Reviews</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Full App access with priority ticket resolution</li>
                    <li>Biannual tech reviews</li>
                    <li>Quarterly on-site system updates and audits</li>
                    <li>Preventative system monitoring with weekly status emails</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Payment &amp; Termination</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Payment due in advance via the NorthStar App</li>
                    <li>Non-payment may result in downgrade to Managed status</li>
                    <li>Cancel via App before renewal date; no early termination; no refunds for unused portions</li>
                    <li>Rate adjustments require 30-day advance notice</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Additional</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Travel beyond 50 miles from NHT office may incur additional fees (disclosed in advance)</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Legal</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside">
                    <li>Limitation of liability capped at total fees paid</li>
                    <li>Force majeure provisions apply</li>
                    <li>Dispute resolution: mediation followed by binding arbitration in Minnesota; class action waiver</li>
                  </ul>
                </div>
              </div>

              {/* PART 3 */}
              <div id="privacy" className="scroll-mt-28">
                <h2 className="font-forum text-[28px] lg:text-[32px] tracking-[0.03em] uppercase mb-8 text-deep-navy">
                  Part 3: Privacy Policy
                </h2>
                <p className="text-slate-blue mb-4">
                  NorthStar Home Technologies, Inc. respects your privacy. This section describes how we collect, use, and protect your information when you visit our website or use our services.
                </p>
                <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Data Collection</h4>
                <p className="text-slate-blue mb-4">
                  We collect information you voluntarily provide (name, email, phone, project details via our contact form) and information automatically collected through cookies and tracking technologies (page views, device information, browsing behavior).
                </p>
                <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Cookies &amp; Tracking</h4>
                <p className="text-slate-blue mb-4">
                  With your consent, we use cookies and tracking technologies provided by Google Analytics 4, Meta (Facebook) Pixel, Microsoft Clarity, and LinkedIn Insight Tag. These tools help us understand site traffic, measure advertising effectiveness, and improve our services. You may opt out at any time by adjusting your cookie preferences or browser settings.
                </p>
                <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Third-Party Data Sharing</h4>
                <p className="text-slate-blue mb-4">
                  We may share anonymized or aggregated data with third-party analytics providers (Google, Meta, Microsoft, LinkedIn) for the purposes described above. We do not sell your personal information.
                </p>
                <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">NorthStar App</h4>
                <p className="text-slate-blue mb-4">
                  The NorthStar App collects and stores information necessary to provide client services, including system configuration data, service history, and communication records. This data is stored securely and is accessible only to authorized NHT personnel and the client.
                </p>
                <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Opt-Out</h4>
                <p className="text-slate-blue mb-4">
                  You may decline cookies when first visiting our website. To opt out after accepting, clear your browser cookies and revisit the site. For questions about your data or to request deletion, contact us at{" "}
                  <a href="mailto:info@northstarhometech.com" className="underline hover:text-deep-navy">
                    info@northstarhometech.com
                  </a>.
                </p>
              </div>

              <p className="text-warm-taupe text-[14px] pt-8 border-t border-warm-taupe/20">
                These terms are governed by the laws of the State of Minnesota. For questions, contact NorthStar Home Technologies, Inc. at{" "}
                <a href="mailto:info@northstarhometech.com" className="underline">info@northstarhometech.com</a>{" "}
                or{" "}
                <a href="tel:6122542626" className="underline">(612) 254-2626</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
