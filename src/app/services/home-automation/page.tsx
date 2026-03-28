import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Automation & Voice Control | Josh.ai | Minneapolis | NorthStar",
  description: "Intelligent home automation with Josh.ai voice control. Seamlessly integrate lighting, climate, entertainment, and security in your Twin Cities home.",
  alternates: {
    canonical: '/services/home-automation',
  },
};

export default function HomeAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/svc-automation.jpg"
          alt="Smart home automation interface in luxury Minneapolis residence"
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
              Your Home Responds to You
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Intelligent automation that anticipates your needs and adapts to your lifestyle
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Josh.ai Voice Control */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Josh.ai Voice Control
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  THE LUXURY VOICE PLATFORM
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  As the first Josh.ai dealer in the Midwest, NorthStar brings you the voice control platform designed specifically for luxury custom homes. Unlike consumer devices, Josh.ai prioritizes privacy, reliability, and sophisticated integration.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Your voice commands stay within your home's network, ensuring privacy while delivering natural, conversational control over every system — lighting, climate, entertainment, shades, and security.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Privacy-focused — no cloud dependency
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Natural conversation, not rigid commands
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Whole-home audio distribution
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Works even without internet
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/work-lighting-01.jpg"
                  alt="Josh.ai voice control interface in sophisticated living space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What Automation Covers */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Complete Home Integration
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                True home automation goes beyond individual smart devices. We create unified systems where every element works together — lighting, climate, entertainment, shades, and security responding as one.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Lighting Scenes
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  "Good morning" raises shades and brings up warm lighting. "Movie time" dims lights and activates entertainment.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Climate Control
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Temperature adjusts automatically based on occupancy, time of day, and seasonal preferences.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Entertainment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Music follows you through the house, and video sources connect seamlessly to any display.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Motorized Shades
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Coordinated with lighting for optimal daylight harvesting and privacy throughout the day.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Security Systems
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Surveillance, access control, and monitoring integrated into your daily routines.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Pool & Spa
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Temperature, lighting, and water features controlled through the same interface.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Single App Control */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  One App. Everything.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  UNIFIED CONTROL PLATFORM
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  No more switching between dozens of apps to control your home. Our unified platform puts everything at your fingertips — whether you're at home, at the office, or traveling.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  Custom interfaces designed for your specific home layout and preferences. Control individual devices or activate complex scenes with a single touch. Monitor your home's status from anywhere in the world.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-automation.jpg"
                  alt="Unified home automation app interface on tablet and smartphone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Lifestyle-Centered Design */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Designed Around Your Lifestyle
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                We don't just install technology — we study how you live. Your automation system learns your patterns, anticipates your needs, and adapts to seasonal changes and special events.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Morning Routines
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Wake to gradual lighting, optimal temperature, and your favorite news briefing automatically.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Entertainment Modes
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  "Party mode" adjusts lighting throughout, activates outdoor speakers, and sets perfect ambiance.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Away & Vacation
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Simulate occupancy, monitor security systems, and maintain optimal conditions while you're away.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Technology That Disappears */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Technology That Disappears Into Architecture
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              The best automation systems are invisible until you need them. Our philosophy centers on technology that enhances your home's architecture rather than competing with it. Sensors, controls, and interfaces integrate seamlessly into your design vision.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Invisible Sensors
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Motion, temperature, and light sensors hidden within architecture
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Flush-Mounted Controls
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Touch panels and keypads that blend seamlessly into walls
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Hidden Infrastructure
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Equipment racks and wiring concealed in utility spaces
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Wireless When Needed
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Strategic use of wireless technology where hardwiring isn't optimal
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Remote Access & Management */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Remote Access & Management
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Your home stays connected to you wherever you travel. Monitor security cameras, adjust temperature before you arrive, or check that you remembered to close the garage door.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Our team provides remote support and system updates, ensuring your automation evolves with new features and capabilities over time.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Secure cloud connectivity for remote access
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Real-time monitoring and alerts
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Remote system diagnostics and support
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Automatic software updates and improvements
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/luxury-kitchen.jpg"
                  alt="Remote home automation control interface on mobile device"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Experience Intelligent Automation
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Discover how home automation can enhance your daily life. Schedule a consultation to explore the possibilities for your home.
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