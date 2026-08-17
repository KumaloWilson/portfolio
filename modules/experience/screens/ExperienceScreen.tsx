"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/modules/shared/services/data.service";
import { ExperienceCard } from "../components/ExperienceCard";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

const categories = ["Professional experience", "Consulting & technical leadership", "Ventures"] as const;

export const ExperienceScreen: React.FC = () => (
  <section className="py-20" aria-labelledby="experience-heading">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
      <motion.div className="mb-10" variants={fadeInUp}>
        <h2 id="experience-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-foreground">CAREER</span>
          <br />
          <span className="text-muted-foreground">TIMELINE</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          Employment, consulting and ventures are separated so concurrent responsibilities are easy to understand.
        </p>
      </motion.div>

      <div className="space-y-14">
        {categories.map((category) => {
          const items = timelineData.filter((item) => item.category === category);
          if (!items.length) return null;
          return (
            <motion.div key={category} variants={fadeInUp}>
              <div className="mb-2 flex items-center gap-4">
                <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{category}</h3>
                <span className="h-px flex-1 bg-border/50" aria-hidden="true" />
              </div>
              <div>{items.map((experience, index) => <ExperienceCard key={`${experience.company}-${experience.year}`} experience={experience} index={index} />)}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </section>
);
