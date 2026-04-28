import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { AREAS, OG_IMAGES, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Cover | House Extension Dublin & Co. Louth",
  description:
    "House Extension Dublin builds across Dublin city, Co. Dublin and the M1 corridor up to Drogheda and Co. Louth. See dedicated area pages and full coverage details.",
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Areas We Cover | House Extension Dublin",
    description:
      "Dublin city, Co. Dublin and Drogheda / Co. Louth - kitchen extensions, attic conversions and home renovations.",
    url: `${SITE_URL}/areas`,
    images: OG_IMAGES,
  },
};

const otherAreasMentioned = [
  "Dublin 2",
  "Dublin 4",
  "Dublin 6",
  "Tallaght",
  "Swords",
  "Malahide",
  "Blackrock",
];

export default function AreasHubPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas" },
  ]);

  return (
    <>
      <Header active="areas" />
      <main className="pt-20 flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(breadcrumbs)}
        />

        {/* Hero */}
        <section className="bg-secondary-container py-24">
          <div className="max-w-7xl mx-auto px-8 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary font-display font-bold mb-4">
              Areas
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-6">
              Areas We Cover
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              We build house extensions across Dublin city, Co. Dublin and the
              M1 corridor north into Co. Louth. Below you&apos;ll find dedicated
              pages for the towns we visit most regularly &mdash; and the wider
              Dublin districts where the bulk of our city projects sit.
            </p>
          </div>
        </section>

        {/* Featured area pages */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <h2 className="font-display font-bold text-3xl text-on-surface mb-10">
            Dedicated area pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="group block bg-surface-container-lowest rounded-xl p-10 ambient-shadow border border-surface-variant/40 hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-tertiary-fixed-dim/40 border border-primary/20 flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {a.name}
                </h3>
                <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                  {a.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  See {a.name} page
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Dublin coverage */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-4xl mx-auto px-8 prose prose-lg text-on-surface-variant font-body leading-relaxed">
            <h2 className="font-display font-bold text-3xl text-on-surface mb-6">
              Dublin city &amp; county coverage
            </h2>
            <p>
              From our Dublin 2 head office on Sir John Rogerson&apos;s Quay,
              Grand Canal Dock, our crews reach every Dublin postcode. Recent
              projects sit in {otherAreasMentioned.join(", ")} and beyond, but
              we&apos;re happy to look at any Dublin city or Co. Dublin
              address.
            </p>
            <p>
              For our full Dublin citywide service offering &mdash; including
              kitchen extensions, attic conversions, contemporary modern house
              extensions and full home renovations &mdash; visit our{" "}
              <Link href="/" className="text-primary font-semibold">
                homepage
              </Link>{" "}
              or browse{" "}
              <Link href="/services" className="text-primary font-semibold">
                services
              </Link>
              .
            </p>
            <h3 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
              Dublin districts we work in
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-none p-0">
              {otherAreasMentioned.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container text-on-primary py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Not sure if we cover your area?
            </h2>
            <p className="font-body text-xl text-primary-fixed mb-10">
              Drop us your postcode &mdash; we usually confirm coverage and a
              free site-survey time slot the same day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-surface text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-colors ambient-shadow"
              >
                Check Coverage
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-transparent border-2 border-surface text-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface/10 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                +353 1 230 8892
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
