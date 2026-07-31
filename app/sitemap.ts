import { MetadataRoute } from "next";
import { packages } from "@/lib/packages-data";
import { visas } from "@/lib/visas-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.skylighttourism.com";

  const packageUrls = packages.map((pkg) => ({
    url: `${baseUrl}/package/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const visaUrls = visas.map((v) => ({
    url: `${baseUrl}/visas/${v.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
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

  return [...staticUrls, ...packageUrls, ...visaUrls, ...blogUrls];
}
