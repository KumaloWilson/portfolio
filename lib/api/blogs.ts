import type { BlogPost } from "@/modules/shared/types";
import { apiFetch } from "./client";

interface BlogAuthor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  headlineImage?: string;
  status: string;
  publishedAt?: string;
  tags?: string[];
  viewCount: number;
  readingTime: number;
  author?: BlogAuthor;
  createdAt: string;
}

interface BlogDetail extends BlogListItem {
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  updatedAt: string;
  authorId?: string;
}

const formatBlogDate = (value?: string) => {
  if (!value) return "Recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};

const toBlogPost = (item: BlogListItem | BlogDetail): BlogPost => {
  const dateSource = item.publishedAt || item.createdAt;
  const readTime = item.readingTime ? `${item.readingTime} min read` : "Quick read";

  return {
    id: item.id,
    title: item.title,
    excerpt: item.excerpt || "",
    date: formatBlogDate(dateSource),
    readTime,
    image: item.featuredImage,
    headlineImage: "headlineImage" in item ? item.headlineImage : undefined,
    slug: item.slug,
    tags: item.tags,
    content: "content" in item ? item.content : undefined,
    metaTitle: "metaTitle" in item ? item.metaTitle : undefined,
    metaDescription: "metaDescription" in item ? item.metaDescription : undefined,
    publishedAt: item.publishedAt || item.createdAt,
    updatedAt: "updatedAt" in item ? item.updatedAt : undefined,
    authorName: item.author
      ? `${item.author.firstName} ${item.author.lastName}`.trim()
      : undefined,
    viewCount: item.viewCount,
  };
};

interface GetBlogsOptions {
  page?: number;
  limit?: number;
  search?: string;
  tags?: string[];
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  revalidate?: number;
}

export const getBlogs = async (options: GetBlogsOptions = {}) => {
  const params = new URLSearchParams();
  params.set("page", String(options.page ?? 1));
  params.set("limit", String(options.limit ?? 12));

  if (options.search) params.set("search", options.search);
  if (options.tags?.length) params.set("tags", options.tags.join(","));
  if (options.sortBy) params.set("sortBy", options.sortBy);
  if (options.sortOrder) params.set("sortOrder", options.sortOrder);

  const data = await apiFetch<BlogListItem[]>(`/blogs?${params.toString()}`, {
    next: { revalidate: options.revalidate ?? 300 },
  });

  return data.map(toBlogPost);
};

export const getBlogBySlug = async (slug: string, revalidate = 300) => {
  try {
    const data = await apiFetch<BlogDetail>(`/blogs/slug/${slug}`, {
      next: { revalidate },
    });

    return toBlogPost(data);
  } catch {
    return null;
  }
};
