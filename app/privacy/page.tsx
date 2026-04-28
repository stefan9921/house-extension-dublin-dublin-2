import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How House Extension Dublin collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20 flex-grow max-w-3xl mx-auto px-8 py-24 prose prose-lg text-on-surface-variant font-body leading-relaxed">
        <h1 className="font-display font-bold text-5xl text-on-surface mb-8">
          Privacy Policy
        </h1>
        <p>Last updated: January 2026.</p>
        <p>
          House Extension Dublin (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates
          this website. We respect your privacy and are committed to protecting
          your personal data.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          What we collect
        </h2>
        <p>
          When you fill in the contact form, we collect the name, phone number,
          email address, project address and project details you provide.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Why we collect it
        </h2>
        <p>
          To respond to your enquiry, arrange a free site survey and follow up
          on a quote. We do not sell or share your data with third parties.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          How long we keep it
        </h2>
        <p>
          We keep enquiry data for two years from your last contact with us.
          Project records are retained for the statutory period required by
          construction regulations.
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Your rights
        </h2>
        <p>
          Under GDPR you can request a copy of, correction to, or deletion of
          your personal data at any time. Email{" "}
          <a className="text-primary" href="mailto:info@houseextensiondublin.ie">
            info@houseextensiondublin.ie
          </a>
          .
        </p>
        <h2 className="font-display font-bold text-2xl text-on-surface mt-10 mb-4">
          Cookies
        </h2>
        <p>
          This website uses essential cookies to function and anonymous
          analytics cookies to understand traffic. No personally identifiable
          information is shared with advertisers.
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
