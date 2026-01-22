import type { Project } from "@/modules/shared/types";

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ProjectsListProps {
  projects: Project[];
}
