"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

// Shared components
import { Navigation, ProfileCard, NavigationProvider } from "@/modules/shared";
import { useNavigationStore } from "@/modules/shared";

// Module screens
import { HomeScreen } from "@/modules/home";
import { ProjectsScreen } from "@/modules/projects";
import { ExperienceScreen } from "@/modules/experience";
import { ToolsScreen } from "@/modules/tools";
import { ContactScreen } from "@/modules/contact";

// Section wrapper component that updates navigation state
function SectionObserver({
  id,
  children,
}: {
  id: "home" | "projects" | "experience" | "tools" | "contact";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const setActiveSection = useNavigationStore((state) => state.setActiveSection);

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return <div ref={ref}>{children}</div>;
}

function PortfolioContent() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Profile Card (Fixed on desktop) */}
          <aside className="lg:w-[350px] flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <ProfileCard />
            </div>
          </aside>

          {/* Right Content - Scrollable Sections */}
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
              <ToolsScreen />
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

export default function PortfolioPage() {
  return (
    <NavigationProvider>
      <PortfolioContent />
    </NavigationProvider>
  );
}
