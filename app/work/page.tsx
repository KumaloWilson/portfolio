import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";
import { ArrowUpRightIcon } from "@/modules/shared/components/Icons";
import { PageChrome, ProfileCard } from "@/modules/shared";

export const metadata: Metadata = {
  title: "Engineering Case Studies",
  description: "Selected work by Wilson Kumalo across digital health, offline-first products, systems integration and platform engineering.",
  alternates: { canonical: `${siteConfig.url}/work` },
  openGraph: {
    title: `Engineering Case Studies | ${siteConfig.name}`,
    description: "Digital health, offline-first products, systems integration and platform engineering.",
    url: `${siteConfig.url}/work`,
    images: [siteConfig.ogImage],
  },
};

const borderColors = ["border-[#E87B54]", "border-[#BEFF46]", "border-[#8B5CF6]"];

export default function WorkPage() {
  return (
    <PageChrome>
      <main id="main-content" className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-24 md:pb-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-[380px] flex-shrink-0">
              <ProfileCard />
            </aside>

            <section className="min-w-0 flex-1 py-8" aria-labelledby="work-page-heading">
              <h1 id="work-page-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">ENGINEERING</span>
                <br />
                <span className="text-muted-foreground">CASE STUDIES</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
                Detailed accounts of the problem, my responsibility, design trade-offs and observable outcomes behind selected professional work.
              </p>

              <div className="mt-10 space-y-2">
                {caseStudies.map((study, index) => (
                  <Link key={study.slug} href={`/work/${study.slug}`} className="group flex items-center gap-5 border-b border-border/30 py-5">
                    <div className={`flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-lg border-2 bg-secondary/50 ${borderColors[index % borderColors.length]}`}>
                      <span className="text-2xl font-bold text-foreground">0{index + 1}</span>
                      <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Study</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">{study.shortTitle}</h2>
                        <span className="rounded-full border border-border/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{study.status}</span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{study.summary}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-primary">{study.role} · {study.period}</p>
                    </div>
                    <span className="shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true"><ArrowUpRightIcon size={24} /></span>
                  </Link>
                ))}
              </div>

              <p className="mt-10 text-xs leading-5 text-muted-foreground">
                Some implementation details are intentionally sanitised to protect organisational, clinical and user data.
              </p>
            </section>
          </div>
        </div>
      </main>
    </PageChrome>
  );
}
