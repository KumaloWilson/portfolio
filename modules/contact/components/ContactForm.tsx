"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContactForm } from "../hooks/useContactForm";
import { budgetOptions } from "@/modules/shared/services/data.service";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import { ChevronDownIcon } from "@/modules/shared/components/Icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "web-app", label: "Web App" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "api-backend", label: "API / Backend" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "ai-ml", label: "AI / ML" },
  { value: "devops", label: "DevOps / Deployment" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
];

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
      {formState.error && (
        <Alert variant="destructive" className="border-destructive/50">
          <AlertTitle>Submission failed</AlertTitle>
          <AlertDescription>{formState.error}</AlertDescription>
        </Alert>
      )}

      {formState.isSuccess && (
        <Alert className="border-emerald-400/50 bg-emerald-50 text-emerald-900">
          <AlertTitle>Message sent</AlertTitle>
          <AlertDescription>
            Thanks for reaching out. I’ll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

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
          {formState.fieldErrors.name && (
            <p className="mt-2 text-xs text-destructive">
              {formState.fieldErrors.name}
            </p>
          )}
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
          {formState.fieldErrors.email && (
            <p className="mt-2 text-xs text-destructive">
              {formState.fieldErrors.email}
            </p>
          )}
        </motion.div>
      </div>

      {/* Service */}
      <motion.div variants={fadeInUp}>
        <label className="block text-sm text-muted-foreground mb-2">
          Service
        </label>
        <div className="relative">
          <select
            value={formState.service}
            onChange={(e) => updateField("service", e.target.value)}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
          >
            {serviceOptions.map((option) => (
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
        {formState.fieldErrors.service && (
          <p className="mt-2 text-xs text-destructive">
            {formState.fieldErrors.service}
          </p>
        )}
      </motion.div>

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
        {formState.fieldErrors.budget && (
          <p className="mt-2 text-xs text-destructive">
            {formState.fieldErrors.budget}
          </p>
        )}
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
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {formState.fieldErrors.message || "Minimum 10 characters."}
          </span>
          <span>{formState.message.length}/5000</span>
        </div>
      </motion.div>

      {/* Error Message */}
      {/* Status handled by Alert above */}

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
