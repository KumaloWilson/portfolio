export type WorkStatus =
  | "Production"
  | "Integration work"
  | "Platform capability"
  | "In development";

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  status: WorkStatus;
  period: string;
  role: string;
  overview: string;
  problem: string;
  responsibility: string;
  constraints: string[];
  solution: string;
  contributions: string[];
  architecture: string[];
  engineeringChallenge: string;
  outcomes: string[];
  stack: string[];
  featured?: boolean;
  confidentiality?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "neotree",
    eyebrow: "Digital health · Flagship case study",
    title: "Engineering reliable digital health software for low-connectivity hospitals",
    shortTitle: "Neotree digital health platform",
    summary:
      "Full-stack product engineering for an evidence-based neonatal EHR and clinical decision-support platform used in frontline care environments.",
    status: "Production",
    period: "2025–Present",
    role: "Software Developer · Mobile, web and backend",
    overview:
      "Neotree supports neonatal care teams with digital clinical workflows and decision support. I contribute across the Android application, web editor and backend services while working with clinicians, researchers and distributed engineering teams.",
    problem:
      "Clinical software has to stay useful when connectivity is intermittent, devices are constrained and workflows cannot pause while a server catches up. Changes also need to remain traceable and safe across distributed deployments.",
    responsibility:
      "I own and contribute to full-stack features, offline-first data flows, platform tooling and clinical usability improvements. Product and clinical decisions are made collaboratively; this case study describes only my engineering contribution.",
    constraints: [
      "Intermittent connectivity and server availability",
      "Older and distributed Android devices",
      "Sensitive health information",
      "Dynamic clinical workflows and forms",
      "Coordination across clinical, research and engineering teams",
    ],
    solution:
      "The platform treats local operation as a first-class state, then synchronises validated data through backend services when infrastructure becomes available. Version-aware tooling and explicit changelogs improve release traceability, while targeted UI and performance work keeps clinical tasks clear on constrained devices.",
    contributions: [
      "Designed and implemented changelog and version-control capabilities across platform modules.",
      "Improved offline-first synchronisation flows and recovery behaviour.",
      "Optimised clinical interfaces and dynamic form workflows for usability and performance.",
      "Built platform tooling for data-key integrity and safer script management.",
      "Contributed to application-update infrastructure and device acknowledgements.",
    ],
    architecture: [
      "Clinical workflows",
      "Offline-first Android client",
      "Synchronisation and API services",
      "Neotree data platform",
    ],
    engineeringChallenge:
      "A device can have a network connection while the server it depends on is unavailable. Treating those states as equivalent creates confusing failures. The engineering approach separates local persistence, network reachability, service availability and synchronisation acknowledgement so work can continue and recover predictably.",
    outcomes: [
      "More explicit release history and version visibility",
      "Safer recovery paths for interrupted synchronisation",
      "Improved maintainability of dynamic forms and scripts",
      "A stronger foundation for managing distributed application versions",
    ],
    stack: ["Flutter", "React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Docker"],
    featured: true,
    confidentiality: true,
  },
  {
    slug: "health-interoperability",
    eyebrow: "Health systems · Data integration",
    title: "Building health-data pipelines for national EHR interoperability",
    shortTitle: "Neotree, Impilo and DHIS2 interoperability",
    summary:
      "Structured data exchange and reporting workflows connecting neonatal care data with national health information systems.",
    status: "Integration work",
    period: "2025–Present",
    role: "Software Developer & Technical Consultant",
    overview:
      "This work supports structured exchange between Neotree, the Impilo electronic health record and DHIS2 reporting workflows in collaboration with health-sector stakeholders in Zimbabwe.",
    problem:
      "Independent health platforms use different data models, identifiers and operational rhythms. Exchanging data safely requires more than connecting APIs: records must be mapped, validated, traceable and recoverable when a downstream system is unavailable.",
    responsibility:
      "I contribute to integration design and implementation, validation, error handling and reporting pipelines. The architecture shown here is intentionally high-level and uses no patient, facility or internal infrastructure data.",
    constraints: [
      "Sensitive clinical data and strict privacy boundaries",
      "Different schemas and identifiers across systems",
      "Partial failures and delayed delivery",
      "Auditability and data-quality requirements",
      "Multiple organisational stakeholders",
    ],
    solution:
      "The integration pipeline validates and maps structured records before controlled delivery to downstream systems. Explicit processing states, retry-safe operations and observable failures reduce ambiguity and make reconciliation possible without exposing clinical details.",
    contributions: [
      "Implemented structured mapping between platform and reporting data models.",
      "Built validation paths that reject or flag incomplete records before delivery.",
      "Contributed to retry and error-handling behaviour for downstream outages.",
      "Supported secure API integration and reporting workflows.",
      "Collaborated with technical and health-sector stakeholders on interoperability requirements.",
    ],
    architecture: ["Neotree records", "Validation and mapping", "Secure integration services", "Impilo / DHIS2"],
    engineeringChallenge:
      "Integration failures are rarely all-or-nothing. A defensible pipeline needs to distinguish invalid source data, transient transport errors and downstream rejections, then preserve enough context for safe replay and audit without duplicating accepted records.",
    outcomes: [
      "Structured pathways for health-data exchange",
      "Clearer validation and failure states",
      "Support for national reporting and interoperability workflows",
      "A reusable approach to integration reliability",
    ],
    stack: ["REST APIs", "Node.js", "TypeScript", "PostgreSQL", "DHIS2", "EHR integration", "Docker"],
    featured: true,
    confidentiality: true,
  },
  {
    slug: "neotree-app-updates",
    eyebrow: "Platform engineering · Distributed devices",
    title: "Managing application updates across distributed Android devices",
    shortTitle: "Application update and device management",
    summary:
      "A version-aware update workflow for APK and runtime delivery, device acknowledgements and deployment visibility.",
    status: "Platform capability",
    period: "2026",
    role: "Full-stack Engineer",
    overview:
      "Distributed clinical devices need a dependable way to receive the right application and runtime versions without relying on ad-hoc file sharing or continuous connectivity.",
    problem:
      "Manual APK distribution makes it difficult to know which device received an update, which version is running and where follow-up is needed. Country-specific policies and offline devices add further complexity.",
    responsibility:
      "I contributed to the design and implementation of update-management services, version policies, acknowledgement events and administrative visibility. Remote device control was intentionally outside the scope.",
    constraints: [
      "Devices may remain offline for extended periods",
      "Application and runtime versions can change independently",
      "Deployment policies vary by country or programme",
      "Every update state needs a traceable audit trail",
    ],
    solution:
      "The workflow separates update publication, eligibility, delivery and device acknowledgement. Administrators can reason about target versions and outstanding devices while clients safely reconcile when they return online.",
    contributions: [
      "Modelled application, runtime and policy versions explicitly.",
      "Implemented device acknowledgement and update-status events.",
      "Supported APK and over-the-air update paths.",
      "Added visibility for current, pending and behind devices.",
      "Designed follow-up workflows for devices that remain offline.",
    ],
    architecture: ["Release artefacts", "Policy and update service", "Offline-capable devices", "Acknowledgement and audit events"],
    engineeringChallenge:
      "An update is not complete when a file is uploaded or downloaded. The system has to model intent, eligibility, receipt, installation and acknowledgement separately so operators can understand the real fleet state.",
    outcomes: [
      "A traceable update lifecycle",
      "Clear separation of application and runtime versions",
      "Better visibility into devices requiring follow-up",
      "A safer foundation for distributed release operations",
    ],
    stack: ["Android", "Flutter", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    confidentiality: true,
  },
  {
    slug: "daredzidzo",
    eyebrow: "Education technology · Offline-first",
    title: "Daredzidzo: offline digital learning for low-connectivity schools",
    shortTitle: "Daredzidzo",
    summary:
      "A desktop learning product for interactive classroom boards, local content, quizzes and examination preparation without dependable internet.",
    status: "In development",
    period: "2025–Present",
    role: "Technical Lead & Software Engineer",
    overview:
      "Daredzidzo is designed for classrooms where interactive displays are available but continuous internet access is not. Learning materials and assessment workflows remain available locally.",
    problem:
      "Many digital-learning products assume each learner has a connected personal device. That assumption breaks in shared classrooms with limited bandwidth and teacher-led interactive boards.",
    responsibility:
      "I lead the technical direction and contribute to product architecture, offline content, assessment workflows and deployment planning. Features described as future work remain clearly separated from implemented capabilities.",
    constraints: [
      "Unreliable or expensive connectivity",
      "Shared interactive-board hardware",
      "Simple teacher-led classroom workflows",
      "Content updates without constant cloud access",
    ],
    solution:
      "The desktop application keeps core learning materials and quizzes on the device. Synchronisation is reserved for content refresh and reporting when connectivity permits, allowing the classroom experience to remain independent of the network.",
    contributions: [
      "Designed an offline-first desktop application architecture.",
      "Built local learning-content and assessment workflows.",
      "Adapted interaction patterns for classroom boards.",
      "Defined controlled content-synchronisation boundaries.",
      "Shaped a deployment model for low-connectivity schools.",
    ],
    architecture: ["Curated learning content", "Optional content sync", "Local desktop library", "Interactive classroom experience"],
    engineeringChallenge:
      "Content freshness and offline reliability pull in opposite directions. The product separates durable local content from optional synchronisation, with explicit versions so a failed update cannot remove a working classroom experience.",
    outcomes: [
      "Core learning flows designed to work without live internet",
      "A classroom-board-oriented interaction model",
      "Local quiz and examination-preparation workflows",
      "A foundation for controlled content distribution",
    ],
    stack: ["Desktop", "TypeScript", "React", "SQLite", "Offline-first architecture"],
    featured: true,
  },
  {
    slug: "juvakel",
    eyebrow: "Platform engineering · Recruitment",
    title: "Architecting a multi-portal recruitment platform",
    shortTitle: "Juvakel Team Recruiters",
    summary:
      "Technical leadership for connected admin, recruiter and candidate products backed by secure APIs and automated workflows.",
    status: "In development",
    period: "2025–Present",
    role: "Software Engineer & Technical Lead",
    overview:
      "Juvakel is a recruitment ecosystem with distinct experiences for administrators, recruiters and candidates, supported by shared services and operational tooling.",
    problem:
      "Recruitment workflows cross multiple roles and sensitive data boundaries. Separate portals still need consistent identity, permissions, job state, notifications and analytics without duplicating business rules.",
    responsibility:
      "I lead technical direction, architecture and delivery across web, mobile, APIs and deployment workflows while collaborating with product stakeholders.",
    constraints: [
      "Role-specific access to candidate and job data",
      "Shared workflows across three portal experiences",
      "Notification and screening automation",
      "Evolving product requirements",
    ],
    solution:
      "Shared backend services enforce authentication, authorisation and workflow rules, while each portal is shaped around its users. Automation and deployment practices reduce operational friction as the platform evolves.",
    contributions: [
      "Architected admin, recruiter and candidate portal boundaries.",
      "Developed secure APIs and role-based access controls.",
      "Implemented candidate screening and job-management workflows.",
      "Built notification and analytics capabilities.",
      "Introduced delivery automation and DevOps practices.",
    ],
    architecture: ["Admin / recruiter / candidate portals", "Identity and access", "Recruitment APIs", "Workflow, notification and analytics services"],
    engineeringChallenge:
      "The central challenge is keeping permission checks and workflow rules consistent across different user experiences. Moving those rules behind shared APIs reduces duplication and makes role boundaries testable.",
    outcomes: [
      "A shared foundation for three role-specific products",
      "Centralised security and workflow rules",
      "Automated operational and notification paths",
      "Deployment practices designed for product growth",
    ],
    stack: ["React", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    featured: true,
    confidentiality: true,
  },
  {
    slug: "fundani",
    eyebrow: "Education technology · Venture",
    title: "Fundani: a multi-tenant school operating system",
    shortTitle: "Fundani School OS",
    summary:
      "An in-development platform for school operations, identity and connected student, staff and guardian experiences.",
    status: "In development",
    period: "Current venture",
    role: "Founder & Software Engineer",
    overview:
      "Fundani is an education-technology venture exploring a shared operating layer for schools while preserving tenant boundaries and role-specific experiences.",
    problem:
      "School operations are often fragmented across admissions, learner records, staff processes and communication tools. A shared platform must connect these workflows without exposing one institution’s data to another.",
    responsibility:
      "I shape the product and technical architecture, including multi-tenancy, identity, core operational domains and an offline-first direction. This page describes the current direction, not a finished production system.",
    constraints: [
      "Strict tenant and role isolation",
      "Many related school operating domains",
      "Variable school infrastructure",
      "A product roadmap larger than the first releasable scope",
    ],
    solution:
      "The platform is being decomposed around tenant-aware services, central identity and role-specific portals. The initial scope prioritises dependable school operations before broader infrastructure ambitions.",
    contributions: [
      "Defined multi-tenant architecture and domain boundaries.",
      "Designed central identity and role-based access with Keycloak.",
      "Shaped admissions, student, staff and guardian portal concepts.",
      "Set an offline-first direction for infrastructure-constrained schools.",
      "Separated implemented scope from longer-term product vision.",
    ],
    architecture: ["School portals", "Keycloak identity", "Tenant-aware platform services", "Isolated school data"],
    engineeringChallenge:
      "Multi-tenancy is an isolation requirement, not merely a database field. Identity claims, service queries, background jobs and operational tools all need the same tenant boundary by design.",
    outcomes: [
      "A defined multi-tenant platform direction",
      "Clear identity and tenant-isolation boundaries",
      "Prioritised operational product domains",
      "An honest separation between current build and future vision",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Keycloak", "Docker"],
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export const professionalProof = [
  { value: "4+", label: "Years", detail: "Building production-grade mobile, web and backend systems" },
  { value: "First Class", label: "BSc (Hons) IT", detail: "Chinhoyi University of Technology, 2025" },
  { value: "Full stack", label: "Delivery", detail: "Product interfaces, APIs, data and infrastructure" },
  { value: "Offline-first", label: "Specialisation", detail: "Reliable workflows, synchronisation and integrations" },
];

export const capabilities = [
  {
    title: "Reliable systems",
    description: "Offline-first architecture, synchronisation, graceful recovery and software for constrained environments.",
    tools: ["Offline-first", "Data sync", "Performance", "Observability"],
  },
  {
    title: "Backend & integrations",
    description: "Secure services, data pipelines and interoperability across operational and reporting systems.",
    tools: ["Node.js", "NestJS", "REST", "GraphQL", "Spring Boot"],
  },
  {
    title: "Mobile products",
    description: "Cross-platform and native-facing applications designed for real devices and field workflows.",
    tools: ["Flutter", "React Native", "Expo", "Kotlin"],
  },
  {
    title: "Web platforms",
    description: "Accessible, maintainable product interfaces for complex multi-role workflows.",
    tools: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Data & identity",
    description: "Relational modelling, tenant isolation, authentication and role-based authorisation.",
    tools: ["PostgreSQL", "SQLite", "Supabase", "Keycloak"],
  },
  {
    title: "Platform delivery",
    description: "Repeatable deployments and operational foundations for evolving product teams.",
    tools: ["Docker", "Linux", "Nginx", "CI/CD", "AWS"],
  },
];

export const openSourceProjects = [
  {
    title: "LocalGenAI",
    status: "Prototype · Active development",
    role: "Creator",
    description: "A privacy-first exploration of running and managing language models directly on mobile devices.",
    image: "/images/projects/genai.jpg",
    href: "https://github.com/KumaloWilson/local_genai",
    stack: ["Flutter", "On-device AI", "SQLite"],
  },
  {
    title: "CUT Portal Web Analytics",
    status: "Open source · Prototype",
    role: "Creator",
    description: "Real-time portal analytics combining a browser extension, event pipeline and operations dashboard.",
    image: "/images/projects/cutanalytics.jpg",
    href: "https://github.com/KumaloWilson/cut_portal_web_analytics",
    stack: ["React", "Socket.io", "PostgreSQL"],
  },
  {
    title: "FlySpotter Pro",
    status: "Open source · Prototype",
    role: "Creator",
    description: "Offline-capable mobile species identification using on-device computer vision.",
    image: "/images/projects/spoter.png",
    href: "https://github.com/KumaloWilson/fly_spotter",
    stack: ["Flutter", "TensorFlow Lite", "Firebase"],
  },
  {
    title: "Lucid Eye",
    status: "University team project",
    role: "Mobile engineer · Team of six",
    description: "An accessibility-focused mobile assistant for object recognition, reading, navigation and SOS workflows.",
    image: "/images/projects/lucid-eye.jpg",
    href: "https://github.com/KumaloWilson/lucideye",
    stack: ["Flutter", "ML Kit", "Maps"],
  },
  {
    title: "CUT Portal WhatsApp Bot",
    status: "Open source · Prototype",
    role: "Creator",
    description: "A conversational proof of concept for accessing student portal information through WhatsApp.",
    image: "/images/projects/whatbot.png",
    href: "https://github.com/KumaloWilson/cut_portal_whatbot",
    stack: ["Node.js", "Express", "WhatsApp API"],
  },
  {
    title: "tflite_v3",
    status: "Open source · Maintenance",
    role: "Fork maintainer",
    description: "Modernisation and compatibility maintenance for a Flutter TensorFlow Lite plugin.",
    image: "/images/projects/tflite.jpg",
    href: "https://github.com/KumaloWilson/tflite_v3",
    stack: ["Flutter", "TensorFlow Lite", "Android / iOS"],
  },
];

export const education = {
  degree: "BSc (Hons) Information Technology",
  institution: "Chinhoyi University of Technology",
  period: "2021–2025",
  classification: "First Class",
};

export const recognition = [
  { title: "Vice Chancellor’s Award", year: "2025" },
  { title: "University Book Prize", year: "2024" },
  { title: "University Book Prize", year: "2023" },
];
