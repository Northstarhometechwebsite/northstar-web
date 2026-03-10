import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import WorkGallery from "@/components/WorkGallery";

export const metadata: Metadata = {
  title: "Our Work | NorthStar Home Technologies",
  description:
    "Explore NorthStar's portfolio of luxury smart home installations — lighting design, home theaters, automation, and more across Minneapolis and the Twin Cities.",
};

export default function WorkPage() {
  return (
    <>
      {/* ========== HERO — Full-bleed with photo ========== */}
      <section className="relative h-[60vh] lg:h-[70vh] min-h-[450px] overflow-hidden flex items-end">
        <Image
          src="/photos/processed/work-hero.jpg"
          alt="Grand formal dining room with exposed beam ceiling and custom millwork"
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
              Our Work
            </h1>
            <p className="font-body text-cream/50 text-[15px] lg:text-[17px] mt-4 max-w-xl leading-[1.7]">
              A curated collection of luxury residential projects showcasing 
              integrated technology that enhances life without disrupting design.
            </p>
          </SectionReveal>
        </div>
      </section>

      <WorkGallery />
    </>
  );
}
