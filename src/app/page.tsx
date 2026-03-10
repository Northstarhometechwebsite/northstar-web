import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      {/* TODO: Replace with hero project photo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-forum text-cream text-[42px] sm:text-[56px] lg:text-[80px] leading-[1.1] tracking-[0.03em] uppercase">
            Technology That Disappears Into Architecture
          </h1>
          <p className="font-body text-cream/70 text-[16px] lg:text-[18px] font-light mt-6 max-w-xl mx-auto leading-relaxed">
            Luxury home automation and bespoke lighting for discerning
            homeowners.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg
            width="20"
            height="30"
            viewBox="0 0 20 30"
            fill="none"
            className="text-cream/50"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="28"
              rx="9"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ========== FEATURED WORK ========== */}
      <section className="bg-cream py-[120px] lg:py-[180px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[36px] lg:text-[48px] tracking-[0.03em] uppercase text-center mb-16 lg:mb-24">
              Selected Work
            </h2>
          </SectionReveal>

          {/* Cinematic layout — varied sizes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 stagger">
            <SectionReveal className="lg:col-span-2">
              <Link href="/work">
                {/* Hero: Twilight exterior of luxury home with warm interior lighting visible */}
                <ImagePlaceholder
                  label="Featured Project"
                  aspect="aspect-[16/10]"
                  className="hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                />
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <Link href="/work">
                {/* Dramatic home theater with ambient lighting */}
                <ImagePlaceholder
                  label="Home Theater"
                  aspect="aspect-[3/4]"
                  className="hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                />
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <Link href="/work">
                {/* Kitchen with Ketra tunable lighting */}
                <ImagePlaceholder
                  label="Lighting Design"
                  aspect="aspect-[4/3]"
                  className="hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                />
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.3} className="lg:col-span-2">
              <Link href="/work">
                {/* Living room with seamless automation, shades partially drawn */}
                <ImagePlaceholder
                  label="Whole-Home Automation"
                  aspect="aspect-[21/9]"
                  className="hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                />
              </Link>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                href="/work"
                className="font-body font-semibold text-[13px] tracking-[0.1em] uppercase text-slate-blue hover:text-deep-navy transition-colors inline-flex items-center gap-2"
              >
                VIEW ALL WORK
                <span className="text-[16px]">→</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ABOUT / INTRO ========== */}
      <section className="bg-white py-[120px] lg:py-[180px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-3">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase leading-[1.2] mb-8">
                  Tailored Technology and Lighting. Elevated Living.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[17px] lg:text-[18px] text-slate-blue leading-[1.8] mb-6">
                  NorthStar Home Technologies installs and manages
                  high-performance smart home systems that bring luxury,
                  convenience, and security into perfect balance.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <p className="font-body text-[17px] lg:text-[18px] text-slate-blue leading-[1.8]">
                  Specializing in advanced lighting, whole-home automation, and
                  intelligent control, NorthStar creates future-ready solutions
                  that elevate everyday life.
                </p>
              </SectionReveal>
            </div>
            <div className="lg:col-span-2">
              <SectionReveal direction="right">
                {/* About: Design studio interior or Chris Hayes portrait */}
                <ImagePlaceholder
                  label="About NorthStar"
                  aspect="aspect-[3/4]"
                />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="bg-cream py-[120px] lg:py-[180px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[36px] lg:text-[48px] tracking-[0.03em] uppercase text-center mb-16 lg:mb-24">
              Our Expertise
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger">
            {SERVICES.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.1}>
                <div className="bg-white p-8 lg:p-10 hover:-translate-y-1 transition-transform duration-500 group">
                  <div className="text-slate-blue mb-6 group-hover:text-deep-navy transition-colors">
                    <ServiceIcon icon={service.icon} className="w-9 h-9" />
                  </div>
                  <h3 className="font-forum text-deep-navy text-[20px] lg:text-[22px] tracking-[0.05em] uppercase mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-[15px] text-slate-blue leading-[1.7]">
                    {service.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CREDIBILITY BAR ========== */}
      <section className="bg-deep-navy py-14 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
            {[
              "LUTRON EXCELLENCE AWARD",
              "ORIGINAL KETRA DEALER",
              "JOSH AI CHAIRMAN ACCOLADE",
            ].map((item, i) => (
              <div key={item} className="flex items-center">
                {i > 0 && (
                  <span className="hidden lg:block text-cream/20 mx-8">·</span>
                )}
                <span className="font-body text-cream text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.15em]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STUDIO TEASER ========== */}
      <section className="bg-white py-[120px] lg:py-[180px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <SectionReveal direction="left">
                {/* Studio: Interior of the Uptown Minneapolis Design Studio */}
                <ImagePlaceholder
                  label="Design Studio"
                  aspect="aspect-[4/5]"
                />
              </SectionReveal>
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.03em] uppercase leading-[1.2] mb-8">
                  Experience the Studio
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[17px] lg:text-[18px] text-slate-blue leading-[1.8] mb-8">
                  Step into our 2,000 square foot Design Studio in Uptown
                  Minneapolis — an immersive sensory experience where the future
                  of intelligent living becomes tangible. See lighting scenes
                  live, experience automation hands-on, and envision what your
                  home can become.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <Link
                  href="/studio"
                  className="inline-block font-body font-bold text-[13px] tracking-[0.1em] uppercase px-8 py-3 border border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-cream transition-all duration-300"
                >
                  SCHEDULE A TOUR
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-deep-navy py-[120px] lg:py-[160px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-forum text-cream text-[36px] lg:text-[56px] tracking-[0.03em] uppercase mb-6">
              Begin Your Project
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-cream/60 text-[17px] lg:text-[18px] font-light mb-10">
              Let&apos;s create something extraordinary together.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-cream text-deep-navy hover:bg-white transition-all duration-300"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
