import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/30 blur-[110px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/25 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Lost In Transit
        </p>
        <div className="mt-6 flex items-center gap-4">
          <span className="h-px w-10 bg-border" />
          <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            Error 404
          </span>
          <span className="h-px w-10 bg-border" />
        </div>

        <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          The path you followed slipped off the map. Let&apos;s get you back to
          the portfolio with a fresh route.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/40"
          >
            Return Home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center rounded-full border border-border/80 px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:border-primary/60 hover:text-foreground"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Possible Causes
            </p>
            <p className="mt-2 text-sm text-foreground/80">
              Mistyped URL, stale bookmark, or a page that moved during a
              refresh.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Quick Route
            </p>
            <p className="mt-2 text-sm text-foreground/80">
              Head back to the homepage or jump straight to recent work.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
