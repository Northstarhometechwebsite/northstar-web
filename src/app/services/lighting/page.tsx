import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Lighting Design | NorthStar Home Technologies",
  description:
    "NorthStar is one of the original 60 Ketra dealers nationwide. Award-winning lighting design with Lutron, Ketra tunable lighting, and architectural fixture representation.",
};

export default function LightingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/20" />
        {/* TODO: Replace with dramatic lighting scene photo */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-forum text-cream text-[42px] lg:text-[64px] tracking-[0.03em] uppercase">
            Discover Light&apos;s Potential
          </h1>
          <p className="font-body text-cream/60 text-[16px] lg:text-[18px] font-light mt-4 max-w-2xl mx-auto">
            Lighting is more than illumination — it&apos;s an experience.
          </p>
        </div>
      </section>

      {/* Ketra */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Ketra
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  TUNABLE NATURAL LIGHT
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[17px] text-slate-blue leading-[1.8] mb-6">
                  NorthStar was one of the first 60 Ketra dealers in the United
                  States — and remains one of the most experienced integrators of
                  this award-winning technology. Ketra delivers the most advanced
                  tunable lighting system available: dynamic, natural light that
                  adapts throughout the day.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
                  From warm candlelight to energizing daylight, Ketra follows
                  circadian rhythms to support wellness, enhance colors, and
                  create atmospheres that transform spaces. Every palette is
                  customized to your home, your art, your life.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              {/* Ketra lighting scene showing color temperature variation */}
              <ImagePlaceholder
                label="Ketra Tunable Lighting"
                aspect="aspect-[4/3]"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Lutron Control */}
      <section className="bg-white py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Lutron Control
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  WHOLE-HOME LIGHTING MASTERY
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
                  Lutron HomeWorks QSX provides the backbone for precision
                  lighting control across every room. Paired with Palladiom
                  motorized shades, elegant keypads, and seamless scene
                  programming, your entire home responds to a single touch.
                  Daylight harvesting, automated schedules, and integration with
                  your automation system create an effortless experience.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              {/* Lutron keypad and shade control interface */}
              <ImagePlaceholder
                label="Lutron HomeWorks Control"
                aspect="aspect-[4/3]"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Architectural Lighting Design */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Architectural Lighting Design
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  STRATEGIC ILLUMINATION
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
                  NorthStar provides full architectural lighting design
                  services — strategic placement to highlight architectural
                  features, create moods, and enhance well-being. Not just
                  illumination — it&apos;s an experience crafted for your
                  specific spaces, art, and lifestyle. We work alongside
                  architects and interior designers to ensure lighting is
                  considered from the very first plan.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              {/* Architectural lighting highlighting art and design features */}
              <ImagePlaceholder
                label="Architectural Lighting"
                aspect="aspect-[4/3]"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Fixture Representation */}
      <section className="bg-white py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Fixture Representation &amp; Sales
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
              Through trusted partnerships with leading manufacturers, NorthStar
              provides manufacturer fixture and downlight representation.
              Whether you need statement chandeliers, precision downlights, or
              specialty exterior fixtures, we source and specify the right
              product for every application.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-navy py-[100px] lg:py-[140px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.03em] uppercase mb-6">
              Schedule a Lighting Consultation
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-cream text-deep-navy hover:bg-white transition-all duration-300"
            >
              GET STARTED
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
