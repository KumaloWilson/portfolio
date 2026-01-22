"use client";

import React from "react";
import { motion } from "framer-motion";
import type { BlogCardProps } from "../types";
import { ArrowUpRightIcon } from "@/modules/shared/components/Icons";
import { fadeInUp, hoverScale } from "@/modules/shared/hooks/useAnimations";

export const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.a
      href={`/blog/${post.slug}`}
      className="group block py-6 border-b border-border/30 last:border-b-0"
      variants={fadeInUp}
      whileHover={hoverScale}
      custom={index}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-2"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowUpRightIcon size={24} />
        </motion.div>
      </div>
    </motion.a>
  );
};
