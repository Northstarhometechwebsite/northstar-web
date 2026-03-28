import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Automation Twin Cities | Smart Home Installation | NorthStar",
  description: "NorthStar serves the entire Twin Cities metro with luxury home automation, Lutron lighting, and smart home integration. Two locations.",
  alternates: {
    canonical: '/service-areas/twin-cities',
  },
};

export default function TwinCitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/luxury-kitchen.jpg"
          alt="Twin Cities luxury home with sophisticated smart home automation"
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
              Twin Cities Smart Homes
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Complete metro coverage with luxury home automation, lighting, and technology integration
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Two Locations, Complete Coverage */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Two Locations, Complete Coverage
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-4xl mx-auto">
                NorthStar serves the entire Twin Cities metro area from our strategic locations in Minneapolis and Stillwater. Whether you're in downtown St. Paul or the western suburbs, our team provides the same exceptional service and expertise.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[24px] tracking-[0.05em] uppercase mb-4">
                  Minneapolis Design Studio
                </h3>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-4">
                  1624 W Lake St, Uptown
                </p>
                <p className="font-body text-[15px] text-slate-blue leading-[1.8] mb-6">
                  2,000 square foot immersive showroom where you can experience smart home technology hands-on. Perfect for Minneapolis and western suburb clients.
                </p>
                <ul className="text-left space-y-2 max-w-xs mx-auto">
                  <li className="font-body text-[14px] text-slate-blue">• Live technology demonstrations</li>
                  <li className="font-body text-[14px] text-slate-blue">• Lighting and automation experience</li>
                  <li className="font-body text-[14px] text-slate-blue">• Private consultation rooms</li>
                  <li className="font-body text-[14px] text-slate-blue">• Architect collaboration space</li>
                </ul>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[24px] tracking-[0.05em] uppercase mb-4">
                  Stillwater Headquarters
                </h3>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-4">
                  1610 Greeley St S, Stillwater
                </p>
                <p className="font-body text-[15px] text-slate-blue leading-[1.8] mb-6">
                  Our operational headquarters provides comprehensive support for east metro, St. Croix Valley, and western Wisconsin clients with full service capabilities.
                </p>
                <ul className="text-left space-y-2 max-w-xs mx-auto">
                  <li className="font-body text-[14px] text-slate-blue">• Technical support center</li>
                  <li className="font-body text-[14px] text-slate-blue">• Project management hub</li>
                  <li className="font-body text-[14px] text-slate-blue">• Equipment staging facility</li>
                  <li className="font-body text-[14px] text-slate-blue">• Local service teams</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Metro Communities */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Communities We Serve Throughout the Metro
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From urban condos to suburban estates, NorthStar designs smart home systems for every Twin Cities community and architectural style.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  St. Paul
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Historic homes and modern developments throughout the capital city and surrounding neighborhoods
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Bloomington
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Established neighborhoods with diverse architectural styles and smart home upgrade potential
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Eden Prairie
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Modern suburban homes perfect for comprehensive automation and entertainment systems
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-cream p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Maple Grove
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Family-friendly communities where smart homes enhance daily life and security
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="bg-cream p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Woodbury
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Growing east metro community with new construction perfect for integrated technology
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="bg-cream p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-3">
                  Burnsville & Eagan
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  South metro communities with established homes ideal for smart technology retrofits
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Metro-Wide Services */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Comprehensive Smart Home Services
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto mb-12">
              Every Twin Cities client receives the same exceptional service and access to our complete range of smart home technologies and services.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div className="bg-white p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/lighting-control" className="hover:text-warm-gold transition-colors duration-300">
                    Lighting Control
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Lutron & Ketra systems for precision lighting control throughout your Twin Cities home
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-white p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/home-automation" className="hover:text-warm-gold transition-colors duration-300">
                    Home Automation
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Josh.ai voice control and intelligent automation for seamless smart living
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div className="bg-white p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/home-theater" className="hover:text-warm-gold transition-colors duration-300">
                    Entertainment Systems
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Home theaters, distributed audio, and video systems for every space
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-white p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/motorized-shades" className="hover:text-warm-gold transition-colors duration-300">
                    Window Automation
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Motorized shades integrated with lighting for optimal comfort and efficiency
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.35}>
              <div className="bg-white p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  <Link href="/services/networking-security" className="hover:text-warm-gold transition-colors duration-300">
                    Security & Networks
                  </Link>
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Enterprise networking and comprehensive security for your Twin Cities home
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-white p-6 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Ongoing Support
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Local service teams providing responsive support throughout the metro area
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Local Expertise, Metro-Wide Service
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              As a locally-owned company with deep Twin Cities roots, we understand the unique characteristics of metro communities — from historic neighborhoods to new developments, urban condos to lakefront estates.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Local Knowledge
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Understanding Twin Cities architecture, climate, and lifestyle preferences
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Rapid Response
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Two locations mean faster service calls and support throughout the metro
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Community Partnerships
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Strong relationships with local architects, builders, and design professionals
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Minnesota Expertise
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Smart home solutions designed for Minnesota's unique climate and seasons
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
              Connect with Your Local Team
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Whether you're in Minneapolis, St. Paul, or anywhere in the Twin Cities metro, let's discuss how smart home technology can enhance your daily life.
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