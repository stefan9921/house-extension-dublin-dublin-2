import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Home Renovations Dublin | Full House Renovation & Extension",
  description:
    "Full home renovations across Dublin and Ireland - rewires, replumbs, layout changes, full refurbs and combined extensions. Insured, fixed-price quotes. Call +353 1 230 8892.",
  alternates: { canonical: "/services/home-renovations" },
};

export default function HomeRenovationsPage() {
  return (
    <ServicePageLayout
      title="Home Renovations in Dublin"
      breadcrumb="Home Renovations"
      heroImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDTzzaiAtDgCs6PD6NvrCt27fmmo3oIL2mWNW3GkzXCYIxpOk3RTRmKJSwK4fTArT9RJeK-sc-cp3M_F-AQdYo1fnA5OTBXe_emKiFqG45um8TSVP7fjy8KfAm4GWUM_4oBz_6oUIJ_ukSGMuLvwG6Dj02-YlRRVs-hpt93wCWpfElLQx-SFKmw9lEBJ-xnHhNgI-3GfzZUlDIHS-QhmnDqcyBROPTrpUjpWw8F4Sm7cc887h_RzcL1JR0mJYkSdgLB6ZmLu-_4mU4"
      leadParagraph="Full home renovations across Dublin and Ireland. Rewires, replumbs, layout changes, full refurbs - paired with extensions where needed. Insured, fixed-price quotes."
      introHeading="Whole-House Renovation Specialists"
      introBody={
        <>
          <p>
            We are experienced extension builders Dublin homeowners trust for
            renovations and extensions across the city. From cottage and period
            renovations to mid-terrace house extension projects and double
            extension on semi detached house jobs, our team handles the
            mechanical, electrical and structural work that turns a tired
            Dublin house into a contemporary family home.
          </p>
          <p>
            Every home extension we deliver is paired with the surrounding
            renovation work needed to make it feel seamless. Combining
            extensions and renovations on a single fixed-price contract is the
            single biggest saving most clients make.
          </p>
        </>
      }
      atGlance={[
        {
          label: "Typical Project Length",
          value: "12 - 24 Weeks",
          icon: "schedule",
        },
        {
          label: "Project Types",
          value: "Refurbs, Layout Changes, Full Rebuilds",
          icon: "construction",
        },
        {
          label: "Coverage",
          value: "All Dublin City & County",
          icon: "location_on",
        },
      ]}
      sections={[
        {
          heading: "Renovation Services",
          body: (
            <>
              <p>
                <strong>Full refurbishment</strong> &mdash; complete strip-out and
                rebuild of an existing home extension or interior. Includes
                rewires, replumbs, new heating, insulation upgrades and
                redecoration.
              </p>
              <p>
                <strong>Layout reconfiguration</strong> &mdash; remove walls, add
                steel beams, redesign the ground floor for open-plan living. We
                deliver structural calculations and building-regs sign-off.
              </p>
              <p>
                <strong>Mechanical &amp; electrical upgrades</strong> &mdash; full
                rewires, fuse-board upgrades, new heating systems, heat pumps
                and underfloor heating. RECI / Safe Electric registered.
              </p>
            </>
          ),
        },
        {
          heading: "Cottage & Period Renovations",
          body: (
            <>
              <p>
                Pairing an old cottage with modern extension is one of the most
                rewarding building projects in Ireland. We design and build
                modern cottage extension solutions, cottage with modern
                extension layouts and contemporary extension to old house
                builds that respect the original character while delivering
                21st-century comfort.
              </p>
              <p>
                Our experience with modern extensions on old houses, modern
                extension old house and new extension on old house projects
                means planners and conservation officers know our work. We
                handle every aspect of a cottage extension, from listed-building
                consultation to final coat of limewash.
              </p>
            </>
          ),
        },
        {
          heading: "Semi-Detached, Terraced & New-Build Renovations",
          body: (
            <>
              <p>
                We build semi detached house extension projects and semi
                detached house extension Ireland renovations across Dublin
                &mdash; including double extension on semi detached house
                builds where ground and first floors expand together.
              </p>
              <p>
                For terraced homes we deliver mid terrace house extension and
                front extension terraced house projects, and for newer estates
                we handle extension on new build house and front house
                extension / front extension house jobs (including double storey
                front extension builds).
              </p>
              <p>
                Brick, render and cladding choices matter. We advise on brick
                house with rendered extension, cladding extension on brick
                house and wooden extension on brick house design decisions
                long before the first block is laid.
              </p>
            </>
          ),
        },
        {
          heading: "Combined Renovation + Extension",
          body: (
            <>
              <p>
                Most Dublin homeowners we work with want both: extension
                renovation, renovations and extensions, or a true renovation
                extension package. By taking a single contract for the
                building an extension to your house and the renovation work
                inside the existing home, we save you a second mobilisation,
                second main contractor margin, and weeks of programme.
              </p>
              <p>
                We are experienced extension builders &mdash; full extension
                builds and extension building projects from architect-stamped
                drawings to final BCMS commencement notice are all handled
                in-house. If you have been comparing extension builders Dublin
                quotes, we&apos;d love to walk you through the process.
              </p>
            </>
          ),
        },
        {
          heading: "Why Hire Experienced Extension Builders in Dublin",
          body: (
            <>
              <p>
                Designing an extension to your home is the easy part. The hard
                part is what happens between BCMS commencement, party-wall
                agreement, structural sign-off and the day you move back in.
                Our office in Dublin 2 means a project manager is on site
                within 30 minutes for any decision &mdash; not a callback in
                three days.
              </p>
              <p>
                For specialist requests &mdash; guardian home extension
                replacements, shomera ireland upgrades, or anything sensitive
                &mdash; we have the relationships with engineers, planners and
                building-control officers to keep the project moving.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: "How much does a small extension cost in Ireland?",
          a: "A small 15-20 sqm rear extension in Ireland generally costs between EUR 50,000 and EUR 75,000 fully fitted. Glass-roof or steel-frame designs sit at the higher end of that range.",
        },
        {
          q: "How much does a 20 square metre extension cost in Ireland?",
          a: "A 20 sqm extension in Ireland is typically EUR 55,000 to EUR 75,000 turnkey - including groundworks, structure, glazing, finishes and decoration. Site access and finish level move the final number up or down.",
        },
        {
          q: "How much does a 40m2 extension cost in Ireland?",
          a: "A 40 sqm extension - the largest single-storey rear extension allowed under exempted development - costs around EUR 100,000 to EUR 140,000 in Ireland depending on glazing, finishes and any kitchen reconfiguration.",
        },
        {
          q: "How much does it cost to extend a house in Ireland?",
          a: "Budget EUR 2,400 to EUR 3,400 per square metre for a finished house extension in Ireland. We provide a single fixed-price quote covering everything from architect's drawings to final paint.",
        },
        {
          q: "How big can a single storey extension be under permitted development?",
          a: "Up to 40 sqm to the rear under exempted development in Ireland, subject to height (4m flat / 5m pitched), boundary distances and the size of any existing extensions. We confirm exemption in writing for every project.",
        },
      ]}
    />
  );
}
