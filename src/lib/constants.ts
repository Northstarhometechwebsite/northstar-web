export const COMPANY = {
  name: "NorthStar Home Technologies",
  legalName: "NorthStar Home Technologies, Inc.",
  tagline: "Tailored technology and lighting. Elevated living.",
  phone: "(612) 254-2626",
  email: "info@northstarhometech.com",
  website: "https://www.northstarhometech.com",
  portalUrl: "https://portal.northstarhometech.com/login",
  founded: 2015,
  founder: "Chris Hayes",
  addresses: {
    stillwater: {
      street: "5640 Memorial Ave N STE B",
      city: "Stillwater",
      state: "MN",
      zip: "55082",
      label: "Headquarters",
    },
    minneapolis: {
      street: "1624 W Lake St",
      city: "Minneapolis",
      state: "MN",
      zip: "55408",
      label: "Design Studio",
    },
  },
  hours: "Monday – Friday, 8AM – 5PM",
} as const;

export const NAV_LINKS = [
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "STUDIO", href: "/studio" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect" },
  { label: "Contact", href: "/contact" },
] as const;

export const COLORS = {
  cream: "#F2EFE6",
  deepNavy: "#202839",
  slateBlue: "#4C5E6E",
  warmTaupe: "#9C9989",
  warmGold: "#C9A96E",
} as const;

export const SERVICES = [
  {
    id: "retrofit-automation",
    title: "Smart Home Retrofit",
    description: "Transform existing homes into smart homes without major construction or disruption.",
    href: "/services/retrofit-automation",
    icon: "retrofit",
  },
  {
    id: "system-takeover",
    title: "System Takeover & Rescue",
    description: "Take over and fix failing smart home systems from previous installers.",
    href: "/services/system-takeover",
    icon: "takeover",
  },
  {
    id: "home-automation",
    title: "Home Automation",
    description: "Whole-home control through intuitive interfaces with Josh.ai voice automation.",
    href: "/services/home-automation",
    icon: "automation",
  },
  {
    id: "home-theater",
    title: "Home Theater",
    description: "Dedicated theaters and entertainment spaces with immersive audio and video.",
    href: "/services/home-theater",
    icon: "theater",
  },
  {
    id: "lutron-lighting",
    title: "Lutron Lighting",
    description: "Professional Lutron HomeWorks QSX and RadioRA 3 lighting control systems.",
    href: "/services/lutron-lighting",
    icon: "lighting",
  },
  {
    id: "josh-ai",
    title: "Josh.ai Voice Control",
    description: "Privacy-focused luxury voice automation platform for custom homes.",
    href: "/services/josh-ai",
    icon: "voice",
  },
  {
    id: "motorized-shades",
    title: "Motorized Shades",
    description: "Lutron Palladiom and premium shade systems integrated with lighting scenes.",
    href: "/services/motorized-shades",
    icon: "shades",
  },
  {
    id: "networking",
    title: "Networking",
    description: "Enterprise-grade Ubiquiti networking infrastructure for connected homes.",
    href: "/services/networking",
    icon: "networking",
  },
  {
    id: "security",
    title: "Security & Surveillance",
    description: "Professional security systems with IC Realtime cameras and DSC monitoring.",
    href: "/services/security",
    icon: "security",
  },
] as const;

export const TIMELINE = [
  { year: "2015", event: "NorthStar Home Technologies founded by Chris Hayes" },
  { year: "2017", event: "First Josh AI dealer in the Midwest · One of the original 60 Ketra dealers nationwide" },
  { year: "2020", event: "Lutron Excellence Award for Best Ketra System" },
  { year: "2022", event: "Josh AI President's Club and Chairman Accolade" },
  { year: "2024", event: "Opens 2,000 sq ft Design Studio in Uptown Minneapolis" },
] as const;
