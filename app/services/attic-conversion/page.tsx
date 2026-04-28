import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  serviceSchema,
} from "@/lib/schema";
import { OG_IMAGES, SITE_URL } from "@/lib/site";

const url = "/services/attic-conversion";

export const metadata: Metadata = {
  title: "Attic Conversions Dublin | Loft & Attic Conversion Specialists",
  description:
    "Attic conversion specialists serving Dublin and Ireland. Bedroom, ensuite and home-office attic conversions. Planning, design and build under one roof. Call +353 1 230 8892.",
  alternates: { canonical: url },
  openGraph: {
    title: "Attic Conversions Dublin | House Extension Dublin",
    description:
      "Bedroom, ensuite and home-office attic conversions across Dublin. Velux, dormer, hip-to-gable and double-storey upgrades.",
    url: `${SITE_URL}${url}`,
    images: OG_IMAGES,
  },
};

const faqs = [
  {
    q: "Do you need planning permission for a Shomera?",
    a: "A Shomera-style garden room under 25 sqm is typically exempt from planning permission in Ireland, provided it sits in the rear garden and meets height/boundary rules. We always confirm exemption in writing before quoting any garden-room project.",
  },
  {
    q: "Do you need planning permission to convert a garage in Ireland?",
    a: "Most garage conversions in Ireland are exempt from planning if the garage is attached, the use stays residential and external appearance is maintained. Detached garages or layout changes that affect the front facade may need full permission.",
  },
  {
    q: "How much does a 2 story extension cost Ireland?",
    a: "A typical 2-storey extension in Ireland costs EUR 130,000 to EUR 220,000 turnkey, depending on size and finish. Adding a full first floor over an existing rear extension is normally cheaper than a fresh ground-up two-storey build.",
  },
  {
    q: "How much roughly is a 2 story extension?",
    a: "Roughly EUR 2,800 to EUR 3,400 per square metre fully fitted in Dublin. A 35 sqm two-storey rear extension would land around EUR 105,000 to EUR 130,000 - we provide a fixed price after the free site survey.",
  },
];

export default function AtticConversionPage() {
  const schemaScripts = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Attic Conversions",
            description:
              "Bedroom, ensuite and home-office attic conversions across Dublin. Velux, dormer, hip-to-gable and full timber-frame second-storey extensions.",
            url,
            slug: "attic-conversion",
          }),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Attic Conversions", url },
          ]),
        )}
      />
    </>
  );

  return (
    <ServicePageLayout
      schemaScripts={schemaScripts}
      title="Attic Conversions in Dublin"
      breadcrumb="Attic Conversions"
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEjO3FuF7ERJ97SUNsO3AadnL_z6WuNEMYx60XLFsuQuEA72E6OlNsnGbbvvKvz5XeWjE7u9pLOGFvtA1Wsfsoa7BzfK34HPYVQNgq0E4hU-ZjeCmfBpk07MZRAbTBqpSG-voeoroFp9sCxtZ6d-aPcdSRZYOfk_9K6oaK5-WYlVBqgfr0zAsVGb_K3MCmVP2vmQGpeMnDQdAbblaNI4dDFAr_nhgR12kx5eGmUXRtHKBUi_6aPLj21bwLGczKQDMP_92avAjFgo"
      leadParagraph="Unlock the hidden potential of your home with a premium attic conversion. We add bedrooms, ensuites and home offices that feel like they were always there."
      introHeading="Bedroom, Ensuite & Home-Office Attic Conversions"
      introBody={
        <>
          <p>
            Attic conversions are the highest-return room you can add to a
            Dublin home. From a simple attic renovation that turns dead loft
            space into a teen bedroom, to a full hip-to-gable attic extension
            that adds a master suite and ensuite, our team handles every attic
            dublin project end-to-end &mdash; structural calculations, planning,
            insulation, plumbing, dormer construction and decoration.
          </p>
          <p>
            We work daily on house attic conversions, attic remodels and
            two-storey upgrades for Dublin semi-detached homes, terraces and
            bungalows.
          </p>
          <p>
            See related work:{" "}
            <Link
              href="/services/kitchen-extension"
              className="text-primary font-semibold"
            >
              kitchen extensions
            </Link>
            ,{" "}
            <Link
              href="/services/home-renovations"
              className="text-primary font-semibold"
            >
              home renovations
            </Link>
            , or browse all{" "}
            <Link href="/services" className="text-primary font-semibold">
              services
            </Link>
            .
          </p>
        </>
      }
      atGlance={[
        { label: "Typical Build Time", value: "8 - 12 Weeks", icon: "schedule" },
        {
          label: "Typical Floor Area",
          value: "20sqm - 35sqm",
          icon: "straighten",
        },
        {
          label: "Coverage",
          value: "All Dublin City & County",
          icon: "location_on",
        },
      ]}
      sections={[
        {
          heading: "Attic Conversion Types",
          body: (
            <>
              <p>
                <strong>Velux conversion</strong> &mdash; the simplest attic
                conversion: keep the existing roof, add roof windows and
                insulation. Best for homes with generous head height.
              </p>
              <p>
                <strong>Dormer attic conversion</strong> &mdash; the most popular
                attic conversion Dublin homeowners ask for. Adds a flat-roof or
                pitched-roof dormer for full standing height across the entire
                room.
              </p>
              <p>
                <strong>Hip-to-gable attic conversion</strong> &mdash; converts a
                hipped roof into a gable end and adds a rear dormer.
                Significantly increases floor area on semi-detached and
                end-of-terrace Dublin homes.
              </p>
              <p>
                <strong>Bungalow attic conversion / hip roof extension on
                bungalow</strong> &mdash; raise the roof on a bungalow extension
                or single storey bungalow extension to add a full first-floor
                level (bungalow double storey extension).
              </p>
            </>
          ),
        },
        {
          heading: "Two-Storey & Double-Storey Extensions",
          body: (
            <>
              <p>
                A 2 storey extension or 2nd storey extension is the natural next
                step when an attic conversion isn&apos;t enough. We build two
                story extensions, two story house extensions and double storey
                extensions across Dublin &mdash; including building a second floor
                on top of an existing extension where the foundations and roof
                allow.
              </p>
              <p>
                Most 2 story extension builds add 30&ndash;50 sqm of new floor
                area split across the ground and first floors. We handle full
                planning, structural engineering and party-wall agreements.
              </p>
            </>
          ),
        },
        {
          heading: "Timber Frame & Roof Structure",
          body: (
            <>
              <p>
                For larger attic extensions and second-storey adds, we offer
                full timber frame extension construction. A timber frame house
                extension is dry, fast to erect (weeks instead of months) and
                very thermally efficient. We also deliver a frame house
                extension and timber frame home extensions for new-build
                conversions.
              </p>
              <p>
                Every attic conversion includes a structural roof inspection,
                fire-rated escape windows, building-regs-compliant staircase,
                and full insulation upgrade.
              </p>
              <p>
                More cost &amp; planning answers on our{" "}
                <Link href="/faq" className="text-primary font-semibold">
                  FAQ page
                </Link>
                .
              </p>
            </>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
