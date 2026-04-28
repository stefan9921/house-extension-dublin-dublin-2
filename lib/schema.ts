// JSON-LD schema generators. Centralised so every page emits consistent NAP/geo.

import { BUSINESS, SITE_URL } from "./site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    image: `${SITE_URL}/images/og-image.jpg`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "EUR EUR EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dublin" },
      { "@type": "City", name: "Drogheda" },
      { "@type": "AdministrativeArea", name: "County Dublin" },
      { "@type": "AdministrativeArea", name: "County Louth" },
    ],
    foundingDate: BUSINESS.founded,
    knowsAbout: [
      "House extensions",
      "Kitchen extensions",
      "Attic conversions",
      "Home renovations",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_URL}/#localbusiness` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${opts.url}#service`,
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dublin" },
      { "@type": "AdministrativeArea", name: "County Dublin" },
      { "@type": "AdministrativeArea", name: "Ireland" },
    ],
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function jsonLd(obj: unknown) {
  return {
    __html: JSON.stringify(obj).replace(/</g, "\\u003c"),
  };
}
