import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Home Automation Stillwater & East Metro | NorthStar Home Technologies",
  description: "Smart home and lighting systems for Stillwater, Woodbury, Hudson, and the St. Croix Valley. NorthStar's Stillwater office serves the east Twin Cities metro.",
  alternates: {
    canonical: '/service-areas/east-metro',
  },
};

export default function EastMetroPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/processed/work-lighting-01.jpg"
          alt="St. Croix Valley luxury home with sophisticated smart home automation"
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
              East Metro & St. Croix Valley
            </h1>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] mt-4 max-w-2xl mx-auto leading-[1.7]">
              Smart home technology for Stillwater, the east metro, and St. Croix Valley communities
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Stillwater Office */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Stillwater Headquarters
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  5640 MEMORIAL AVE N STE B — LOCAL PRESENCE
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Our Stillwater office serves as operational headquarters for the east metro and St. Croix Valley region. This local presence ensures responsive service and deep understanding of the unique character of these historic and growing communities.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-8">
                  From the historic charm of Stillwater to the modern developments in Woodbury, and cross-border service into Hudson, Wisconsin, our team understands the diverse smart home needs of this scenic region.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <ul className="space-y-3">
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Local project management and support teams
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Equipment staging and service center
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Cross-border service (Minnesota + Wisconsin)
                  </li>
                  <li className="font-body text-[14px] text-slate-blue flex items-center">
                    <span className="w-2 h-2 bg-warm-gold rounded-full mr-3"></span>
                    Historic preservation expertise
                  </li>
                </ul>
              </SectionReveal>
            </div>
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/svc-automation.jpg"
                  alt="Stillwater office and service center exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* East Metro Communities */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <SectionReveal>
              <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                East Metro Communities We Serve
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-3xl mx-auto">
                From the historic streets of Stillwater to modern developments in Woodbury, the east metro blends heritage with growth — creating unique opportunities for thoughtful smart home integration.
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Stillwater
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Historic charm meets modern convenience in Minnesota's birthplace — technology that respects heritage
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Woodbury
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Thriving suburban community with new construction ideal for integrated smart home systems
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Hudson, WI
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Cross-border service for Wisconsin residents seeking Minnesota's premier smart home expertise
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Afton
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Scenic river town where technology enhances natural beauty and rural living
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  Marine on St. Croix
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Historic village with unique homes perfect for thoughtful technology integration
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <div className="bg-cream p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-4">
                  White Bear Lake
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Lakefront community with seasonal living enhanced by smart automation systems
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Additional East Metro Communities */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <SectionReveal>
              <h3 className="font-forum text-deep-navy text-[24px] lg:text-[30px] tracking-[0.05em] uppercase mb-4">
                Additional Communities
              </h3>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="font-body text-[15px] text-slate-blue leading-[1.85] max-w-2xl mx-auto">
                Extending our service throughout the east metro and St. Croix Valley region
              </p>
            </SectionReveal>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <SectionReveal delay={0.1}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Mahtomedi</h4>
                <p className="font-body text-[12px] text-slate-blue">Lakefront homes</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Forest Lake</h4>
                <p className="font-body text-[12px] text-slate-blue">Growing community</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Lake Elmo</h4>
                <p className="font-body text-[12px] text-slate-blue">Rural luxury</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div className="text-center">
                <h4 className="font-body text-[13px] tracking-[0.1em] uppercase text-warm-gold mb-2">Oakdale</h4>
                <p className="font-body text-[12px] text-slate-blue">Established neighborhoods</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Cross-Border Service */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <SectionReveal>
                <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
                  Cross-Border Service Excellence
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p className="font-body text-[14px] text-warm-taupe font-semibold uppercase tracking-[0.1em] mb-6">
                  MINNESOTA + WISCONSIN
                </p>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] mb-6">
                  Our Stillwater location makes us uniquely positioned to serve both Minnesota and Wisconsin residents in the St. Croix Valley region. Hudson, River Falls, and surrounding Wisconsin communities receive the same exceptional service as our Minnesota clients.
                </p>
                <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85]">
                  We understand the regulatory and practical considerations of cross-border service, ensuring seamless project delivery regardless of which side of the river you call home.
                </p>
              </SectionReveal>
            </div>
            <SectionReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src="/photos/processed/bathroom-shades.jpg"
                  alt="Cross-border smart home service across St. Croix Valley"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Historic Preservation Expertise */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-forum text-deep-navy text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Historic Preservation & Modern Technology
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-[15px] lg:text-[16px] text-slate-blue leading-[1.85] max-w-4xl mx-auto mb-12">
              The east metro features many historic homes that require special consideration when integrating modern technology. Our team specializes in solutions that preserve architectural integrity while delivering contemporary convenience and performance.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Heritage Respect
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Technology integration that preserves original architecture and historic character
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Invisible Infrastructure
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Wireless solutions and creative routing to avoid modifying historic structures
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-white p-8 text-center">
                <h3 className="font-forum text-deep-navy text-[18px] tracking-[0.05em] uppercase mb-4">
                  Modern Performance
                </h3>
                <p className="font-body text-[14px] text-slate-blue leading-[1.7]">
                  Full smart home capabilities without compromising the home's historical significance
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="bg-deep-navy py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="font-forum text-cream text-[30px] lg:text-[44px] tracking-[0.03em] uppercase mb-6">
              Local Knowledge & Regional Expertise
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-cream/60 text-[16px] lg:text-[18px] leading-[1.85] max-w-4xl mx-auto mb-12">
              Our Stillwater headquarters puts us at the heart of the east metro and St. Croix Valley community. We understand local building practices, seasonal considerations, and the unique character that makes this region special.
            </p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  River Valley Living
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Understanding unique needs of homes along the scenic St. Croix River corridor
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Seasonal Adaptability
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Smart home solutions designed for Minnesota's challenging seasonal variations
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Community Connections
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Strong relationships with local contractors, architects, and service providers
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-warm-gold mb-3">
                  Rapid Response
                </h3>
                <p className="font-body text-cream/60 text-[14px] leading-[1.7]">
                  Local presence ensures fast service response and ongoing support
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
              Connect with Our Stillwater Team
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="font-body text-slate-blue text-[16px] leading-[1.8] mb-10 max-w-lg mx-auto">
              Whether you're in Stillwater, the east metro, or St. Croix Valley, our local team is ready to help you discover the possibilities of smart home technology.
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