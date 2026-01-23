"use client";

import React, { useEffect, useState } from "react";
import type { BlogPost } from "@/modules/shared/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { getBlogs } from "@/lib/api/blogs";
import { BlogListCard } from "./BlogListCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import { Navigation, NavigationProvider, useNavigationStore } from "@/modules/shared";

const BlogsPageContent = ({ posts }: { posts: BlogPost[] }) => {
  const [clientPosts, setClientPosts] = useState<BlogPost[]>(posts);
  const [isLoading, setIsLoading] = useState(posts.length === 0);
  const featuredPost = clientPosts[0];
  const { setActiveSection } = useNavigationStore();

  useEffect(() => {
    setActiveSection("blogs");
  }, [setActiveSection]);

  useEffect(() => {
    if (posts.length > 0) return;
    let isMounted = true;

    setIsLoading(true);
    getBlogs({ limit: 50 })
      .then((data) => {
        if (isMounted) setClientPosts(data);
      })
      .catch(() => {
        // Keep empty state if fetch fails.
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [posts.length]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <Navigation />

      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="mb-12 space-y-6" variants={fadeInUp}>
            <span className="inline-flex items-center rounded-full border border-border/60 bg-secondary/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Thoughts & Experiments
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">ALL</span>
              <br />
              <span className="text-muted-foreground">BLOGS</span>
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              A full archive of thoughts, write-ups, and deep dives from recent projects.
            </p>
          </motion.div>

          <motion.div className="grid gap-4 sm:grid-cols-3" variants={fadeInUp}>
            <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Total Posts
              </p>
              <p className="mt-2 text-3xl font-semibold text-foreground">
                {clientPosts.length}
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Latest Topic
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                {featuredPost?.title || (isLoading ? "Loading..." : "Fresh Updates")}
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Reading Focus
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                Systems, Flutter, and Product Thinking
              </p>
            </div>
          </motion.div>

          {featuredPost && (
            <motion.div
              className="mt-12 overflow-hidden rounded-3xl border border-border/50 bg-secondary/40"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <div className="relative min-h-[280px] lg:min-h-[320px]">
                  <img
                    src={featuredPost.headlineImage || featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 px-8 pb-8 pt-6">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Featured
                    </p>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {featuredPost.date} • {featuredPost.readTime}
                    </span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/40"
                    >
                      Read Featured
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              className="mt-12 rounded-3xl border border-border/50 bg-secondary/40 p-8 text-center text-sm text-muted-foreground"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              Loading blogs...
            </motion.div>
          )}
          {!isLoading && clientPosts.length === 0 && (
            <motion.div
              className="mt-12 rounded-3xl border border-border/50 bg-secondary/40 p-8 text-center text-sm text-muted-foreground"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              No blog posts yet. Check back soon.
            </motion.div>
          )}
          {!isLoading && clientPosts.length > 0 && (
            <motion.div
              className="mt-12 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {clientPosts.map((post, index) => (
                <BlogListCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export function BlogsPageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <NavigationProvider>
      <BlogsPageContent posts={posts} />
    </NavigationProvider>
  );
}
