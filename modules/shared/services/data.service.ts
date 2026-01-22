import { Award, Calendar, Code, Coffee, Heart, Users } from "lucide-react";
import type {
  Achievement,
  BlogPost,
  Experience,
  PersonalStat,
  Profile,
  Project,
  SkillCard,
  Stat,
  TimelineItem,
  Tool,
} from "../types";

export const profileData: Profile = {
  name: "Wilson Kumalo",
  title: "Full Stack Software Engineer - Flutter Developer - AI & Digital Health Systems Builder",
  description:
    "I design and build scalable, secure, and impactful software systems - from mobile apps and web platforms to AI-powered and digital health solutions. Passionate about solving real-world problems through technology.",
  image: "/dp.jpg",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/KumaloWilson", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wilson-kumalo-733550243/", icon: "linkedin" },
    { name: "Twitter / X", url: "https://x.com/", icon: "twitter" },
    { name: "Website", url: "https://wilsonkumalo.dev", icon: "globe" }
  ],
};

export const statsData: Stat[] = [
  { value: "3+", label: "YEARS OF", sublabel: "PROFESSIONAL EXPERIENCE" },
  { value: "20+", label: "PROJECTS", sublabel: "DELIVERED" },
  { value: "5+", label: "ACTIVE", sublabel: "PRODUCTION SYSTEMS" },
];

export const personalStatsData: PersonalStat[] = [
  { icon: Coffee, label: "Cups of Coffee", value: "20+", color: "text-amber-600" },
  { icon: Code, label: "Lines of Code", value: "1M+", color: "text-blue-600" },
  { icon: Users, label: "Happy Clients", value: "20+", color: "text-green-600" },
  { icon: Calendar, label: "Years Experience", value: "3+", color: "text-purple-600" },
];

export const achievementsData: Achievement[] = [
  { icon: Code, title: "Certified AR-VR Mobile Developer", year: "2025" },
  { icon: Award, title: "Certified Full Stack Developer", year: "2024" },
  { icon: Users, title: "Team Lead Experience", year: "2023" },
  { icon: Heart, title: "Open Source Contributor", year: "2023" },
];

export const skillCardsData: SkillCard[] = [
  {
    id: "1",
    title: "MOBILE, WEB, BACKEND SYSTEMS & DEVOPS",
    icon: "layers",
    bgColor: "bg-[#1E40AF]",
    textColor: "text-white",
  },
  {
    id: "2",
    title: "DART, JAVA, TYPESCRIPT, PHP, PYTHON & MORE",
    icon: "grid",
    bgColor: "bg-[#BEFF46]",
    textColor: "text-gray-900",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "FlySpotter Pro",
    description:
      "An AI-powered mobile app for real-time fly species identification, tracking, and educational discovery.",
    longDescription:
      "FlySpotter Pro revolutionizes fly identification using TensorFlow Lite-powered machine learning for instant, accurate results. Built with Flutter and Firebase, it offers offline capability, cross-platform support, user management, discovery tracking with Google Maps integration, and a rich educational guide. Designed for entomologists, researchers, pest control professionals, and nature enthusiasts.",
    image: "/images/projects/spoter.png",
    gallery: ["/images/projects/spoter.png"],
    technologies: ["Flutter", "Firebase", "TensorFlow Lite", "Google Maps API", "GetX", "Dart"],
    category: ["mobile"],
    liveUrl: "https://github.com/KumaloWilson/fly_spotter",
    githubUrl: "https://github.com/KumaloWilson/fly_spotter",
    featured: false,
    metrics: {
      metric1: "90% model accuracy on test dataset",
      metric2: "Offline support enabled",
      metric3: "Tested on Android & iOS platforms",
      metric4: "Prototype demoed to 50 users",
    },
    timeline: "5 months (prototype)",
    client: "Open Source Community",
    year: "2025",
    link: "https://github.com/KumaloWilson/fly_spotter",
  },
  {
    id: "2",
    title: "CUT Portal WhatsApp Bot",
    description:
      "A scalable WhatsApp chatbot that provides university students with access to their portal information through WhatsApp.",
    longDescription:
      "CUT Portal WhatsApp Bot enables students to navigate their portal features - including profiles, course details, grades, and announcements - via WhatsApp. Built with a clean architecture approach, the system separates concerns into models, services, controllers, and routes. Designed for scalability and real-time support using the WhatsApp Business API.",
    image: "/images/projects/whatbot.png",
    gallery: ["/cut_portal_bot_screen1.svg", "/cut_portal_bot_screen2.svg", "/cut_portal_bot_screen3.svg"],
    technologies: ["Node.js", "WhatsApp Business API", "Express.js"],
    category: ["web", "backend"],
    liveUrl: "https://github.com/KumaloWilson/cut_portal_whatbot",
    githubUrl: "https://github.com/KumaloWilson/cut_portal_whatbot",
    featured: true,
    metrics: {
      metric1: "Clean architecture with separated concerns",
      metric2: "Supports menu-based navigation",
      metric3: "Built for integration with WhatsApp Business API",
      metric4: "Prototype for student services automation",
    },
    timeline: "2 months (prototype)",
    client: "CUT Student Community",
    year: "2025",
    link: "https://github.com/KumaloWilson/cut_portal_whatbot",
  },
  {
    id: "3",
    title: "Smart Driver Companion",
    description:
      "An AI-enhanced Flutter app for intelligent driver behavior monitoring, community alerts, navigation, and service location.",
    longDescription:
      "Smart Driver Companion is a comprehensive Flutter application that integrates AI-driven driver behavior monitoring, real-time community road alerts, turn-by-turn navigation, and a service locator for drivers. Featuring GetX for state management and a clean MVC architecture, the app leverages Firebase, Google Maps APIs, and a custom Python-based behavior scoring API to deliver an engaging, safety-focused driving experience.",
    image: "/images/projects/smart-driver.jpg",
    gallery: [
      "/smart_driver_companion_screen1.svg",
      "/smart_driver_companion_screen2.svg",
      "/smart_driver_companion_screen3.svg",
    ],
    technologies: ["Flutter", "Firebase", "Google Maps API", "GetX", "Python Flask", "Dart"],
    category: ["mobile", "web", "fullstack"],
    liveUrl: "https://github.com/kumalowilson/smart_driver_companion",
    githubUrl: "https://github.com/kumalowilson/smart_driver_companion",
    featured: false,
    metrics: {
      metric1: "AI-powered real-time driver behavior scoring",
      metric2: "Community-driven road alert system",
      metric3: "Google Maps integration with voice guidance",
      metric4: "Service locator with live proximity search",
    },
    timeline: "6 months (prototype & MVP)",
    client: "Open Source Project",
    year: "2025",
    link: "https://github.com/kumalowilson/smart_driver_companion",
  },
  {
    id: "4",
    title: "ZINWA Water Meter System",
    description:
      "A prepaid water meter management solution for ZINWA with account management, token purchases, and real-time monitoring.",
    longDescription:
      "The ZINWA Water Meter System is a comprehensive platform combining an Express.js backend API with a Flutter mobile app. It empowers customers to manage their water accounts, purchase prepaid tokens, monitor usage, and receive alerts. The backend handles authentication, payments via Paynow, real-time meter reading, analytics, and administrative functions, while the mobile app offers an intuitive user experience with offline support, biometric login, and multi-language support.",
    image: "/images/projects/zinwa.jpg",
    gallery: [
      "/zinwa_water_meter_system_screen1.svg",
      "/zinwa_water_meter_system_screen2.svg",
      "/zinwa_water_meter_system_screen3.svg",
    ],
    technologies: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "NextJs",
      "Javascript",
      "Redis",
      "IOT",
      "Flutter",
      "GetX",
      "Dart",
      "Docker",
      "Paynow API",
    ],
    category: ["fullstack", "web", "mobile", "iot"],
    liveUrl: "https://github.com/kumalowilson/zinwa_water_meters",
    githubUrl: "https://github.com/kumalowilson/zinwa_water_meters",
    featured: true,
    metrics: {
      metric1: "Supports prepaid water token generation and purchase",
      metric2: "Integrated with Paynow Zimbabwe for payments",
      metric3: "JWT-based multi-role authentication system",
      metric4: "Deployed with Docker for scalable production environments",
    },
    timeline: "7 months (MVP & Deployment)",
    client: "Zimbabwe National Water Authority (ZINWA)",
    year: "2025",
    link: "https://github.com/kumalowilson/zinwa_water_meters",
  },
  {
    id: "5",
    title: "LearnSmart AI-Powered e-Learning Platform",
    description:
      "An AI-powered smart learning system for Chinhoyi Technology students with admin, lecturer, and backend modules.",
    longDescription:
      "LearnSmart is a full-stack monorepo education platform with AI-powered features for personalized learning and management. The system features separate Next.js frontends for administrators and lecturers, powered by Redux, Radix UI, Tailwind, and more. The backend is built with Node.js, Express, and Sequelize ORM, featuring robust security, OpenAI integration, JWT-based authentication, Supabase for storage, and Paynow for payment processing. Designed for scalability, the platform supports role-based access, learning management, AI integration for enhanced learning experiences, and a modern, maintainable UI/UX.",
    image: "/images/projects/smart-learn.jpg",
    gallery: [
      "/learnsmart_admin_dashboard.svg",
      "/learnsmart_lecturer_portal.svg",
      "/learnsmart_backend_api_doc.svg",
    ],
    technologies: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Radix UI",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Sequelize",
      "PostgreSQL",
      "OpenAI API",
      "Supabase",
      "Swagger",
    ],
    category: ["fullstack", "web"],
    liveUrl: "https://github.com/KumaloWilson/learnsmart",
    githubUrl: "https://github.com/KumaloWilson/learnsmart",
    featured: true,
    metrics: {
      metric1: "AI-powered learning assistant with OpenAI API integration",
      metric2: "Separate role-based portals for admin and lecturers",
      metric3: "Payment processing via Paynow for premium content",
      metric4: "Monorepo architecture with shared components and scalable deployment",
    },
    timeline: "6 months (Prototype & Deployment)",
    client: "Chinhoyi University of Technology Students",
    year: "2025",
    link: "https://github.com/KumaloWilson/learnsmart",
  },
  {
    id: "6",
    title: "Energy Monitor System",
    description: "A web and mobile platform for real-time monitoring, analysis, and optimization of energy consumption.",
    longDescription:
      "Energy Monitor is a multi-platform energy tracking solution aimed at promoting sustainability and efficient energy use. The system includes a Flask-based web application for visualizing energy usage trends and analytics, and a Flutter-based mobile application for monitoring on the go. It provides real-time tracking, historical analysis, device-level monitoring, alerts, and intelligent recommendations. The backend supports secure authentication, RESTful APIs, and integration with smart devices. Built with scalability in mind, Energy Monitor empowers homeowners, facility managers, and organizations to make data-driven decisions on energy consumption.",
    image: "/images/projects/energy.jpg",
    gallery: ["/energy_monitor_dashboard.svg", "/energy_monitor_device_tracking.svg", "/energy_monitor_mobile_app.svg"],
    technologies: ["Flask", "SQLAlchemy", "Python", "Flutter", "Firebase", "Dart", "Chart.js", "REST API", "JWT Auth"],
    category: ["fullstack", "mobile"],
    liveUrl: "https://github.com/KumaloWilson/flutter_energy",
    githubUrl: "https://github.com/KumaloWilson/flutter_energy",
    featured: false,
    metrics: {
      metric1: "Real-time energy usage tracking and analysis",
      metric2: "Interactive dashboards with device-level insights",
      metric3: "Flutter mobile app with Firebase integration",
      metric4: "Alerts and AI-driven energy-saving recommendations",
    },
    timeline: "4 months (Web & Mobile MVP)",
    client: "Energy-conscious homeowners & building managers",
    year: "2025",
    link: "https://github.com/KumaloWilson/flutter_energy",
  },
  {
    id: "7",
    title: "University Student Portal Web Analytics System",
    description:
      "A real-time web analytics platform for monitoring student portal activity using a browser extension, React dashboard, and Express backend with Supabase.",
    longDescription:
      "This system provides comprehensive real-time and historical analytics for a university student portal. It tracks active users, clicks, session durations, and navigation flows through a browser extension that streams events via WebSockets. The React dashboard visualizes these insights with charts and heatmaps. The backend, powered by Express and Supabase (PostgreSQL), manages data storage, authentication, and real-time communication. The architecture is optimized for scalability and secure data handling, offering role-based access to administrators and authorized personnel.",
    image: "/images/projects/cutanalytics.jpg",
    gallery: ["/analytics_heatmap.svg", "/analytics_realtime_users.svg", "/analytics_extension_ui.svg"],
    technologies: [
      "React.js",
      "Socket.io",
      "Tailwind CSS",
      "Zustand",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "Zod",
      "JWT",
      "Manifest V3",
    ],
    category: ["web", "fullstack"],
    liveUrl: "",
    githubUrl: "https://github.com/KumaloWilson/cut_portal_web_analytics",
    featured: false,
    metrics: {
      metric1: "Real-time user activity tracking with WebSockets",
      metric2: "Historical data visualization with interactive charts",
      metric3: "Role-based secure access for administrators",
      metric4: "Browser extension for seamless event streaming",
    },
    timeline: "3 months",
    client: "Chinhoyi University of Technology",
    year: "2025",
    link: "https://github.com/KumaloWilson/cut_portal_web_analytics",
  },
  {
    id: "8",
    title: "tflite Flutter Plugin",
    description:
      "A Flutter plugin providing access to TensorFlow Lite API for image classification, object detection (SSD, YOLO), Pix2Pix, Deeplab, and PoseNet on iOS and Android.",
    longDescription:
      "The tflite Flutter plugin allows Flutter apps to perform on-device ML inference using TensorFlow Lite models. It supports a variety of vision tasks such as image classification, object detection using SSD MobileNet and Tiny YOLOv2, image-to-image translation with Pix2Pix, semantic segmentation with Deeplab, and human pose estimation via PoseNet. The plugin is compatible with iOS and Android and includes support for GPU acceleration and real-time camera streams.",
    image: "/images/projects/tflite.jpg",
    gallery: ["/ssd_object_detection_demo.png", "/yolo_detection_demo.png", "/posenet_pose_estimation.png"],
    technologies: ["Flutter", "Dart", "TensorFlow Lite", "iOS", "Android", "GPU Delegate", "Camera Plugin"],
    category: ["mobile"],
    liveUrl: "https://github.com/KumaloWilson/tflite_v3",
    githubUrl: "https://github.com/KumaloWilson/tflite_v3",
    featured: true,
    metrics: {
      metric1: "Supports multiple TFLite model types: classification, detection, segmentation, pose estimation",
      metric2: "Runs efficiently on both iOS and Android devices",
      metric3: "Enables real-time inference with camera streams",
      metric4: "Offers GPU delegate support for enhanced performance",
    },
    timeline: "Ongoing maintenance and updates",
    client: "Open source community",
    year: "2023",
    link: "https://github.com/KumaloWilson/tflite_v3",
  },
  {
    id: "9",
    title: "GeoFlutterFire3",
    description:
      "An advanced Flutter library for performing realtime geoqueries with Firestore, allowing developers to query and listen to documents within a geographic area.",
    longDescription:
      "GeoFlutterFire3 is a Flutter library that simplifies storing and querying geospatial data in Firebase Firestore. It enables real-time geolocation querying with automatic updates, making it suitable for location-based apps such as delivery tracking, ride-hailing, and social platforms. The library extends Firestore functionality without altering existing schemas or security rules and provides efficient querying with geohash-based lookups. Inspired by GeoFireX, it offers both reactive streams and single subscriptions with improved memory safety.",
    image: "/images/projects/geo.jpg",
    gallery: ["/geoflutterfire_example_query.png", "/geoflutterfire_map_demo.gif"],
    technologies: ["Flutter", "Dart", "Firebase Firestore", "GeoHashing", "Stream API", "Firestore Realtime Updates"],
    category: ["mobile"],
    liveUrl: "https://github.com/KumaloWilson/GeoFlutterFire3",
    githubUrl: "https://github.com/KumaloWilson/GeoFlutterFire3",
    featured: true,
    metrics: {
      metric1: "Supports realtime geo queries with Firestore",
      metric2: "Memory-safe streaming with single subscription control",
      metric3: "Supports nested geolocation fields in documents",
      metric4: "Inspired by GeoFireX and enhanced for production use",
    },
    timeline: "Active maintenance as of 2025",
    client: "Open Source Community",
    year: "2025",
    link: "https://github.com/KumaloWilson/GeoFlutterFire3",
  },
  {
    id: "10",
    title: "Lucid Eye - AI Assistance App for the Blind",
    description:
      "A Flutter-based mobile application designed to assist visually impaired users with object detection, text recognition, navigation, chatbot interaction, and emergency SOS services.",
    longDescription:
      "Lucid Eye is an AI-powered mobile assistant aimed at helping visually impaired users interact with their surroundings. Initially built as a university project, the app evolved into a multi-functional tool offering AI-based object detection, text recognition, currency detection, maps navigation, chatbot communication, and an SOS feature. It provides real-time assistance, leveraging machine learning and external APIs to create a meaningful impact for the blind community.",
    image: "/images/projects/lucid-eye.jpg",
    gallery: ["/lucid_eye_navigation_demo.png", "/lucid_eye_object_detection.png"],
    technologies: [
      "Flutter",
      "Google ML Kit",
      "Flutter TTS",
      "Flutter Map",
      "Node.js (for maps)",
      "Flask (for chatbot)",
      "Camera & Object Detection",
      "WebSockets",
    ],
    category: ["mobile"],
    liveUrl: "https://github.com/KumaloWilson/lucideye",
    githubUrl: "https://github.com/KumaloWilson/lucideye",
    featured: true,
    metrics: {
      metric1: "4 Core Features: Object Detection, Navigation, Chatbot, SOS",
      metric2: "AI-powered real-time assistance for the visually impaired",
      metric3: "Developed by a team of 6 engineers as a collaborative project",
      metric4: "Multi-API integration with maps and chatbot AI services",
    },
    timeline: "Initial release as a university project, actively maintained",
    client: "Community-focused Open Access",
    year: "2025",
    link: "https://github.com/KumaloWilson/lucideye",
  },
  {
    id: "11",
    title: "LocalGenAI - Offline AI Assistant",
    description:
      "An offline AI assistant app that allows users to download and interact with various language models directly on their devices, with a strong focus on privacy and mobile optimization.",
    longDescription:
      "LocalGenAI is a privacy-first AI assistant enabling users to chat with multiple AI language models without requiring an internet connection. Built with Flutter and leveraging mobile-optimized AI models (via ONNX, TensorFlow Lite, Core ML), it offers a fully offline experience. Users can download models, switch between them, and enjoy seamless interaction on both Android and iOS. The app ensures all data remains on-device, making it ideal for users concerned about privacy.",
    image: "/images/projects/genai.jpg",
    gallery: ["/localgenai_dashboard.png", "/localgenai_model_selection.png"],
    technologies: [
      "Flutter",
      "GetX",
      "PyTorch",
      "TensorFlow Lite",
      "ONNX",
      "SQLite",
      "Core ML",
      "Model Optimization",
    ],
    category: ["mobile"],
    liveUrl: "https://github.com/KumaloWilson/local_genai",
    githubUrl: "https://github.com/KumaloWilson/local_genai",
    featured: true,
    metrics: {
      metric1: "100% Offline AI Interaction",
      metric2: "Support for multiple AI models with dynamic switching",
      metric3: "Optimized for privacy and device performance",
      metric4: "Built-in model management with local metadata handling",
    },
    timeline: "Released in 2025, active development for expanded model support",
    client: "Personal Project",
    year: "2025",
    link: "https://github.com/KumaloWilson/local_genai",
  },
];

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Appsistance",
    description:
      "Building a complete Point-of-Sale (POS) system, including inventory management, product catalogs, receipt generation, offline-first capabilities, and real-time syncing. Responsible for backend API design, database architecture, and frontend/mobile development. Led integrations for payments, authentication, and business reporting while ensuring scalability and smooth user workflows.",
    startDate: "Oct 2025",
    endDate: "Present",
    link: "#",
  },
  {
    id: "2",
    company: "Juvakel Team Recruiters",
    description:
      "Leading the technical direction of a multi-portal recruitment ecosystem (Admin, Recruiter, Candidate). Architected the platform's infrastructure, built secure APIs, developed mobile and web applications, and implemented features such as candidate screening, job posting workflows, notifications, and analytics dashboards. Introduced automation and DevOps practices to streamline operations and improve reliability.",
    startDate: "Oct 2025",
    endDate: "Present",
    link: "#",
  },
  {
    id: "3",
    company: "BRTI (Neotree Project)",
    description:
      "Contributing to the Neotree digital health platform - an evidence-based neonatal EHR and clinical decision-support system. Working on the full stack including web, mobile, and backend services. Implemented new features across modules, built changelog/version-control systems, improved data syncing flows, optimized UI/UX, and collaborated closely with clinicians and global research teams to enhance the platform's impact in frontline hospitals.",
    startDate: "Sept 2025",
    endDate: "Present",
    link: "#",
  },
  {
    id: "4",
    company: "Kays Consulting Services",
    description:
      "Working on cross-platform web and mobile solutions across multiple domains. Responsible for building scalable backends, modern UIs, and integrating third-party APIs. Led the development of core business platforms and introduced automation for internal workflows.",
    startDate: "April 2025",
    endDate: "Sept 2025",
    link: "#",
  },
  {
    id: "5",
    company: "Abstrak Agency",
    description:
      "Spearheaded full-stack development initiatives across multiple client projects. Mentored junior developers, enforced code quality standards, and introduced scalable architecture patterns using modern frameworks like Next.js and Flutter.",
    startDate: "Nov 2024",
    endDate: "May 2025",
    link: "#",
  },
  {
    id: "6",
    company: "KaribuTech AI",
    description:
      "Led the design and development of AI-powered mobile applications using Flutter. Integrated real-time databases, authentication, and push notifications while delivering intuitive user experiences. Focused on performance optimization and rapid prototyping.",
    startDate: "Dec 2023",
    endDate: "Dec 2024",
    link: "#",
  },
  {
    id: "7",
    company: "Kingsman Software Services",
    description:
      "Started my professional journey, learned modern development practices, and contributed to various projects. Worked across the stack and helped shape the company's first client products, building strong foundations in mobile and backend technologies.",
    startDate: "Aug 2022",
    endDate: "Present",
    link: "#",
  },
];

export const timelineData: TimelineItem[] = [
  {
    year: "Oct 2025 - Present",
    title: "Full Stack Software Developer",
    company: "Appsistance",
    type: "Part-Time",
    description:
      "Building a complete Point-of-Sale (POS) system, including inventory management, product catalogs, receipt generation, offline-first capabilities, and real-time syncing. Responsible for backend API design, database architecture, and frontend/mobile development. Led integrations for payments, authentication, and business reporting while ensuring scalability and smooth user workflows.",
  },
  {
    year: "Oct 2025 - Present",
    title: "CTO & Technical Lead.",
    company: "Juvakel Team Recruiters",
    type: "Part-Time",
    description:
      "Leading the technical direction of a multi-portal recruitment ecosystem (Admin, Recruiter, Candidate). Architected the platform's infrastructure, built secure APIs, developed mobile and web applications, and implemented features such as candidate screening, job posting workflows, notifications, and analytics dashboards. Introduced automation and DevOps practices to streamline operations and improve reliability.",
  },
  {
    year: "Sept 2025 - Present",
    title: "Full Stack Developer",
    company: "BRTI (Neotree Project)",
    type: "Full Time",
    description:
      "Contributing to the Neotree digital health platform - an evidence-based neonatal EHR and clinical decision-support system. Working on the full stack including web, mobile, and backend services. Implemented new features across modules, built changelog/version-control systems, improved data syncing flows, optimized UI/UX, and collaborated closely with clinicians and global research teams to enhance the platform's impact in frontline hospitals.",
  },
  {
    year: "April 2025 - Aug 2025",
    title: "Full Stack Developer",
    company: "Kays Consulting Services",
    description:
      "Working on cross-platform web and mobile solutions across multiple domains. Responsible for building scalable backends, modern UIs, and integrating third-party APIs. Led the development of core business platforms and introduced automation for internal workflows.",
  },
  {
    year: "Nov 2024 - May 2025",
    title: "Lead Software Engineer",
    company: "Abstrak Agency",
    description:
      "Spearheaded full-stack development initiatives across multiple client projects. Mentored junior developers, enforced code quality standards, and introduced scalable architecture patterns using modern frameworks like Next.js and Flutter.",
  },
  {
    year: "Dec 2023 - Dec 2024",
    title: "Lead Mobile App Developer",
    company: "KaribuTech AI",
    description:
      "Led the design and development of AI-powered mobile applications using Flutter. Integrated real-time databases, authentication, and push notifications while delivering intuitive user experiences. Focused on performance optimization and rapid prototyping.",
  },
  {
    year: "Aug 2022 - Present",
    title: "Software Developer",
    company: "Kingsman Software Services",
    description:
      "Started my professional journey, learned modern development practices, and contributed to various projects. Worked across the stack and helped shape the company's first client products, building strong foundations in mobile and backend technologies.",
  },
];

export const toolsData: Tool[] = [
  {
    id: "1",
    name: "Flutter",
    description: "Cross-platform mobile app development",
    icon: "https://cdn.simpleicons.org/flutter/E87B54",
  },
  {
    id: "2",
    name: "Next.js",
    description: "Full stack React framework",
    icon: "https://cdn.simpleicons.org/nextdotjs/E87B54",
  },
  {
    id: "3",
    name: "React",
    description: "Modern frontend UI development",
    icon: "https://cdn.simpleicons.org/react/E87B54",
  },
  {
    id: "4",
    name: "Node.js",
    description: "Backend services & REST/GraphQL APIs",
    icon: "https://cdn.simpleicons.org/nodedotjs/E87B54",
  },
  {
    id: "5",
    name: "Express.js",
    description: "Backend routing & middleware",
    icon: "https://cdn.simpleicons.org/express/E87B54",
  },
  {
    id: "6",
    name: "PostgreSQL",
    description: "Relational database systems",
    icon: "https://cdn.simpleicons.org/postgresql/E87B54",
  },
  {
    id: "7",
    name: "Supabase",
    description: "Backend-as-a-service & file storage",
    icon: "https://cdn.simpleicons.org/supabase/E87B54",
  },
  {
    id: "8",
    name: "Firebase",
    description: "Authentication, realtime DB & cloud messaging",
    icon: "https://cdn.simpleicons.org/firebase/E87B54",
  },
  {
    id: "9",
    name: "Docker",
    description: "Containerization & deployment workflows",
    icon: "https://cdn.simpleicons.org/docker/E87B54",
  },
  {
    id: "10",
    name: "Git & GitHub",
    description: "Version control & collaboration",
    icon: "https://cdn.simpleicons.org/github/E87B54",
  },
  {
    id: "11",
    name: "AWS",
    description: "Cloud infrastructure & services",
    icon: "https://www.svgrepo.com/show/376356/aws.svg",
  },
  {
    id: "12",
    name: "Azure",
    description: "Cloud hosting & enterprise services",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    id: "13",
    name: "Google Maps API",
    description: "Maps, routing & geolocation services",
    icon: "https://cdn.simpleicons.org/googlemaps/E87B54",
  },
  {
    id: "14",
    name: "Mapbox",
    description: "Custom maps & geospatial visualization",
    icon: "https://cdn.simpleicons.org/mapbox/E87B54",
  },
  {
    id: "15",
    name: "FastAPI",
    description: "High-performance Python APIs",
    icon: "https://cdn.simpleicons.org/fastapi/E87B54",
  },
  {
    id: "16",
    name: "Flask",
    description: "Lightweight Python backend services",
    icon: "https://cdn.simpleicons.org/flask/E87B54",
  },
  {
    id: "17",
    name: "TensorFlow",
    description: "Machine learning model development",
    icon: "https://cdn.simpleicons.org/tensorflow/E87B54",
  },
  {
    id: "18",
    name: "PyTorch",
    description: "Deep learning & AI research",
    icon: "https://cdn.simpleicons.org/pytorch/E87B54",
  },
  {
    id: "19",
    name: "scikit-learn",
    description: "Classical machine learning pipelines",
    icon: "https://cdn.simpleicons.org/scikitlearn/E87B54",
  },
  {
    id: "20",
    name: "AI / LLMs / RAG",
    description: "AI-powered automation & intelligence",
    icon: "https://www.svgrepo.com/show/352965/ai.svg",
  },
  {
    id: "21",
    name: "Ollama",
    description: "Self-hosted local language models",
    icon: "https://cdn.simpleicons.org/ollama/E87B54",
  },
  {
    id: "22",
    name: "Docker Compose",
    description: "Multi-container application orchestration",
    icon: "https://cdn.simpleicons.org/docker/E87B54",
  },
  {
    id: "23",
    name: "PM2",
    description: "Node.js process management",
    icon: "https://cdn.simpleicons.org/pm2/E87B54",
  },
  {
    id: "24",
    name: "WooCommerce",
    description: "E-commerce platforms & integrations",
    icon: "https://cdn.simpleicons.org/woocommerce/E87B54",
  },
  {
    id: "25",
    name: "GraphQL",
    description: "Flexible API query language",
    icon: "https://cdn.simpleicons.org/graphql/E87B54",
  },
  {
    id: "26",
    name: "NestJS",
    description: "Scalable Node.js backend framework with TypeScript",
    icon: "https://cdn.simpleicons.org/nestjs/E87B54",
  },
  {
    id: "27",
    name: "Spring Boot",
    description: "Enterprise-grade Java backend development",
    icon: "https://cdn.simpleicons.org/spring/E87B54",
  },
  {
    id: "28",
    name: "Laravel",
    description: "PHP framework for rapid backend & API development",
    icon: "https://cdn.simpleicons.org/laravel/E87B54",
  },
];


export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Systems as a Full Stack Developer",
    excerpt:
      "Lessons learned from designing and maintaining real-world production systems across mobile, web, and backend environments.",
    date: "Jan 2026",
    readTime: "7 min read",
    image: "/images/blog-systems.jpg",
    slug: "building-scalable-systems",
    tags: ["Scalability", "Full Stack", "Backend", "System Design"],
  },
  {
    id: "2",
    title: "Flutter in Production: What Actually Matters",
    excerpt:
      "A practical look at architecture, state management, performance, and maintainability in real Flutter applications.",
    date: "Dec 2025",
    readTime: "6 min read",
    image: "/images/blog-flutter.jpg",
    slug: "flutter-in-production",
    tags: ["Flutter", "Mobile Development", "GetX", "Architecture"],
  },
  {
    id: "3",
    title: "Digital Health Systems in Africa: Challenges & Opportunities",
    excerpt:
      "Exploring the technical and infrastructural realities of building healthcare software for emerging markets.",
    date: "Nov 2025",
    readTime: "8 min read",
    image: "/images/blog-health.jpg",
    slug: "digital-health-africa",
    tags: ["Digital Health", "Software Development", "Africa", "Healthcare Tech"],
  },
];

export const budgetOptions = [
  { value: "", label: "Select project budget..." },
  { value: "500-2000", label: "$500 - $2,000" },
  { value: "2000-5000", label: "$2,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000+", label: "$10,000+" },
];
