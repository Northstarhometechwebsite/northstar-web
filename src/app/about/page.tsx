import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { TIMELINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | NorthStar Home Technologies",
  description:
    "Founded in 2015 by Chris Hayes, NorthStar Home Technologies redefines luxury home automation with precision engineering, tailored solutions, and lifelong service.",
};

const values = [
  {
    title: "Exceptional Service",
    body: "We are a service business that provides technology — not a technology company that offers service. Every interaction reflects our commitment to exceeding expectations.",
  },
  {
    title: "Purposeful Innovation",
    body: "We adopt technology when it genuinely improves lives, not for novelty. Every system we integrate serves a clear purpose and delivers measurable value.",
  },
  {
    title: "Thoughtful Design",
    body: "Technology should enhance architecture, not compete with it. Our solutions disappear into the spaces they serve — visible only in the experience they create.",
  },
  {
    title: "Life-Long Partnership",
    body: "Our relationship with clients doesn't end at installation. We provide ongoing support, system optimization, and proactive care for the life of your home.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-forum text-cream text-[42px] lg:text-[64px] tracking-[0.03em] uppercase">
            About NorthStar
          </h1>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-3">
              <SectionReveal>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.15em] mb-4">
                  FOUNDER
                </p>
                <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase mb-8">
                  Chris Hayes
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[17px] text-slate-blue leading-[1.8] mb-6">
                  Chris Hayes founded NorthStar in 2015 to redefine luxury home
                  automation. He saw a disconnect in the industry — firms
                  focused on selling systems, not on long-term service and
                  thoughtful integration. NorthStar was built around a different
                  philosophy: precision engineering, tailored solutions, and
                  lifelong service.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
                  Today, NorthStar is recognized across the industry —
                  earning the Lutron Excellence Award, Josh AI Chairman
                  Accolade, and a reputation as one of the most trusted
                  integrators in the Twin Cities.
                </p>
              </SectionReveal>
            </div>
            <div className="lg:col-span-2">
              <SectionReveal direction="right">
                {/* Chris Hayes professional portrait */}
                <ImagePlaceholder
                  label="Chris Hayes, Founder"
                  aspect="aspect-[3/4]"
                />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-[120px] lg:py-[160px]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase text-center mb-16 lg:mb-24">
              Our Journey
            </h2>
          </SectionReveal>

          <div className="space-y-12 lg:space-y-16">
            {TIMELINE.map((item, i) => (
              <SectionReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 lg:gap-10 items-start">
                  <span className="font-forum text-deep-navy text-[28px] lg:text-[36px] tracking-[0.03em] shrink-0 w-20 lg:w-24">
                    {item.year}
                  </span>
                  <div className="pt-2 lg:pt-3 border-t border-warm-taupe/30 flex-1">
                    <p className="font-body text-[16px] text-slate-blue leading-[1.7]">
                      {item.event}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase text-center mb-16 lg:mb-24">
              What We Believe
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div>
                  <h3 className="font-forum text-deep-navy text-[20px] lg:text-[24px] tracking-[0.05em] uppercase mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-[15px] text-slate-blue leading-[1.7]">
                    {v.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="bg-white py-[100px] lg:py-[140px]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase mb-8">
              The Team
            </h2>
            <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
              Our team&apos;s least experienced member has three years of field
              experience. We keep our client list intentionally small — because
              exceptional service demands exceptional attention.
            </p>
          </SectionReveal>
          {/* TODO: Add team photos and bios when available */}
        </div>
      </section>
    </>
  );
}
