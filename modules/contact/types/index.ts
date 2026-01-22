import type { ContactForm } from "@/modules/shared/types";

export interface ContactFormState extends ContactForm {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export interface ContactFormProps {
  onSubmit: (data: ContactForm) => Promise<void>;
}
