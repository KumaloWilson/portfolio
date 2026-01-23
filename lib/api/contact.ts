import type { ContactForm } from "@/modules/shared/types";
import { apiFetch } from "./client";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  service?: string;
  budget?: string;
  source?: string;
}

export const submitContact = async (payload: ContactForm) => {
  const body: ContactPayload = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    message: payload.message.trim(),
    service: payload.service?.trim() || undefined,
    budget: payload.budget || undefined,
    source: "portfolio-website",
  };

  await apiFetch<void>("/tickets/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
};
