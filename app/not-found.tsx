import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our house extension services or get a free quote from House Extension Dublin.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        <section className="max-w-3xl mx-auto px-8 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-primary font-display font-bold mb-4">
            Error 404
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-6">
            We can&apos;t find that page
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10">
            The page you&apos;re after may have moved or never existed. Try one
            of the links below, or call our Dublin 2 office on{" "}
            <a
              href="tel:+35312308892"
              className="text-primary font-semibold hover:underline"
            >
              +353 1 230 8892
            </a>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/"
              className="btn-gradient text-white px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Go to homepage
            </Link>
            <Link
              href="/services"
              className="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Browse services
            </Link>
            <Link
              href="/areas"
              className="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Areas we cover
            </Link>
            <Link
              href="/contact"
              className="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
