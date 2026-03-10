import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | NorthStar Home Technologies",
  description:
    "Start a conversation with NorthStar Home Technologies. Schedule a consultation for luxury smart home automation and lighting design in Minneapolis and the Twin Cities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#2a3448] to-slate-blue" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-forum text-cream text-[42px] lg:text-[64px] tracking-[0.03em] uppercase">
            Start a Conversation
          </h1>
        </div>
      </section>

      <section className="bg-cream py-[100px] lg:py-[140px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal>
                <ContactForm />
              </SectionReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.15}>
                <div className="space-y-10">
                  <div>
                    <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                      Headquarters
                    </h3>
                    <p className="font-body text-[15px] text-slate-blue leading-[1.7]">
                      {COMPANY.addresses.stillwater.street}
                      <br />
                      {COMPANY.addresses.stillwater.city},{" "}
                      {COMPANY.addresses.stillwater.state}{" "}
                      {COMPANY.addresses.stillwater.zip}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                      Design Studio
                    </h3>
                    <p className="font-body text-[15px] text-slate-blue leading-[1.7]">
                      {COMPANY.addresses.minneapolis.street}
                      <br />
                      {COMPANY.addresses.minneapolis.city},{" "}
                      {COMPANY.addresses.minneapolis.state}{" "}
                      {COMPANY.addresses.minneapolis.zip}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                      Get in Touch
                    </h3>
                    <p className="font-body text-[15px] text-slate-blue leading-[1.7]">
                      <a
                        href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, "")}`}
                        className="hover:text-deep-navy transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                      <br />
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="hover:text-deep-navy transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-forum text-deep-navy text-[20px] tracking-[0.05em] uppercase mb-3">
                      Hours
                    </h3>
                    <p className="font-body text-[15px] text-slate-blue">
                      {COMPANY.hours}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
