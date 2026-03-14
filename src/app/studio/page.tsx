import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "The Design Studio | NorthStar Home Technologies",
  description:
    "Visit NorthStar's 2,000 sq ft Design Studio in Uptown Minneapolis — an immersive sensory experience where the future of intelligent living becomes tangible.",
};

const GALLERY = [
  {
    src: "/photos/processed/studio-kitchen.jpg",
    alt: "Kitchen and dining vignette with smart home integration",
    span: "lg:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/photos/processed/studio-conference.jpg",
    alt: "Conference room with integrated display and ambient lighting",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/photos/processed/studio-display.jpg",
    alt: "Marble media wall with vivid display technology",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/photos/processed/studio-theater.jpg",
    alt: "Private theater with cinematic projection and mood lighting",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/photos/processed/studio-lighting.jpg",
    alt: "Tunable lighting demonstration — neutral to warm scene",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

const BRANDS = [
  { name: "Josh.ai", file: "partners/Josh.ai.png" },
  { name: "Lutron", file: "partners/Lutron.png" },
  { name: "Sonos", file: "partners/Sonos.png" },
  { name: "Leon", file: "partners/Leon.png" },
  { name: "James Loudspeaker", file: "partners/James-Loudspeaker-logo.jpg" },
  { name: "DMF", file: "partners/DMF.png" },
  { name: "DoorBird", file: "partners/Doorbird.png" },
  { name: "Future Automation", file: "partners/futureautomation.png" },
  { name: "IC Realtime", file: "partners/IC-Realtime.png" },
  { name: "Just Video Walls", file: "partners/JVW.png" },
];

export default function StudioPage() {
  return (
    <>
      {/* ========== HERO — Full-bleed studio shot ========== */}
      <section className="relative h-[75vh] lg:h-[85vh] min-h-[500px] overflow-hidden">
        <Image
          src="/photos/processed/studio-hero.jpg"
          alt="NorthStar Design Studio — immersive technology showroom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 h-full flex items-end">
          <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full pb-16 lg:pb-24">
            <SectionReveal>
              <div className="gold-rule mb-6" />
              <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[64px] tracking-[0.03em] uppercase leading-[1.05]">
                The Design Studio
              </h1>
              <p className="font-body text-cream/50 text-[14px] lg:text-[16px] mt-4 tracking-wide">
                2,000 SQ FT &nbsp;·&nbsp; UPTOWN MINNEAPOLIS
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== INTRO ========== */}
      <section className="bg-cream py-28 lg:py-40">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-10" />
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-8">
              Experience Before You Invest
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-[17px] lg:text-[19px] text-slate-blue leading-[1.9]">
              This is not a showroom — it&apos;s an immersive design environment.
              Across 2,000 square feet beneath one of the most prominent
              architecture firms in the Twin Cities, every lighting scene,
              audio zone, and automation interface is live and fully functional.
              You don&apos;t just see what we do. You feel it.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== GALLERY — Asymmetric grid ========== */}
      <section className="bg-deep-navy">
        <div className="max-w-[1400px] mx-auto px-1 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {GALLERY.map((img, i) => (
              <SectionReveal
                key={i}
                delay={i * 0.08}
                className={`${img.span} overflow-hidden`}
              >
                <div className={`relative ${img.aspect} w-full img-zoom`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes={img.span ? "66vw" : "33vw"}
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT TO EXPECT ========== */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-4 text-center">
              Your Visit
            </p>
            <h2 className="font-forum text-deep-navy text-[32px] lg:text-[44px] tracking-[0.02em] uppercase text-center mb-4">
              What to Expect
            </h2>
            <div className="gold-rule mx-auto mb-16 lg:mb-20" />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "See It Live",
                body: "Experience Ketra lighting scenes shift in real-time. Watch colors change, feel warmth adjust, and see how light transforms a space throughout the day.",
              },
              {
                num: "02",
                title: "Touch It",
                body: "Interact with Lutron keypads, Josh.ai voice control, and automation interfaces. Understand how effortless intelligent control feels in practice.",
              },
              {
                num: "03",
                title: "Hear It",
                body: "Listen to distributed audio across zones, compare speaker systems, and experience what immersive sound feels like in a purpose-built environment.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.12}>
                <div className="text-center">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-gold">
                    {item.num}
                  </span>
                  <h3 className="font-forum text-deep-navy text-[22px] tracking-[0.05em] uppercase mt-3 mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] text-slate-blue leading-[1.8]">
                    {item.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BRAND PARTNERS ========== */}
      <section className="bg-cream/50 py-20 lg:py-28 border-y border-warm-taupe/15">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold text-center mb-12 lg:mb-16">
              Featured Partners
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-10 items-center justify-items-center">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="opacity-40 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/logos/${brand.file}`}
                    alt={brand.name}
                    className="h-5 lg:h-6 w-auto max-w-[160px]"
                  />
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== LOCATION ========== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-6">
              Uptown Minneapolis
            </p>
            <p className="font-body text-[17px] text-slate-blue leading-[1.8] mb-2">
              1624 W Lake St, Minneapolis, MN 55408
            </p>
            <p className="font-body text-[14px] text-warm-taupe leading-[1.7]">
              Located beneath one of the most prominent architecture firms in
              the Twin Cities — by appointment only.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-deep-navy py-28 lg:py-36">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Schedule a Private Tour
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-cream/50 text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Every project starts with understanding what&apos;s possible.
              We&apos;d love to show you.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-cream transition-all duration-300"
            >
              BOOK YOUR VISIT
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
