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
  { id: "tier3", label: "Concierge Managed (Tier 3)" },
  { id: "monitoring", label: "Security Monitoring" },
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
            Last updated: August 8, 2026
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
                    <li>Additional work billed at $165/hour</li>
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
                    <li>Daytime and Saturday on-site support: $165/hour (1-hour minimum)</li>
                    <li>After-hours, Sunday, and holiday on-site support: $240/hour (1-hour minimum)</li>
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
                    <li>After-hours, Sunday, and holiday on-site support: $240/hour (1-hour minimum, no truck roll fee)</li>
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

                <div id="tier3" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    12. Concierge Managed (Tier 3) — From $1,199/month · $14,388/year
                  </h3>
                  <p className="text-slate-blue mb-2 italic">
                    12-month annual membership, billed yearly in full · Offered by inquiry only · No online signup
                  </p>
                  <p className="text-slate-blue mb-4 italic">
                    The listed price is a baseline — final pricing is customizable and confirmed by inquiry only.
                  </p>
                  <p className="text-slate-blue mb-6">
                    Everything in Preferred Managed, plus a dedicated client manager and a NorthStar team that answers day or night.
                  </p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Everything in Preferred Managed</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>All Preferred benefits carry over: same-day scheduling, free daytime on-site support, priority procurement, quarterly on-site updates</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">The Concierge Layer</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>24/7 concierge service — reach your NorthStar team day or night</li>
                    <li>A dedicated client manager who knows your home and your systems</li>
                    <li>Weekly text check-ins from your dedicated client manager</li>
                    <li>VIP response process: 1-hour response, 24/7/365 — nights, Sundays, and holidays included</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Tailored to Your Home</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Scope customized on your activation call — coverage shaped around your properties, systems, and household</li>
                    <li>Activated personally by a NorthStar team member</li>
                    <li>Annual membership, billed yearly in full — final pricing is confirmed on your activation call</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Concierge Managed · Terms</h4>
                  <p className="text-slate-blue mb-4">
                    Concierge Managed is an annual membership billed yearly in full, in advance, with a twelve (12) month term. Membership begins on the activation date confirmed with your NorthStar client manager. Pricing starts at $1,199 per month ($14,388 annually) and is finalized during your activation call based on the properties, systems, and coverage included in your scope.
                  </p>
                  <p className="text-slate-blue mb-4">
                    Concierge Managed includes all benefits of Preferred Managed, plus a dedicated client manager, weekly check-ins, and 24/7 concierge access. The Concierge Managed response commitment is one (1) hour, twenty-four hours a day, seven days a week, including nights, weekends, Sundays, and holidays. This response commitment is measured in calendar time from the time your request is received and refers to NorthStar&apos;s acknowledgement of and response to your request; on-site arrival times vary with travel distance, parts availability, and the nature of the issue.
                  </p>
                  <p className="text-slate-blue mb-6">
                    Concierge Managed is offered by inquiry only and is activated by a NorthStar team member. It cannot be purchased online. Travel beyond 50 miles may incur additional fees.
                  </p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Legal</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside">
                    <li>Limitation of liability capped at total fees paid</li>
                    <li>Force majeure provisions apply</li>
                    <li>Dispute resolution: mediation followed by binding arbitration in Minnesota; class action waiver</li>
                  </ul>
                </div>
              </div>

                {/* Security Monitoring */}
                <div id="monitoring" className="scroll-mt-28 mb-12">
                  <h3 className="font-forum text-[22px] tracking-[0.03em] uppercase mb-4">
                    13. Security Monitoring Service
                  </h3>
                  <p className="text-slate-blue mb-4 italic">Month-to-month · No long-term contract required</p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Service Description</h4>
                  <p className="text-slate-blue mb-4">
                    NorthStar Home Technologies offers professional 24/7 security monitoring through USA Central Station. Monitoring covers burglary, fire, and medical emergencies based on the installed system configuration. This service is separate from and independent of NorthStar&apos;s Managed and Preferred Management Plans.
                  </p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Pricing</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>$34.99/month plus applicable sales tax</li>
                    <li>Month-to-month — cancel anytime with no early termination fees</li>
                    <li>Rate adjustments require 30 days&apos; written notice via the NorthStar App or email</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Activation &amp; System Requirements</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>NorthStar configures and tests the security system to standard operating condition at the time of installation</li>
                    <li>Monitoring requires a compatible DSC security panel (PowerSeries Neo or Qolsys) installed and commissioned by NorthStar</li>
                    <li>The security system must maintain active communication with the central monitoring station at all times</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Notifications &amp; Response</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Alarm events generate notifications via text message, automated call, or live operator call depending on event severity</li>
                    <li>Emergency services are dispatched per the central station&apos;s established protocols and the client&apos;s emergency contact list</li>
                    <li>NorthStar is not responsible for the response time or actions of emergency service providers</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Client Responsibilities</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Maintain the security system in proper working condition, including timely battery replacement when low-battery signals occur</li>
                    <li>Annual system checkups are recommended (available at an additional fee)</li>
                    <li>Notify NorthStar promptly of any changes to emergency contact information</li>
                    <li>Ensure the premises maintain reliable internet and/or cellular connectivity for system communication</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Account Management</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Monitoring is managed through the NorthStar Connect app (available on iOS App Store)</li>
                    <li>Cancellation may be submitted at any time through the app or by contacting NorthStar directly</li>
                    <li>Payment is due monthly in advance via the NorthStar App</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Non-Payment &amp; Suspension</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside mb-6">
                    <li>Accounts past due beyond thirty (30) days may result in suspension of monitoring services</li>
                    <li>NorthStar may pursue collection of outstanding balances</li>
                    <li>A late fee of 1.5% per month (18% annually) applies to past-due balances</li>
                  </ul>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Limitation of Liability</h4>
                  <p className="text-slate-blue mb-4">
                    NorthStar and its monitoring partners provide monitoring services on a best-effort basis. NorthStar shall not be liable for losses, damages, or injuries resulting from: failure of communication networks, power outages beyond battery backup duration, false alarms or failure to detect an event, delays in emergency service response, or any event beyond NorthStar&apos;s reasonable control. Total liability is limited to the monitoring fees paid by the client in the twelve (12) months preceding the claim.
                  </p>

                  <h4 className="font-body font-semibold text-deep-navy text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">Dispute Resolution</h4>
                  <ul className="space-y-2 text-slate-blue list-disc list-inside">
                    <li>Disputes shall be resolved through mediation followed by binding arbitration in the State of Minnesota</li>
                    <li>Class action waiver applies</li>
                  </ul>
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

                <p className="text-warm-taupe text-[14px] pt-8 border-t border-warm-taupe/20">
                These terms are governed by the laws of the State of Minnesota. For questions, contact NorthStar Home Technologies, Inc. at{" "}
                <a href="mailto:info@northstarhometech.com" className="underline">info@northstarhometech.com</a>{" "}
                or{" "}
                <a href="tel:6122542626" className="underline">(612) 254-2626</a>.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
