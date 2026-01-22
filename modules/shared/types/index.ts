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
  image: string;
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
