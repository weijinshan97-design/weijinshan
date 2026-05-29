import type { MetadataRoute } from "next";
import { worksData } from "@/data/works";
import { thinkingData } from "@/data/thinking";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jinshan.design";

  const workPages = worksData.map((w) => ({
    url: `${base}/work/${w.slug}`,
    lastModified: new Date(),
  }));

  const thinkingPages = thinkingData.map((t) => ({
    url: `${base}/thinking/${t.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...workPages,
    ...thinkingPages,
  ];
}
