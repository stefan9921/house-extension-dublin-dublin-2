import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title:
    "Kitchen Extensions Dublin | Open-Plan Kitchen Extension Builders",
  description:
    "Open-plan kitchen extensions across Dublin and Ireland. Modern, single-storey, side return and rear extensions. Fixed quotes, full project management. Call +353 1 230 8892.",
  alternates: { canonical: "/services/kitchen-extension" },
};

export default function KitchenExtensionPage() {
  return (
    <ServicePageLayout
      title="Kitchen Extensions in Dublin"
      breadcrumb="Kitchen Extensions"
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCdWxfgXyHK4nA1XSesdETvUTdr0n7SnE1jz9ZhVNQ9dYhdFyVq7FAMzJ-_MwW6-1X3lOrOhg1L2B8QnQW3E2gGmdY6SQELbsZ_jSj2tKtAHp8E8S6H51DLwX7tnNkemnmEFIMkRvgBU9noAxkF8fR-T2esdxbTzv3mu_F-Ep-3ziqwdl_B6fxyM13JaPe324Wnji2QwJsFodoKPH2E_4CK7gUroCfhtMv8qgMq2vkdnJV9b_88n73VPmIIYGEvqElqPEl97bo20hU"
      leadParagraph="Transform your home with a bespoke kitchen extension. We design and build modern, light-filled spaces that seamlessly connect your indoor living to the outdoors."
      introHeading="Expertly Crafted Modern & Contemporary Kitchen Extensions"
      introBody={
        <>
          <p>
            A kitchen is the heart of the home, and expanding it is one of the
            most rewarding investments you can make in your Dublin property.
            Whether you&apos;re looking for a sleek, contemporary kitchen
            extension with expansive glazing or a sensitive modern house
            extension on a Dublin period home, our architectural builders
            deliver uncompromising quality on every kitchen extensions Dublin
            project we take on.
          </p>
          <p>
            We specialise in seamless kitchen extensions that connect original
            structures with new additions &mdash; maximising natural light,
            optimising functional space and integrating contemporary house
            extensions into existing layouts. Most of our kitchen with
            extension builds combine a rear or side-return extension with a
            full open-plan kitchen, dining and living reconfiguration.
          </p>
        </>
      }
      atGlance={[
        { label: "Typical Build Time", value: "12 - 16 Weeks", icon: "schedule" },
        { label: "Typical Size", value: "30sqm - 60sqm+", icon: "straighten" },
        {
          label: "Coverage",
          value: "All Dublin City & County",
          icon: "location_on",
        },
      ]}
      sections={[
        {
          heading: "Types of Kitchen Extension We Build",
          body: (
            <>
              <p>
                <strong>Single-storey rear kitchen extension</strong> &mdash; the
                most common single storey extension we build in Dublin. A single
                floor extension or one story extension at the back of house
                works well for terraced and semi-detached homes; a 3 metre house
                extension (or 3 meter house extension) is exempt from planning
                in most cases.
              </p>
              <p>
                <strong>Side-return extension</strong> &mdash; a narrow side
                return extension that fills the alley beside Dublin redbrick
                homes. Adds 8&ndash;15 sqm of bright kitchen space without
                affecting the garden footprint.
              </p>
              <p>
                <strong>Glass-roof &amp; bi-fold extensions</strong> &mdash; a
                glass extension to back of house with frameless rooflights and
                bi-fold doors. The brightest possible kitchen in any Dublin
                semi.
              </p>
              <p>
                <strong>40 sqm &quot;maximum&quot; extension</strong> &mdash; a 40 sqm
                extension is the largest exempted-development single-storey
                extension at the back of house, ideal for full open-plan
                kitchen / dining / family rooms.
              </p>
            </>
          ),
        },
        {
          heading: "Modern & Contemporary Design",
          body: (
            <>
              <p>
                We design modern extensions and modern house extensions that
                respect the original building. Materials we work with daily on
                contemporary house extensions include zinc cladding, charred
                timber, white render and frameless glass. Whether you want a
                sharp modern extension on an old Dublin Edwardian or a softly
                modern addition to a 1970s semi, our extension architecture
                team produces drawings that planners and builders both
                understand.
              </p>
              <p>
                Every kitchen extension we deliver is hand-drawn by our
                in-house architectural designer, then handed to the same site
                team that builds it &mdash; no subcontracted hand-offs.
              </p>
            </>
          ),
        },
        {
          heading: "Sizes, Costs & Timelines",
          body: (
            <>
              <p>
                The most common kitchen extensions Dublin sizes are 20 sqm, 30
                sqm and 40 sqm. A 3 metre house extension typically costs
                around &euro;55,000&ndash;&euro;75,000 turnkey; a 40 sqm extension is
                normally &euro;100,000&ndash;&euro;140,000. Glass-rich or steel-frame
                designs sit at the top of those ranges.
              </p>
              <p>
                Build time runs from 12 weeks (small side-return) to 16 weeks
                (40 sqm full open-plan). We hand back a fully fitted kitchen,
                decorated and snag-free.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "How much for a kitchen extension in Ireland?",
          a: "A typical 30-40 sqm kitchen extension in Ireland costs EUR 80,000 to EUR 130,000 turnkey, including kitchen units, flooring and decoration. Smaller side-return extensions start around EUR 55,000.",
        },
        {
          q: "How long does a rear extension take?",
          a: "Most rear extensions in Dublin take 12 to 16 weeks from groundworks to handover. Smaller 15-20 sqm builds finish in 10 weeks; complex steel-frame or glass-roof extensions can run to 18 weeks.",
        },
        {
          q: "How much does it cost to do a rear extension?",
          a: "Budget EUR 2,400 to EUR 3,200 per square metre for a finished rear extension in Dublin. Glass-heavy designs sit closer to EUR 3,500 per sqm. Our fixed-price quote covers everything from groundworks to paint.",
        },
        {
          q: "How much rear extension is allowed?",
          a: "You can extend up to 40 sqm to the rear under exempted development - subject to height (4m flat / 5m pitched), boundary distances and existing extensions. Our team confirms exemption in writing before any tools come on site.",
        },
      ]}
    />
  );
}
