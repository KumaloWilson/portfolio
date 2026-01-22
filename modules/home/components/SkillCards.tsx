"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCardsData } from "@/modules/shared/services/data.service";
import { fadeInUp, staggerContainer, hoverScale } from "@/modules/shared/hooks/useAnimations";
import { LayersIcon, GridIcon, ArrowRightIcon } from "@/modules/shared/components/Icons";

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  layers: LayersIcon,
  grid: GridIcon,
};

export const SkillCards: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {skillCardsData.map((card) => {
        const IconComponent = iconMap[card.icon];
        return (
          <motion.div
            key={card.id}
            className={`relative ${card.bgColor} rounded-2xl p-6 min-h-[180px] overflow-hidden cursor-pointer group`}
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            {/* Decorative SVG lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 200 180"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M20 160 L60 40 L100 140 L140 60 L180 160"
                stroke="currentColor"
                strokeWidth="2"
                className={card.textColor}
                fill="none"
              />
              <path
                d="M30 150 L70 50 L110 130 L150 70 L190 150"
                stroke="currentColor"
                strokeWidth="2"
                className={card.textColor}
                fill="none"
              />
            </svg>

            {/* Icon */}
            <div className="relative z-10 mb-12">
              {IconComponent && (
                <IconComponent className={card.textColor} size={28} />
              )}
            </div>

            {/* Title */}
            <h3 className={`relative z-10 text-sm font-semibold ${card.textColor} uppercase tracking-wide max-w-[180px]`}>
              {card.title}
            </h3>

            {/* Arrow */}
            <motion.div
              className={`absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 ${
                card.id === "1" ? "border-white/50" : "border-gray-900/30"
              } flex items-center justify-center`}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRightIcon className={card.textColor} size={18} />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
