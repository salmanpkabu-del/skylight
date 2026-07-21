import { MetadataRoute } from "next";
import { packages } from "@/lib/packages-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skylighttravel.ae";

  const packageUrls = packages.map((pkg) => ({
    url: `${baseUrl}/package/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogUrls = [
    "best-holiday-packages-uae-2025",
    "schengen-visa-guide-uae-residents",
    "best-travel-agency-sharjah",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticUrls = [
    "",
    "/packages",
    "/visas",
    "/about",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.9,
  }));

  return [...staticUrls, ...packageUrls, ...blogUrls];
}
