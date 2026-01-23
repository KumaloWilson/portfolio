import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { getBlogs } from "@/lib/api/blogs";
import { BlogsPageClient } from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights, articles, and deep dives on software engineering, product, and design.",
  alternates: {
    canonical: `${siteConfig.url}/blogs`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blogs`,
    title: `Blogs | ${siteConfig.name}`,
    description: "Insights, articles, and deep dives on software engineering, product, and design.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} blogs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blogs | ${siteConfig.name}`,
    description: "Insights, articles, and deep dives on software engineering, product, and design.",
    images: [siteConfig.ogImage],
  },
};

export default async function BlogsPage() {
  const posts = await getBlogs({ limit: 50 }).catch(() => []);
  return <BlogsPageClient posts={posts} />;
}
