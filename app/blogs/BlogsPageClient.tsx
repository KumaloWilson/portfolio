"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPostsData } from "@/modules/shared/services/data.service";
import { BlogCard } from "@/modules/tools/components/BlogCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import { Navigation, NavigationProvider, useNavigationStore } from "@/modules/shared";

const BlogsPageContent = () => {
  const featuredPost = blogPostsData[0];
  const { setActiveSection } = useNavigationStore();

  useEffect(() => {
    setActiveSection("blogs");
  }, [setActiveSection]);

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
                {blogPostsData.length}
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Latest Topic
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                {featuredPost?.title || "Fresh Updates"}
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
              className="mt-12 rounded-3xl border border-border/50 bg-secondary/40 p-8"
              variants={fadeInUp}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Featured
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                {featuredPost.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  {featuredPost.date} • {featuredPost.readTime}
                </span>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/40"
                >
                  Read Featured
                </Link>
              </div>
            </motion.div>
          )}

          <motion.div className="mt-12" variants={staggerContainer}>
            {blogPostsData.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export function BlogsPageClient() {
  return (
    <NavigationProvider>
      <BlogsPageContent />
    </NavigationProvider>
  );
}
