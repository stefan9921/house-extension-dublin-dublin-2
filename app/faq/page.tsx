import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "House Extension FAQ Dublin | Costs, Planning & Timelines",
  description:
    "Answers to the most common questions about house extensions in Dublin and Ireland - costs, planning permission, timelines, sizes and more.",
  alternates: { canonical: "/faq" },
};

const faqGroups: { title: string; faqs: { q: string; a: string }[] }[] = [
  {
    title: "Cost",
    faqs: [
      {
        q: "Can I build an extension for 20k?",
        a: "EUR 20,000 is below current market cost for a habitable house extension in Ireland. Realistically you'd cover groundworks and a small shell at that price - around 8-10 sqm of unfinished structure. A fully finished single-storey extension in Dublin typically starts at EUR 50,000 for 15-20 sqm. We always quote a fully fitted, fully decorated, fixed-price number so you know exactly what you'll get.",
      },
      {
        q: "Can you do an extension for 30k?",
        a: "EUR 30,000 will deliver a small structural extension shell of around 12-15 sqm, but rarely a finished, fitted-out room in Dublin. To stretch the budget, we suggest combining the extension with simpler internal renovation works rather than a high-spec finish. A free site survey gives you a real fixed-price number for your specific home.",
      },
      {
        q: "How much do extensions cost in Dublin?",
        a: "Budget EUR 2,400 to EUR 3,200 per square metre fully fitted in Dublin. A 30 sqm rear kitchen extension typically lands at EUR 75,000 to EUR 100,000; a 40 sqm extension is EUR 100,000 to EUR 140,000. Steel frames, glass roofs and high-end kitchens push numbers higher.",
      },
      {
        q: "How much do extensions cost in Ireland?",
        a: "Outside Dublin, expect EUR 2,200 to EUR 2,900 per square metre fully fitted - around 10-15% lower than central Dublin pricing. We work across Leinster from our Dublin 2 base, including Drogheda, Co. Louth and the wider M1 corridor.",
      },
      {
        q: "How much does a 2 story extension cost Ireland?",
        a: "A two-storey extension in Ireland typically costs EUR 130,000 to EUR 220,000 for 30-50 sqm of new floor area. Per-sqm rate is slightly lower than single-storey because the roof and foundations are spread over two floors.",
      },
      {
        q: "How much does a 20 square metre extension cost in Ireland?",
        a: "A 20 sqm extension in Ireland is typically EUR 55,000 to EUR 75,000 turnkey, including kitchen units if it's a rear kitchen extension, flooring, decoration and electrics.",
      },
      {
        q: "How much does a 40m2 extension cost in Ireland?",
        a: "A 40 sqm extension - the largest single-storey rear extension allowed under exempted development - costs EUR 100,000 to EUR 140,000 in Ireland depending on glazing, finishes and any kitchen reconfiguration.",
      },
      {
        q: "How much does a garage conversion cost in Ireland?",
        a: "A typical attached-garage conversion to a habitable room in Ireland costs EUR 18,000 to EUR 35,000. That includes new floor build-up, insulation, plastering, electrics, heating extension and a window in place of the garage door.",
      },
      {
        q: "How much does a garage conversion cost on average?",
        a: "On average around EUR 22,000 to EUR 28,000 in Dublin for a single-bay attached garage conversion - assuming the existing structure is sound and no underpinning is required.",
      },
      {
        q: "How much does a small extension cost in Ireland?",
        a: "A small 15-20 sqm rear extension in Ireland generally costs between EUR 50,000 and EUR 75,000 fully fitted. Side returns of 8-12 sqm can come in slightly cheaper at EUR 40,000-EUR 55,000.",
      },
      {
        q: "How much does it cost to build a house extension in Ireland?",
        a: "EUR 2,400 to EUR 3,200 per square metre for a finished house extension in Ireland - so a 30 sqm extension is normally EUR 75,000 to EUR 100,000. We supply a fixed-price contract for that number.",
      },
      {
        q: "How much does it cost to do a rear extension?",
        a: "A 30 sqm rear extension in Dublin is typically EUR 75,000 to EUR 105,000 turnkey. Glass-roof or large bi-fold designs add EUR 8,000 to EUR 15,000 to that range.",
      },
      {
        q: "How much does it cost to extend a house in Dublin?",
        a: "Budget EUR 2,400 to EUR 3,200 per square metre for a Dublin house extension. The total depends entirely on size and finish - we always quote a fully fitted fixed price.",
      },
      {
        q: "How much does it cost to extend a house in Ireland?",
        a: "EUR 2,200 to EUR 3,200 per square metre for a fully finished house extension in Ireland. Dublin sits at the upper end; rural Leinster is closer to the lower end.",
      },
      {
        q: "How much does it cost to have an extension on a house?",
        a: "For a typical 30 sqm finished single-storey rear extension on a Dublin house, expect EUR 75,000 to EUR 105,000. Smaller side-returns start at EUR 50,000.",
      },
      {
        q: "How much for a 20 square meter extension?",
        a: "A 20 sqm extension fully fitted in Ireland costs around EUR 55,000 to EUR 75,000. Side-return 20 sqm projects can be slightly cheaper because of simpler structure.",
      },
      {
        q: "How much for a kitchen extension in Ireland?",
        a: "A typical 30-40 sqm kitchen extension in Ireland costs EUR 80,000 to EUR 130,000 turnkey, including kitchen units, flooring and decoration. Smaller side-return kitchen extensions start around EUR 55,000.",
      },
      {
        q: "How much is a 4 metre extension?",
        a: "A 4 metre rear extension - typically about 25-30 sqm depending on the width of the house - costs around EUR 70,000 to EUR 95,000 fully fitted in Dublin.",
      },
      {
        q: "How much roughly is a 2 story extension?",
        a: "Roughly EUR 2,800 to EUR 3,400 per square metre fully fitted in Dublin. A 35 sqm two-storey rear extension would land around EUR 105,000 to EUR 130,000.",
      },
    ],
  },
  {
    title: "Planning",
    faqs: [
      {
        q: "Do you need planning permission for a Shomera?",
        a: "A Shomera-style garden room under 25 sqm is typically exempt from planning permission in Ireland, provided it sits in the rear garden, doesn't exceed boundary heights and isn't used as habitable sleeping accommodation. We always confirm exemption in writing before quoting any garden-room project.",
      },
      {
        q: "Do you need planning permission to convert a garage in Ireland?",
        a: "Most garage conversions in Ireland are exempt from planning if the garage is attached, the use stays residential and the external appearance is maintained. Detached garages or layout changes that affect the front facade may need full permission.",
      },
      {
        q: "How big can a single storey extension be under permitted development?",
        a: "Up to 40 sqm to the rear under exempted development in Ireland, subject to height (4m flat / 5m pitched), boundary distances and the size of any existing extensions. We confirm exemption in writing before tools are lifted.",
      },
      {
        q: "How much can I extend my house without planning permission in Ireland?",
        a: "Up to 40 sqm to the rear of a house under exempted development - subject to height, boundary and existing-extension rules. Two-storey rear extensions are typically capped at 20 sqm under exempted development.",
      },
      {
        q: "How much rear extension is allowed?",
        a: "Most semi-detached and terraced houses can extend 40 sqm to the rear under exempted development, with a single-storey height cap of 4 metres (flat roof) or 5 metres (pitched). Two-storey rear extensions normally need full planning permission.",
      },
    ],
  },
  {
    title: "Timelines",
    faqs: [
      {
        q: "How long does a rear extension take?",
        a: "Most rear extensions in Dublin take 12 to 16 weeks from groundworks to handover. Smaller 15-20 sqm builds finish in 10 weeks; complex steel-frame or glass-roof extensions can run to 18 weeks.",
      },
    ],
  },
];

export default function FaqPage() {
  // Build FAQ schema (for SEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    ),
  };

  return (
    <>
      <Header active="faq" />
      <main className="pt-20 flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Hero */}
        <section className="bg-secondary-container py-24">
          <div className="max-w-7xl mx-auto px-8 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary font-display font-bold mb-4">
              FAQ
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-6">
              House Extension FAQ
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              Costs, planning permission, timelines, sizes and the
              specifics&mdash;answered for Dublin homeowners.
            </p>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="py-24 max-w-4xl mx-auto px-8 space-y-16">
          {faqGroups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display font-bold text-3xl text-on-surface mb-6">
                {g.title}
              </h2>
              <div className="space-y-3">
                {g.faqs.map((f) => (
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
          ))}
        </section>

        {/* CTA */}
        <section className="bg-primary-container text-on-primary py-20 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Have a Question We Haven&apos;t Answered?
            </h2>
            <p className="font-body text-lg text-primary-fixed mb-8">
              Call our Dublin 2 office or send an enquiry &mdash; we reply within
              one working day.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-surface text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-colors ambient-shadow"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
