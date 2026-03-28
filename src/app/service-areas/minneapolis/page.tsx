import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Automation Services Minneapolis | NorthStar Home Technologies",
  description: "Luxury home automation, lighting, and smart home systems for Minneapolis residences. Visit our Uptown Design Studio.",
  alternates: {
    canonical: '/service-areas/minneapolis',
  },
};

export default function MinneapolisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/hero-dusk.jpg"
          alt="Minneapolis luxury home with smart automation and lighting at dusk"
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
              Minneapolis Smart Homes
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Luxury home automation, lighting, and technology integration for Minneapolis residences
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Uptown Design Studio */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Uptown Design Studio
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  1624 W LAKE ST — HEART OF UPTOWN
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Our 2,000 square foot Design Studio sits in the heart of Uptown Minneapolis, directly below our partner architecture firm. This immersive showroom lets Minneapolis homeowners experience lighting scenes, automation systems, and smart home technology hands-on.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  See Ketra tunable lighting demonstrate natural circadian rhythms, control Josh.ai voice automation, and experience how motorized shades coordinate with lighting scenes — all in a sophisticated residential setting.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-2">
                      Design Studio Features
                    </h3>
                    <ul className="space-y-2">
                      <li className="font-body text-[14px] text-slate-blue">• Live Ketra lighting demonstrations</li>
                      <li className="font-body text-[14px] text-slate-blue">• Josh.ai voice control experience</li>
                      <li className="font-body text-[14px] text-slate-blue">• Motorized shade integration</li>
                      <li className="font-body text-[14px] text-slate-blue">• Lutron control interfaces</li>
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/studio.jpg"
                  alt="NorthStar Design Studio in Uptown Minneapolis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Minneapolis Neighborhoods */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Minneapolis Neighborhoods We Serve
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From historic mansions in Kenwood to modern condos in North Loop, NorthStar designs smart home systems that complement Minneapolis' diverse architectural styles while enhancing modern living.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Uptown & Calhoun
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Trendy homes near our Design Studio, mixing historic character with modern smart home technology
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  North Loop
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Modern condos and lofts where sleek automation systems enhance urban living
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Linden Hills
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Charming family homes enhanced with intelligent lighting and automation systems
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Lake of the Isles
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Prestigious lakefront properties with sophisticated home automation and security
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Kenwood & Lowry Hill
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Historic mansions where technology integrates seamlessly with architectural heritage
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Southwest Minneapolis
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Family neighborhoods where smart homes make daily life more convenient and secure
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Complete Smart Home Services
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto mb-12">
              NorthStar provides comprehensive smart home design and integration for Minneapolis homeowners — from initial consultation through ongoing support.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SectionReveal delay={0.15}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/lighting-control" className="hover:text-warm-gold transition-colors duration-300">
                    Lighting Control
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Lutron & Ketra systems for precision lighting throughout your Minneapolis home
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/home-automation" className="hover:text-warm-gold transition-colors duration-300">
                    Home Automation
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Josh.ai voice control and intelligent scene automation
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/home-theater" className="hover:text-warm-gold transition-colors duration-300">
                    Home Theater
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Custom media rooms and dedicated theater installations
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/motorized-shades" className="hover:text-warm-gold transition-colors duration-300">
                    Motorized Shades
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Lutron motorized shades integrated with lighting scenes
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.35}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/networking-security" className="hover:text-warm-gold transition-colors duration-300">
                    Network & Security
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Enterprise-grade networking and surveillance systems
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Outdoor Entertainment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Weatherproof systems for Minnesota's four-season outdoor living
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Minneapolis Chooses NorthStar */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Why Minneapolis Homeowners Choose NorthStar
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Our local presence, hands-on Design Studio, and deep expertise in luxury home technology make us the trusted choice for discerning Minneapolis homeowners who demand excellence.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Local Expertise
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Deep understanding of Minneapolis architecture and lifestyle preferences
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Experience Design
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Visit our Uptown studio to experience smart home technology before you buy
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Award-Winning
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Lutron Excellence Award winner and Josh.ai President's Club member
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Ongoing Support
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  The install is just the beginning — comprehensive service and support
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
              Schedule Your Studio Tour
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Experience smart home technology firsthand at our Uptown Design Studio. Schedule a private tour to explore the possibilities for your Minneapolis home.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-deep-navy hover:text-cream transition-all duration-300"
            >
              VISIT OUR DESIGN STUDIO
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}