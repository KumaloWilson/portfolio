"use client";

import React from "react";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { SkillCards } from "../components/SkillCards";
import { AchievementsSection } from "../components/AchievementsSection";

export const HomeScreen: React.FC = () => {
  return (
    <section id="home" className="min-h-screen py-8">
      <div className="space-y-12">
        <HeroSection />
        <StatsSection />
        <AchievementsSection />
        <SkillCards />
      </div>
    </section>
  );
};
