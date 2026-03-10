import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "The Design Studio | NorthStar Home Technologies",
  description:
    "Visit NorthStar's 2,000 sq ft Design Studio in Uptown Minneapolis — an immersive sensory experience where the future of intelligent living becomes tangible.",
};

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/20" />
        {/* TODO: Replace with panoramic studio photo */}
        <div className="relative z-10 text-center px-6">
          <h1 className="font-forum text-cream text-[42px] lg:text-[64px] tracking-[0.03em] uppercase">
            The Design Studio
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <p className="font-body text-[18px] lg:text-[20px] text-slate-blue leading-[1.8]">
              The NorthStar Design Studio in Uptown Minneapolis is an immersive
              sensory experience — not a showroom. Across 2,000 square feet,
              guests experience lighting scenes, automation interfaces, and
              audio systems in a real-world environment. It&apos;s where the
              future of intelligent living becomes tangible.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Studio Images */}
      <section className="bg-white py-[100px] lg:py-[140px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            <SectionReveal>
              {/* Studio: Main showroom area */}
              <ImagePlaceholder label="Studio Main Space" aspect="aspect-[4/3]" />
            </SectionReveal>
            <SectionReveal delay={0.15}>
              {/* Studio: Ketra lighting vignette */}
              <ImagePlaceholder label="Lighting Vignette" aspect="aspect-[4/3]" />
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <SectionReveal>
              {/* Studio: Home theater demo area */}
              <ImagePlaceholder label="Theater Demo" aspect="aspect-square" />
            </SectionReveal>
            <SectionReveal delay={0.15}>
              {/* Studio: Control interfaces and automation wall */}
              <ImagePlaceholder label="Control Interfaces" aspect="aspect-square" />
            </SectionReveal>
            <SectionReveal delay={0.3}>
              {/* Studio: Audio listening room */}
              <ImagePlaceholder label="Audio Experience" aspect="aspect-square" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-cream py-[120px] lg:py-[160px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase text-center mb-16">
              What to Expect
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {[
              {
                title: "See It Live",
                body: "Experience Ketra lighting scenes in real-time. Watch colors shift, feel the warmth change, and see how light transforms a space throughout the day.",
              },
              {
                title: "Touch It",
                body: "Interact with Lutron keypads, Josh AI voice control, and automation interfaces. Understand how effortless control feels in practice.",
              },
              {
                title: "Hear It",
                body: "Listen to distributed audio, compare speaker systems, and experience what immersive sound feels like in a purpose-built environment.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.15}>
                <div className="text-center">
                  <h3 className="font-forum text-deep-navy text-[22px] tracking-[0.05em] uppercase mb-4">
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

      {/* Location */}
      <section className="bg-white py-[100px] lg:py-[140px]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.15em] mb-4">
              UPTOWN MINNEAPOLIS
            </p>
            <p className="font-body text-[17px] text-slate-blue leading-[1.8]">
              1624 W Lake St, Minneapolis, MN 55408
              <br />
              Located beneath one of the most prominent architecture firms in
              the Twin Cities.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-navy py-[100px] lg:py-[140px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.03em] uppercase mb-6">
              Schedule a Private Tour
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-cream/60 text-[17px] font-light mb-10">
              Tours are by appointment only. We&apos;d love to show you what&apos;s
              possible.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-cream text-deep-navy hover:bg-white transition-all duration-300"
            >
              BOOK YOUR VISIT
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
