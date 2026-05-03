import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Ketra Lighting Minneapolis | One of 60 Original Ketra Dealers | NorthStar",
  description:
    "NorthStar is one of only 60 original Ketra dealers nationwide. Expert Ketra circadian lighting design and installation in Minneapolis, Twin Cities. Natural light tunable LED specialists.",
  alternates: {
    canonical: "/services/ketra",
  },
  openGraph: {
    title: "Ketra Lighting Minneapolis | One of 60 Original Ketra Dealers | NorthStar",
    description:
      "NorthStar is one of only 60 original Ketra dealers nationwide. Expert Ketra circadian lighting design and installation in Minneapolis, Twin Cities. Natural light tunable LED specialists.",
    url: "https://www.northstarhometech.com/services/ketra",
    siteName: "NorthStar Home Technologies",
    images: [
      {
        url: "https://www.northstarhometech.com/photos/processed/lighting-ketra.jpg",
        width: 1200,
        height: 630,
        alt: "Ketra natural light tunable LED lighting by NorthStar Home Technologies Minneapolis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketra Lighting Minneapolis | One of 60 Original Ketra Dealers | NorthStar",
    description:
      "NorthStar is one of only 60 original Ketra dealers nationwide. Expert Ketra circadian lighting design and installation in Minneapolis, Twin Cities.",
    images: ["https://www.northstarhometech.com/photos/processed/lighting-ketra.jpg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.northstarhometech.com/#organization",
      name: "NorthStar Home Technologies",
      url: "https://www.northstarhometech.com",
      telephone: "+1-612-254-2626",
      email: "office@northstarhometech.com",
      logo: "https://www.northstarhometech.com/logos/northstar-logo.svg",
      image: "https://www.northstarhometech.com/photos/processed/lighting-ketra.jpg",
      description:
        "One of 60 original Ketra dealers nationwide. Award-winning Lutron HomeWorks QSX and Ketra circadian lighting design for luxury homes in Minneapolis and the Twin Cities.",
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "City", name: "Stillwater" },
        { "@type": "City", name: "Saint Paul" },
        { "@type": "City", name: "Minnetonka" },
        { "@type": "City", name: "Wayzata" },
        { "@type": "City", name: "Edina" },
        { "@type": "AdministrativeArea", name: "Twin Cities" },
        { "@type": "AdministrativeArea", name: "Minnesota" },
      ],
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "5640 Memorial Ave N STE B",
          addressLocality: "Stillwater",
          addressRegion: "MN",
          postalCode: "55082",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "1624 W Lake St",
          addressLocality: "Minneapolis",
          addressRegion: "MN",
          addressCountry: "US",
        },
      ],
      sameAs: [
        "https://www.instagram.com/northstarhometech",
        "https://www.facebook.com/northstarhometech",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.northstarhometech.com/services/ketra#service",
      name: "Ketra Lighting Design & Installation",
      provider: {
        "@id": "https://www.northstarhometech.com/#organization",
      },
      description:
        "Expert Ketra natural light tunable LED design, programming, and installation integrated with Lutron HomeWorks QSX for luxury homes in Minneapolis and the Twin Cities.",
      areaServed: { "@type": "AdministrativeArea", name: "Twin Cities, Minnesota" },
      serviceType: "Ketra Lighting Design",
      url: "https://www.northstarhometech.com/services/ketra",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Ketra lighting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ketra is a premium LED lighting system that goes far beyond standard tunable white. It reproduces the full spectrum of natural sunlight — from 1400K candlelight warmth to 10,000K bright daylight — and offers vibrant color throughout the entire visible spectrum. Ketra fixtures use proprietary technology to maintain perfect color rendering (95+ CRI) at every output level, and can follow your body's natural circadian rhythm throughout the day for better sleep, mood, and wellbeing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Ketra worth the cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For clients who invest in luxury homes, the answer is consistently yes. Ketra eliminates the color shift, dullness, and color rendering failures common in standard LEDs. The result is artwork that looks museum-quality, finishes that appear exactly as intended, and lighting that genuinely improves your daily experience. Paired with Lutron HomeWorks QSX, it becomes a completely invisible, automated system — the gold standard in architectural lighting.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I see Ketra lighting in Minneapolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NorthStar's studio in Stillwater, MN features live Ketra demonstrations. You can experience the full range of Ketra's natural light tunability and color rendering in person before specifying it in your home. Contact us to schedule a studio visit.",
          },
        },
        {
          "@type": "Question",
          name: "Does NorthStar handle Ketra installation and design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — completely. NorthStar is one of only 60 original Ketra dealers in the country. We handle every aspect of your Ketra system: lighting design consultation, architectural integration with your builder or architect, Lutron HomeWorks QSX programming, on-site calibration, and lifetime support.",
          },
        },
        {
          "@type": "Question",
          name: "Can Ketra integrate with my existing Lutron system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Ketra was acquired by Lutron and integrates natively with Lutron HomeWorks QSX. If you already have a HomeWorks QSX system, Ketra fixtures can typically be added and programmed as part of your existing installation. NorthStar's deep expertise in both platforms makes this seamless.",
          },
        },
        {
          "@type": "Question",
          name: "How do I schedule a Ketra consultation in Minneapolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact NorthStar Home Technologies via our website at northstarhometech.com/contact, call us at (612) 254-2626, or visit our Stillwater headquarters or Minneapolis design studio. We serve luxury homeowners throughout Minneapolis, Saint Paul, Minnetonka, Wayzata, Edina, and the greater Twin Cities.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.northstarhometech.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.northstarhometech.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ketra Lighting",
          item: "https://www.northstarhometech.com/services/ketra",
        },
      ],
    },
  ],
};

export default function KetraPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/lighting-ketra.jpg"
          alt="Ketra natural light tunable LED lighting in a luxury Minneapolis home — warm architectural glow"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h1 className="font-forum text-cream text-[36px] sm:text-[48px] lg:text-[68px] tracking-[0.03em] uppercase leading-[1.05]">
              One of the First 60 Ketra Dealers in the Country
            </h1>
            <p className="font-body text-cream/65 text-[16px] lg:text-[19px] mt-6 max-w-2xl mx-auto leading-[1.75]">
              NorthStar brings Minnesota its most sophisticated lighting technology — Ketra natural light tunability, precisely calibrated and fully integrated with Lutron HomeWorks QSX.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-block mt-10 font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-12 py-4 bg-warm-gold text-deep-navy hover:bg-cream hover:text-deep-navy transition-all duration-300"
            >
              SCHEDULE A LIGHTING CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── Authority / Credentials ── */}
      <section className="bg-deep-navy py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <SectionReveal delay={0.0}>
              <div className="border border-warm-gold/20 p-10">
                <p className="font-forum text-warm-gold text-[42px] lg:text-[56px] tracking-[0.03em] leading-[1]">
                  60
                </p>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50 mt-3">
                  Original Ketra Dealers Nationwide
                </p>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7] mt-4">
                  NorthStar was selected as one of only 60 dealers in the country when Ketra launched its dealer network — a distinction earned through technical excellence and client results.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="border border-warm-gold/20 p-10">
                <p className="font-forum text-warm-gold text-[42px] lg:text-[56px] tracking-[0.03em] leading-[1]">
                  2020
                </p>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50 mt-3">
                  Lutron Excellence Award
                </p>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-warm-gold/70 mt-1">
                  Best Ketra or Ivalo Lighting Project
                </p>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7] mt-4">
                  Recognized by Lutron Electronics for the most outstanding Ketra installation in the country — a testament to NorthStar&apos;s design depth and programming precision.
                </p>
                <a
                  href="https://commercial.lutron.com/us/en/press-releases/2020-lutron-excellence-award-winners-and-hall-of-fame-inductee-announced"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-body text-[11px] tracking-[0.12em] uppercase text-warm-gold/60 hover:text-warm-gold transition-colors duration-300"
                >
                  View announcement →
                </a>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="border border-warm-gold/20 p-10">
                <p className="font-forum text-warm-gold text-[42px] lg:text-[56px] tracking-[0.03em] leading-[1]">
                  QSX
                </p>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50 mt-3">
                  HomeWorks QSX + Ketra Specialists
                </p>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7] mt-4">
                  Most Ketra dealers can't deliver the full HomeWorks QSX integration. NorthStar's dual expertise makes us the only call to make for a complete circadian lighting system.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── What is Ketra ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Ketra Lighting: The Science of Natural Light in Minneapolis Homes
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  BEYOND TUNABLE WHITE — FULL NATURAL LIGHT SPECTRUM
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Standard LED dimming dims more than just brightness — it shifts color, loses vibrancy, and throws off the natural quality that makes a room feel alive. Ketra is engineered to solve this completely.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  Ketra reproduces the sun's journey from morning cool blue-whites through afternoon warmth to the amber glow of dusk. Every color in the visible spectrum is available — and every white point maintains 95+ CRI, meaning colors in your home appear exactly as intended, at every level.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  {[
                    "1,400K to 10,000K — full natural light spectrum",
                    "95+ CRI at every output level — no color shift at dim",
                    "Full visible spectrum color, not just white tones",
                    "Circadian rhythm programming — follow the sun automatically",
                    "Recessed, linear, pendants, and custom architectural fixtures",
                    "Fundamentally different from standard tunable white LEDs",
                  ].map((item) => (
                    <li key={item} className="font-body text-[14px] text-slate-blue flex items-start">
                      <span className="w-2 h-2 bg-warm-gold rounded-full mr-3 mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-architectural.jpg"
                  alt="Ketra architectural LED lighting — warm cove and recessed lighting in Minneapolis luxury home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Ketra Color Science Grid ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Natural Light Tunable Lighting — What Makes Ketra Different
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Ketra's proprietary N-Light technology blends multiple LED channels to achieve what no other fixture can: perfect color at any intensity, at any white point, in any color.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "CCT",
                heading: "Full Spectrum White",
                body: "1,400K candlelight to 10,000K daylight — the complete arc of natural sunlight reproduced in your home.",
              },
              {
                label: "CRI",
                heading: "Perfect Color Rendering",
                body: "95+ CRI at every output level. Artwork, fabrics, and finishes look exactly as they should — always.",
              },
              {
                label: "RGB",
                heading: "Vibrant Color",
                body: "Every color in the visible spectrum available. Perfect for holidays, art highlighting, and mood-setting in theaters and wine cellars.",
              },
              {
                label: "NLB",
                heading: "Circadian Rhythm Support",
                body: "Automatically tracks the sun's path throughout the day. Better sleep, better focus, better wellbeing — built into your home.",
              },
            ].map((card, i) => (
              <SectionReveal key={card.label} delay={i * 0.1}>
                <div className="bg-cream p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-forum text-deep-navy text-[13px] font-bold">{card.label}</span>
                  </div>
                  <h3 className="font-forum text-deep-navy text-[17px] tracking-[0.05em] uppercase mb-3">
                    {card.heading}
                  </h3>
                  <p className="font-body text-[14px] text-slate-blue leading-[1.7]">{card.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NorthStar Ketra Process ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/studio-lighting.jpg"
                  alt="NorthStar lighting design studio — Ketra design consultation in Stillwater Minnesota"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  The NorthStar Ketra Process
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-8">
                  FROM DESIGN TO CALIBRATION — WE OWN EVERY STEP
                </p>
              </SectionReveal>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Lighting Design Consultation",
                    desc: "We begin with your architecture, lifestyle, and vision. Every Ketra system is designed — not installed off a spec sheet.",
                  },
                  {
                    step: "02",
                    title: "Architectural Integration",
                    desc: "We work directly with your builder and architect to spec fixtures, trim, and placement before walls close.",
                  },
                  {
                    step: "03",
                    title: "HomeWorks QSX Programming",
                    desc: "Every scene, every schedule, every circadian arc is programmed to your home's unique needs on Lutron's flagship platform.",
                  },
                  {
                    step: "04",
                    title: "Calibration & Tuning",
                    desc: "On-site calibration ensures every fixture performs at its peak — color accuracy, intensity, and transition curves dialed in precisely.",
                  },
                  {
                    step: "05",
                    title: "Lifetime Support",
                    desc: "Your system is never a one-time installation. NorthStar provides ongoing support, adjustments, and programming changes for as long as you own your home.",
                  },
                ].map((item, i) => (
                  <SectionReveal key={item.step} delay={0.1 + i * 0.08}>
                    <div className="flex gap-5">
                      <div className="shrink-0 w-10 h-10 bg-warm-gold flex items-center justify-center">
                        <span className="font-forum text-deep-navy text-[13px]">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-forum text-deep-navy text-[17px] tracking-[0.04em] uppercase mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-[14px] text-slate-blue leading-[1.7]">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Ketra Lighting Applications — Twin Cities Luxury Homes
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                Ketra performs wherever natural light quality and precision matter — which, in a well-designed home, is everywhere.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Whole-Home Circadian Lighting",
                desc: "Program your entire home to mirror the sun's path. Wake with energizing cool light, transition through productive afternoon tones, and settle into warm amber evenings — automatically.",
                img: "/photos/processed/luxury-kitchen.jpg",
                alt: "Whole-home circadian Ketra lighting in a luxury Minneapolis kitchen — natural light tunable LED",
              },
              {
                title: "Architectural Statements",
                desc: "Coves, trims, and recessed fixtures that reveal your home's finest details with museum-quality color rendering. Every material, every finish, every surface shown at its best.",
                img: "/photos/processed/lighting-architectural.jpg",
                alt: "Ketra architectural cove and trim lighting — Minneapolis luxury home interior design",
              },
              {
                title: "Wellness Rooms & Primary Suites",
                desc: "Your bedroom is where circadian lighting matters most. Ketra's full-spectrum dawn simulation improves sleep quality and morning energy in ways standard LEDs cannot replicate.",
                img: "/photos/processed/work-general-40.jpg",
                alt: "Ketra wellness lighting in a luxury primary suite — circadian rhythm lighting Minneapolis",
              },
              {
                title: "Wine Cellars & Home Theaters",
                desc: "Shift from faithful white-point rendering in your cellar to rich amber and deep theatrical hues in your screening room. Ketra's color range makes both possible.",
                img: "/photos/processed/enhanced-wine-cellar.jpg",
                alt: "Ketra color-tunable lighting in a luxury wine cellar — Minneapolis home theater lighting",
              },
              {
                title: "Art & Collections",
                desc: "95+ CRI means artwork and collectibles are lit as the artist intended. No color shift, no UV degradation — gallery-standard lighting in your home.",
                img: "/photos/processed/work-general-55.jpg",
                alt: "Ketra art lighting with high CRI rendering — luxury Minneapolis residence",
              },
              {
                title: "Outdoor Architectural Lighting",
                desc: "Ketra's portfolio extends to exterior architectural applications — facades, landscape uplighting, and entertainment spaces that transition fluidly with your interior scenes.",
                img: "/photos/processed/work-exterior-01.jpg",
                alt: "Ketra outdoor architectural lighting — luxury Twin Cities home exterior at dusk",
              },
            ].map((app, i) => (
              <SectionReveal key={app.title} delay={0.05 * i}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden img-zoom mb-5">
                    <Image
                      src={app.img}
                      alt={app.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.04em] uppercase mb-3">
                    {app.title}
                  </h3>
                  <p className="font-body text-[14px] text-slate-blue leading-[1.7]">{app.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ketra + HomeWorks Edge ── */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <div className="gold-rule mb-6" />
                <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Why Ketra + HomeWorks QSX Is NorthStar's Edge
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-6">
                  DUAL EXPERTISE. NO COMPROMISES.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-cream/70 leading-[1.85] mb-6">
                  Ketra was acquired by Lutron and integrates natively with HomeWorks QSX — but most Ketra dealers lack the programming depth to unlock this integration fully. NorthStar holds Lutron's Excellence Award for Best Ketra System precisely because we go deeper.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-cream/70 leading-[1.85] mb-8">
                  With HomeWorks QSX as the control backbone, your Ketra lighting becomes a unified, scene-driven system: one button sets the mood across every room, every fixture, every outdoor zone — coordinated perfectly. Add Josh.ai voice control, and your home truly disappears into the architecture.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  {[
                    "Native Ketra + HomeWorks QSX integration — no third-party bridges",
                    "Full scene programming across lighting, shades, HVAC, and AV",
                    "Astronomical timeclock — lighting adjusts with Minnesota seasons",
                    "Josh.ai voice control integration",
                    "Award-winning programming expertise",
                  ].map((item) => (
                    <li key={item} className="font-body text-[14px] text-cream/70 flex items-start">
                      <span className="w-2 h-2 bg-warm-gold rounded-full mr-3 mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 mt-10">
                  <Link
                    href="/services/lutron-lighting"
                    className="font-body text-[12px] tracking-[0.15em] uppercase text-warm-gold border border-warm-gold/40 px-6 py-3 hover:border-warm-gold transition-colors duration-300"
                  >
                    LUTRON OVERVIEW
                  </Link>
                  <Link
                    href="/services"
                    className="font-body text-[12px] tracking-[0.15em] uppercase text-cream/60 border border-cream/20 px-6 py-3 hover:border-cream/50 transition-colors duration-300"
                  >
                    ALL SERVICES
                  </Link>
                </div>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/lighting-lutron.jpg"
                  alt="Lutron HomeWorks QSX keypad with Ketra circadian lighting — NorthStar luxury installation Minneapolis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                Ketra Lighting FAQ — Minneapolis
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] text-slate-blue leading-[1.85] max-w-xl mx-auto">
                Common questions from Twin Cities homeowners exploring Ketra circadian lighting design.
              </p>
            </SectionReveal>
          </div>

          <div className="space-y-0 divide-y divide-deep-navy/10">
            {[
              {
                q: "What is Ketra lighting?",
                a: "Ketra is a premium LED lighting system that goes far beyond standard tunable white. It reproduces the full spectrum of natural sunlight — from 1,400K candlelight warmth to 10,000K bright daylight — and offers vibrant color throughout the entire visible spectrum. Ketra fixtures use proprietary technology to maintain perfect color rendering (95+ CRI) at every output level, and can follow your body's natural circadian rhythm throughout the day for better sleep, mood, and wellbeing.",
              },
              {
                q: "Is Ketra worth the cost?",
                a: "For clients who invest in luxury homes, the answer is consistently yes. Ketra eliminates the color shift, dullness, and rendering failures common in standard LEDs. The result is artwork that looks museum-quality, finishes that appear exactly as intended, and lighting that genuinely improves your daily experience. Paired with Lutron HomeWorks QSX, it becomes a completely invisible, automated system — the gold standard in architectural lighting.",
              },
              {
                q: "Where can I see Ketra lighting in Minneapolis?",
                a: "NorthStar's studio in Stillwater, MN features live Ketra demonstrations. You can experience the full range of Ketra's natural light tunability and color rendering in person before specifying it in your home. Contact us to schedule a studio visit.",
              },
              {
                q: "Does NorthStar handle Ketra installation and design?",
                a: "Yes — completely. NorthStar is one of only 60 original Ketra dealers in the country. We handle every aspect: lighting design consultation, architectural integration with your builder or architect, HomeWorks QSX programming, on-site calibration, and lifetime support.",
              },
              {
                q: "Can Ketra integrate with my existing Lutron system?",
                a: "Yes. Ketra was acquired by Lutron and integrates natively with Lutron HomeWorks QSX. If you already have a HomeWorks QSX system, Ketra fixtures can typically be added and programmed within your existing installation. NorthStar's deep expertise in both platforms makes this seamless.",
              },
              {
                q: "How do I schedule a Ketra consultation in Minneapolis?",
                a: "Contact NorthStar via our contact page, call us at (612) 254-2626, or visit our Stillwater headquarters or Minneapolis design studio. We serve luxury homeowners throughout Minneapolis, Saint Paul, Minnetonka, Wayzata, Edina, and the greater Twin Cities metro.",
              },
            ].map((faq, i) => (
              <SectionReveal key={faq.q} delay={0.05 * i}>
                <details className="group py-6 cursor-pointer">
                  <summary className="font-forum text-deep-navy text-[17px] lg:text-[20px] tracking-[0.03em] uppercase list-none flex justify-between items-center gap-4">
                    <span>{faq.q}</span>
                    <span className="shrink-0 w-6 h-6 border border-warm-gold text-warm-gold flex items-center justify-center text-[14px] group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="font-body text-[15px] text-slate-blue leading-[1.85] mt-4 pr-10">
                    {faq.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Links ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-taupe mb-8 text-center">
              EXPLORE NORTHSTAR
            </p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { href: "/services/lutron-lighting", label: "Lutron Lighting" },
              { href: "/services", label: "All Services" },
              { href: "/work", label: "Our Work" },
              { href: "/contact", label: "Contact" },
            ].map((link, i) => (
              <SectionReveal key={link.href} delay={0.1 * i}>
                <Link
                  href={link.href}
                  className="block text-center font-body text-[12px] tracking-[0.15em] uppercase text-deep-navy border border-deep-navy/20 px-4 py-3 hover:border-warm-gold hover:text-warm-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-8" />
            <h2 className="font-forum text-cream text-[32px] lg:text-[52px] tracking-[0.03em] uppercase leading-[1.1] mb-6">
              Ready to Experience Ketra Lighting?
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] leading-[1.85] mb-4 max-w-lg mx-auto">
              Minneapolis and Twin Cities homeowners — discover what one of only 60 original Ketra dealers in the country can design for your home.
            </p>
            <p className="font-body text-cream/50 text-[14px] leading-[1.7] mb-10">
              <strong className="text-warm-gold">Stillwater:</strong> 5640 Memorial Ave N STE B, Stillwater, MN 55082&nbsp;&nbsp;|&nbsp;&nbsp;
              <strong className="text-warm-gold">Minneapolis:</strong> 1624 W Lake St, Minneapolis, MN 55408&nbsp;&nbsp;|&nbsp;&nbsp;
              <strong className="text-warm-gold">(612) 254-2626</strong>
            </p>
          </SectionReveal>
          <SectionReveal delay={0.25}>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[12px] tracking-[0.15em] uppercase px-14 py-4 bg-warm-gold text-deep-navy hover:bg-cream hover:text-deep-navy transition-all duration-300"
            >
              SCHEDULE A KETRA CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
