"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectCardProps } from "../types";
import { ArrowUpRightIcon } from "@/modules/shared/components/Icons";
import { fadeInUp, hoverScale } from "@/modules/shared/hooks/useAnimations";

// Border color cycle for project cards
const borderColors = [
  "border-[#E87B54]",
  "border-[#E87B54]",
  "border-[#8B5CF6]",
];

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const borderColor = borderColors[index % borderColors.length];
  const projectLink = project.liveUrl || project.githubUrl || project.link || "#";
  const technologies = project.technologies?.slice(0, 4) ?? [];
  const extraTechCount =
    project.technologies && project.technologies.length > technologies.length
      ? project.technologies.length - technologies.length
      : 0;

  return (
    <motion.a
      href={projectLink}
      className="group flex items-center gap-6 py-4 border-b border-border/30 last:border-b-0"
      variants={fadeInUp}
      whileHover={hoverScale}
    >
      {/* Project Image */}
      <motion.div
        className={`relative w-24 h-28 md:w-28 md:h-32 rounded-lg overflow-hidden border-2 ${borderColor} flex-shrink-0`}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Project Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="rounded-full border border-border/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Featured
            </span>
          )}
          {project.year && (
            <span className="text-xs text-muted-foreground">{project.year}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {project.description}
        </p>
        {technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/50 px-3 py-1 text-xs text-foreground/80"
              >
                {tech}
              </span>
            ))}
            {extraTechCount > 0 && (
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">
                +{extraTechCount} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Arrow */}
      <motion.div
        className="flex-shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <ArrowUpRightIcon size={24} />
      </motion.div>
    </motion.a>
  );
};
