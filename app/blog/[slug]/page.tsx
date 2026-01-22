import { notFound } from "next/navigation";
import { blogPostsData } from "@/modules/shared/services/data.service";
import type { BlogPost } from "@/modules/shared/types";
import { BlogDetailClient } from "./BlogDetailClient";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((item) => item.slug === slug) as BlogPost | undefined;

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
