"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ExperienceCardProps } from "../types";
import { ArrowUpRightIcon } from "@/modules/shared/components/Icons";
import { fadeInUp, hoverScale } from "@/modules/shared/hooks/useAnimations";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.a
      href={experience.link}
      className="group block py-6 border-b border-border/30 last:border-b-0"
      variants={fadeInUp}
      whileHover={hoverScale}
      custom={index}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Company Name */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {experience.company}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed max-w-xl">
            {experience.description}
          </p>

          {/* Date Range */}
          <p className="text-sm text-muted-foreground mt-4">
            {experience.startDate} - {experience.endDate}
          </p>
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
