import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { OG_IMAGES, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About House Extension Dublin | Trusted Extension Builders",
  description:
    "Meet the team behind House Extension Dublin - experienced, insured house extension builders serving Dublin 2 and all of Ireland. Free consultations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About House Extension Dublin",
    description:
      "Trusted extension builders Dublin since 2010. Directly-employed team, in-house design.",
    url: `${SITE_URL}/about`,
    images: OG_IMAGES,
  },
};

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);
  return (
    <>
      <Header active="about" />
      <main className="pt-20 flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(breadcrumbs)}
        />
        {/* Hero */}
        <section className="bg-secondary-container py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-primary font-display font-bold mb-4">
                About Us
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-6">
                About House Extension Dublin
              </h1>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                Trusted, fully insured extension builders Dublin homeowners
                have relied on since 2010. We design, manage and build kitchen
                extensions, attic conversions and full renovations across
                Dublin and Ireland from our Dublin 2 head office.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 prose prose-lg text-on-surface-variant font-body leading-relaxed space-y-6">
              <h2 className="font-display text-4xl font-bold text-on-surface mb-4">
                Our Story
              </h2>
              <p>
                House Extension Dublin was founded in 2010 by a small team of
                Dublin-based architectural designers and trades. Fifteen years
                later, we&apos;re still based in Grand Canal Dock &mdash; just a
                few minutes from the city centre &mdash; and we&apos;ve delivered
                over 400 kitchen extensions, attic conversions and full home
                renovations across Dublin and the surrounding counties.
              </p>
              <p>
                We are a directly-employed team of designers, project managers
                and tradespeople. Nothing is subcontracted to a stranger. Every
                project is run by a named manager who is contactable directly
                from the day of the site survey to the final handover.
              </p>
              <p>
                Our reputation as experienced extension builders Dublin
                homeowners trust is built on three things: a genuinely fixed
                price, a written programme we hit, and a finished room you can
                show off the day after handover.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-variant/40 ambient-shadow">
                <h3 className="font-display font-bold text-xl mb-4">
                  Accreditations
                </h3>
                <ul className="space-y-3 text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    CIF Member
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    CIRI Registered Contractor
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    HomeBond Member
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    RECI / Safe Electric registered
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      shield
                    </span>
                    Public liability and contractors all-risks insured
                  </li>
                </ul>
              </div>
              <div className="bg-secondary-container rounded-xl p-8">
                <h3 className="font-display font-bold text-xl mb-4">
                  Visit Us
                </h3>
                <address className="not-italic text-on-secondary-container leading-relaxed">
                  House Extension Dublin
                  <br />
                  77 Sir John Rogerson&apos;s Quay,
                  <br />
                  Grand Canal Dock,
                  <br />
                  Dublin 2, D02 VK60
                  <br />
                  <a
                    href="tel:+35312308892"
                    className="text-primary font-semibold mt-3 inline-block"
                  >
                    +353 1 230 8892
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container text-on-primary py-20 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Talk to Dublin&apos;s Trusted Extension Builders
            </h2>
            <p className="font-body text-lg text-primary-fixed mb-8">
              Free site survey. Fixed-price quote. Fully insured.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-surface text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-colors ambient-shadow"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
