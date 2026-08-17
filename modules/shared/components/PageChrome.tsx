"use client";

import type { ReactNode } from "react";
import { NavigationProvider } from "../state/navigation.state";
import { Navigation } from "./Navigation";

export function PageChrome({ children }: { children: ReactNode }) {
  return (
    <NavigationProvider>
      <Navigation />
      {children}
    </NavigationProvider>
  );
}
