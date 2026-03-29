import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Smart Home Retrofit Minneapolis | Upgrade Existing Homes | NorthStar",
  description: "Transform your existing Minneapolis home into a smart home without major construction. Expert retrofit automation for Minnetonka, Wayzata, Edina homes. System takeover specialists.",
  alternates: {
    canonical: '/services/retrofit-automation',
  },
};

export default function RetrofitAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1600&q=80"
          alt="Luxury home retrofit smart automation installation in Minneapolis Twin Cities"
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
              Smart Home Retrofit Minneapolis
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Transform your existing home into an intelligent sanctuary without major construction or disruption
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* No Construction Needed */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Retrofit Without Disruption
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  SMART HOME UPGRADE SPECIALISTS
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Your beautiful Minnetonka, Wayzata, or Edina home doesn't need major construction to become intelligent. Our retrofit automation specialists transform existing homes into smart havens using minimally invasive techniques designed specifically for luxury residences.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  We work around your schedule and lifestyle, installing sophisticated automation systems room by room with minimal disruption to your daily routine. Most installations are completed while you're at work or away.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    No major electrical work or wall damage
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Wireless and low-voltage solutions prioritized
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Installation during convenient hours
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Preserve your home's architectural integrity
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80"
                  alt="Home automation retrofit installation showing minimal invasive smart home upgrade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What We Can Retrofit */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Complete Home Transformation
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From individual room upgrades to whole-home automation, we retrofit every system in your Minneapolis area home with intelligent control and seamless integration.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Lighting Control
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Add Lutron smart switches and dimmers to existing fixtures. Create scenes without rewiring.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Climate Integration
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Connect existing HVAC systems to smart thermostats with advanced scheduling and zoning.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Audio Systems
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Integrate existing speakers or add new ones with whole-home audio distribution.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Window Treatments
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Motorize existing blinds and curtains or install new automated shade systems.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Security Upgrade
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Add smart cameras, door locks, and sensors without compromising your home's aesthetics.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="text-center p-6">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Voice Control
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Josh.ai voice automation seamlessly integrates with your existing home systems.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Twin Cities Expertise */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Twin Cities Retrofit Specialists
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  LUXURY HOME SPECIALISTS
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  We understand the unique characteristics of luxury homes in Minnetonka, Wayzata, Edina, Dellwood, and surrounding Twin Cities communities. From Tudor estates to contemporary lakefront properties, we've retrofitted every architectural style.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Our team respects your home's heritage while introducing cutting-edge technology. We work with local contractors, architects, and designers you trust to ensure seamless integration.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">Minnetonka</p>
                    <p className="font-body text-[12px] text-slate-blue">Estate homes & lake properties</p>
                  </div>
                  <div>
                    <p className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">Wayzata</p>
                    <p className="font-body text-[12px] text-slate-blue">Historic & contemporary luxury</p>
                  </div>
                  <div>
                    <p className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">Edina</p>
                    <p className="font-body text-[12px] text-slate-blue">Established neighborhoods</p>
                  </div>
                  <div>
                    <p className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-2">Orono</p>
                    <p className="font-body text-[12px] text-slate-blue">Lakefront estates</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
                  alt="Luxury Twin Cities home exterior perfect for smart home retrofit automation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Retrofit Process & Timeline
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Our proven retrofit process minimizes disruption while maximizing the transformation of your home's capabilities.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">01</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Assessment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Comprehensive evaluation of existing systems and infrastructure. Site survey and planning.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">02</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Design
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Custom retrofit plan that preserves aesthetics while maximizing smart functionality.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">03</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Installation
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Careful implementation with minimal disruption. Most work completed during convenient hours.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-forum text-deep-navy text-[20px]">04</span>
                </div>
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Training
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Complete system walkthrough and training to ensure you're comfortable with every feature.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Retrofit */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Why Choose Retrofit Over New Construction
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Your existing home has character, established landscaping, and memories that can't be replicated. Smart retrofit preserves everything you love while adding the convenience and efficiency of modern automation.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Preserve Character
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Maintain your home's unique architectural elements and established character
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Faster Timeline
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Weeks instead of months. Live in your home throughout the upgrade process
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Cost Effective
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Significant savings compared to new construction or major renovations
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Immediate Benefits
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Start enjoying smart home benefits immediately with phased installations
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
              Transform Your Home Today
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Ready to upgrade your Minneapolis area home with intelligent automation? Schedule a retrofit consultation to explore the possibilities.
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