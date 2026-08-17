import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, LockKeyhole } from "lucide-react";
import { caseStudies } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";
import { PageChrome, ProfileCard } from "@/modules/shared";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return { title: "Case Study Not Found", robots: { index: false, follow: false } };
  const url = `${siteConfig.url}/work/${study.slug}`;
  return {
    title: study.shortTitle,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: study.title, description: study.summary, images: [siteConfig.ogImage] },
    twitter: { card: "summary_large_image", title: study.title, description: study.summary, images: [siteConfig.ogImage] },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const studyIndex = caseStudies.findIndex((item) => item.slug === slug);
  if (studyIndex < 0) notFound();

  const study = caseStudies[studyIndex];
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];
  const canonicalUrl = `${siteConfig.url}/work/${study.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: canonicalUrl,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    keywords: study.stack.join(", "),
  };

  return (
    <PageChrome>
      <main id="main-content" className="min-h-screen bg-background">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-24 md:pb-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-[380px] flex-shrink-0">
              <ProfileCard />
            </aside>

            <article className="min-w-0 flex-1 py-8">
              <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All case studies
              </Link>

              <header className="mt-10 border-b border-border/30 pb-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-border/60 bg-secondary/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{study.status}</span>
                  <span className="text-xs text-muted-foreground">{study.eyebrow}</span>
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">{study.title}</h1>
                <p className="mt-6 text-base leading-8 text-muted-foreground">{study.summary}</p>
                <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/40 bg-secondary/30 p-5"><dt className="text-[10px] uppercase tracking-[0.2em] text-primary">My role</dt><dd className="mt-2 text-sm text-foreground">{study.role}</dd></div>
                  <div className="rounded-2xl border border-border/40 bg-secondary/30 p-5"><dt className="text-[10px] uppercase tracking-[0.2em] text-primary">Period</dt><dd className="mt-2 text-sm text-foreground">{study.period}</dd></div>
                </dl>
              </header>

              <div className="space-y-20 py-14">
                <section>
                  <SectionHeading primary="PROJECT" secondary="OVERVIEW" />
                  <p className="mt-6 text-xl font-medium leading-9 text-foreground">{study.overview}</p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <InfoCard title="The problem" copy={study.problem} />
                    <InfoCard title="My responsibility" copy={study.responsibility} />
                  </div>
                </section>

                <section>
                  <SectionHeading primary="REAL-WORLD" secondary="CONSTRAINTS" />
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {study.constraints.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-secondary/20 p-5 text-sm leading-6 text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionHeading primary="SOLUTION &" secondary="CONTRIBUTION" />
                  <p className="mt-6 text-base leading-8 text-muted-foreground">{study.solution}</p>
                  <ol className="mt-8 space-y-1">
                    {study.contributions.map((item, index) => (
                      <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border/30 py-4 text-sm leading-6 text-muted-foreground">
                        <span className="font-semibold text-primary">0{index + 1}</span><span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="rounded-2xl border border-border/40 bg-secondary/30 p-6 md:p-8">
                  <SectionHeading primary="SANITISED" secondary="ARCHITECTURE" />
                  <div className="mt-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                    {study.architecture.map((node, index) => (
                      <div key={node} className="contents">
                        <div className="grid min-h-24 place-items-center rounded-xl border border-primary/35 bg-background p-4 text-center text-sm font-medium text-foreground">{node}</div>
                        {index < study.architecture.length - 1 && <div className="grid place-items-center text-primary" aria-hidden="true"><ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" /></div>}
                      </div>
                    ))}
                  </div>
                  {study.confidentiality && (
                    <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                      <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" /> Certain implementation details and screens are intentionally anonymised to protect organisational and user data.
                    </p>
                  )}
                </section>

                <section className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#1E40AF] p-6 text-white md:p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Engineering challenge</p>
                    <p className="mt-8 text-base leading-8 text-white/90">{study.engineeringChallenge}</p>
                  </div>
                  <div className="rounded-2xl bg-[#BEFF46] p-6 text-gray-900 md:p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-900/60">Observable outcomes</p>
                    <ul className="mt-8 space-y-4">
                      {study.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-sm leading-6"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {outcome}</li>)}
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Technology used</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.stack.map((item) => <span key={item} className="rounded-full border border-border/60 px-4 py-2 text-sm text-foreground/75">{item}</span>)}
                  </div>
                </section>

                <section className="rounded-2xl bg-primary p-7 text-primary-foreground md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-65">Next case study</p>
                  <Link href={`/work/${nextStudy.slug}`} className="mt-5 flex items-end justify-between gap-6">
                    <span className="text-2xl font-semibold leading-tight md:text-3xl">{nextStudy.shortTitle}</span>
                    <ArrowRight className="h-6 w-6 shrink-0" aria-hidden="true" />
                  </Link>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>
    </PageChrome>
  );
}

function SectionHeading({ primary, secondary }: { primary: string; secondary: string }) {
  return (
    <h2 className="text-3xl font-bold md:text-4xl">
      <span className="text-foreground">{primary}</span>{" "}
      <span className="text-muted-foreground">{secondary}</span>
    </h2>
  );
}

function InfoCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-border/40 bg-secondary/30 p-6">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
    </div>
  );
}
