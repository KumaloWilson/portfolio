import { profileData } from "@/modules/shared/services/data.service";

const fallbackUrl = "https://wilsonkumalo.dev";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
  name: profileData.name,
  title: `${profileData.name} | Full Stack Software Engineer & Systems Architect`,
  description:
    "Full Stack Software Engineer specializing in scalable web, mobile, and backend systems. Experienced in health-tech platforms, offline-first architectures, data pipelines, and system integrations (DHIS2, EHR systems). Building impactful, real-world software solutions.",
  ogImage: "/og-home.png",
  keywords: [
    "software engineer",
    "full stack developer",
    "systems architect",
    "backend engineer",
    "flutter developer",
    "next.js developer",
    "node.js developer",
    "health tech",
    "EHR systems",
    "DHIS2 integration",
    "offline-first apps",
    "data pipelines",
    "mobile apps",
    "web development",
    "portfolio",
  ],
};