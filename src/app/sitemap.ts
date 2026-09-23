import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";

// lastModified is omitted on purpose: stamping every URL with the request time
// tells crawlers the whole site changed on every visit, so they ignore it.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    priority,
  });

  return [
    page("/", 1),
    page("/services", 0.9),
    page("/contact", 0.9),
    page("/work", 0.8),
    page("/solutions", 0.8),
    page("/industries", 0.7),
    page("/about", 0.7),
    page("/faq", 0.6),
    page("/privacy", 0.3),
    page("/terms", 0.3),
    ...services.map((s) => page(`/services/${s.slug}`, 0.85)),
    ...caseStudies.map((c) => page(`/work/${c.slug}`, 0.7)),
  ];
}
