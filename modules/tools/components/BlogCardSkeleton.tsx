"use client";

import React from "react";

const shimmerClasses =
  "relative overflow-hidden rounded-3xl border border-border/40 bg-secondary/40 p-6";

const shimmerBar = "h-3 rounded-full bg-muted/60";

export const BlogCardSkeleton: React.FC = () => {
  return (
    <div className={shimmerClasses} aria-hidden="true">
      <div className="absolute inset-0 animate-[shimmer_2.2s_infinite] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      <div className="relative space-y-4">
        <div className="h-5 w-2/3 rounded-full bg-muted/70" />
        <div className="space-y-2">
          <div className={shimmerBar} />
          <div className={`${shimmerBar} w-5/6`} />
          <div className={`${shimmerBar} w-2/3`} />
        </div>
        <div className="flex gap-4">
          <div className="h-3 w-20 rounded-full bg-muted/60" />
          <div className="h-3 w-16 rounded-full bg-muted/60" />
        </div>
      </div>
    </div>
  );
};
