import { profileData } from "@/modules/shared/services/data.service";

const fallbackUrl = "https://wilsonkumalo.dev";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
  name: profileData.name,
  title: `${profileData.name} | Software & Systems Engineer — Digital Health & Offline-First Systems`,
  description:
    "Software and systems engineer building reliable digital health, education and offline-first platforms across mobile, web, backend and data integration systems.",
  ogImage: "/og-home.png",
  keywords: [
    "software engineer",
    "systems engineer",
    "software engineer Zimbabwe",
    "backend engineer",
    "digital health engineer",
    "health tech Zimbabwe",
    "EHR systems",
    "DHIS2 integration",
    "offline-first apps",
    "data pipelines",
    "health interoperability",
    "platform engineering",
    "education technology",
  ],
};
