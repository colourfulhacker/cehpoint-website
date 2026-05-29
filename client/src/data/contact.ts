// Canonical contact information for Cehpoint.
// Use these constants everywhere instead of hardcoding phone numbers / emails.

export const COMPANY = {
  legalName: "Cehpoint",
  shortName: "Cehpoint",
  foundingYear: 2020,
  rating: { value: 4.9, count: 500 },
  stats: {
    projects: "500+",
    industries: "25+",
    clientSatisfaction: "98%",
    demoTurnaround: "24h",
    employees: "50-100",
  },
} as const;

// Phone numbers — three real teams; never hardcode raw strings in components.
export const PHONES = {
  primary: "+91 90911 56095", // Main switchboard & sales
  investigation: "+91 73191 16415", // Cyber Crime Investigation Service
  partnerNetwork: "+91 81163 43716", // Professional Partner Network
} as const;

export const PHONES_E164 = {
  primary: "+919091156095",
  investigation: "+917319116415",
  partnerNetwork: "+918116343716",
} as const;

export const WHATSAPP = {
  primary: "https://wa.me/919091156095",
  investigation: "https://wa.me/917319116415",
  partnerNetwork: "https://wa.me/918116343716",
} as const;

// Email addresses
export const EMAILS = {
  primary: "contact@cehpoint.co.in",
  tenders: "tenders@cehpoint.co.in",
  hr: "hr@cehpoint.co.in",
  escalation: "jit.banerjee@cehpoint.co.in",
} as const;

// Office (HQ) — single source of truth
export const HQ_ADDRESS = {
  streetAddress: "Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur",
  addressLocality: "Bolpur",
  addressRegion: "West Bengal",
  postalCode: "731303",
  addressCountry: "IN",
  display: "Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur, West Bengal — 731303, India",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/cehpoint",
  twitter: "https://twitter.com/cehpoint",
} as const;

// Compliance metadata that appears on the sticky banner / footer.
export const COMPLIANCE = {
  gstin: "19ETGPB5153Q1Z5",
  iso: "ISO 9001:2015",
} as const;
