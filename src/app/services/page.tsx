import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Services | NorthStar Home Technologies",
  description:
    "NorthStar designs and integrates intelligent automation systems — lighting design, home automation, audio & video, motorized shades, networking, and security for luxury homes.",
};

const services = [
  {
    title: "Lighting Design",
    body: "NorthStar is one of the original Ketra dealers and a Lutron Excellence Award winner. We deliver bespoke lighting that follows circadian rhythms, enhances architecture, and transforms spaces — from Ketra tunable lighting and Lutron whole-home control to architectural fixtures and landscape illumination.",
    imageLabel: "Ketra lighting scene in luxury living room",
    link: "/services/lighting",
    linkText: "EXPLORE LIGHTING DESIGN →",
  },
  {
    title: "Home Automation",
    body: "Whole-home control through intuitive interfaces that simplify daily life. NorthStar was the first Josh AI dealer in the Midwest — bringing natural voice automation, one-touch scenes, intelligent scheduling, geofencing, and remote access to discerning homeowners.",
    imageLabel: "Josh AI interface and whole-home control panel",
  },
  {
    title: "Audio & Video",
    body: "From distributed audio that fills every room to dedicated home theaters with immersive sound, NorthStar creates media experiences that disappear into the architecture. Hidden speakers, outdoor audio systems, and 4K/8K video distribution designed for the way you live.",
    imageLabel: "Dedicated home theater with acoustic treatment",
  },
  {
    title: "Motorized Shades",
    body: "Lutron Palladiom and premium shade systems that integrate seamlessly with lighting scenes for automatic daylight harvesting. Architectural hardware, whisper-quiet motors, and custom fabrics — technology that enhances comfort without compromising design.",
    imageLabel: "Motorized Palladiom shades in master bedroom",
  },
  {
    title: "Networking & Infrastructure",
    body: "Enterprise-grade networking designed for the modern connected home. Structured wiring, fiber optic backbone, and comprehensive Wi-Fi coverage ensure reliable performance for every device, every room — the invisible foundation that makes everything else possible.",
    imageLabel: "Structured wiring and network equipment rack",
  },
  {
    title: "Security & Surveillance",
    body: "Integrated security systems, high-definition surveillance, access control, and smart locks — all managed through a single interface. Our privacy-first approach ensures your home is protected without compromising your peace of mind.",
    imageLabel: "Security system interface and surveillance feeds",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-forum text-cream text-[42px] lg:text-[64px] tracking-[0.03em] uppercase">
            Services
          </h1>
          <p className="font-body text-cream/60 text-[16px] lg:text-[18px] font-light mt-4 max-w-2xl mx-auto">
            We design and integrate intelligent automation systems that enhance
            functionality without disrupting aesthetics.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-[100px] lg:py-[140px] ${
            i % 2 === 0 ? "bg-cream" : "bg-white"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <SectionReveal>
                  <h2 className="font-forum text-deep-navy text-[30px] lg:text-[40px] tracking-[0.03em] uppercase mb-6">
                    {service.title}
                  </h2>
                </SectionReveal>
                <SectionReveal delay={0.15}>
                  <p className="font-body text-[16px] lg:text-[17px] text-slate-blue leading-[1.8]">
                    {service.body}
                  </p>
                </SectionReveal>
                {service.link && (
                  <SectionReveal delay={0.3}>
                    <Link
                      href={service.link}
                      className="inline-block mt-8 font-body font-semibold text-[13px] tracking-[0.1em] uppercase text-slate-blue hover:text-deep-navy transition-colors"
                    >
                      {service.linkText}
                    </Link>
                  </SectionReveal>
                )}
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <SectionReveal direction={i % 2 === 0 ? "right" : "left"}>
                  <ImagePlaceholder
                    label={service.imageLabel}
                    aspect="aspect-[4/3]"
                  />
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-deep-navy py-[100px] lg:py-[140px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-forum text-cream text-[32px] lg:text-[48px] tracking-[0.03em] uppercase mb-6">
              Begin Your Project
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-block font-body font-bold text-[14px] tracking-[0.1em] uppercase px-10 py-4 bg-cream text-deep-navy hover:bg-white transition-all duration-300"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
