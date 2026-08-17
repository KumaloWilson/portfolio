"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies, openSourceProjects } from "@/lib/portfolio";
import { ArrowUpRightIcon } from "@/modules/shared/components/Icons";
import { fadeInUp, hoverScale, staggerContainer } from "@/modules/shared/hooks/useAnimations";

const borderColors = ["border-[#E87B54]", "border-[#BEFF46]", "border-[#8B5CF6]"];

export const ProjectsScreen: React.FC = () => (
  <section className="py-20" aria-labelledby="work-heading">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div className="mb-10" variants={fadeInUp}>
        <h2 id="work-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-foreground">SELECTED</span>
          <br />
          <span className="text-muted-foreground">CASE STUDIES</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          Production health systems, offline products and multi-portal platforms—
          focused on constraints, decisions and my exact contribution.
        </p>
      </motion.div>

      <motion.div className="space-y-2" variants={staggerContainer}>
        {caseStudies.map((study, index) => (
          <motion.div key={study.slug} variants={fadeInUp} whileHover={hoverScale}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex items-center gap-5 border-b border-border/30 py-5"
            >
              <div className={`flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-lg border-2 bg-secondary/50 ${borderColors[index % borderColors.length]}`}>
                <span className="text-2xl font-bold text-foreground">0{index + 1}</span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Study</span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {study.shortTitle}
                  </h3>
                  <span className="rounded-full border border-border/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {study.status}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{study.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.stack.slice(0, 4).map((item) => (
                    <span key={item} className="rounded-full border border-border/50 px-3 py-1 text-xs text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <span className="shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                <ArrowUpRightIcon size={24} />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-8 flex justify-end" variants={fadeInUp}>
        <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
          Explore every case study <ArrowUpRightIcon size={16} />
        </Link>
      </motion.div>
    </motion.div>

    <motion.div
      className="pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div className="mb-10" variants={fadeInUp}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-foreground">SELECTED OPEN</span>
          <br />
          <span className="text-muted-foreground">SOURCE PROJECTS</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          Six curated public projects. Prototypes, team work and maintained forks are labelled clearly.
        </p>
      </motion.div>

      <motion.div className="space-y-2" variants={staggerContainer}>
        {openSourceProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-5 border-b border-border/30 py-4"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <div className={`relative h-28 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${borderColors[index % borderColors.length]}`}>
              <Image src={project.image} alt={`${project.title} project preview`} fill sizes="96px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">{project.title}</h3>
                <span className="rounded-full border border-border/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{project.status}</span>
              </div>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-primary">{project.role}</p>
            </div>
            <span className="shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
              <ArrowUpRightIcon size={24} />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  </section>
);
