export interface PlanFeature {
  text: string;
  bold?: boolean;
}

export interface ManagementPlan {
  id: string;
  name: string;
  tier: number;
  price: string;
  annual: string;
  commitment: string;
  features: PlanFeature[];
  cta?: { label: string; href: string };
  highlighted?: boolean;
  dark?: boolean;
}

export const managementPlans: ManagementPlan[] = [
  {
    id: "standard",
    name: "Standard Installation",
    tier: 0,
    price: "Included",
    annual: "Free with any project",
    commitment: "No contract required",
    features: [
      { text: "Bespoke system and installation designs" },
      { text: "Standard business hours access (8AM–4PM, Mon–Fri) to the NHT Service Desk via text or call" },
      { text: "First-come, first-serve scheduling" },
      { text: "6-month in-house hardware warranty (hardware replacement + labor)" },
      { text: "Lifetime workmanship warranty on installation quality and programming" },
      { text: "NorthStar App access for system info, payment management, and client updates" },
      { text: "Additional work billed at $140/hour" },
    ],
  },
  {
    id: "managed",
    name: "Managed Client",
    tier: 1,
    price: "$88/mo",
    annual: "$1,056/year",
    commitment: "1-year commitment",
    highlighted: true,
    features: [
      { text: "Dedicated Managed Clients phone number (text or call)" },
      { text: "Same- or next-day priority scheduling" },
      { text: "Free daytime remote support (8AM–6PM, Mon–Fri) and Saturday (8AM–2PM)" },
      { text: "Daytime & Saturday on-site support: $140/hour (no minimum)" },
      { text: "After-hours/Sunday on-site support: $210/hour (no minimum)" },
      { text: "Advanced hardware replacement under manufacturer warranty (labor included)" },
      { text: "Enhanced App access: knowledge base, support tickets, direct feedback" },
      { text: "Annual tech review (system performance + new options)" },
      { text: "Annual on-site system update and audit" },
    ],
    cta: { label: "GET STARTED", href: "/contact" },
  },
  {
    id: "preferred",
    name: "Preferred Management",
    tier: 2,
    price: "$399/mo",
    annual: "$4,788/year",
    commitment: "1-year commitment",
    dark: true,
    features: [
      { text: "24/7 access to dedicated Service Desk phone number" },
      { text: "Guaranteed same-day scheduling (requests before 2PM)" },
      { text: "Free 24/7 remote support (including weekends)" },
      { text: "Free daytime on-site support (8AM–6PM, Mon–Fri)" },
      { text: "After-hours on-site support: $210/hour (no truck roll fee)" },
      { text: "Advanced hardware replacement with priority procurement (labor included)" },
      { text: "Full App access with priority ticket resolution" },
      { text: "Biannual tech reviews" },
      { text: "Quarterly on-site system updates and audits" },
      { text: "Preventative system monitoring with weekly status emails" },
    ],
    cta: { label: "GET STARTED", href: "/contact" },
  },
];
