"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/modules/shared/services/data.service";
import { ProjectCard } from "../components/ProjectCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ProjectsScreen: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">FEATURED OPEN</span>
            <br />
            <span className="text-muted-foreground">SOURCE PROJECTS</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <motion.div
          className="space-y-2"
          variants={staggerContainer}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
