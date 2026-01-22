"use client";

import React from "react";
import { motion } from "framer-motion";
import { toolsData, blogPostsData } from "@/modules/shared/services/data.service";
import { ToolCard } from "../components/ToolCard";
import { BlogCard } from "../components/BlogCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ToolsScreen: React.FC = () => {
  return (
    <section id="tools" className="py-20">
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
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">RECENT</span>
            <br />
            <span className="text-muted-foreground">BLOGS</span>
          </h2>
        </motion.div>

        {/* Blog Posts */}
        <motion.div variants={staggerContainer}>
          {blogPostsData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
