import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title:
    "House Extensions Drogheda | Kitchen, Attic & Home Extension Builders",
  description:
    "House Extension Dublin serves Drogheda and Co. Louth - kitchen extensions, attic conversions and full home renovations. Free site survey, fixed price. Call +353 1 230 8892.",
  alternates: { canonical: "/areas/drogheda" },
};

const droghedaHero =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDmMVMIpKoOJcDm8y6A-6wDrhDMr3ZDlOL5v--3KkOpk-ONqy2OQUfW6E4VnjPi46BHKlXV8LNrSLdU-2xYI054GfSJqx7i1iGCWYuJyLYKfRfXLJHtTf7wQQvva-YxVRQssB3mhEwI1FMWCBZSv9KEQyq3Jfng6454VvQ-pKWzQllfJOBpBOOZsJs7nMpE54HtSB5WSamI60op9oOLJq6j6krJmNR9pIu_goYFaAFbO1n0JhB4Y3mBwxIWnew4h2CJ6jg4JATb7hw";
const kitchenImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAv_Kn41VmJUw-gbyAZZiaM4as553QFWbVYkIjBfHytwlCRSblN8KnzSPbDwtcYZSHC41cSOs8A6w724SrTpPUPeOjbnKKGYsNNNcOge6WUdQekwNzvdquOcH6nAibWMnfnw1VOvbK2VRaJ2q1pMfNSFymaDvcUdZPYiKn7-sIwGyTM_7xz4h9R1mxz4IvbdfrFkdrZsoUTqlr_SZU3Z_t6OUg5UP937RmaJLA4lwciLZZyoNYUCSjPiZDBKFU3Qh75Scorj1PelV8";
const atticImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOYU0Ofv4GpnPraYC2QSu6mNGLNZj71_JvGhnf2k89A-Cnk4Mwb7mFJ7vh6D9i1lNsdbBLCEf0jt2GawAZDN9Tsbvl5EfyVQ86FANuHEbL-YI9QKE-7Gr8oVbzXXU1oGpz9qYdgmicyD7NeOxt3cNz363Uk0n-bmbDpXQE2_ZLkpjHFk4pQK1LceIuu5QCMOS7i7wp-StEwOP1tdkdijuQbjMXmtCp5hTra8lapjQbImTe96W3JWJy_Qo2mAVgV6AkZqq7ZPlEps8";
const renovImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLrm84ErCQ_MTG5V4l_B8Uuk9r-u0Myfy6362taybKpByDko432ZFsV_taDA_o7w6oyRRLpnPW1npyO-E9DuflzvXSSoS-LqfMeJ4IleSqcgLLUD2AIhTmL722qe7NiwMT76LYf-6JpWHQvDzMyRkl1Nh1L8-4PRT5vDNpDkf9EWJl0z8l2TyujyFuSMpSoArXtlj6j87KMg0rhTy1axAPmuBUdbRi8qTHAFBVHirr44nlFozR6ev_EKlDwn6a5bnd9R30PU5p3bQ";

export default function DroghedaPage() {
  return (
    <>
      <Header active="areas" />
      <main className="pt-20 flex-grow">
        {/* Hero */}
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-surface-dim overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Drogheda residential street"
              className="w-full h-full object-cover"
              src={droghedaHero}
            />
            <div className="absolute inset-0 bg-on-background/60"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-start justify-center">
            <div className="text-surface-container-highest text-sm font-medium mb-6 tracking-wide uppercase flex items-center space-x-2">
              <Link href="/" className="hover:text-on-primary">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span>Areas</span>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span className="text-primary-fixed">Drogheda</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-surface mb-6 max-w-3xl leading-tight">
              House Extensions in Drogheda
            </h1>
            <p className="font-body text-lg md:text-xl text-surface-container-highest mb-10 max-w-2xl leading-relaxed">
              Premium architectural extensions and renovations tailored for
              Drogheda homes. Enhance your living space with our expert,
              local Dublin-based team serving Drogheda and Co. Louth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="primary-gradient text-on-primary px-8 py-4 rounded-lg font-bold font-headline text-lg hover:opacity-90 transition-opacity ambient-shadow"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-surface-container-lowest/10 backdrop-blur-md border border-surface/30 text-surface px-8 py-4 rounded-lg font-bold font-headline text-lg hover:bg-surface-container-lowest/20 transition-colors flex items-center justify-center space-x-2 gap-2"
              >
                <span className="material-symbols-outlined">phone</span>
                <span>+353 1 230 8892</span>
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-8 max-w-7xl mx-auto bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">
                Trusted House Extension Builders Serving Drogheda
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-6">
                We bring decades of architectural expertise directly to
                Drogheda. While our roots are at our Dublin 2 head office, our
                dedicated M1 corridor team ensures seamless project management,
                local knowledge and the premium quality finish your home
                deserves &mdash; whether that&apos;s a kitchen extension, attic
                conversion or full home renovation.
              </p>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                From initial concept design to the final coat of paint, we
                manage the entire process, turning your vision into a structural
                reality without the stress. Drogheda is just 50 km from our
                Dublin 2 office &mdash; close enough that the same project
                manager who runs our city projects can be on a Drogheda site
                inside an hour.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-secondary-container p-10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                  <span className="material-symbols-outlined text-8xl text-secondary">
                    architecture
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-tertiary-fixed-dim rounded-full flex items-center justify-center mb-6 border-2 border-primary">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      location_on
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-secondary-container mb-4">
                    Drogheda Coverage
                  </h3>
                  <ul className="space-y-4 font-body text-on-secondary-container">
                    <li className="flex items-start space-x-3 gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <span>Dedicated local site managers</span>
                    </li>
                    <li className="flex items-start space-x-3 gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <span>
                        Familiarity with Louth County Council planning
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <span>
                        Direct M1 access for rapid materials delivery
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto bg-surface">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">
              Our Drogheda Services
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                href: "/services/kitchen-extension",
                title: "Kitchen Extensions",
                desc: "Expand your culinary space with light-filled, open-plan designs perfect for modern Drogheda family living.",
                img: kitchenImg,
              },
              {
                href: "/services/attic-conversion",
                title: "Attic Conversions",
                desc: "Unlock the hidden potential of your home with a premium loft conversion, adding valuable extra rooms.",
                img: atticImg,
              },
              {
                href: "/services/home-renovations",
                title: "Full Renovations",
                desc: "Comprehensive structural overhauls that breathe new life into older Drogheda properties.",
                img: renovImg,
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group cursor-pointer block"
              >
                <div className="w-full h-72 mb-6 rounded-xl overflow-hidden bg-surface-container-low">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={c.img}
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                  {c.title}
                </h3>
                <p className="font-body text-on-surface-variant mb-4">
                  {c.desc}
                </p>
                <span className="inline-flex items-center space-x-2 gap-2 font-headline font-bold text-primary hover:text-primary-container transition-colors group-hover:underline underline-offset-4">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary-container text-on-primary py-24 px-8 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Drogheda Home?
            </h2>
            <p className="font-body text-xl text-primary-fixed mb-10">
              Schedule a free, no-obligation site visit with our senior
              architectural consultants.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="bg-surface text-primary px-8 py-4 rounded-lg font-bold font-headline text-lg hover:bg-surface-container-low transition-colors ambient-shadow"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+35312308892"
                className="bg-transparent border-2 border-surface text-surface px-8 py-4 rounded-lg font-bold font-headline text-lg hover:bg-surface/10 transition-colors flex items-center justify-center space-x-2 gap-2"
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
