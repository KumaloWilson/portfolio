import { getBlogs } from "@/lib/api/blogs";
import { PortfolioPageClient } from "./PortfolioPageClient";

export const revalidate = 3600;

export default async function PortfolioPage() {
  const recentPosts = await getBlogs({ limit: 3, revalidate }).catch(() => []);

  return <PortfolioPageClient recentPosts={recentPosts} />;
}
