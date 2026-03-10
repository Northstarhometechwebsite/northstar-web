import type { Metadata } from "next";
import WorkGallery from "@/components/WorkGallery";

export const metadata: Metadata = {
  title: "Our Work | NorthStar Home Technologies",
  description:
    "Explore NorthStar's portfolio of luxury smart home installations — lighting design, home theaters, automation, and more across Minneapolis and the Twin Cities.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-8 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="font-forum text-deep-navy text-[40px] lg:text-[56px] tracking-[0.03em] uppercase text-center">
            Our Work
          </h1>
        </div>
      </section>
      <WorkGallery />
    </>
  );
}
