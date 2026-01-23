import React from "react";

const StatSkeleton = () => (
  <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
    <div className="h-3 w-24 rounded-full bg-muted/60" />
    <div className="mt-4 h-7 w-20 rounded-full bg-muted/70" />
  </div>
);

const FeaturedSkeleton = () => (
  <div className="rounded-3xl border border-border/50 bg-secondary/40 p-8">
    <div className="h-3 w-24 rounded-full bg-muted/60" />
    <div className="mt-5 h-7 w-2/3 rounded-full bg-muted/70" />
    <div className="mt-4 space-y-2">
      <div className="h-3 w-full rounded-full bg-muted/60" />
      <div className="h-3 w-5/6 rounded-full bg-muted/60" />
    </div>
    <div className="mt-6 h-8 w-28 rounded-full bg-muted/70" />
  </div>
);

const BlogRowSkeleton = () => (
  <div className="rounded-3xl border border-border/40 bg-secondary/40 p-6">
    <div className="h-5 w-2/3 rounded-full bg-muted/70" />
    <div className="mt-4 space-y-2">
      <div className="h-3 w-full rounded-full bg-muted/60" />
      <div className="h-3 w-5/6 rounded-full bg-muted/60" />
      <div className="h-3 w-2/3 rounded-full bg-muted/60" />
    </div>
    <div className="mt-5 flex gap-3">
      <div className="h-3 w-20 rounded-full bg-muted/60" />
      <div className="h-3 w-16 rounded-full bg-muted/60" />
    </div>
  </div>
);

export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-32">
        <div className="animate-[pulse_1.8s_ease-in-out_infinite] space-y-12">
          <div className="space-y-6">
            <div className="h-6 w-40 rounded-full bg-muted/60" />
            <div className="h-12 w-64 rounded-full bg-muted/70" />
            <div className="h-4 w-2/3 rounded-full bg-muted/60" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <StatSkeleton />
            <StatSkeleton />
            <StatSkeleton />
          </div>

          <FeaturedSkeleton />

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <BlogRowSkeleton key={`blog-row-skeleton-${index}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
