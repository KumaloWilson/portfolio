"use client";

import React from "react";
import { motion } from "framer-motion";
import { achievementsData } from "@/modules/shared/services/data.service";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const AchievementsSection: React.FC = () => {
  return (
    <motion.section
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Key Achievements
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Certifications, leadership, and community contributions that define my recent growth.
        </p>
      </motion.div>

      <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerContainer}>
        {achievementsData.map((achievement) => {
          const Icon = achievement.icon as React.ElementType;
          return (
            <motion.div
              key={achievement.title}
              className="flex items-center gap-4 rounded-2xl border border-border/40 bg-secondary/30 p-5"
              variants={fadeInUp}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/40 bg-background/60 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {achievement.year}
                </p>
                <p className="text-base font-semibold text-foreground">{achievement.title}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};
