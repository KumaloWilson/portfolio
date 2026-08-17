"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { capabilities } from "@/lib/portfolio";
import type { BlogPost } from "@/modules/shared/types";
import { BlogCard } from "../components/BlogCard";
import { fadeInUp, hoverScale, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ToolsScreen: React.FC<{ initialPosts?: BlogPost[] }> = ({ initialPosts = [] }) => (
  <section className="py-20" aria-labelledby="capabilities-heading">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="mb-20"
    >
      <motion.div className="mb-10" variants={fadeInUp}>
        <h2 id="capabilities-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-foreground">CORE ENGINEERING</span>
          <br />
          <span className="text-muted-foreground">CAPABILITIES</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          The technologies matter because of the problems they solve. These are the areas I use to deliver dependable products from interface to infrastructure.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2" variants={staggerContainer}>
        {capabilities.map((capability, index) => (
          <motion.article
            key={capability.title}
            className="group rounded-xl bg-card p-5 transition-colors hover:bg-card/90"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background text-sm font-bold text-primary">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {capability.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-card-foreground/65">{capability.description}</p>
                <p className="mt-3 text-xs leading-5 text-card-foreground/50">{capability.tools.join(" · ")}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" variants={fadeInUp}>
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">RECENT</span>
            <br />
            <span className="text-muted-foreground">BLOGS</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm text-muted-foreground">Technical notes from the systems, products and decisions behind the work.</p>
        </div>
        <Link href="/blogs" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
          More Blogs
        </Link>
      </motion.div>

      {initialPosts.length > 0 ? (
        <motion.div variants={staggerContainer}>
          {initialPosts.map((post, index) => <BlogCard key={post.id} post={post} index={index} />)}
        </motion.div>
      ) : (
        <motion.div variants={fadeInUp} className="rounded-3xl border border-border/50 bg-secondary/40 p-8 text-sm text-muted-foreground">
          No blog posts yet. Check back soon or follow along on socials.
        </motion.div>
      )}
    </motion.div>
  </section>
);
