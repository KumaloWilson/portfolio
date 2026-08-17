"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import { profileData } from "@/modules/shared/services/data.service";

export const HeroSection: React.FC = () => (
  <motion.div
    className="space-y-6"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <motion.div variants={fadeInUp}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-2 lg:mt-0">
        <span className="text-primary block text-xl sm:text-2xl md:text-3xl mb-2 uppercase tracking-widest">
          {profileData.name}
        </span>
        <span className="text-foreground">SOFTWARE &</span>
        <br />
        <span className="text-muted-foreground">SYSTEMS ENGINEER</span>
      </h1>
      <span className="mt-4 inline-flex w-fit items-center rounded-full border border-border/60 bg-secondary/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Flutter Doctor · Secondary brand
      </span>
    </motion.div>

    <motion.div className="space-y-4" variants={fadeInUp}>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        I build dependable mobile, web and backend systems for digital health,
        education and other real-world environments where connectivity cannot be assumed.
      </p>
      <p className="max-w-2xl text-sm leading-6 text-foreground/75">
        Currently contributing to the Neotree platform, health-data interoperability,
        offline-first products and multi-portal systems in Zimbabwe.
      </p>
    </motion.div>

    <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
        >
          View case studies <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href="/Wilson-Kumalo-CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/60"
        >
          Download CV <Download className="h-4 w-4" aria-hidden="true" />
        </a>
        <Link
          href="/about"
          className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-primary"
        >
          About me
        </Link>
    </motion.div>
  </motion.div>
);
