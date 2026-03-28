import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Theater Design & Installation | Minneapolis | NorthStar",
  description: "Custom home theater design and installation for luxury residences. Immersive cinema experiences in Minneapolis and the Twin Cities.",
  alternates: {
    canonical: '/services/home-theater',
  },
};

export default function HomeTheaterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/svc-av.jpg"
          alt="Luxury home theater with immersive surround sound and large format display"
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
              Immersive Entertainment
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Custom home theaters and media rooms designed for luxury residences
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Dedicated Theater Rooms */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Dedicated Theater Rooms
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Transform your basement or dedicated space into a world-class cinema experience. We design theaters that rival commercial venues while maintaining the comfort and elegance of your home.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  From projection systems and immersive audio to theater seating and environmental controls, every detail is crafted for the ultimate viewing experience.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    4K/8K projection and large-format displays
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Dolby Atmos surround sound systems
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Acoustic treatment and lighting design
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Integrated seating and climate control
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/flush-display.jpg"
                  alt="Dedicated home theater with elegant seating and immersive projection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Media Rooms */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Multi-Purpose Media Rooms
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  ENTERTAINMENT THAT ADAPTS
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Not every home has space for a dedicated theater. Our media rooms combine exceptional audio and video performance with the flexibility to serve multiple purposes — family gatherings, gaming, sports viewing, or quiet reading.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  Hidden speakers, retractable screens, and lighting scenes that adapt to every activity ensure the technology enhances the space without dominating it.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/outdoor-fireplace.jpg"
                  alt="Multi-purpose media room with hidden technology and flexible lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Audio Systems */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Immersive Audio Systems
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Audio is the foundation of any great entertainment experience. Our systems deliver reference-quality sound that transports you into the action while maintaining the sophisticated aesthetics of your home.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Dolby Atmos
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Three-dimensional surround sound with ceiling speakers for ultimate immersion
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Hidden Speakers
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Architectural speakers that deliver exceptional sound without visual compromise
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                  Distributed Audio
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Sonos and multi-zone systems for seamless music throughout your home
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Video & Display Technology */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Video & Display Technology
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  CINEMATIC VISUAL EXPERIENCES
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  From ultra-high-resolution projectors to stunning LED video walls, we specify display technology that delivers reference-quality picture performance while integrating seamlessly into your architecture.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  4K/8K distribution systems ensure every source reaches every display with perfect quality, while automated screens and lifts keep technology hidden when not in use.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Ultra 4K/8K projection systems
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Large-format OLED and MicroLED displays
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Motorized screens and display lifts
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Video walls and artistic displays
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-av.jpg"
                  alt="Large format display with premium video technology in luxury setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Acoustic Treatment & Seating */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Acoustic Design & Seating
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                The best technology means nothing without proper acoustics and comfortable seating. We design the complete environment to ensure every seat in the house delivers the perfect experience.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <SectionReveal delay={0.1}>
              <div>
                <h3 className="font-forum text-deep-navy text-[24px] tracking-[0.05em] uppercase mb-4">
                  Acoustic Treatment
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7] mb-4">
                  Strategic acoustic panels, bass traps, and diffusion elements optimize sound quality while maintaining elegant aesthetics.
                </p>
                <ul className="space-y-2">
                  <li className="font-body text-[13px] text-slate-blue">• Custom fabric-wrapped panels</li>
                  <li className="font-body text-[13px] text-slate-blue">• Invisible acoustic solutions</li>
                  <li className="font-body text-[13px] text-slate-blue">• Room acoustic modeling</li>
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-forum text-deep-navy text-[24px] tracking-[0.05em] uppercase mb-4">
                  Theater Seating
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7] mb-4">
                  Luxury theater seating with integrated controls, USB charging, and customizable upholstery to match your décor.
                </p>
                <ul className="space-y-2">
                  <li className="font-body text-[13px] text-slate-blue">• Motorized recliners with heating</li>
                  <li className="font-body text-[13px] text-slate-blue">• Built-in cup holders and storage</li>
                  <li className="font-body text-[13px] text-slate-blue">• Custom fabric and leather options</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Lighting Integration */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <SectionReveal>
              <div className="gold-rule mx-auto mb-6" />
              <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Lighting Integration & Automation
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-cream/60 text-[15px] lg:text-[16px] leading-[1.85] max-w-4xl mx-auto mb-8">
                Your theater integrates seamlessly with your home's Lutron lighting system. Movie time automatically dims the lights, while intermission brings up gentle pathway lighting. Josh.ai voice control means your entertainment responds to simple commands.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                    Scene Integration
                  </h3>
                  <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                    Lighting scenes synchronized with entertainment for the perfect ambiance
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                    Voice Control
                  </h3>
                  <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                    "Start movie night" activates your entire entertainment system
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                    Smart Scheduling
                  </h3>
                  <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                    Automated systems prepare your theater before you arrive
                  </p>
                </div>
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
              Design Your Entertainment Space
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Whether it's a dedicated theater or multi-purpose media room, let's create the perfect entertainment experience for your home.
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