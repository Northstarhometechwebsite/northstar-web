import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Automation Wayzata, Minnetonka & Lake Minnetonka | NorthStar",
  description: "Luxury smart home installation for Wayzata, Minnetonka, Orono, Medina, Plymouth, and Edina. NorthStar — the Twin Cities' premier home technology integrator.",
  alternates: {
    canonical: '/service-areas/western-suburbs',
  },
};

export default function WesternSuburbsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/outdoor-fireplace.jpg"
          alt="Lake Minnetonka luxury home with sophisticated outdoor entertainment and automation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[64px] tracking-[0.03em] uppercase leading-[1.05]">
              Western Suburbs & Lake Minnetonka
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Luxury smart home technology for the Twin Cities' most prestigious communities
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Lake Minnetonka Luxury */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Lake Minnetonka Waterfront Estates
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  LUXURY LAKE LIVING ENHANCED
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Lake Minnetonka's waterfront properties represent some of the Twin Cities' most sophisticated homes. NorthStar designs smart home systems that complement these architectural masterpieces while enhancing lake living throughout Minnesota's seasons.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  From automated lake house systems that prepare your home before arrival to outdoor entertainment spaces that extend your living season, we understand the unique needs of lakefront luxury.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Automated seasonal property management
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Lake-view lighting that won't disturb wildlife
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Outdoor entertainment for lake gatherings
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Advanced security for waterfront access
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/luxury-kitchen.jpg"
                  alt="Lake Minnetonka estate kitchen with integrated smart home technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Prestigious Communities */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Western Suburbs Communities We Serve
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From lakefront estates to established neighborhoods, the western suburbs feature some of the Twin Cities' most beautiful homes — perfect settings for sophisticated smart home technology.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Wayzata
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Exclusive lakefront community with stunning homes perfect for luxury automation systems
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Minnetonka
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Established neighborhoods with diverse architectural styles and smart home potential
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Orono
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Scenic lake community where technology enhances natural beauty and outdoor living
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Medina
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Rural luxury with large estates ideal for comprehensive automation and security
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Plymouth
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Family-oriented community with modern homes perfect for smart technology integration
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Edina
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Sophisticated community with luxury homes ideal for elegant automation solutions
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Additional Lake Communities */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <SectionReveal>
              <h3 className="font-forum text-deep-navy text-[24px] lg:text-[30px] tracking-[0.05em] uppercase mb-4">
                Lake Minnetonka Communities
              </h3>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] text-slate-blue leading-[1.85] max-w-2xl mx-auto">
                Specialized smart home solutions for unique lakefront living requirements
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Deephaven</h4>
                <p className="font-body text-[12px] text-slate-blue">Lakefront estates</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Excelsior</h4>
                <p className="font-body text-[12px] text-slate-blue">Historic charm</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Shorewood</h4>
                <p className="font-body text-[12px] text-slate-blue">Waterfront living</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Greenwood</h4>
                <p className="font-body text-[12px] text-slate-blue">Rural luxury</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Western Suburbs Choose NorthStar */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Why Western Suburbs Choose NorthStar
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-4xl mx-auto">
                Our clients in Wayzata, Minnetonka, and surrounding communities choose NorthStar because we understand luxury living and the sophisticated technology that enhances it. We respect architectural heritage while seamlessly integrating cutting-edge smart home systems.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Architectural Sensitivity
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Technology solutions that honor and enhance your home's existing design aesthetic
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Lake Living Expertise
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Understanding unique needs of waterfront properties and seasonal living patterns
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Luxury Standards
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Premium products and white-glove service that matches your expectations
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Outdoor Integration
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Weatherproof systems for entertaining, security, and year-round enjoyment
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Privacy & Security
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Comprehensive security solutions designed for large properties and waterfront access
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Long-term Partnership
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Ongoing service and system evolution to match your changing needs
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Local Partnerships */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Local Partnerships & Expertise
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Our Minneapolis Design Studio and strong relationships with western suburbs' premier architects and builders ensure seamless project coordination from initial design through final installation.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Design Studio Access
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Experience smart home technology at our Uptown Minneapolis showroom
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Architect Collaboration
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Seamless integration with your project's design and construction team
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Builder Networks
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Trusted relationships with premium builders throughout the western suburbs
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Local Service
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Responsive support teams familiar with your community and property
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
              Enhance Your Lake Living
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Discover how smart home technology can enhance your western suburbs lifestyle. Schedule a consultation to explore the possibilities for your home.
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