"use client";

import { useState, useCallback } from "react";
import type { ContactForm } from "@/modules/shared/types";
import { submitContact } from "@/lib/api/contact";
import type { ContactFormState } from "../types";

const initialState: ContactFormState = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
  isSubmitting: false,
  isSuccess: false,
  error: null,
  fieldErrors: {},
};

export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);

  const updateField = useCallback((field: keyof ContactForm, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
      error: null,
      fieldErrors: {
        ...prev.fieldErrors,
        [field]: undefined,
      },
    }));
  }, []);

  const validate = useCallback(() => {
    const errors: Partial<Record<keyof ContactForm, string>> = {};
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (!name) {
      errors.name = "Name is required.";
    } else if (name.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (name.length > 120) {
      errors.name = "Name must be 120 characters or less.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (formState.service && formState.service.length > 120) {
      errors.service = "Service must be 120 characters or less.";
    }

    if (formState.budget && formState.budget.length > 120) {
      errors.budget = "Budget must be 120 characters or less.";
    }

    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    } else if (message.length > 5000) {
      errors.message = "Message must be 5000 characters or less.";
    }

    return errors;
  }, [formState.budget, formState.email, formState.message, formState.name, formState.service]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.values(validationErrors).some(Boolean)) {
      setFormState((prev) => ({
        ...prev,
        fieldErrors: validationErrors,
        error: "Please fix the highlighted fields and try again.",
      }));
      return;
    }

    setFormState((prev) => ({
      ...prev,
      isSubmitting: true,
      error: null,
      fieldErrors: {},
    }));

    try {
      await submitContact({
        name: formState.name,
        email: formState.email,
        service: formState.service,
        budget: formState.budget,
        message: formState.message,
      });

      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        error: null,
        fieldErrors: {},
      }));

      // Reset form after success
      setTimeout(() => {
        setFormState(initialState);
      }, 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: message,
      }));
    }
  }, [
    formState.name,
    formState.email,
    formState.service,
    formState.budget,
    formState.message,
    validate,
  ]);

  const resetForm = useCallback(() => {
    setFormState(initialState);
  }, []);

  return {
    formState,
    updateField,
    handleSubmit,
    resetForm,
  };
}
