import React from 'react';

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.northstarhometech.com/#organization",
    name: "NorthStar Home Technologies",
    alternateName: ["NorthStar Home Technologies, Inc.", "NorthStar"],
    url: "https://www.northstarhometech.com",
    logo: "https://www.northstarhometech.com/favicon.ico",
    foundingDate: "2015",
    founder: {
      "@type": "Person",
      name: "Chris Hayes"
    },
    description: "Luxury home automation and smart lighting integrator serving Minneapolis and the Twin Cities.",
    areaServed: ["Minneapolis", "Twin Cities", "Minnesota"],
    serviceType: ["Home Automation", "Lighting Control", "Home Theater", "Motorized Shades", "Networking", "Security"],
    brand: ["Lutron", "Ketra", "Josh.ai", "Sonos"],
    telephone: "(612) 254-2626",
    email: "info@northstarhometech.com"
  };

  const designStudioSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAutomationCompany", "LocalBusiness"],
    "@id": "https://www.northstarhometech.com/#designstudio",
    name: "NorthStar Home Technologies — Design Studio",
    description: "Luxury home automation and smart lighting integrator serving Minneapolis and the Twin Cities.",
    url: "https://www.northstarhometech.com",
    telephone: "(612) 254-2626",
    email: "info@northstarhometech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1624 W Lake St",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      postalCode: "55408",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.9478,
      longitude: -93.2888
    },
    areaServed: ["Minneapolis", "Twin Cities", "Minnesota"],
    serviceType: ["Home Automation", "Lighting Control", "Home Theater", "Motorized Shades", "Networking", "Security"],
    brand: ["Lutron", "Ketra", "Josh.ai"],
    openingHours: "Mo-Fr 08:00-17:00",
    parentOrganization: {
      "@id": "https://www.northstarhometech.com/#organization"
    }
  };

  const stillwaterOfficeSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAutomationCompany", "LocalBusiness"],
    "@id": "https://www.northstarhometech.com/#stillwateroffice",
    name: "NorthStar Home Technologies — Stillwater",
    description: "Luxury home automation and smart lighting integrator serving Minneapolis and the Twin Cities.",
    url: "https://www.northstarhometech.com",
    telephone: "(612) 254-2626",
    email: "info@northstarhometech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5640 Memorial Ave N STE B",
      addressLocality: "Stillwater",
      addressRegion: "MN",
      postalCode: "55082",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.0569,
      longitude: -92.8060
    },
    areaServed: ["Minneapolis", "Twin Cities", "Minnesota"],
    serviceType: ["Home Automation", "Lighting Control", "Home Theater", "Motorized Shades", "Networking", "Security"],
    brand: ["Lutron", "Ketra", "Josh.ai"],
    openingHours: "Mo-Fr 08:00-17:00",
    parentOrganization: {
      "@id": "https://www.northstarhometech.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(designStudioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stillwaterOfficeSchema) }}
      />
    </>
  );
}