"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Section } from "../types";

interface NavigationState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavigationContext = createContext<NavigationState | null>(null);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSectionState] = useState<Section>("home");

  const setActiveSection = useCallback((section: Section) => {
    setActiveSectionState(section);
  }, []);

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationStore(): NavigationState;
export function useNavigationStore<T>(selector: (state: NavigationState) => T): T;
export function useNavigationStore<T>(selector?: (state: NavigationState) => T) {
  const context = useContext(NavigationContext);
  
  if (!context) {
    // Return default values if not in provider (for SSR)
    const defaultState: NavigationState = {
      activeSection: "home",
      setActiveSection: () => {},
    };
    return selector ? selector(defaultState) : defaultState;
  }
  
  return selector ? selector(context) : context;
}
