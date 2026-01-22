"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useNavigationStore } from "../state/navigation.state";
import type { Section } from "../types";
import {
  HomeIcon,
  ProjectsIcon,
  ExperienceIcon,
  ToolsIcon,
  BlogsIcon,
  ContactIcon,
} from "./Icons";

interface NavItem {
  id: Section;
  icon: React.FC<{ className?: string; size?: number }>;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", icon: HomeIcon, label: "Home" },
  { id: "projects", icon: ProjectsIcon, label: "Projects" },
  { id: "experience", icon: ExperienceIcon, label: "Experience" },
  { id: "tools", icon: ToolsIcon, label: "Tools" },
  { id: "blogs", icon: BlogsIcon, label: "Blogs" },
  { id: "contact", icon: ContactIcon, label: "Contact" },
];

export const Navigation: React.FC = () => {
  const { activeSection, setActiveSection } = useNavigationStore();
  const router = useRouter();

  const handleNavClick = (sectionId: Section) => {
    setActiveSection(sectionId);
    if (sectionId === "blogs") {
      router.push("/blogs");
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:top-6 md:bottom-auto"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-1 md:gap-2 bg-secondary/80 backdrop-blur-md rounded-full px-3 py-2 md:px-4 md:py-3 border border-border shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative p-2 md:p-2.5 rounded-full transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  layoutId="navIndicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon size={18} className="relative z-10 md:hidden" />
              <item.icon size={20} className="relative z-10 hidden md:block" />
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
