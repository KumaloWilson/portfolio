"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContactForm } from "../hooks/useContactForm";
import { budgetOptions } from "@/modules/shared/services/data.service";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import { ChevronDownIcon } from "@/modules/shared/components/Icons";

export const ContactForm: React.FC = () => {
  const { formState, updateField, handleSubmit } = useContactForm();

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={fadeInUp}>
          <label className="block text-sm text-muted-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={formState.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label className="block text-sm text-muted-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Your@email.com"
            value={formState.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </motion.div>
      </div>

      {/* Budget Select */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm text-muted-foreground mb-2">
          Budget
        </label>
        <div className="relative">
          <select
            value={formState.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
          >
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            size={20}
          />
        </div>
      </motion.div>

      {/* Message Textarea */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          placeholder="Message"
          value={formState.message}
          onChange={(e) => updateField("message", e.target.value)}
          rows={5}
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
        />
      </motion.div>

      {/* Error Message */}
      {formState.error && (
        <motion.p
          className="text-destructive text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {formState.error}
        </motion.p>
      )}

      {/* Success Message */}
      {formState.isSuccess && (
        <motion.p
          className="text-green-500 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you! Your message has been sent successfully.
        </motion.p>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={formState.isSubmitting}
        className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        variants={fadeInUp}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {formState.isSubmitting ? "Sending..." : "Submit"}
      </motion.button>
    </motion.form>
  );
};
