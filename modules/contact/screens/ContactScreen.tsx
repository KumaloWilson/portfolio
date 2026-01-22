"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ContactScreen: React.FC = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">{"LET'S WORK"}</span>
            <br />
            <span className="text-muted-foreground">TOGETHER</span>
          </h2>
        </motion.div>

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <motion.footer
          className="mt-20 pt-8 border-t border-border/30 text-center"
          variants={fadeInUp}
        >
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
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wilson Kumalo. All rights reserved.
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};
