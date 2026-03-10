import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NorthStar Home Technologies",
  description:
    "Privacy policy for NorthStar Home Technologies — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-8 bg-cream">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h1 className="font-forum text-deep-navy text-[40px] lg:text-[56px] tracking-[0.03em] uppercase">
            Privacy Policy
          </h1>
          <p className="font-body text-warm-taupe text-[14px] mt-4">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="bg-cream pb-[120px] lg:pb-[160px]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 font-body text-[16px] text-slate-blue leading-[1.8] space-y-8">
          <p>
            NorthStar Home Technologies, Inc. (&ldquo;NorthStar,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at northstarhometech.com and use our services.
          </p>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              <strong className="text-deep-navy">Information You Provide:</strong> When you fill out our contact form, schedule a consultation, or interact with our services, you may provide your name, email address, phone number, project details, and other information you choose to share.
            </p>
            <p>
              <strong className="text-deep-navy">Information Collected Automatically:</strong> When you visit our website, we may collect information about your device, browser, IP address, pages viewed, time spent on pages, and other browsing behavior through cookies and similar technologies.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              Cookies &amp; Tracking Technologies
            </h2>
            <p className="mb-4">
              With your consent (provided via our cookie consent banner), we use the following third-party tracking technologies:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-deep-navy">Google Analytics 4</strong> — to understand site traffic, user behavior, and measure engagement</li>
              <li><strong className="text-deep-navy">Meta (Facebook) Pixel</strong> — to measure advertising effectiveness and build audiences for targeted advertising</li>
              <li><strong className="text-deep-navy">Microsoft Clarity</strong> — to generate heatmaps, session recordings, and understand user interaction patterns</li>
              <li><strong className="text-deep-navy">LinkedIn Insight Tag</strong> — to understand professional demographics of site visitors and build audiences for LinkedIn advertising</li>
            </ul>
            <p className="mt-4">
              These technologies are loaded only after you accept cookies via our consent banner. If you decline, no third-party tracking cookies are set.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To improve our website and user experience</li>
              <li>To measure the effectiveness of our marketing efforts</li>
              <li>To communicate with you about projects, services, and updates</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share anonymized or aggregated data with our third-party analytics providers (Google, Meta, Microsoft, LinkedIn) for the purposes described above. We may also share information when required by law, to protect our rights, or in connection with a business transfer.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              NorthStar App &amp; Client Portal
            </h2>
            <p>
              If you are a NorthStar client, the NorthStar App and client portal collect and store information necessary to provide our services, including system configuration data, service history, communication records, and billing information. This data is stored securely and is accessible only to authorized NorthStar personnel and the respective client.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              Your Choices
            </h2>
            <p className="mb-4">
              <strong className="text-deep-navy">Cookie Consent:</strong> You may decline cookies when first visiting our website. If you previously accepted cookies and wish to opt out, clear your browser cookies and revisit the site to make a new selection.
            </p>
            <p>
              <strong className="text-deep-navy">Data Deletion:</strong> You may request deletion of your personal information by contacting us at{" "}
              <a href="mailto:info@northstarhometech.com" className="underline hover:text-deep-navy">
                info@northstarhometech.com
              </a>. We will respond to verified requests within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-deep-navy text-[22px] tracking-[0.03em] uppercase mb-4">
              Contact
            </h2>
            <p>
              For questions about this Privacy Policy or your personal data, contact:
            </p>
            <p className="mt-4 text-deep-navy">
              NorthStar Home Technologies, Inc.
              <br />
              5640 Memorial Ave N STE B, Stillwater, MN 55082
              <br />
              <a href="mailto:info@northstarhometech.com" className="underline">info@northstarhometech.com</a>
              <br />
              <a href="tel:6122542626" className="underline">(612) 254-2626</a>
            </p>
          </div>

          <p className="text-warm-taupe text-[14px] pt-8 border-t border-warm-taupe/20">
            See also our full{" "}
            <Link href="/terms" className="underline hover:text-slate-blue">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
