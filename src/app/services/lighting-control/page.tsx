import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Lutron & Ketra Lighting Control Systems | Minneapolis | NorthStar",
  description: "Expert Lutron HomeWorks QSX and Ketra lighting design for luxury residences. Precision lighting control throughout your Minneapolis or Twin Cities home.",
  alternates: {
    canonical: '/services/lighting-control',
  },
};

export default function LightingControlPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/lighting-hero.jpg"
          alt="Elegant living space with sophisticated Lutron and Ketra lighting control"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[64px] tracking-[0.03em] uppercase leading-[1.05]">
              Precision Lighting Control
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Lutron & Ketra systems that transform your home with intelligent, beautiful light
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Why Lutron & Ketra */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Why Lutron & Ketra
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Lutron and Ketra represent the pinnacle of residential lighting technology. As a Lutron Excellence Award winner and one of the original Ketra dealers nationwide, NorthStar brings decades of expertise to every installation.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  These systems deliver unmatched quality, reliability, and design flexibility — allowing you to control every aspect of your home's lighting with precision and elegance.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Industry-leading reliability and performance
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Seamless integration with automation systems
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Elegant architectural aesthetics
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Future-ready technology platform
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-lutron.jpg"
                  alt="Lutron keypad with custom engraving in luxury home setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* HomeWorks QSX */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  HomeWorks QSX
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  WHOLE-HOME LIGHTING CONTROL
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Lutron HomeWorks QSX provides comprehensive lighting control across your entire home. From elegant keypads to sophisticated scene programming, every light responds perfectly to your lifestyle.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  Automated schedules, daylight harvesting with motorized shades, and seamless integration with your home automation system create an effortless lighting experience that enhances both comfort and energy efficiency.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-lighting.jpg"
                  alt="HomeWorks QSX controlling cascading pendant lighting in elegant dining space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* RadioRA 3 */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  RadioRA 3
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  WIRELESS LIGHTING EXCELLENCE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  For homes where wireless flexibility is preferred, RadioRA 3 delivers the same Lutron quality and performance without hardwired infrastructure. Perfect for renovations or spaces where wireless installation provides the optimal solution.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-ketra.jpg"
                  alt="RadioRA 3 wireless control in modern luxury interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Ketra Tunable Lighting */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Ketra Natural Light
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  CIRCADIAN & COLOR TEMPERATURE CONTROL
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Ketra delivers the most advanced tunable lighting available — dynamic light that follows natural circadian rhythms while perfectly rendering colors throughout your home.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  From warm candlelight evenings to energizing daylight mornings, Ketra automatically adjusts color temperature and intensity to support wellness, enhance artwork, and create atmospheres that transform spaces throughout the day.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-architectural.jpg"
                  alt="Ketra tunable lighting showcasing color temperature progression"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Keypads & Controls */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Keypads & Architectural Controls
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Every Lutron keypad is custom-engraved with your specific scenes and zones. From minimalist seeTouch keypads to sophisticated Palladiom controls, each interface is tailored to your home's unique lighting design.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  seeTouch Keypads
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Elegant tactile controls with custom scene engraving and LED feedback
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Palladiom Shades
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Integrated shade and lighting control with sophisticated brushed metal finishes
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Architectural Dimmers
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Precision dimming controls that disappear into wall architecture
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Integration & Voice Control */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Integration & Voice Control
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-4xl mx-auto mb-8">
                Your lighting system integrates seamlessly with motorized shades, automation platforms, and voice control through Josh.ai. Create sophisticated scenes that coordinate lighting with climate, entertainment, and security systems — all responding to simple voice commands or automated schedules.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                    Voice Control
                  </h3>
                  <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                    "Good morning" triggers your perfect wake-up lighting scene while raising motorized shades
                  </p>
                </div>
                <div>
                  <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                    Automation
                  </h3>
                  <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                    Lighting automatically adjusts based on time of day, occupancy, and natural daylight levels
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <div className="gold-rule mx-auto mb-6" />
              <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Our Design Process
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-cream/60 text-[15px] lg:text-[16px] leading-[1.85] max-w-3xl mx-auto">
                Every lighting project begins with understanding how you live. We work alongside your architect and designer from the earliest phases to ensure lighting is integrated into the architecture — never an afterthought.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-body text-[16px] font-bold text-deep-navy">1</span>
                </div>
                <h3 className="font-forum text-cream text-[20px] tracking-[0.05em] uppercase mb-3">
                  Discovery
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Lifestyle consultation to understand your daily rhythms, entertaining needs, and aesthetic preferences
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-body text-[16px] font-bold text-deep-navy">2</span>
                </div>
                <h3 className="font-forum text-cream text-[20px] tracking-[0.05em] uppercase mb-3">
                  Design
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Detailed lighting layouts with photometric calculations and fixture specifications
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-body text-[16px] font-bold text-deep-navy">3</span>
                </div>
                <h3 className="font-forum text-cream text-[20px] tracking-[0.05em] uppercase mb-3">
                  Programming
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Custom scene programming and system commissioning tailored to your specific routines
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Schedule a Lighting Consultation
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Experience how precision lighting control can transform your home. Let's discuss your project.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-deep-navy hover:text-cream transition-all duration-300"
            >
              GET STARTED
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}