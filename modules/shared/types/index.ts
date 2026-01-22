export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  image: string;
  socialLinks: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  technologies?: string[];
  category?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: {
    metric1: string;
    metric2: string;
    metric3: string;
    metric4: string;
  };
  timeline?: string;
  client?: string;
  year?: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  link?: string;
}

export interface Achievement {
  icon: unknown;
  title: string;
  year: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  type?: string;
  description: string;
}

export interface PersonalStat {
  icon: unknown;
  label: string;
  value: string;
  color: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  slug: string;
}

export interface SkillCard {
  id: string;
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

export interface ContactForm {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export type Section = 'home' | 'projects' | 'experience' | 'tools' | 'contact';
