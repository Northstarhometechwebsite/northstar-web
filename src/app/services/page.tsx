import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Services | NorthStar Home Technologies",
  description:
    "NorthStar designs and integrates intelligent automation systems — lighting design, home automation, audio & video, motorized shades, networking, and security for luxury homes.",
};

const services = [
  {
    title: "Lighting Design",
    body: "One of the original Ketra dealers in the country and a Lutron Excellence Award winner. We deliver lighting that follows circadian rhythms, enhances architecture, and transforms spaces — from Ketra tunable lighting and Lutron whole-home control to architectural fixtures and landscape illumination.",
    image: "/photos/processed/svc-lighting.jpg",
    imageAlt: "Cascading pendant chandelier with lake view — curated lighting design",
    brands: "Lutron · Ketra · DMF",
    link: "/services/lighting",
    linkText: "EXPLORE LIGHTING DESIGN",
  },
  {
    title: "Home Automation & Control",
    body: "The first Josh.ai dealer in the Midwest. Whole-home control through intuitive interfaces that simplify daily life — natural voice automation, one-touch scenes, intelligent scheduling, geofencing, and remote access. Technology that anticipates how you live.",
    image: "/photos/processed/svc-automation.jpg",
    imageAlt: "Home office with color-tunable LED shelf lighting and intelligent scene control",
    brands: "Josh.ai · Lutron",
  },
  {
    title: "Audio & Video",
    body: "From distributed audio that fills every room to dedicated theaters with immersive sound, we create media experiences that disappear into the architecture. Hidden speakers, outdoor systems, video walls, and 4K/8K distribution designed for how you live.",
    image: "/photos/processed/svc-av.jpg",
    imageAlt: "Vaulted bar lounge with integrated display and in-ceiling speakers",
    brands: "Sonos · Leon · James Loudspeaker · Just Video Walls",
  },
  {
    title: "Motorized Shading",
    body: "Lutron Palladiom and premium shade systems that integrate seamlessly with lighting scenes for automatic daylight harvesting. Architectural hardware, whisper-quiet motors, and custom fabrics — technology that enhances comfort without compromising design.",
    image: "/photos/processed/svc-shading.jpg",
    imageAlt: "Master bedroom with expansive windows — motorized shade integration",
    brands: "Lutron",
  },
  {
    title: "Networking & Infrastructure",
    body: "Enterprise-grade networking designed for the modern connected home. Structured wiring, fiber optic backbone, and comprehensive Wi-Fi coverage ensure reliable performance for every device, every room — the invisible foundation that makes everything else work.",
    image: "/photos/processed/svc-networking.jpg",
    imageAlt: "Professional home automation equipment rack with structured wiring and control systems",
    brands: null,
  },
  {
    title: "Outdoor Entertainment",
    body: "Extend your living space with weatherproof displays, landscape audio, automated lighting, and motorized screens — all engineered for Minnesota's four seasons. Pool areas, patios, porches, and outdoor kitchens designed for year-round enjoyment.",
    image: "/photos/processed/svc-outdoor.jpg",
    imageAlt: "Lakefront pool patio with outdoor speakers and integrated audio",
    brands: "Future Automation",
  },
  {
    title: "Security & Surveillance",
    body: "Integrated security systems, high-definition surveillance, smart access control, and video intercoms — all managed through a single interface. Privacy-first design ensures your home is protected without compromising your peace of mind.",
    image: "/photos/processed/svc-security.jpg",
    imageAlt: "Luxury home exterior with architectural entry — security and surveillance integration",
    brands: "DoorBird · IC Realtime",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ========== HERO — Full-bleed with photo ========== */}
      <section className="relative h-[60vh] lg:h-[70vh] min-h-[450px] overflow-hidden flex items-end">
        <Image
          src="/photos/processed/svc-hero.jpg"
          alt="Grand staircase in luxury home — technology integrated seamlessly"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="relative z-10 w-full px-6 lg:px-12 pb-16 lg:pb-24 max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="gold-rule mb-6" />
            <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[64px] tracking-[0.03em] uppercase leading-[1.05]">
              What We Do
            </h1>
            <p className="font-body text-cream/50 text-[15px] lg:text-[17px] mt-4 max-w-xl leading-[1.7]">
              We design and integrate intelligent systems that enhance how you
              live — without disrupting the architecture you love.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== SERVICE SECTIONS — Alternating layout ========== */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-24 lg:py-32 ${
            i % 2 === 0 ? "bg-cream" : "bg-white"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <SectionReveal>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-gold mb-4">
                    0{i + 1}
                  </p>
                  <h2 className="font-forum text-deep-navy text-[28px] lg:text-[40px] tracking-[0.03em] uppercase mb-6">
                    {service.title}
                  </h2>
                </SectionReveal>
                <SectionReveal delay={0.1}>
                  <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                    {service.body}
                  </p>
                </SectionReveal>
                {service.brands && (
                  <SectionReveal delay={0.15}>
                    <p className="font-body text-[11px] tracking-[0.15em] uppercase text-warm-taupe mt-6">
                      {service.brands}
                    </p>
                  </SectionReveal>
                )}
                {service.link && (
                  <SectionReveal delay={0.2}>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 mt-8 font-body text-[11px] tracking-[0.15em] uppercase text-warm-gold border-b border-warm-gold/40 pb-1 hover:border-warm-gold transition-colors duration-300"
                    >
                      {service.linkText}
                      <span>→</span>
                    </Link>
                  </SectionReveal>
                )}
              </div>
              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <SectionReveal direction={i % 2 === 0 ? "right" : "left"}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden img-zoom">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ========== CTA ========== */}
      <section className="bg-deep-navy py-28 lg:py-36">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Begin Your Project
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-cream/50 text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Every project starts with a conversation about how you want to
              live. Let&apos;s start yours.
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
