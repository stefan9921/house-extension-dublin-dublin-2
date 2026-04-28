// Shared site-wide constants. Single source of truth for routes, NAP and SEO defaults.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://houseextensiondublin.ie";

export const BUSINESS = {
  name: "House Extension Dublin",
  legalName: "House Extension Dublin",
  phone: "+35312308892",
  phoneDisplay: "+353 1 230 8892",
  email: "info@houseextensiondublin.ie",
  streetAddress: "77 Sir John Rogerson's Quay, Grand Canal Dock",
  addressLocality: "Dublin",
  addressRegion: "Co. Dublin",
  postalCode: "D02 VK60",
  addressCountry: "IE",
  // Approx geo for Grand Canal Dock, Dublin 2
  latitude: 53.343888,
  longitude: -6.235556,
  hours: "Mon - Sun 8AM - 6PM",
  founded: "2010",
};

export const STATIC_ROUTES: string[] = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/services",
  "/areas",
];

export const SERVICES: Array<{
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
}> = [
  {
    slug: "kitchen-extension",
    name: "Kitchen Extensions",
    shortDesc:
      "Open-plan kitchen extensions with rear, side return and glass-roof designs across Dublin.",
    description:
      "Bespoke kitchen extensions for Dublin homes. Single-storey rear, side-return, glass-roof and bi-fold designs. Fixed-price quotes, full project management.",
  },
  {
    slug: "attic-conversion",
    name: "Attic Conversions",
    shortDesc:
      "Velux, dormer and hip-to-gable attic conversions adding bedrooms, ensuites and home offices.",
    description:
      "Bedroom, ensuite and home-office attic conversions across Dublin. Velux, dormer, hip-to-gable and bungalow upgrades, plus full timber-frame second-storey extensions.",
  },
  {
    slug: "home-renovations",
    name: "Home Renovations",
    shortDesc:
      "Full home renovations - rewires, replumbs, layout changes and combined extensions.",
    description:
      "Full Dublin home renovations - rewires, replumbs, structural layout changes and combined extension + renovation packages on a single fixed-price contract.",
  },
];

export const AREAS: Array<{
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
}> = [
  {
    slug: "drogheda",
    name: "Drogheda",
    shortDesc:
      "House extensions, attic conversions and renovations across Drogheda and Co. Louth.",
    description:
      "House Extension Dublin serves Drogheda and Co. Louth from our Dublin 2 head office, just 50 km down the M1. Kitchen extensions, attic conversions and full home renovations with the same fixed-price, fully-insured service we deliver across Dublin.",
  },
];

export const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Modern Dublin house extension by House Extension Dublin",
};

// Re-usable openGraph image array for per-page metadata. Spread into
// `openGraph.images` so individual pages keep the canonical OG asset.
export const OG_IMAGES = [
  {
    url: OG_IMAGE.url,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    alt: OG_IMAGE.alt,
  },
];
