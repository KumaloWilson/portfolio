import type { Profile, Stat, Project, Experience, Tool, BlogPost, SkillCard } from '../types';

export const profileData: Profile = {
  name: "Aaabad Ahmed",
  title: "Software Engineer",
  description: "A Software Engineer who has developed countless innovative solutions.",
  image: "/images/profile.jpg",
  socialLinks: [
    { name: "Dribbble", url: "#", icon: "dribbble" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "YouTube", url: "#", icon: "youtube" },
  ],
};

export const statsData: Stat[] = [
  { value: "+12", label: "YEARS OF", sublabel: "EXPERIENCE" },
  { value: "+46", label: "PROJECTS", sublabel: "COMPLETED" },
  { value: "+20", label: "WORLDWIDE", sublabel: "CLIENTS" },
];

export const skillCardsData: SkillCard[] = [
  {
    id: "1",
    title: "DYNAMIC ANIMATION, MOTION DESIGN",
    icon: "layers",
    bgColor: "bg-[#E87B54]",
    textColor: "text-white",
  },
  {
    id: "2",
    title: "FRAMER, FIGMA, WORDPRESS, REACTJS",
    icon: "grid",
    bgColor: "bg-[#BEFF46]",
    textColor: "text-gray-900",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Damas",
    description: "Free Framer Template",
    image: "/images/project-damas.jpg",
    link: "#",
  },
  {
    id: "2",
    title: "Bayt",
    description: "Real Estate Framer Template",
    image: "/images/project-bayt.jpg",
    link: "#",
  },
  {
    id: "3",
    title: "NajmAI",
    description: "SaaS Framer Template",
    image: "/images/project-najmai.jpg",
    link: "#",
  },
];

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "PixelForge Studios",
    description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    startDate: "Jan 2020",
    endDate: "Present",
    link: "#",
  },
  {
    id: "2",
    company: "BlueWave Innovators",
    description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    startDate: "Jun 2017",
    endDate: "Dec 2019",
    link: "#",
  },
  {
    id: "3",
    company: "TrendCraft Solutions",
    description: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    startDate: "Mar 2015",
    endDate: "May 2017",
    link: "#",
  },
];

export const toolsData: Tool[] = [
  { id: "1", name: "Framer", description: "Website Builder", icon: "framer" },
  { id: "2", name: "Figma", description: "Design Tool", icon: "figma" },
  { id: "3", name: "Lemon Squeezy", description: "Payments Provider", icon: "lemon" },
  { id: "4", name: "ChatGPT", description: "AI Assistant", icon: "chatgpt" },
  { id: "5", name: "Notion", description: "Productivity Tool", icon: "notion" },
  { id: "6", name: "Nextjs", description: "React framework", icon: "nextjs" },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Starting and Growing a Career in Web Design",
    excerpt: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
    image: "/images/blog-career.jpg",
    slug: "starting-career-web-design",
  },
  {
    id: "2",
    title: "Create a Landing Page That Performs Great",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Mar 15, 2022",
    readTime: "6min read",
    image: "/images/blog-landing.jpg",
    slug: "create-landing-page",
  },
  {
    id: "3",
    title: "How Can Designers Prepare for the Future?",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Feb 28, 2022",
    readTime: "6min read",
    image: "/images/blog-future.jpg",
    slug: "designers-prepare-future",
  },
];

export const budgetOptions = [
  { value: "", label: "Select..." },
  { value: "1000-5000", label: "$1,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-25000", label: "$10,000 - $25,000" },
  { value: "25000+", label: "$25,000+" },
];
