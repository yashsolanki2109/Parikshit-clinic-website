import type { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";

// Fixed content revision date prevents Googlebot from discarding lastmod due to fake dynamic timestamps
const LAST_REVISED = new Date("2026-11-20T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parikshit.space";

  const serviceEntries: MetadataRoute.Sitemap = ALL_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: LAST_REVISED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: LAST_REVISED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: LAST_REVISED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...serviceEntries,
  ];
}
