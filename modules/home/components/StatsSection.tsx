"use client";

import React from "react";
import { motion } from "framer-motion";
import { statsData } from "@/modules/shared/services/data.service";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const StatsSection: React.FC = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-8 md:gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          className="text-left"
          variants={fadeInUp}
        >
          <motion.span
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {stat.value}
          </motion.span>
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-2">
            {stat.label}
            {stat.sublabel && (
              <>
                <br />
                {stat.sublabel}
              </>
            )}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
