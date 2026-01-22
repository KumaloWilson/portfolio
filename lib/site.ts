import { profileData } from "@/modules/shared/services/data.service";

const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
  name: profileData.name,
  title: `${profileData.name} | Flutter Doctor & Software Engineer`,
  description: profileData.description,
  ogImage: "/logo/logo.jpg",
  keywords: [
    "software engineer",
    "full stack developer",
    "flutter doctor",
    "flutter developer",
    "next.js",
    "mobile apps",
    "web development",
    "portfolio",
  ],
};
