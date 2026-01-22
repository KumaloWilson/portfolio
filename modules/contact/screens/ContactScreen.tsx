"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";

export const ContactScreen: React.FC = () => {
  return (
    <section id="contact" className="py-20">
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
            Made by{" "}
            <a href="#" className="text-primary hover:underline">
              Templyo
            </a>{" "}
            | Powered by{" "}
            <a href="#" className="text-primary hover:underline">
              Framer
            </a>
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};
