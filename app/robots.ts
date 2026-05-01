import type { MetadataRoute } from "next";

const CANONICAL_URL = "https://www.houseextensiondublin.ie";

export default function robots(): MetadataRoute.Robots {
  const host = CANONICAL_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${CANONICAL_URL}/sitemap.xml`,
    host,
  };
}
