import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Download } from "lucide-react";
import { caseStudies, education, recognition } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";
import { PageChrome, ProfileCard } from "@/modules/shared";

export const metadata: Metadata = {
  title: "About",
  description: "About Wilson Kumalo, a Zimbabwean software and systems engineer specialising in digital health, education technology and offline-first platforms.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { title: `About | ${siteConfig.name}`, description: siteConfig.description, url: `${siteConfig.url}/about`, images: [siteConfig.ogImage] },
};

const principles = [
  "Design for failure states, not only the happy path.",
  "Treat offline operation as a product capability.",
  "Keep security and data boundaries explicit.",
  "Make operational state visible to the people responsible for it.",
];

export default function AboutPage() {
  return (
    <PageChrome>
      <main id="main-content" className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-24 md:pb-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-[380px] flex-shrink-0">
              <ProfileCard />
            </aside>

            <div className="min-w-0 flex-1 py-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">ABOUT</span>
                <br />
                <span className="text-muted-foreground">WILSON</span>
              </h1>

              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                <p>I am a Zimbabwean software and systems engineer specialising in digital health, education technology and offline-first platforms. My work focuses on systems that must remain dependable despite unreliable connectivity, older hardware and complex operational workflows.</p>
                <p>I work across mobile, web, backend services, databases and deployment infrastructure. Recent work includes neonatal digital health systems, national EHR integrations, distributed application-update infrastructure, recruitment platforms and offline educational technology.</p>
                <p>I graduated with a First Class BSc (Hons) in Information Technology from Chinhoyi University of Technology and received the Vice Chancellor&apos;s Award and two University Book Prizes.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/Wilson-Kumalo-CV.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
                  <Download className="h-4 w-4" aria-hidden="true" /> Download CV
                </a>
                <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/60">
                  Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <section className="mt-20">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-foreground">ENGINEERING</span>{" "}
                  <span className="text-muted-foreground">PRINCIPLES</span>
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <div key={principle} className="flex gap-3 rounded-2xl border border-border/40 bg-secondary/30 p-5 text-sm leading-6 text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {principle}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-20">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-foreground">CURRENT</span>{" "}
                  <span className="text-muted-foreground">FOCUS</span>
                </h2>
                <div className="mt-6 space-y-2">
                  {caseStudies.filter((study) => ["neotree", "fundani", "daredzidzo"].includes(study.slug)).map((study) => (
                    <Link key={study.slug} href={`/work/${study.slug}`} className="group flex items-center justify-between gap-5 border-b border-border/30 py-5">
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-primary">{study.status}</span>
                        <span className="mt-2 block font-semibold text-foreground group-hover:text-primary">{study.shortTitle}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>

              <section className="mt-20 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-[#1E40AF] p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/65">Education</p>
                  <h2 className="mt-8 text-xl font-semibold">{education.degree}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">{education.institution}<br />{education.period} · {education.classification}</p>
                </div>
                <div className="rounded-2xl bg-[#BEFF46] p-6 text-gray-900">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-900/60">Recognition</p>
                  <ul className="mt-8 space-y-3">
                    {recognition.map((item) => <li key={`${item.title}-${item.year}`} className="flex justify-between gap-3 text-sm"><span className="font-medium">{item.title}</span><span className="text-gray-900/60">{item.year}</span></li>)}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </PageChrome>
  );
}
