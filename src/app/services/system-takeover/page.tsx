import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Automation System Takeover Minneapolis | Fix Existing Smart Home | NorthStar",
  description: "Take over and fix failing smart home systems in Minneapolis. Expert system takeover specialists rescue abandoned automation projects in Minnetonka, Wayzata, Edina homes.",
  alternates: {
    canonical: '/services/system-takeover',
  },
};

export default function SystemTakeoverPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/enhanced-av-rack-1.jpg"
          alt="Home automation system takeover and rescue services Minneapolis Twin Cities"
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
              System Takeover & Rescue
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              We rescue abandoned and failing smart home systems throughout the Twin Cities
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  When Smart Homes Stop Being Smart
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  SYSTEM RESCUE SPECIALISTS
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  You're not alone. Across Minneapolis, Minnetonka, Wayzata, and Edina, luxury homeowners are dealing with smart home systems that have become more hassle than help. Previous installers disappeared, systems break regularly, and what promised to simplify life has become a daily frustration.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  NorthStar specializes in taking over these troubled systems — whether it's a Savant, Control4, RTI, URC, or any other platform — diagnosing the root problems, and transforming them into reliable automation that actually works.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  We offer two paths: <strong>re-engineer the system</strong> so no proprietary control processor is needed, or <strong>migrate to Josh.ai</strong> with minimal disruption — keeping your existing speakers, displays, and infrastructure while upgrading the brain that runs everything.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Previous contractor vanished or went out of business
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    System frequently offline or unresponsive
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Multiple incompatible apps and interfaces
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    No ongoing support or maintenance available
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/work-inwood-equipment-rack.jpg"
                  alt="Frustrated homeowner dealing with broken smart home automation system needing takeover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Our Takeover Process */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Our System Rescue Process
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                We've developed a proven methodology for taking over troubled smart home systems and transforming them into reliable, user-friendly automation.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">01</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  System Forensics
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Complete analysis of existing equipment, wiring, and configuration to identify root problems.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">02</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Salvage Assessment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Determine which components can be saved, upgraded, or need complete replacement.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">03</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Integration Plan
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Design unified system architecture that brings everything together seamlessly.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">04</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Rebuild & Support
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Implement reliable solution with ongoing maintenance and 24/7 support.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Systems We Take Over */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Systems We Take Over
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-3xl mx-auto mb-12">
              We regularly rescue clients from these platforms — and we can either fix them, re-engineer around them, or migrate you to something better.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mb-12">
            {["Savant", "Control4", "RTI", "URC", "Crestron", "Elan / Nice"].map((platform, index) => (
              <SectionReveal key={platform} delay={0.1 + index * 0.05}>
                <div className="border border-warm-gold/30 p-4">
                  <p className="font-forum text-cream text-[16px] tracking-[0.05em] uppercase">{platform}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border border-warm-gold/30 p-8 text-left">
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Path 1: Re-Engineer
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  We redesign the system so no proprietary control processor is needed. Your devices work independently through modern protocols — eliminating the single point of failure that caused your problems.
                </p>
              </div>
              <div className="border border-warm-gold/30 p-8 text-left">
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Path 2: Migrate to Josh.ai
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  When centralized control is needed, we migrate to Josh.ai — a privacy-first, luxury platform that won't leave you stranded. Minimal disruption, maximum improvement.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Problems We Commonly Fix
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  TWIN CITIES SYSTEM RESCUE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <div className="space-y-6">
                  <div className="border-l-2 border-warm-gold pl-4">
                    <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">
                      Abandoned Control Systems
                    </h3>
                    <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                      Previous installer left incomplete or broken Control4, Crestron, or other automation platforms
                    </p>
                  </div>
                  <div className="border-l-2 border-warm-gold pl-4">
                    <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">
                      Networking Nightmares
                    </h3>
                    <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                      Unreliable Wi-Fi, poor device connectivity, and network infrastructure failures
                    </p>
                  </div>
                  <div className="border-l-2 border-warm-gold pl-4">
                    <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">
                      Multiple Competing Apps
                    </h3>
                    <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                      Dozens of different apps for lights, locks, thermostats, cameras, and audio systems
                    </p>
                  </div>
                  <div className="border-l-2 border-warm-gold pl-4">
                    <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">
                      Unreliable Voice Control
                    </h3>
                    <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                      Alexa or Google systems that only work sometimes and don't understand your home
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/work-tech-03.jpg"
                  alt="Professional home automation equipment showing system takeover and integration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The NorthStar Difference */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Why NorthStar for System Takeovers
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Unlike competitors who want to rip everything out and start over, we salvage your investment while fixing the fundamental problems that caused the failures.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  We're Still Here
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Established in 2015, we provide ongoing support. No vanishing contractors or abandoned customers.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Preserve Your Investment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  We salvage existing equipment wherever possible, minimizing replacement costs and waste.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Unified Platform
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Bring all systems together under one intuitive interface — no more app juggling.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  24/7 Monitoring
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Proactive system monitoring catches problems before they impact your daily life.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Local Expertise
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Deep knowledge of Twin Cities homes and the specific challenges of our climate.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Future-Proof Design
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Systems designed to grow and adapt with new technologies and changing needs.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              From Frustration to Satisfaction
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              "Our smart home had become a nightmare. Lights wouldn't respond, the audio system randomly played music at 3 AM, and our previous installer had completely disappeared. NorthStar took over the mess and turned it into something that actually works reliably."
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-warm-gold text-[12px] tracking-[0.1em] uppercase mb-16">
              — Homeowner in Minnetonka
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <p className="font-forum text-cream text-[36px] mb-2">47</p>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Systems Rescued
                </p>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Troubled automation systems successfully taken over and rebuilt
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <p className="font-forum text-cream text-[36px] mb-2">89%</p>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Equipment Salvaged
                </p>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Average percentage of existing equipment we successfully integrate
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <p className="font-forum text-cream text-[36px] mb-2">100%</p>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Still Operating
                </p>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Every system we've taken over is still working and supported today
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
              Rescue Your Smart Home
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Don't abandon your smart home investment. Let us diagnose the problems and create a system that actually works. Free consultation and assessment.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-deep-navy hover:text-cream transition-all duration-300"
            >
              GET A RESCUE CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}