import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export type ServicePageProps = {
  title: string; // H1
  breadcrumb: string; // last segment in breadcrumb
  heroImage: string;
  leadParagraph: string;
  introHeading: string;
  introBody: React.ReactNode;
  atGlance: { label: string; value: string; icon: string }[];
  sections: {
    heading: string;
    body: React.ReactNode;
  }[];
  faqs: { q: string; a: string }[];
};

export default function ServicePageLayout(props: ServicePageProps) {
  return (
    <>
      <Header active="services" />
      <main className="flex-grow pt-0 md:pt-20">
        {/* HERO */}
        <header className="relative h-[480px] w-full bg-surface-container-low flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={props.title}
              className="w-full h-full object-cover"
              src={props.heroImage}
            />
            <div className="absolute inset-0 bg-on-surface/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="flex items-center text-surface-container-highest text-sm mb-6 font-label">
              <Link href="/" className="hover:text-on-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="hover:text-on-primary">Services</span>
              <span className="mx-2">/</span>
              <span className="text-on-primary font-medium">
                {props.breadcrumb}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-on-primary mb-6 leading-tight max-w-3xl">
              {props.title}
            </h1>
            <p className="text-lg text-surface-container-highest mb-8 max-w-2xl font-body leading-relaxed">
              {props.leadParagraph}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="text-on-primary px-8 py-4 rounded-lg font-label font-bold bg-gradient-to-br from-primary to-primary-container hover:shadow-[0px_20px_40px_rgba(27,27,27,0.06)] transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-surface-container-lowest/10 backdrop-blur-md text-on-primary border border-outline-variant/30 px-8 py-4 rounded-lg font-label font-bold hover:bg-surface-container-lowest/20 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                Call +353 1 230 8892
              </a>
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-display font-bold text-on-surface mb-8 leading-tight">
                {props.introHeading}
              </h2>
              <div className="prose prose-lg text-on-surface-variant font-body leading-relaxed space-y-6">
                {props.introBody}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-secondary-container rounded-2xl p-10 relative overflow-hidden">
                <h3 className="text-2xl font-display font-bold text-on-secondary-container mb-8">
                  At a Glance
                </h3>
                <ul className="space-y-6">
                  {props.atGlance.map((g) => (
                    <li key={g.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">
                          {g.icon}
                        </span>
                      </div>
                      <div>
                        <strong className="block text-on-secondary-container font-label mb-1">
                          {g.label}
                        </strong>
                        <span className="text-on-secondary-container/80 text-sm">
                          {g.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DETAIL SECTIONS */}
        <section className="py-12 bg-surface">
          <div className="max-w-7xl mx-auto px-8 space-y-20">
            {props.sections.map((s) => (
              <div
                key={s.heading}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-display font-bold text-on-surface mb-2">
                    {s.heading}
                  </h2>
                  <div className="h-1 w-16 bg-primary-container rounded-full"></div>
                </div>
                <div className="lg:col-span-7 prose prose-lg text-on-surface-variant font-body leading-relaxed space-y-4">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INLINE FAQ */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-display font-bold text-on-surface mb-4">
                Common Questions
              </h2>
              <p className="font-body text-on-surface-variant">
                Quick answers homeowners ask before they book a site visit.
              </p>
            </div>
            <div className="space-y-4 max-w-4xl">
              {props.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-surface-container-lowest rounded-xl border border-surface-variant/40 ambient-shadow overflow-hidden"
                >
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none px-6 py-5 hover:bg-surface-container-low transition-colors">
                    <span className="font-display font-semibold text-lg text-on-surface">
                      {f.q}
                    </span>
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-primary-container text-on-primary py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="font-body text-xl text-primary-fixed mb-10">
              Free site survey, fixed-price quote, fully insured. Call our
              Dublin 2 team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="bg-surface text-primary px-8 py-4 rounded-lg font-bold font-display text-lg hover:bg-surface-container-low transition-colors ambient-shadow"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-transparent border-2 border-surface text-surface px-8 py-4 rounded-lg font-bold font-display text-lg hover:bg-surface/10 transition-colors flex items-center justify-center space-x-2 gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                <span>+353 1 230 8892</span>
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
