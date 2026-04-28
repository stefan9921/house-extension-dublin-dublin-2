import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Contact House Extension Dublin | Free Quote & Site Survey",
  description:
    "Get a free site survey and fixed-price quote for your house extension in Dublin. Call +353 1 230 8892, email info@houseextensiondublin.ie or use the form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main className="pt-20 flex-grow">
        {/* Hero */}
        <section className="bg-secondary-container py-24">
          <div className="max-w-7xl mx-auto px-8 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary font-display font-bold mb-4">
              Contact
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-6">
              Contact House Extension Dublin
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              Tell us about your house extension project and we&apos;ll come
              back within one working day with a free site-survey time slot.
            </p>
          </div>
        </section>

        {/* Form + NAP */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <form
                className="bg-surface-container-lowest rounded-xl border border-surface-variant/40 ambient-shadow p-8 space-y-6"
                action="mailto:info@houseextensiondublin.ie"
                method="post"
                encType="text/plain"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="font-display font-semibold text-sm text-on-surface block mb-2">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-lg border-[1.5px] border-surface-variant/60 px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/20 transition outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="font-display font-semibold text-sm text-on-surface block mb-2">
                      Phone
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-lg border-[1.5px] border-surface-variant/60 px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/20 transition outline-none"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="font-display font-semibold text-sm text-on-surface block mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border-[1.5px] border-surface-variant/60 px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/20 transition outline-none"
                  />
                </label>
                <label className="block">
                  <span className="font-display font-semibold text-sm text-on-surface block mb-2">
                    Project Address (Dublin postcode)
                  </span>
                  <input
                    type="text"
                    name="address"
                    placeholder="e.g. Dublin 6"
                    className="w-full rounded-lg border-[1.5px] border-surface-variant/60 px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/20 transition outline-none"
                  />
                </label>
                <label className="block">
                  <span className="font-display font-semibold text-sm text-on-surface block mb-2">
                    What kind of project?
                  </span>
                  <select
                    name="service"
                    className="w-full rounded-lg border-[1.5px] border-surface-variant/60 px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/20 transition outline-none bg-white"
                  >
                    <option>Kitchen Extension</option>
                    <option>Attic Conversion</option>
                    <option>Home Renovation</option>
                    <option>Multiple / Not Sure Yet</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-display font-semibold text-sm text-on-surface block mb-2">
                    Tell us about your project
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border-[1.5px] border-surface-variant/60 px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/20 transition outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Enquiry
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <p className="text-xs text-on-surface-variant">
                  We aim to respond within one working day. Mon &ndash; Sun 8AM &ndash; 6PM.
                </p>
              </form>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-secondary-container rounded-xl p-8">
                <h3 className="font-display font-bold text-2xl mb-6">
                  Direct Lines
                </h3>
                <ul className="space-y-5 font-body text-on-secondary-container">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      call
                    </span>
                    <div>
                      <strong className="block text-sm uppercase tracking-wider mb-1">
                        Phone
                      </strong>
                      <a
                        href="tel:+35312308892"
                        className="text-lg font-semibold hover:text-primary transition-colors"
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
                      <strong className="block text-sm uppercase tracking-wider mb-1">
                        Email
                      </strong>
                      <a
                        href="mailto:info@houseextensiondublin.ie"
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        info@houseextensiondublin.ie
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      location_on
                    </span>
                    <div>
                      <strong className="block text-sm uppercase tracking-wider mb-1">
                        Address
                      </strong>
                      <address className="not-italic">
                        77 Sir John Rogerson&apos;s Quay,
                        <br />
                        Grand Canal Dock,
                        <br />
                        Dublin 2, D02 VK60
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">
                      schedule
                    </span>
                    <div>
                      <strong className="block text-sm uppercase tracking-wider mb-1">
                        Hours
                      </strong>
                      Mon &ndash; Sunday 8AM &ndash; 6PM
                    </div>
                  </li>
                </ul>
              </div>
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
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
