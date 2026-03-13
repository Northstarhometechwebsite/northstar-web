import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { managementPlans } from "@/content/management-plans";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "NorthStar Connect | NorthStar Home Technologies",
  description:
    "Your smart home, managed. Explore NorthStar Connect — client portal, management plans, and the AI-powered concierge experience.",
};

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-forum text-cream text-[42px] lg:text-[64px] tracking-[0.03em] uppercase">
            NorthStar Connect
          </h1>
          <p className="font-body text-cream/60 text-[18px] font-light mt-4">
            Your Smart Home, Managed.
          </p>
        </div>
      </section>

      {/* What is NorthStar Connect */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase mb-8">
              Your Client Portal
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-[17px] text-slate-blue leading-[1.8] mb-10">
              Every NorthStar client receives complimentary access to NorthStar
              Connect — your central hub for managing your smart home experience.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Project Management",
                body: "Track progress, access documents, and stay informed at every stage of your project.",
              },
              {
                title: "Billing & Invoices",
                body: "View and manage invoices directly within the portal — simple, transparent, organized.",
              },
              {
                title: "Document Sharing",
                body: "Plans, manuals, and project documents available anytime, anywhere.",
              },
              {
                title: "24/7 AI Chat Assistant",
                body: "Instant answers about your system, troubleshooting guidance, and support requests — anytime, day or night.",
              },
              {
                title: "System Database",
                body: "A complete record of every product, component, and configuration installed in your home.",
              },
              {
                title: "Service Requests",
                body: "Submit and track service tickets directly from the portal — no phone calls required.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8">
                  <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] text-slate-blue leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management Plans */}
      <section className="bg-white py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase text-center mb-4">
              Management Plans
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-[17px] text-slate-blue text-center leading-[1.8] max-w-2xl mx-auto mb-16">
              NorthStar understands that no two clients are alike, which is why
              we offer tiered management plans to complement your custom smart
              home system.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {managementPlans.map((plan, i) => (
              <SectionReveal key={plan.id} delay={i * 0.15}>
                <div
                  className={`p-8 lg:p-10 h-full flex flex-col ${
                    plan.dark
                      ? "bg-deep-navy text-cream"
                      : plan.highlighted
                      ? "bg-white border-2 border-slate-blue"
                      : "bg-cream border border-warm-taupe/30"
                  }`}
                >
                  <p
                    className={`font-body text-[12px] font-semibold uppercase tracking-[0.15em] mb-2 ${
                      plan.dark ? "text-warm-taupe" : "text-warm-taupe"
                    }`}
                  >
                    TIER {plan.tier}
                  </p>
                  <h3
                    className={`font-forum text-[24px] lg:text-[28px] tracking-[0.03em] uppercase mb-2 ${
                      plan.dark ? "text-cream" : "text-deep-navy"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-forum text-[32px] lg:text-[36px] mb-1 ${
                      plan.dark ? "text-cream" : "text-deep-navy"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`font-body text-[13px] mb-1 ${
                      plan.dark ? "text-cream/50" : "text-slate-blue"
                    }`}
                  >
                    {plan.annual}
                  </p>
                  <p
                    className={`font-body text-[12px] uppercase tracking-[0.1em] mb-6 ${
                      plan.dark ? "text-cream/40" : "text-warm-taupe"
                    }`}
                  >
                    {plan.commitment}
                  </p>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f, fi) => (
                      <li
                        key={fi}
                        className={`font-body text-[14px] leading-[1.6] flex gap-3 ${
                          plan.dark ? "text-cream/80" : "text-slate-blue"
                        }`}
                      >
                        <span
                          className={`shrink-0 mt-1 ${
                            plan.dark ? "text-warm-taupe" : "text-slate-blue"
                          }`}
                        >
                          ✓
                        </span>
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  {plan.cta && (
                    <Link
                      href={plan.cta.href}
                      className={`inline-block text-center font-body font-bold text-[13px] tracking-[0.1em] uppercase px-6 py-3 transition-all duration-300 ${
                        plan.dark
                          ? "bg-cream text-deep-navy hover:bg-white"
                          : "bg-deep-navy text-cream hover:bg-slate-blue"
                      }`}
                    >
                      {plan.cta.label}
                    </Link>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>

          <p className="font-body text-[13px] text-warm-taupe text-center mt-8">
            All plans are 1-year commitments managed through the NorthStar App.{" "}
            <Link
              href="/terms"
              className="underline hover:text-slate-blue transition-colors"
            >
              See full Terms and Conditions.
            </Link>
          </p>
        </div>
      </section>

      {/* AI Concierge Section */}
      <section className="bg-deep-navy py-[120px] lg:py-[180px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-2">
              <SectionReveal>
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-warm-taupe mb-4">
                  
                </p>
                <h2 className="font-forum text-cream text-[36px] lg:text-[52px] tracking-[0.03em] uppercase leading-[1.1] mb-4">
                  Your Home, At Your Command
                </h2>
                <p className="font-body text-warm-taupe text-[17px] font-light mb-12">
                  The NorthStar App, reimagined.
                </p>
              </SectionReveal>

              <div className="space-y-10">
                {[
                  {
                    headline: "Ask anything about your home.",
                    body: "The new AI-powered chat interface lets you manage your entire smart home through natural conversation.",
                  },
                  {
                    headline: "System information at your fingertips.",
                    body: "Ask about your WiFi credentials, camera feeds, lighting scenes, or any system detail.",
                  },
                  {
                    headline: "Schedule and manage appointments.",
                    body: "Book service visits, reschedule, or check upcoming appointments through chat.",
                  },
                  {
                    headline: "Get instant answers.",
                    body: "No waiting on hold, no digging through menus. 24/7 availability for Preferred clients.",
                  },
                ].map((item, i) => (
                  <SectionReveal key={i} delay={0.1 + i * 0.15}>
                    <div>
                      <p className="font-body text-cream text-[17px] font-semibold mb-2">
                        {item.headline}
                      </p>
                      <p className="font-body text-cream/50 text-[15px] leading-[1.7]">
                        {item.body}
                      </p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionReveal direction="right">
                <div className="flex justify-center gap-4 lg:gap-6">
                  {/* Chris will provide iPhone screenshots of the new AI chat interface */}
                  <div className="w-[200px] lg:w-[260px] transform rotate-[-4deg]">
                    <ImagePlaceholder
                      label="App Screenshot"
                      aspect="aspect-[9/19]"
                      className="rounded-[24px] shadow-2xl"
                    />
                  </div>
                  <div className="w-[200px] lg:w-[260px] transform rotate-[4deg] mt-8">
                    <ImagePlaceholder
                      label="AI Chat Interface"
                      aspect="aspect-[9/19]"
                      className="rounded-[24px] shadow-2xl"
                    />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-[100px] lg:py-[140px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://portal.northstarhometech.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-deep-navy text-cream hover:bg-slate-blue transition-all duration-300"
              >
                ALREADY A CLIENT? LOG IN
              </a>
              <Link
                href="/contact"
                className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-cream transition-all duration-300"
              >
                BECOME A CLIENT
              </Link>
            </div>
          </SectionReveal>

          <p className="font-body text-[13px] text-warm-taupe mt-8">
            All management plans are subject to our{" "}
            <Link
              href="/terms"
              className="underline hover:text-slate-blue transition-colors"
            >
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
