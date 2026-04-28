import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { OG_IMAGES, SERVICES, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "House Extension Services Dublin | Kitchen, Attic & Renovation",
  description:
    "Browse all house extension services from House Extension Dublin - kitchen extensions, attic conversions and full home renovations. Fixed-price, fully insured.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "House Extension Services Dublin",
    description:
      "Kitchen extensions, attic conversions and home renovations across Dublin and Ireland.",
    url: `${SITE_URL}/services`,
    images: OG_IMAGES,
  },
};

export default function ServicesHubPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <Header active="services" />
      <main className="pt-20 flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(breadcrumbs)}
        />

        {/* Hero */}
        <section className="bg-secondary-container py-24">
          <div className="max-w-7xl mx-auto px-8 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary font-display font-bold mb-4">
              Services
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-6">
              Our House Extension Services in Dublin
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              From kitchen extensions and attic conversions to full home
              renovations, every service we offer is designed, project-managed
              and built by our directly-employed Dublin team. Fixed-price
              quotes, fully insured, single-contract delivery.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-surface-container-lowest rounded-xl p-10 ambient-shadow border border-surface-variant/40 hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-tertiary-fixed-dim/40 border border-primary/20 flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    architecture
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {s.name}
                </h2>
                <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read more
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Inline copy */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-4xl mx-auto px-8 prose prose-lg text-on-surface-variant font-body leading-relaxed">
            <h2 className="font-display font-bold text-3xl text-on-surface mb-6">
              One contract, one project manager, one fixed price
            </h2>
            <p>
              Most house extension projects in Dublin involve two or three
              contracts pieced together &mdash; an architect, a main contractor and
              specialist trades for kitchens, electrics or roofing. We bundle
              the lot under a single fixed-price contract managed from our
              Dublin 2 office.
            </p>
            <p>
              Whether you&apos;re weighing up a kitchen extension, an attic
              conversion or a full home renovation, the same project manager
              runs your project from the free site survey to the final snag
              walk-through. That&apos;s how we keep timelines tight and avoid the
              hand-off mistakes that derail so many extension jobs.
            </p>
            <p>
              Need a different kind of work? Take a look at our{" "}
              <Link href="/areas" className="text-primary font-semibold">
                areas served
              </Link>
              ,{" "}
              <Link href="/faq" className="text-primary font-semibold">
                frequently asked questions
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary font-semibold">
                book a free site survey
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container text-on-primary py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Ready to discuss your project?
            </h2>
            <p className="font-body text-xl text-primary-fixed mb-10">
              Free site survey. Fixed-price quote. Fully insured. Mon - Sun
              8AM - 6PM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-surface text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-colors ambient-shadow"
              >
                Get Your Free Quote
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
