import type { Metadata } from "next";
import { Forum, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SchemaMarkup from "@/components/SchemaMarkup";

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
  metadataBase: new URL('https://www.northstarhometech.com'),
  title: "NorthStar Home Technologies — Luxury Lighting & Smart Home Automation | Minneapolis, MN",
  description:
    "NorthStar designs and integrates bespoke lighting and smart home automation for luxury residences in Minneapolis and the Twin Cities. Award-winning Lutron and Ketra integration.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "NorthStar Home Technologies",
    description:
      "Luxury home automation and bespoke lighting for discerning homeowners in Minneapolis and the Twin Cities.",
    url: "https://www.northstarhometech.com",
    siteName: "NorthStar Home Technologies",
    locale: "en_US",
    type: "website",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
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
        <SchemaMarkup />
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        
        {/* RB2B Tracking Pixel */}
        <Script
          id="rb2b-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("E63P0HZQ8XOW");`
          }}
        />
      </body>
    </html>
  );
}
