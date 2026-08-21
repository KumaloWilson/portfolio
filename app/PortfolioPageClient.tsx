"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { BlogPost, Section } from "@/modules/shared/types";
import { Navigation, NavigationProvider, ProfileCard, useNavigationStore } from "@/modules/shared";
import { HomeScreen } from "@/modules/home";
import { ProjectsScreen } from "@/modules/projects";
import { ExperienceScreen } from "@/modules/experience";
import { ToolsScreen } from "@/modules/tools";
import { ContactScreen } from "@/modules/contact";

function SectionObserver({
  id,
  children,
}: {
  id: Exclude<Section, "blogs">;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    margin: "-15% 0px -15% 0px",
  });
  const setActiveSection = useNavigationStore((state) => state.setActiveSection);

  useEffect(() => {
    if (isInView) setActiveSection(id);
  }, [id, isInView, setActiveSection]);

  return (
    <div id={id} ref={ref} className="scroll-mt-24">
      {children}
    </div>
  );
}

function PortfolioContent({ recentPosts }: { recentPosts: BlogPost[] }) {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-24 md:pb-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <aside className="lg:w-[380px] flex-shrink-0">
            <ProfileCard />
          </aside>

          <div className="flex-1 min-w-0">
            <SectionObserver id="home">
              <HomeScreen />
            </SectionObserver>
            <SectionObserver id="projects">
              <ProjectsScreen />
            </SectionObserver>
            <SectionObserver id="experience">
              <ExperienceScreen />
            </SectionObserver>
            <SectionObserver id="tools">
              <ToolsScreen initialPosts={recentPosts} />
            </SectionObserver>
            <SectionObserver id="contact">
              <ContactScreen />
            </SectionObserver>
          </div>
        </div>
      </div>
    </main>
  );
}

export function PortfolioPageClient({ recentPosts }: { recentPosts: BlogPost[] }) {
  return (
    <NavigationProvider>
      <PortfolioContent recentPosts={recentPosts} />
    </NavigationProvider>
  );
}
