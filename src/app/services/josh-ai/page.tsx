import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Josh.ai Dealer Minneapolis | Luxury Voice Control | Twin Cities | NorthStar",
  description: "First Josh.ai dealer in the Midwest. Privacy-focused voice automation for luxury Twin Cities homes. Professional Josh.ai installation in Minnetonka, Wayzata, Edina.",
  alternates: {
    canonical: '/services/josh-ai',
  },
};

export default function JoshAiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583225173216-b25c6b121e04?w=1600&q=80"
          alt="Josh.ai voice control smart home automation Minneapolis Twin Cities luxury installation"
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
              Josh.ai Voice Control
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Privacy-focused luxury voice automation for discerning Twin Cities homeowners
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* First in the Midwest */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  First Josh.ai Dealer in the Midwest
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  PRESIDENT'S CLUB & CHAIRMAN ACCOLADE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  NorthStar was the first Josh.ai dealer in the Midwest, bringing luxury voice control to Minneapolis area homes before anyone else. Our expertise has earned us Josh.ai's President's Club recognition and Chairman Accolade — the highest honors in the Josh.ai dealer network.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Unlike consumer voice assistants that prioritize data collection, Josh.ai is purpose-built for luxury custom homes in communities like Minnetonka, Wayzata, and Edina — where privacy, reliability, and sophistication matter most.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Local processing — your conversations stay in your home
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Works offline — no internet dependence
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Natural conversation, not rigid commands
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Seamless Lutron and third-party integration
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80"
                  alt="Josh.ai luxury voice control system installation showing privacy-focused smart home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Privacy-First Design */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Privacy-First Voice Control
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Josh.ai processes your voice commands locally on dedicated hardware in your home. No data mining, no cloud dependency, no corporate surveillance — just intelligent automation that respects your privacy.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Local Processing
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Voice recognition and natural language processing happen entirely within your home network.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  No Data Collection
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Josh.ai doesn't collect, store, or sell your personal information or conversation data.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Offline Capability
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Core functionality works even when internet is down — true reliability for luxury homes.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Secure Infrastructure
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Military-grade encryption and isolated network architecture protect your home systems.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Custom Wake Words
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Choose your own wake word — no generic "Alexa" or "Hey Google" required.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Family Profiles
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Voice recognition for family members with personalized preferences and access levels.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Natural Conversation */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Natural Conversation
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  INTELLIGENT HOME INTERACTION
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Josh.ai understands context and natural speech patterns. Instead of memorizing specific commands, you can speak to your home the way you'd speak to a knowledgeable assistant — naturally and conversationally.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  "Turn on the lights in the living room" works just as well as "Josh, I need some light over here" or "It's getting dark in here." The system learns your preferences and speaking patterns over time.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-2 border-warm-gold">
                    <p className="font-body text-[14px] text-slate-blue italic">
                      "Josh, let's watch a movie"
                    </p>
                    <p className="font-body text-[12px] text-warm-taupe mt-1">
                      → Dims lights, lowers shades, activates entertainment system
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-2 border-warm-gold">
                    <p className="font-body text-[14px] text-slate-blue italic">
                      "Good morning, Josh"
                    </p>
                    <p className="font-body text-[12px] text-warm-taupe mt-1">
                      → Raises shades, adjusts temperature, starts coffee, gives weather
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-2 border-warm-gold">
                    <p className="font-body text-[14px] text-slate-blue italic">
                      "Josh, we're leaving for vacation tomorrow"
                    </p>
                    <p className="font-body text-[12px] text-warm-taupe mt-1">
                      → Activates security mode, adjusts thermostat, schedules lighting
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
                  alt="Josh.ai natural voice conversation control in luxury Twin Cities home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Whole-Home Integration */}
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
                Josh.ai integrates with over 100 brands and thousands of products, creating unified voice control for every system in your Minneapolis area home.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">LUT</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Lutron Lighting
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Native integration with HomeWorks QSX and RadioRA 3 systems.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">AV</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Entertainment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Control Sonos, Apple TV, streaming services, and whole-home audio.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">CLI</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Climate Control
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  HVAC systems, thermostats, and individual zone temperature control.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[14px]">SEC</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[16px] tracking-[0.05em] uppercase mb-4">
                  Security Systems
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Surveillance cameras, door locks, alarm systems, and access control.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Professional Josh.ai Installation
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Our certified Josh.ai installation process ensures optimal performance, complete integration, and thorough training for your entire family.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">01</span>
                </div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  System Design
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Custom configuration based on your home's layout, systems, and family preferences
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">02</span>
                </div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Infrastructure Setup
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Dedicated Josh.ai hardware installation with secure network configuration
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">03</span>
                </div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Integration & Testing
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Connect all home systems and thoroughly test voice recognition and responses
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">04</span>
                </div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Family Training
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Comprehensive walkthrough and voice training for every family member
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Twin Cities Expertise */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Twin Cities Josh.ai Specialists
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From Minnetonka estates to Wayzata lakefront homes, we've installed Josh.ai systems in every type of luxury Twin Cities residence.
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
              Experience Josh.ai Today
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Ready to experience the future of luxury voice control? Schedule a consultation with the Twin Cities' first and most experienced Josh.ai dealer.
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