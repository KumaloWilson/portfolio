import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/api/blogs";
import { BlogDetailClient } from "./BlogDetailClient";
import { siteConfig } from "@/lib/site";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const toAbsoluteUrl = (url?: string) => {
  if (!url) return undefined;
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `${siteConfig.url}${url.startsWith("/") ? "" : "/"}${url}`;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = toAbsoluteUrl(post.headlineImage || post.image || siteConfig.ogImage);
  const metaTitle = post.metaTitle || post.title;
  const metaDescription = post.metaDescription || post.excerpt || siteConfig.description;
  const publishedAt = post.publishedAt || undefined;
  const modifiedAt = post.updatedAt || undefined;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": metaTitle,
    "description": metaDescription,
    "image": imageUrl,
    "datePublished": publishedAt || modifiedAt || undefined,
    "dateModified": modifiedAt || undefined,
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteConfig.url}/blogs`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogSchema, breadcrumbSchema]),
        }}
      />
      <BlogDetailClient post={post} />
    </>
  );
}

export async function generateMetadata(
  { params }: BlogDetailPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = toAbsoluteUrl(post.headlineImage || post.image || siteConfig.ogImage);
  const metaTitle = post.metaTitle || post.title;
  const metaDescription = post.metaDescription || post.excerpt || siteConfig.description;
  const publishedAt = post.publishedAt || undefined;
  const modifiedAt = post.updatedAt || undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.tags,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [
        {
          url: imageUrl || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl || siteConfig.ogImage],
    },
  };
}
