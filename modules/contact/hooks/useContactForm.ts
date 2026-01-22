"use client";

import React from "react"

import { useState, useCallback } from "react";
import type { ContactForm } from "@/modules/shared/types";
import type { ContactFormState } from "../types";

const initialState: ContactFormState = {
  name: "",
  email: "",
  budget: "",
  message: "",
  isSubmitting: false,
  isSuccess: false,
  error: null,
};

export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);

  const updateField = useCallback((field: keyof ContactForm, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
      error: null,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormState((prev) => ({
        ...prev,
        error: "Please fill in all required fields.",
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
      }));

      // Reset form after success
      setTimeout(() => {
        setFormState(initialState);
      }, 3000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Something went wrong. Please try again.",
      }));
    }
  }, [formState.name, formState.email, formState.message]);

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
