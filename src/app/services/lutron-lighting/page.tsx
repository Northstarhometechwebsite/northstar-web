import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Lutron HomeWorks Installer Twin Cities | Lutron Lighting Expert | NorthStar",
  description: "Professional Lutron HomeWorks QSX and RadioRA 3 installation in Minneapolis Twin Cities. Expert Lutron lighting control for luxury homes in Minnetonka, Wayzata, Edina.",
  alternates: {
    canonical: '/services/lutron-lighting',
  },
};

export default function LutronLightingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/lighting-hero.jpg"
          alt="Lutron HomeWorks lighting control system installation Minneapolis Twin Cities"
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
              Lutron Lighting Excellence
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              HomeWorks QSX and RadioRA 3 experts serving luxury Twin Cities homes
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Lutron Excellence Award Winner */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Lutron Excellence Award Winner
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  AWARD-WINNING LUTRON DEALER
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  NorthStar received the prestigious Lutron Excellence Award for Best Ketra System — recognition of our expertise in the most sophisticated lighting control technologies available today. We specialize exclusively in Lutron's professional lines: HomeWorks QSX and RadioRA 3.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Unlike installers who work with consumer-grade Caseta or older RA2 systems, we focus on Lutron's flagship platforms designed for luxury custom homes throughout Minneapolis, Minnetonka, Wayzata, and Edina.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    HomeWorks QSX for ultimate flexibility and control
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    RadioRA 3 for elegant whole-home lighting
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    NO Caseta, NO RA2, NO GRAFIK Eye systems
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Professional installation and programming only
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-ketra.jpg"
                  alt="Lutron Excellence Award winner HomeWorks QSX lighting control luxury installation"
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
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                HomeWorks QSX — The Ultimate Platform
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Lutron's flagship whole-home lighting control system, designed for the most demanding luxury installations. QSX offers unlimited flexibility, rock-solid reliability, and seamless integration with third-party systems.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Unlimited Expansion
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Scale from a few zones to hundreds of lights across multiple buildings and properties.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Advanced Load Types
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Control LED, incandescent, fluorescent, low-voltage, and specialty lighting with precision.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Third-Party Integration
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Seamless connection to Josh.ai, AV systems, HVAC, shades, and security platforms.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Astronomical Timeclock
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Lighting automatically adjusts based on sunrise, sunset, and seasonal changes.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Ketra Integration
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Native control of Ketra's circadian rhythm and color-changing LED systems.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Professional Keypads
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Customizable seeTouch keypads with engraving and LED status indicators.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* RadioRA 3 */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  RadioRA 3 — Elegant Simplicity
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  WIRELESS PROFESSIONAL LIGHTING
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  For homes where hardwired lighting control isn't practical, RadioRA 3 delivers professional-grade performance through Lutron's Clear Connect wireless technology. Perfect for retrofit projects in established Minnetonka and Wayzata neighborhoods.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  RadioRA 3 offers the reliability and sophistication of a professional system without the complexity of hardwired infrastructure — ideal for luxury homes that demand elegance without compromise.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    100+ devices per system with reliable wireless communication
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Professional keypads with custom engraving
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Occupancy and daylight sensors for automation
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Seamless Josh.ai and third-party integration
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-lutron.jpg"
                  alt="Lutron RadioRA 3 wireless lighting control system luxury installation Twin Cities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Ketra Integration */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Ketra — The Science of Light
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                As one of the original 60 Ketra dealers nationwide, NorthStar brings you lighting that follows natural circadian rhythms and delivers perfect color at any temperature — from candlelight warmth to bright daylight.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">CCT</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Tunable White
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  1400K candlelight to 10,000K bright daylight with perfect color rendering.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">CRI</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Perfect Color
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  95+ CRI ensures artwork, fabrics, and finishes appear exactly as intended.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">RGB</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Vibrant Color
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Full spectrum color for entertainment, holidays, and architectural highlighting.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">NLB</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Natural Light
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Follows sun's path throughout the day to support healthy circadian rhythms.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Twin Cities Expertise */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Twin Cities Lutron Specialists
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Every Twin Cities neighborhood presents unique lighting challenges — from historic Tudor estates in Minnetonka to modern lakefront homes in Orono. Our expertise ensures your Lutron system integrates perfectly with your home's architecture and your family's lifestyle.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Historic Homes
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Sensitive integration with period architecture and heritage features
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Lakefront Properties
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Outdoor lighting and weather-resistant components for waterfront living
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Contemporary Design
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Clean integration with modern architecture and minimalist aesthetics
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Energy Efficiency
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Advanced scheduling and occupancy sensing for Minnesota's energy goals
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Serving Luxury Twin Cities Homes
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Professional Lutron installation throughout the Minneapolis metropolitan area, specializing in luxury communities and custom homes.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Minnetonka", "Wayzata", "Edina", "Orono",
              "Dellwood", "Grant", "Afton", "Deephaven",
              "Medina", "Plymouth", "Minnetrista", "St. Louis Park"
            ].map((city, index) => (
              <SectionReveal key={city} delay={0.1 + index * 0.05}>
                <div className="text-center p-4">
                  <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase">
                    {city}
                  </h3>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Experience Lutron Excellence
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Discover why luxury homeowners throughout the Twin Cities choose NorthStar for their Lutron lighting systems. Award-winning expertise, professional installation, ongoing support.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-deep-navy hover:text-cream transition-all duration-300"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}