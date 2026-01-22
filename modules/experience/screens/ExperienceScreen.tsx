"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/modules/shared/services/data.service";
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
            <span className="text-foreground">12 YEARS OF</span>
            <br />
            <span className="text-muted-foreground">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Experience List */}
        <motion.div variants={staggerContainer}>
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
