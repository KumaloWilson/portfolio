"use client";

import { motion } from "framer-motion";
import { useContactForm } from "../hooks/useContactForm";
import { fadeInUp, staggerContainer } from "@/modules/shared/hooks/useAnimations";
import { ChevronDownIcon } from "@/modules/shared/components/Icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const enquiryOptions = [
  { value: "", label: "Select a conversation..." },
  { value: "engineering-opportunity", label: "Engineering opportunity" },
  { value: "technical-collaboration", label: "Technical collaboration" },
  { value: "architecture-consulting", label: "Architecture or systems consulting" },
  { value: "software-project", label: "Software project" },
  { value: "speaking-writing", label: "Speaking or writing" },
  { value: "other", label: "Something else" },
];

const inputClasses = "w-full rounded-xl border border-border bg-input px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

export const ContactForm: React.FC = () => {
  const { formState, updateField, handleSubmit } = useContactForm();

  return (
    <motion.form onSubmit={handleSubmit} className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} noValidate>
      <motion.div variants={fadeInUp}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Start a conversation</p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">Tell me what you’re working through.</h3>
      </motion.div>

      {formState.error && <Alert variant="destructive" className="border-destructive/50" role="alert"><AlertTitle>Submission failed</AlertTitle><AlertDescription>{formState.error}</AlertDescription></Alert>}
      {formState.isSuccess && <Alert className="border-emerald-400/50 bg-emerald-950/30 text-emerald-100" role="status"><AlertTitle>Message sent</AlertTitle><AlertDescription>Thanks for reaching out. I’ll get back to you soon.</AlertDescription></Alert>}

      <div className="grid gap-5 md:grid-cols-2">
        <motion.div variants={fadeInUp}>
          <label htmlFor="contact-name" className="mb-2 block text-sm text-muted-foreground">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Your name" value={formState.name} onChange={(e) => updateField("name", e.target.value)} className={inputClasses} aria-invalid={Boolean(formState.fieldErrors.name)} aria-describedby={formState.fieldErrors.name ? "contact-name-error" : undefined} />
          {formState.fieldErrors.name && <p id="contact-name-error" className="mt-2 text-xs text-destructive">{formState.fieldErrors.name}</p>}
        </motion.div>
        <motion.div variants={fadeInUp}>
          <label htmlFor="contact-email" className="mb-2 block text-sm text-muted-foreground">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@organisation.com" value={formState.email} onChange={(e) => updateField("email", e.target.value)} className={inputClasses} aria-invalid={Boolean(formState.fieldErrors.email)} aria-describedby={formState.fieldErrors.email ? "contact-email-error" : undefined} />
          {formState.fieldErrors.email && <p id="contact-email-error" className="mt-2 text-xs text-destructive">{formState.fieldErrors.email}</p>}
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <label htmlFor="contact-topic" className="mb-2 block text-sm text-muted-foreground">What would you like to discuss?</label>
        <div className="relative">
          <select id="contact-topic" name="topic" required value={formState.service} onChange={(e) => updateField("service", e.target.value)} className={`${inputClasses} cursor-pointer appearance-none pr-11`} aria-invalid={Boolean(formState.fieldErrors.service)}>
            {enquiryOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <label htmlFor="contact-message" className="mb-2 block text-sm text-muted-foreground">Message</label>
        <textarea id="contact-message" name="message" required placeholder="Share the opportunity, organisation, current challenge and useful context." value={formState.message} onChange={(e) => updateField("message", e.target.value)} rows={7} className={`${inputClasses} resize-y`} aria-invalid={Boolean(formState.fieldErrors.message)} aria-describedby="contact-message-help" />
        <div id="contact-message-help" className="mt-2 flex items-center justify-between text-xs text-muted-foreground"><span>{formState.fieldErrors.message || "Minimum 10 characters."}</span><span>{formState.message.length}/5000</span></div>
      </motion.div>

      <motion.button type="submit" disabled={formState.isSubmitting} className="min-h-12 w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50" variants={fadeInUp}>
        {formState.isSubmitting ? "Sending…" : "Send enquiry"}
      </motion.button>
    </motion.form>
  );
};
