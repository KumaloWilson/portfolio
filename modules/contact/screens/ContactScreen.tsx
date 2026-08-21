"use client";

import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

const contactLinks = [
  { label: "Email", value: "info@wilsonkumalo.dev", href: "mailto:info@wilsonkumalo.dev" },
  { label: "LinkedIn", value: "Connect professionally", href: "https://www.linkedin.com/in/wilson-kumalo-733550243/" },
  { label: "GitHub", value: "Review public work", href: "https://github.com/KumaloWilson" },
];

export const ContactScreen: React.FC = () => (
  <section className="py-20" aria-labelledby="contact-heading">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div className="mb-10" variants={fadeInUp}>
        <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-foreground">LET&apos;S WORK</span>
          <br />
          <span className="text-muted-foreground">TOGETHER</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          I&apos;m open to software-engineering opportunities, technical collaboration and carefully scoped consulting work in digital health, education and platform engineering.
        </p>
      </motion.div>

      <motion.div className="mb-8 grid gap-3 sm:grid-cols-3" variants={staggerContainer}>
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-2xl border border-border/40 bg-secondary/30 p-4 transition hover:border-primary/60"
            variants={fadeInUp}
          >
            <span className="block text-[10px] uppercase tracking-[0.2em] text-primary">{link.label}</span>
            <span className="mt-2 block text-sm font-medium text-foreground">{link.value}</span>
          </motion.a>
        ))}
      </motion.div>

      <ContactForm />

      <motion.footer className="mt-20 pt-8 border-t border-border/30 text-center" variants={fadeInUp}>
        <p className="text-muted-foreground text-sm">
          Made with love by Wilson Kumalo. Inspired by{" "}
          <a
            href="https://framer.com/projects/Sawad-copy--ITQ5UqtcH31fxBoZ6k9Q-8Ott3?duplicate=NRkfQQbzViP80JUxAfHy&node=augiA20Il"
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Sawad
          </a>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} Wilson Kumalo. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  </section>
);
