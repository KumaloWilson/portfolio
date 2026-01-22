"use client";

import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "@/modules/shared/services/data.service";
import { ExperienceCard } from "../components/ExperienceCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ExperienceScreen: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">CAREER</span>
            <br />
            <span className="text-muted-foreground">TIMELINE</span>
          </h2>
        </motion.div>

        {/* Experience List */}
        <motion.div variants={staggerContainer}>
          {timelineData.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.year}`}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
