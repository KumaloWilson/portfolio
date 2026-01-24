import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getBlogs } from "@/lib/api/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/blogs"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = [];
  const limit = 100;
  const maxPages = 20;

  for (let page = 1; page <= maxPages; page += 1) {
    const pagePosts = await getBlogs({ page, limit }).catch(() => []);
    if (!pagePosts.length) break;
    posts.push(...pagePosts);
    if (pagePosts.length < limit) break;
  }

  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || new Date().toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
