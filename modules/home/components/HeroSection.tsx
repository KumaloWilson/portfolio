"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const HeroSection: React.FC = () => {
  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-foreground">SOFTWARE</span>
          <br />
          <span className="text-muted-foreground">ENGINEER</span>
        </h1>
      </motion.div>

      <motion.p
        className="text-muted-foreground text-lg max-w-md leading-relaxed"
        variants={fadeInUp}
      >
        Passionate about creating intuitive and engaging user experiences. 
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>
    </motion.div>
  );
};
