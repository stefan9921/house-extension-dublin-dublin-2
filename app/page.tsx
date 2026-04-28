import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title:
    "House Extension Dublin | Kitchen, Attic & Home Extensions Ireland",
  description:
    "House Extension Dublin builds kitchen extensions, attic conversions and home renovations across Dublin and Ireland. Free quotes, fixed prices, fully insured. Call +353 1 230 8892.",
  alternates: { canonical: "/" },
};

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCzVhGi1fubwcbdj7Xn2THN9Jzy2bJE6HLhtT3GBdcY2Swq2G9Rh4OYK8YfWnjRoYauYVjca0x-owOseBPpl61k2osFM5Asz_DIKBgt-w0adZcfEl_W9SMGsKJ-QZvNaTaSF_EkopxwsCr3YR3lfpeWFzEyzErpsdemHIChG1kKgTaR2rvjYAiFvFYAtpoeWvGnmr8P_85iqcjGfQnfAe46IjbRPoi92hUYo0mJhR3Xyths2n72eoP2do0mD0DG-uMd-2Rz-YarMpg";

const kitchenImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAotoQZFPNHQgUIjtjD0NWVNbn_iBE5NfGtU8Efu4JmOYmjbQKpQYQWf0Ns0zvp8Xd1Yv_K3h3PfObO8wGldV_xavqNWVWnugXrdIiJcKxzShwKq7OobLOouc7_6npvn-yCMZuwAw3ovs1jxZfNhJz9jz_u9SKCxpunoAJhQx28iKgh20OuzSsdFOQSLaufhRFzFwSXHtrohOosC-GE-zuTSPucQwfPNhyu8dVOfaQvaf2LHBwdXuVwA7348eri19XA0_wbZuC2e8A";
const atticImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSEjO3FuF7ERJ97SUNsO3AadnL_z6WuNEMYx60XLFsuQuEA72E6OlNsnGbbvvKvz5XeWjE7u9pLOGFvtA1Wsfsoa7BzfK34HPYVQNgq0E4hU-ZjeCmfBpk07MZRAbTBqpSG-voeoroFp9sCxtZ6d-aPcdSRZYOfk_9K6oaK5-WYlVBqgfr0zAsVGb_K3MCmVP2vmQGpeMnDQdAbblaNI4dDFAr_nhgR12kx5eGmUXRtHKBUi_6aPLj21bwLGczKQDMP_92avAjFgo";
const renovImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTzzaiAtDgCs6PD6NvrCt27fmmo3oIL2mWNW3GkzXCYIxpOk3RTRmKJSwK4fTArT9RJeK-sc-cp3M_F-AQdYo1fnA5OTBXe_emKiFqG45um8TSVP7fjy8KfAm4GWUM_4oBz_6oUIJ_ukSGMuLvwG6Dj02-YlRRVs-hpt93wCWpfElLQx-SFKmw9lEBJ-xnHhNgI-3GfzZUlDIHS-QhmnDqcyBROPTrpUjpWw8F4Sm7cc887h_RzcL1JR0mJYkSdgLB6ZmLu-_4mU4";

export default function HomePage() {
  return (
    <>
      <Header active="home" />
      <main className="flex-grow pt-0 md:pt-20">
        {/* 1. HERO */}
        <section className="relative h-[819px] min-h-[600px] max-h-[720px] flex items-center justify-center overflow-hidden bg-inverse-surface">
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Stunning contemporary Dublin home with a modern glass extension at sunset"
              className="w-full h-full object-cover object-center"
              src={heroImage}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col items-center text-center mt-12 md:mt-0">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[64px] leading-tight text-white mb-6 max-w-4xl tracking-tight">
              Award-Winning House Extensions in Dublin
            </h1>
            <p className="font-body text-lg md:text-[22px] text-white/90 max-w-3xl mb-10 leading-relaxed font-light">
              Kitchen extensions, attic conversions and full home renovations
              across Dublin and Ireland. Free quotes. Fixed prices. Fully
              insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Get Free Quote
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Call +353 1 230 8892
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-white/80 text-sm font-medium tracking-wide">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  verified
                </span>
                Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  workspace_premium
                </span>
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  architecture
                </span>
                Free Site Survey
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  request_quote
                </span>
                Fixed-Price Quotes
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST BAND */}
        <section className="bg-surface-container-lowest py-8 border-b border-surface-variant/20">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-display font-bold text-2xl tracking-tighter text-on-surface-variant">
              CIF MEMBER
            </div>
            <div className="font-display font-black text-3xl tracking-widest text-on-surface-variant">
              CIRI
            </div>
            <div className="font-display font-bold text-2xl tracking-tight text-on-surface-variant italic">
              HomeBond
            </div>
            <div className="font-display font-semibold text-2xl tracking-[0.2em] text-on-surface-variant">
              RIAI
            </div>
          </div>
        </section>

        {/* 3. SERVICES OVERVIEW */}
        <section className="py-24 bg-surface max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-6">
              Our House Extension Services in Dublin
            </h2>
            <div className="h-1 w-20 bg-primary-container rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                href: "/services/kitchen-extension",
                title: "Kitchen Extensions",
                desc: "Expand your living space with bespoke kitchen extensions designed for modern family life and seamless indoor-outdoor living.",
                icon: "countertops",
                img: kitchenImg,
                offsetCls: "mt-0 md:mt-0",
              },
              {
                href: "/services/attic-conversion",
                title: "Attic Conversions",
                desc: "Unlock the hidden potential in your roof space. From master suites to home offices, we maximize every inch of your home.",
                icon: "roofing",
                img: atticImg,
                offsetCls: "mt-0 md:mt-12",
              },
              {
                href: "/services/home-renovations",
                title: "Home Renovations",
                desc: "Complete structural overhauls and internal reconfigurations. We handle complex projects from foundation to finishing touches.",
                icon: "handyman",
                img: renovImg,
                offsetCls: "mt-0 md:mt-24",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group block relative bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow transition-transform duration-300 hover:-translate-y-2 ${card.offsetCls}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={card.img}
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim/30 flex items-center justify-center mb-6 border border-primary/20">
                    <span className="material-symbols-outlined text-primary">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3 text-on-surface group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="py-24 bg-secondary-container">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-on-surface tracking-tight mb-4">
                Why Trust Us With Your Home?
              </h2>
              <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
                Building excellence into every structural beam and finishing
                detail.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                {
                  icon: "design_services",
                  title: "Modern Design Expertise",
                  desc: "We specialize in contemporary architectural aesthetics that complement traditional Irish homes.",
                },
                {
                  icon: "price_check",
                  title: "Fixed-Price Quotes",
                  desc: "No hidden costs. Detailed, transparent pricing before any tools are lifted.",
                },
                {
                  icon: "security",
                  title: "Fully Insured & Certified",
                  desc: "Comprehensive coverage and compliance with all Irish building regulations.",
                },
                {
                  icon: "map",
                  title: "15+ Years Across Dublin",
                  desc: "Deep local knowledge of Dublin planning permissions and specific neighborhood requirements.",
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim flex items-center justify-center mb-6 border-2 border-primary shadow-sm">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {feat.icon}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3 text-on-surface">
                    {feat.title}
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. RECENT PROJECTS GALLERY (Dublin areas mentioned per site plan) */}
        <section className="py-24 bg-surface max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-6">
              Recent Dublin Projects
            </h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Modern house extensions and contemporary house extensions across
              Dublin 2, Dublin 4, Dublin 6, Tallaght, Swords, Malahide and
              Blackrock. Every project is designed and managed in-house.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { area: "Dublin 2", img: kitchenImg },
              { area: "Dublin 4", img: atticImg },
              { area: "Dublin 6", img: renovImg },
              { area: "Tallaght", img: kitchenImg },
              { area: "Swords", img: atticImg },
              { area: "Malahide", img: renovImg },
              { area: "Blackrock", img: kitchenImg },
              { area: "Drogheda", img: atticImg },
            ].map((p) => (
              <div
                key={p.area}
                className="relative aspect-square rounded-xl overflow-hidden ambient-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`House extension project in ${p.area}`}
                  className="w-full h-full object-cover"
                  src={p.img}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="text-white font-display font-semibold text-sm">
                    {p.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PROCESS */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-6">
                Our Process
              </h2>
              <div className="h-1 w-20 bg-primary-container rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Free Site Survey",
                  desc: "We visit your Dublin home, take detailed measurements and discuss your vision.",
                },
                {
                  step: "02",
                  title: "Design & Quote",
                  desc: "Architectural drawings, fixed-price quote and a clear timeline before any tools are lifted.",
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "Our in-house team builds with weekly progress updates and zero subcontracted surprises.",
                },
                {
                  step: "04",
                  title: "Handover",
                  desc: "Final walk-through, snag list, certificates and a 12-month workmanship guarantee.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow border border-surface-variant/40"
                >
                  <div className="font-display font-black text-5xl text-primary-container mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. INLINE FAQ (cost-focused) */}
        <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                Quick answers to the cost questions Dublin homeowners ask us
                most.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-primary font-semibold"
              >
                See all 25 FAQs
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  q: "How much do extensions cost in Dublin?",
                  a: "A standard single-storey kitchen extension in Dublin typically ranges from EUR 2,400 to EUR 3,200 per square metre depending on finish level and groundworks. We give a fixed price after the free site survey - no surprises mid-build.",
                },
                {
                  q: "How much does a small extension cost in Ireland?",
                  a: "A small 15-20 sqm rear extension in Ireland generally costs between EUR 50,000 and EUR 75,000 fully fitted. Glass-roof or steel-frame designs sit at the higher end of that range.",
                },
                {
                  q: "How much for a kitchen extension in Ireland?",
                  a: "A typical 30-40 sqm kitchen extension in Ireland costs EUR 80,000 to EUR 130,000 turnkey, including kitchen units, flooring and decoration. Smaller side-return extensions start around EUR 55,000.",
                },
                {
                  q: "How much can I extend my house without planning permission in Ireland?",
                  a: "Under exempted development you can typically extend up to 40 sqm to the rear of a house in Ireland without planning permission - subject to height, boundary and existing-extension rules. We confirm exemption in writing for every project.",
                },
                {
                  q: "How much rear extension is allowed?",
                  a: "Most semi-detached and terraced houses can extend 40 sqm to the rear under exempted development, with a single-storey height cap of 4 metres (flat roof) or 5 metres (pitched). Two-storey rear extensions normally need full planning.",
                },
              ].map((f) => (
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

        {/* 8. LOCAL TRUST / NAP */}
        <section className="py-24 bg-secondary-container">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-6">
                Visit Our Dublin 2 Office
              </h2>
              <ul className="space-y-5 font-body text-on-surface text-lg">
                <li className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary mt-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <strong className="block">House Extension Dublin</strong>
                    77 Sir John Rogerson&apos;s Quay,
                    <br />
                    Grand Canal Dock, Dublin 2, D02 VK60
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    call
                  </span>
                  <div>
                    <a
                      href="tel:+35312308892"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      +353 1 230 8892
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    mail
                  </span>
                  <div>
                    <a
                      href="mailto:info@houseextensiondublin.ie"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      info@houseextensiondublin.ie
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    schedule
                  </span>
                  <div>
                    <strong className="block">Opening Hours</strong>
                    Mon &ndash; Sunday 8AM &ndash; 6PM
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-video rounded-xl overflow-hidden ambient-shadow border-2 border-primary/10">
                <iframe
                  title="Map of House Extension Dublin"
                  src="https://www.google.com/maps?q=77+Sir+John+Rogersons+Quay,+Dublin+2&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="bg-primary-container text-white py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"
          ></div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 tracking-tight max-w-3xl">
              Ready to Plan Your Dublin House Extension?
            </h2>
            <p className="font-body text-white/80 mb-10 text-lg max-w-2xl">
              Book your free site survey today. We&apos;ll discuss your vision,
              assess feasibility, and provide a detailed timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-variant transition-colors shadow-lg"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Call +353 1 230 8892
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
