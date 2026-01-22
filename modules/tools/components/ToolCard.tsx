"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ToolCardProps } from "../types";
import {
  FramerIcon,
  FigmaIcon,
  LemonIcon,
  ChatGPTIcon,
  NotionIcon,
  NextjsIcon,
} from "@/modules/shared/components/Icons";
import { fadeInUp, hoverScale } from "@/modules/shared/hooks/useAnimations";

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  framer: FramerIcon,
  figma: FigmaIcon,
  lemon: LemonIcon,
  chatgpt: ChatGPTIcon,
  notion: NotionIcon,
  nextjs: NextjsIcon,
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  const IconComponent = iconMap[tool.icon];

  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors cursor-pointer group"
      variants={fadeInUp}
      whileHover={hoverScale}
      custom={index}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
        {IconComponent && <IconComponent size={24} className="text-card-foreground" />}
      </div>

      {/* Info */}
      <div>
        <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {tool.name}
        </h4>
        <p className="text-sm text-muted-foreground">
          {tool.description}
        </p>
      </div>
    </motion.div>
  );
};
