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
  // Using a smaller amount and a larger rootMargin (via margin) to trigger earlier on mobile
  const isInView = useInView(ref, { 
    amount: 0.1,
    margin: "-15% 0px -15% 0px" 
  });
  const setActiveSection = useNavigationStore((state) => state.setActiveSection);

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <div id={id} ref={ref} className="scroll-mt-24">
      {children}
    </div>
  );
}

function PortfolioContent() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-24 md:pb-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Sidebar - Profile Card (Fixed on desktop) */}
          <aside className="lg:w-[380px] flex-shrink-0">
            <ProfileCard />
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
