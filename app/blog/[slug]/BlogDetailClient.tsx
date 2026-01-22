"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation, NavigationProvider, ProfileCard, useNavigationStore } from "@/modules/shared";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import type { BlogPost } from "@/modules/shared/types";

const bodySections = [
  {
    title: "What does a career in web design involve?",
    copy:
      "A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.",
  },
  {
    title: "Full-stack, back-end, and front-end web development",
    copy:
      "Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.",
  },
  {
    title: "Are web designers in demand?",
    copy:
      "In our ever-increasingly digital environment, there is a constant need for websites. Web designers with significant coding experience are typically in higher demand and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others.",
  },
];

interface BlogDetailClientProps {
  post: BlogPost;
}

const BlogDetailContent = ({ post }: BlogDetailClientProps) => {
  const { setActiveSection } = useNavigationStore();

  useEffect(() => {
    setActiveSection("blogs");
  }, [setActiveSection]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <Navigation />

      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-32">
        <motion.div
          className="grid gap-10 lg:grid-cols-[340px_1fr]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.aside className="flex justify-center lg:justify-start" variants={fadeInUp}>
            <div className="lg:sticky lg:top-24 h-fit">
              <ProfileCard />
            </div>
          </motion.aside>

          <motion.div className="space-y-10" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/blogs"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              >
                Back to all blogs
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-secondary/40">
                <div className="relative h-[240px] w-full md:h-[320px]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="text-base text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>
            </motion.div>

            <motion.div className="space-y-10" variants={staggerContainer}>
              {bodySections.map((section) => (
                <motion.div key={section.title} className="space-y-4" variants={fadeInUp}>
                  <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {section.copy}
                  </p>
                </motion.div>
              ))}

              <motion.div
                className="rounded-3xl border border-border/60 bg-secondary/40 p-8"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-foreground">
                  Ready to build something bold?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Let’s talk about your next product, platform, or experience.
                </p>
                <div className="mt-6">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/40"
                  >
                    Start a Project
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export function BlogDetailClient({ post }: BlogDetailClientProps) {
  return (
    <NavigationProvider>
      <BlogDetailContent post={post} />
    </NavigationProvider>
  );
}
