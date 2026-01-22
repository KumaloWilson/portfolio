import type { TimelineItem } from "@/modules/shared/types";

export interface ExperienceCardProps {
  experience: TimelineItem;
  index: number;
}

export interface ExperienceListProps {
  experiences: TimelineItem[];
}
