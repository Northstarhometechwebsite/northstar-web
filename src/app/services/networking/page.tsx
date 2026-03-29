import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Networking Minneapolis | Enterprise Network Installation | Twin Cities | NorthStar",
  description: "Enterprise-grade home networking installation in Minneapolis Twin Cities. Ubiquiti, Access Networks, Cleerline fiber, and ICE Cable for luxury homes in Minnetonka, Wayzata, Edina.",
  alternates: {
    canonical: '/services/networking',
  },
};

export default function NetworkingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/svc-networking.jpg"
          alt="Enterprise home networking equipment rack Ubiquiti installation Minneapolis Twin Cities"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[64px] tracking-[0.03em] uppercase leading-[1.05]">
              Enterprise Home Networking
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Professional network infrastructure for connected luxury homes throughout the Twin Cities
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The Foundation of Smart Homes */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  The Invisible Foundation
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  ENTERPRISE-GRADE INFRASTRUCTURE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Your luxury home's networking infrastructure is like the electrical system — invisible but essential for everything to work. From lighting control and entertainment to security and automation, every smart device depends on reliable, high-performance networking.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  NorthStar designs and installs enterprise-grade networks using a curated stack of professional hardware — Ubiquiti routing and switching, Access Networks wireless, Cleerline fiber optics, and ICE Cable structured wiring — optimized for luxury homes in Minnetonka, Wayzata, Edina, and throughout the Twin Cities.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Ubiquiti routing, switching, and network management
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Access Networks high-performance wireless access points
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Cleerline fiber optic backbone for maximum bandwidth
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    ICE Cable structured wiring and professional cable management
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Industrial-rated outdoor network switches
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/enhanced-av-rack-2.jpg"
                  alt="Professional home networking equipment rack with structured wiring and enterprise components"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Ubiquiti Ecosystem */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Our Network Hardware Stack
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                We select the right tool for each layer of your network — combining best-in-class hardware from multiple manufacturers to deliver uncompromising performance, reliability, and aesthetics.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Ubiquiti Routing & Switching
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Dream Machine Pro gateways, managed PoE+ switches, and enterprise routing — our primary network backbone.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Access Networks Wireless
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  High-performance wireless access points purpose-built for luxury residences — seamless roaming, enterprise reliability.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Netgear Infrastructure
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Professional-grade Netgear switches and networking for secondary and specialized applications.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Cleerline Fiber Optics
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Single-mode and multi-mode Cleerline fiber for maximum bandwidth, future-proofing, and interference-free distribution.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  ICE Cable Infrastructure
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Premium ICE Cable structured wiring — Cat 6A copper, coax distribution, and professional cable management throughout.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Outdoor & Industrial Rated
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Industrial-rated network switches and outdoor-hardened equipment for pools, patios, detached structures, and landscape applications.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Coverage & Performance */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Complete Coverage & Performance
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  EVERY ROOM, EVERY DEVICE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Professional site surveys ensure optimal access point placement for seamless coverage throughout your home — from basement to attic, indoor to outdoor entertainment areas. No dead zones, no slow connections, no dropped devices.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Our networks handle hundreds of connected devices simultaneously — smart lighting, entertainment systems, security cameras, tablets, phones, and IoT devices — all without compromising performance.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Professional heat mapping for optimal coverage
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Multi-gigabit backbone infrastructure
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Dedicated IoT and guest networks for security
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Outdoor coverage for patios, pools, and gardens
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/work-inwood-equipment-rack.jpg"
                  alt="WiFi coverage heatmap showing complete network coverage throughout luxury home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Structured Wiring */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Structured Wiring Infrastructure
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Professional structured wiring provides the physical backbone for all network services. We use ICE Cable for copper runs and Cleerline fiber for optical distribution — from high-speed internet to entertainment and automation control.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">CAT</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  ICE Cable Cat 6A
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  10-gigabit capable ICE Cable copper connections to every room and device location.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">FIB</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Cleerline Fiber
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Cleerline single and multi-mode fiber for maximum bandwidth and future expansion.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">RG6</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Coax Distribution
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  High-quality coaxial wiring for cable services and antenna distribution.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">PWR</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Power over Ethernet
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  PoE+ capabilities eliminate power adapters for access points and cameras.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Security & Monitoring */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Security & Network Monitoring
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Enterprise-grade security features protect your network from threats while providing complete visibility into device connectivity and performance throughout your Twin Cities home.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Threat Detection
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Real-time intrusion detection and automatic threat blocking
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Network Segmentation
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Isolated VLANs for IoT devices, guests, and critical systems
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  24/7 Monitoring
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Continuous performance monitoring with proactive issue resolution
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Remote Management
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Secure remote access for updates, troubleshooting, and optimization
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Twin Cities Installation */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Professional Twin Cities Installation
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From historic homes in Minnetonka to modern lakefront estates in Orono, we design and install networks that respect your home's architecture while delivering uncompromising performance.
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
              Build Your Network Foundation
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Ready to upgrade your home's network infrastructure? Schedule a consultation to discuss enterprise-grade networking for your Minneapolis area home.
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