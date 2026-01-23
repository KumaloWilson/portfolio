"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toolsData } from "@/modules/shared/services/data.service";
import { getBlogs } from "@/lib/api/blogs";
import { ToolCard } from "../components/ToolCard";
import type { BlogPost } from "@/modules/shared/types";
import { BlogCard } from "../components/BlogCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ToolsScreen: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getBlogs({ limit: 3 })
      .then((data) => {
        if (isMounted) setPosts(data);
      })
      .catch(() => {
        // Silent fail to avoid breaking the homepage
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20">
      {/* Premium Tools Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-20"
      >
        {/* Section Header */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">PREMIUM</span>
            <br />
            <span className="text-muted-foreground">TOOLS</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          {toolsData.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>
      </motion.div>

      {/* Design Thoughts / Blog Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">RECENT</span>
            <br />
            <span className="text-muted-foreground">BLOGS</span>
          </h2>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/40"
          >
            More Blogs
          </Link>
        </motion.div>

        {/* Blog Posts */}
        {isLoading && (
          <p className="text-sm text-muted-foreground">Loading recent posts...</p>
        )}
        {!isLoading && posts.length === 0 && (
          <p className="text-sm text-muted-foreground">No blog posts yet.</p>
        )}
        <motion.div variants={staggerContainer}>
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
