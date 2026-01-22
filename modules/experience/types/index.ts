import type { Experience } from "@/modules/shared/types";

export interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export interface ExperienceListProps {
  experiences: Experience[];
}
