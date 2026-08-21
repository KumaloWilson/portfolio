"use client";

import { motion } from "framer-motion";
import { personalStatsData } from "@/modules/shared/services/data.service";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const StatsSection: React.FC = () => (
  <motion.div
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
  >
    {personalStatsData.map((stat, index) => {
      const Icon = stat.icon as React.ElementType;
      return (
        <motion.div
          key={stat.label}
          className="rounded-2xl border border-border/40 bg-secondary/30 p-6"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 bg-background/60">
              <Icon className={`h-5 w-5 ${stat.color}`} aria-hidden="true" />
            </span>
            <div>
              <motion.span
                className="text-2xl font-bold text-foreground md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.span>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);
