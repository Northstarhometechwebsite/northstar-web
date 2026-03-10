export const COMPANY = {
  name: "NorthStar Home Technologies",
  legalName: "NorthStar Home Technologies, Inc.",
  tagline: "Tailored technology and lighting. Elevated living.",
  phone: "(612) 254-2626",
  email: "info@northstarhometech.com",
  website: "https://northstarhometech.com",
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
  { label: "ABOUT", href: "/about" },
  { label: "CONNECT", href: "/connect" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "lighting",
    title: "Lighting Design",
    description:
      "Bespoke lighting that follows circadian rhythms, enhances architecture, and transforms spaces. Ketra tunable lighting, Lutron control, and architectural fixtures.",
    href: "/services/lighting",
    icon: "lighting",
  },
  {
    id: "automation",
    title: "Home Automation",
    description:
      "Whole-home control through intuitive interfaces. Josh AI voice automation, one-touch scenes, scheduling, and remote access.",
    href: "/services",
    icon: "automation",
  },
  {
    id: "av",
    title: "Audio & Video",
    description:
      "Distributed audio, dedicated home theaters with immersive sound, hidden speakers, and 4K/8K video distribution throughout.",
    href: "/services",
    icon: "av",
  },
  {
    id: "shades",
    title: "Motorized Shades",
    description:
      "Lutron Palladiom and premium shade systems integrated with lighting scenes for automatic daylight harvesting.",
    href: "/services",
    icon: "shades",
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    description:
      "Enterprise-grade networking, structured wiring, and fiber optic backbone. Reliable coverage for every device, every room.",
    href: "/services",
    icon: "networking",
  },
  {
    id: "security",
    title: "Security & Surveillance",
    description:
      "Integrated security systems, high-definition surveillance, access control, and smart locks with a privacy-first approach.",
    href: "/services",
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
