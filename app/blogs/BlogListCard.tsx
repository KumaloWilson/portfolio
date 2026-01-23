"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/modules/shared/types";
import { fadeInUp, hoverScale } from "@/modules/shared/hooks/useAnimations";

interface BlogListCardProps {
  post: BlogPost;
  index: number;
}

const tagClasses =
  "rounded-full border border-border/50 bg-secondary/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground";

export const BlogListCard: React.FC<BlogListCardProps> = ({ post, index }) => {
  const coverImage = post.headlineImage || post.image || "/placeholder.svg";

  return (
    <motion.article
      className="group overflow-hidden rounded-3xl border border-border/50 bg-secondary/40"
      variants={fadeInUp}
      whileHover={hoverScale}
      custom={index}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="relative min-h-[220px]">
          <Image
            src={coverImage}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-between gap-6 px-6 pb-6 pt-2 lg:pt-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags?.slice(0, 3).map((tag) => (
                <span key={tag} className={tagClasses}>
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            {post.authorName && <span>by {post.authorName}</span>}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
