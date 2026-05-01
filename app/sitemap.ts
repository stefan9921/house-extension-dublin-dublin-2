import type { MetadataRoute } from "next";
import { AREAS, SERVICES, STATIC_ROUTES } from "@/lib/site";

const CANONICAL_URL = "https://www.houseextensiondublin.ie";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${CANONICAL_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${CANONICAL_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaEntries: MetadataRoute.Sitemap = AREAS.map((a) => ({
    url: `${CANONICAL_URL}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries];
}
