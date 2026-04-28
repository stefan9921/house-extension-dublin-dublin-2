import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of House Extension Dublin's website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Terms of Service", url: "/terms" },
          ]),
        )}
      />
      <main className="pt-20 flex-grow max-w-3xl mx-auto px-8 py-24 prose prose-lg text-on-surface-variant font-body leading-relaxed">
        <h1 className="font-display font-bold text-5xl text-on-surface mb-8">
          Terms of Service
        </h1>
        <p>Last updated: January 2026.</p>
        <p>
          These terms govern your use of houseextensiondublin.ie. By using the
          website you agree to them.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Use of the website
        </h2>
        <p>
          The content on this website is for general information only. While
          we make every effort to keep prices, timelines and design information
          accurate, none of it forms a binding quote until we issue a written
          fixed-price contract.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Intellectual property
        </h2>
        <p>
          All copy, photography and design on this website is owned by House
          Extension Dublin or used under licence. You may not reproduce, adapt
          or republish without written permission.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Liability
        </h2>
        <p>
          We accept no liability for losses arising from reliance on website
          content alone. Our liability for the building work we deliver is
          governed by the signed construction contract for that project.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Governing law
        </h2>
        <p>
          These terms are governed by the laws of Ireland, and any dispute
          falls under the exclusive jurisdiction of the Irish courts.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Contact
        </h2>
        <p>
          House Extension Dublin, 77 Sir John Rogerson&apos;s Quay, Grand Canal
          Dock, Dublin 2, D02 VK60. +353 1 230 8892.
        </p>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
