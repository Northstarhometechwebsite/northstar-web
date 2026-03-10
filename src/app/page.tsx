import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { SERVICES } from "@/lib/constants";

const PROJECTS = [
  {
    src: "/photos/processed/work-1.jpg",
    title: "Minnetonka Modern",
    category: "Lighting & Automation",
    aspect: "aspect-[16/10]",
    span: "lg:col-span-2",
  },
  {
    src: "/photos/processed/work-2.jpg",
    title: "Lake Home",
    category: "Shading & AV",
    aspect: "aspect-[3/4]",
    span: "",
  },
  {
    src: "/photos/processed/work-3.jpg",
    title: "Private Lounge",
    category: "Lighting Design",
    aspect: "aspect-[4/3]",
    span: "",
  },
  {
    src: "/photos/processed/work-4.jpg",
    title: "Lakeside Estate",
    category: "Outdoor Living",
    aspect: "aspect-[21/9]",
    span: "lg:col-span-2",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO — Full-bleed cinematic ========== */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="/photos/processed/hero.jpg"
          alt="Luxury home exterior at twilight"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 w-full px-6 lg:px-12 pb-20 lg:pb-28 max-w-[1400px] mx-auto">
          <div className="gold-rule mb-6" />
          <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[72px] xl:text-[84px] leading-[1.05] tracking-[0.02em] uppercase max-w-4xl">
            Technology That Disappears Into Architecture
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-12 scroll-indicator">
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-cream/40"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="8" cy="8" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ========== FEATURED WORK — Full-bleed, edge-to-edge ========== */}
      <section className="bg-deep-navy">
        <div className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <SectionReveal>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-4">
              Selected Work
            </p>
            <h2 className="font-forum text-cream text-[32px] lg:text-[44px] tracking-[0.02em] uppercase mb-4">
              Recent Projects
            </h2>
            <div className="gold-rule mb-16 lg:mb-20" />
          </SectionReveal>
        </div>

        {/* Full-bleed image grid — no container padding */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {PROJECTS.map((project, i) => (
            <SectionReveal key={i} delay={i * 0.1} className={project.span}>
              <Link href="/work" className="block relative project-card img-zoom group">
                <div className={`relative ${project.aspect} w-full`}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes={project.span ? "66vw" : "33vw"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="project-info absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-gold mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-forum text-cream text-[22px] lg:text-[26px] tracking-[0.03em] uppercase">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        <div className="py-12 lg:py-16 text-center">
          <Link
            href="/work"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-cream/40 hover:text-warm-gold transition-colors duration-300 inline-flex items-center gap-3"
          >
            View All Projects
            <span className="text-warm-gold">→</span>
          </Link>
        </div>
      </section>

      {/* ========== EDITORIAL INTRO ========== */}
      <section className="bg-cream py-32 lg:py-44">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-10" />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-forum text-deep-navy text-[28px] sm:text-[36px] lg:text-[48px] tracking-[0.02em] uppercase leading-[1.15] mb-10">
              Tailored Technology and Lighting. Elevated Living.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-[16px] lg:text-[18px] text-slate-blue leading-[1.9] max-w-[640px] mx-auto">
              NorthStar creates high-performance smart home systems that bring
              luxury, convenience, and security into perfect balance —
              specializing in advanced lighting, whole-home automation, and
              intelligent control.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== SERVICES — Minimal horizontal scroll ========== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-4">
              Expertise
            </p>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.02em] uppercase mb-4">
              What We Do
            </h2>
            <div className="gold-rule mb-16 lg:mb-20" />
          </SectionReveal>
        </div>

        <div className="lg:max-w-[1400px] lg:mx-auto lg:px-12">
          {/* Mobile: horizontal scroll / Desktop: grid */}
          <div className="flex lg:grid lg:grid-cols-3 gap-px overflow-x-auto no-scrollbar scroll-snap-x px-6 lg:px-0">
            {SERVICES.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.08}>
                <div className="min-w-[280px] lg:min-w-0 bg-cream/50 p-8 lg:p-10 group hover:bg-deep-navy transition-colors duration-500 cursor-default">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-gold">
                    0{i + 1}
                  </span>
                  <h3 className="font-forum text-deep-navy group-hover:text-cream text-[20px] lg:text-[22px] tracking-[0.05em] uppercase mt-4 mb-4 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-body text-[14px] text-slate-blue group-hover:text-cream/60 leading-[1.7] transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STUDIO TEASER — Visual ========== */}
      <section className="relative h-[80vh] lg:h-[90vh] overflow-hidden">
        <Image
          src="/photos/processed/studio.jpg"
          alt="NorthStar Design Studio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
            <SectionReveal>
              <div className="max-w-lg">
                <div className="gold-rule mb-6" />
                <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.02em] uppercase leading-[1.1] mb-6">
                  Experience the Studio
                </h2>
                <p className="font-body text-[15px] lg:text-[16px] text-cream/60 leading-[1.8] mb-8">
                  2,000 square feet of immersive technology in Uptown
                  Minneapolis. See lighting scenes live, experience automation
                  hands-on.
                </p>
                <Link
                  href="/studio"
                  className="inline-block font-body text-[11px] tracking-[0.15em] uppercase text-warm-gold border-b border-warm-gold/40 pb-1 hover:border-warm-gold transition-colors duration-300"
                >
                  Schedule a Tour
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA — Elegant simplicity ========== */}
      <section className="bg-deep-navy py-32 lg:py-44">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-10" />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-forum text-cream text-[32px] lg:text-[52px] tracking-[0.02em] uppercase leading-[1.1] mb-8">
              Begin Your Project
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-block font-body text-[11px] tracking-[0.15em] uppercase text-warm-gold border-b border-warm-gold/40 pb-1 hover:border-warm-gold transition-colors duration-300"
            >
              Schedule a Consultation →
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
