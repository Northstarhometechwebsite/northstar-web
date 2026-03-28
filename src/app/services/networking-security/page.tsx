import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Network & Security Systems | Minneapolis | NorthStar",
  description: "Enterprise-grade home networking and security for luxury residences. Ubiquiti networks and IC Realtime surveillance in Minneapolis and Twin Cities.",
  alternates: {
    canonical: '/services/networking-security',
  },
};

export default function NetworkingSecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/svc-networking.jpg"
          alt="Professional home automation equipment rack with structured networking"
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
              The Backbone of Smart Homes
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Enterprise-grade networking and security systems for luxury residences
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Enterprise Networking */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Ubiquiti Enterprise Networks
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  COMMERCIAL-GRADE PERFORMANCE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Your smart home demands enterprise-grade networking infrastructure. Ubiquiti's UniFi ecosystem provides the reliability, performance, and scalability that luxury homes require — far beyond what consumer routers can deliver.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Seamless roaming, centralized management, and professional-grade security ensure every device in your home performs optimally, from streaming entertainment to automation systems.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Enterprise WiFi 6E/7 access points
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Managed switches and routing
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Centralized UniFi management
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Advanced intrusion detection
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-networking.jpg"
                  alt="Ubiquiti UniFi networking equipment in professional rack installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Networking Matters */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Why Networking Is Critical
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-4xl mx-auto">
                Your smart home is only as reliable as its network foundation. Every device — from lighting and climate control to entertainment and security — depends on consistent, high-performance connectivity to function properly.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Automation Reliability
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Lighting scenes, climate control, and security systems require consistent network performance
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Streaming Performance
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  4K/8K video distribution and multi-room audio demand enterprise-grade bandwidth
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Device Density
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Modern homes can have 100+ connected devices requiring professional network design
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Security Integration
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Surveillance cameras and access control require dedicated network resources
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Remote Access
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Secure VPN connectivity for monitoring and controlling your home from anywhere
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Future-Proofing
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Scalable infrastructure that grows with your technology needs over time
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Structured Wiring & Infrastructure */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Structured Wiring & Infrastructure
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  THE INVISIBLE FOUNDATION
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Professional structured wiring provides the backbone for your smart home's performance. We design and install comprehensive cabling systems that support current needs while providing flexibility for future expansion.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  Fiber optic backbone, Category 6A data cabling, and dedicated pathways ensure your network infrastructure delivers maximum performance for decades to come.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-security.jpg"
                  alt="Professional structured wiring installation with fiber optic backbone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* IC Realtime Surveillance */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  IC Realtime Surveillance
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  PROFESSIONAL SECURITY SYSTEMS
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  IC Realtime provides commercial-grade surveillance technology designed for residential applications. High-definition cameras with advanced analytics, robust recording systems, and seamless integration with your home automation.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Strategic camera placement provides comprehensive coverage while respecting privacy and maintaining your home's aesthetic appeal.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    4K Ultra HD camera technology
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    AI-powered motion detection
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Low-light and infrared capabilities
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Seamless mobile access
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-security.jpg"
                  alt="Luxury home exterior with discrete IC Realtime security cameras"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Access Control & Monitoring */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Access Control & Smart Monitoring
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Complete security systems extend beyond cameras to include intelligent access control, smart locks, and integrated monitoring that works seamlessly with your automation platform.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Smart Entry Systems
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Keyless entry, video intercoms, and automated gate control integrated with your security system
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Perimeter Monitoring
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Motion sensors, glass break detection, and environmental monitoring throughout your property
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Integration Control
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Security events trigger lighting scenes, lock doors, and alert your automation system
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Remote Access & Management */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Remote Access & Professional Management
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Stay connected to your home from anywhere in the world. Secure remote access lets you monitor security cameras, check system status, and receive real-time alerts. Our team provides ongoing monitoring and maintenance to ensure optimal performance.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Mobile Access
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Monitor cameras and control systems from your smartphone anywhere
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Real-Time Alerts
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Instant notifications for security events and system status changes
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Secure VPN
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Enterprise-grade security for all remote access and communications
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Professional Support
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Ongoing monitoring, updates, and technical support from our team
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The Foundation of Everything */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              The Foundation of Everything
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-[16px] lg:text-[18px] text-slate-blue leading-[1.85] mb-8">
              Your network and security systems form the invisible foundation that makes everything else possible. From the moment you approach your home to the peace of mind you feel while traveling, these systems work silently in the background to protect what matters most.
            </p>
            <p className="font-body text-[16px] lg:text-[18px] text-slate-blue leading-[1.85]">
              At NorthStar, we design and build these critical systems with the same attention to detail and quality that we bring to every aspect of your smart home.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Secure Your Smart Home
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Build your smart home on a foundation of enterprise-grade networking and security. Let's design a system that protects your home and family.
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