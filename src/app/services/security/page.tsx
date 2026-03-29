import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Security & Surveillance Minneapolis | Smart Security Systems | Twin Cities | NorthStar",
  description: "Professional home security and surveillance installation in Minneapolis Twin Cities. IC Realtime cameras, DSC security systems for luxury homes in Minnetonka, Wayzata, Edina.",
  alternates: {
    canonical: '/services/security',
  },
};

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/svc-security.jpg"
          alt="Professional home security surveillance camera installation Minneapolis Twin Cities luxury home"
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
              Security & Surveillance
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Comprehensive protection for luxury Twin Cities homes with privacy-first design
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Privacy-First Security */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Privacy-First Security Design
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  PROFESSIONAL SECURITY SYSTEMS
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Your Minnetonka, Wayzata, or Edina home deserves security that protects without compromising your family's privacy. Our professional systems use local storage and processing — no cloud dependency, no subscription fees, no corporate access to your personal footage.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  We design comprehensive security solutions that blend seamlessly into your home's architecture while providing complete protection and peace of mind. From discrete cameras to invisible sensors, security becomes part of your home's design language.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Local storage and processing — your data stays home
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Professional IC Realtime camera systems
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    DSC intrusion detection and monitoring
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Seamless home automation integration
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/work-exterior-01.jpg"
                  alt="Discrete security camera installation luxury home privacy-focused surveillance system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Comprehensive Protection */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Comprehensive Security Solutions
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From perimeter monitoring to interior protection, we design layered security systems that protect your family and property while maintaining the elegance of your luxury home.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Surveillance Cameras
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  4K cameras with night vision, motion detection, and intelligent analytics for comprehensive coverage.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Intrusion Detection
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Door and window sensors, motion detectors, and glass break sensors for complete perimeter protection.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Access Control
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Smart locks, keypad entry, and biometric access for secure, convenient home access.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Video Intercoms
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Two-way communication at gates and entrances with mobile connectivity for remote access.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Fire & Life Safety
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Smoke, carbon monoxide, and environmental monitoring integrated with emergency response.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Remote Monitoring
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Real-time alerts and camera access from anywhere, with optional professional monitoring.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* IC Realtime Cameras */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  IC Realtime Professional Cameras
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  ENTERPRISE-GRADE SURVEILLANCE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  We exclusively use IC Realtime cameras — the choice of professionals who demand reliability, image quality, and advanced analytics. These commercial-grade cameras provide crystal-clear 4K recording with intelligent features like facial recognition, license plate reading, and behavior analysis.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  With local NVR storage and no cloud dependency, your security footage remains completely private and accessible only to you — perfect for luxury Twin Cities homes that value both security and privacy.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    4K Ultra HD resolution with HDR imaging
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Advanced AI analytics and object detection
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Starlight technology for night vision
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Weatherproof designs for Minnesota climate
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/work-exterior-02.jpg"
                  alt="IC Realtime professional 4K security camera installation showing advanced surveillance technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* DSC Security Systems */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                DSC Intrusion Detection
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                DSC security panels provide the reliable backbone for comprehensive intrusion detection throughout your home — from basement to attic, garage to guest house.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">MAG</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Magnetic Contacts
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Wireless door and window sensors with long battery life and tamper detection.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">PIR</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Motion Detectors
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Passive infrared sensors with pet immunity and anti-mask technology.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">GLB</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Glass Break Sensors
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Acoustic sensors that detect the specific frequency of breaking glass.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">ENV</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Environmental Sensors
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Water leak, freeze, and temperature monitoring for property protection.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Smart Home Integration */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Seamless Smart Home Integration
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Security becomes part of your home's intelligent ecosystem — automatically adjusting lighting, locking doors, and activating cameras based on your daily routines and security status.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Lutron Integration
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Security activation triggers appropriate lighting scenes and shade positions
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Josh.ai Control
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Voice commands for arming, disarming, and checking security status
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Mobile Access
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Complete system control and monitoring from your smartphone or tablet
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Automated Responses
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Custom automation based on occupancy, time of day, and security events
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Installation & Service */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Professional Installation & Service
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From initial consultation through ongoing maintenance, we provide comprehensive security services designed specifically for luxury Twin Cities homes.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Security Assessment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Comprehensive evaluation of your property's security needs and vulnerabilities with custom recommendations.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Professional Installation
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Certified technicians install and configure all components with minimal disruption to your daily routine.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Ongoing Support
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  24/7 system monitoring, regular maintenance, and immediate response to any security alerts or issues.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Twin Cities Service Areas */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Protecting Twin Cities Homes
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Professional security installation throughout the Minneapolis metropolitan area, specializing in luxury communities and custom homes.
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
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Secure Your Home Today
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-cream/60 text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Ready to protect your family and property with professional security systems? Schedule a consultation for comprehensive security assessment and design.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-cream transition-all duration-300"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}