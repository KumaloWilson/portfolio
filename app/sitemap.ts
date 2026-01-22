import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPostsData } from "@/modules/shared/services/data.service";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blogs"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogRoutes = blogPostsData.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
