import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS, OG_IMAGE } from "@/lib/site";
import { jsonLd, localBusinessSchema, websiteSchema } from "@/lib/schema";
import IconFontLoader from "@/components/IconFontLoader";

// Production domain used for canonical link resolution (alternates.canonical
// in every page metadata is relative and resolves against metadataBase).
const CANONICAL_URL = "https://www.houseextensiondublin.ie";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const defaultTitle =
  "House Extension Dublin | Kitchen, Attic & Home Extensions Ireland";
const defaultDescription =
  "House Extension Dublin builds kitchen extensions, attic conversions and home renovations across Dublin and Ireland. Free quotes, fixed prices, fully insured. Call +353 1 230 8892.";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: defaultTitle,
    template: "%s | House Extension Dublin",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Icons are auto-discovered by Next.js App Router from /app/icon.svg and
  // /app/apple-icon.svg.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${jakarta.variable}`}>
      <body className="bg-surface text-on-surface flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteSchema())}
        />
        <IconFontLoader />
        {children}
      </body>
    </html>
  );
}
