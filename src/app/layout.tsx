import type { Metadata } from "next";
import { Forum, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "NorthStar Home Technologies — Luxury Lighting & Smart Home Automation | Minneapolis, MN",
  description:
    "NorthStar designs and integrates bespoke lighting and smart home automation for luxury residences in Minneapolis and the Twin Cities. Award-winning Lutron and Ketra integration.",
  openGraph: {
    title: "NorthStar Home Technologies",
    description:
      "Luxury home automation and bespoke lighting for discerning homeowners in Minneapolis and the Twin Cities.",
    url: "https://northstarhometech.com",
    siteName: "NorthStar Home Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${forum.variable} ${nunitoSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        {/* TODO: Replace GTM-XXXXXXX with actual GTM container ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
