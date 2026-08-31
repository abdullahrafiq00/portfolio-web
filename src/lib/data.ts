import type {
  ClientProject,
  EducationEntry,
  EngineeringPrinciple,
  ExperienceEntry,
  FeaturedProject,
  JourneyStep,
  NavLink,
  SkillCategory,
} from "@/types";

export const personal = {
  name: "Abdullah Rafiq",
  title: "Full Stack Developer",
  positioning:
    "Full Stack Developer specializing in React, Next.js, Node.js, NestJS and scalable web applications.",
  statement:
    "I build scalable, high-performance web applications with modern frontend technologies, robust backend architectures, and clean user experiences.",
  phone: "+92-3302819227",
  email: "abdullahrafiq556@gmail.com",
  linkedin: "https://linkedin.com/in/abdullah-rafiq123",
  linkedinLabel: "linkedin.com/in/abdullah-rafiq123",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experience: ExperienceEntry[] = [
  {
    id: "pingup",
    company: "Ping Up",
    role: "Full Stack Developer",
    mode: "Full-time · On-site",
    start: "Jan 2026",
    end: "Present",
    current: true,
    technologies: ["MERN", "Next.js", "React", "Node.js", "NestJS", "MongoDB", "MySQL", "GitHub"],
    responsibilities: [
      "Developed and maintained full-stack web applications using the MERN stack with Next.js.",
      "Built scalable backend services and RESTful APIs using NestJS and Node.js.",
      "Designed responsive interfaces using React and Next.js.",
      "Integrated authentication and authorization systems.",
      "Worked with MongoDB and MySQL across services.",
      "Focused on scalable architecture, maintainability and performance.",
    ],
  },
  {
    id: "expertscommunication",
    company: "Experts Communication",
    role: "Full Stack WordPress Developer",
    mode: "Full-time · On-site",
    start: "Jun 2025",
    end: "Jan 2026",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "MySQL", "Custom Themes & Plugins"],
    responsibilities: [
      "Led end-to-end development and management of WordPress websites — frontend UI/UX through backend architecture.",
      "Built fully responsive websites from scratch using custom themes and plugins.",
      "Handled ongoing maintenance, performance optimization and security updates.",
      "Managed hosting environments (Hostinger, HostArmada) and resolved complex technical issues.",
      "Implemented modern, user-centric interfaces with WordPress core customizations.",
      "Delivered scalable, high-performance, SEO-friendly web solutions tailored to client needs.",
    ],
  },
  {
    id: "dotlocalhost",
    company: "Dotlocalhost",
    role: "WordPress Developer",
    mode: "Part-time · On-site",
    start: "Sep 2024",
    end: "Jun 2025",
    technologies: ["WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript", "WooCommerce"],
    responsibilities: [
      "Designed and customized responsive WordPress websites.",
      "Built reusable layouts and components.",
      "Improved performance and user experience.",
      "Ensured cross-browser and cross-device compatibility.",
    ],
  },
  {
    id: "madbee",
    company: "Mad Bee Digital",
    role: "WordPress Developer",
    mode: "Full-time · On-site",
    start: "Nov 2023",
    end: "Feb 2024",
    technologies: ["WordPress", "Elementor", "PHP", "HTML", "CSS", "JavaScript", "WooCommerce"],
    responsibilities: [
      "Developed client-specific WordPress websites.",
      "Customized layouts and functionality.",
      "Improved UI structure and navigation.",
      "Optimized responsiveness and performance.",
    ],
  },
  {
    id: "intrawide",
    company: "Intrawide Pvt Ltd",
    role: "Frontend Developer",
    mode: "Full-time · On-site",
    start: "Aug 2023",
    end: "Nov 2023",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    responsibilities: [
      "Developed responsive frontend interfaces.",
      "Converted UI/UX designs into reusable code.",
      "Enhanced UI functionality with jQuery.",
      "Worked on dynamic elements and DOM manipulation.",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "pingup-enterprise",
    name: "Ping Up Enterprise",
    category: "Enterprise Marketing Platform",
    tagline: "Ping Up's enterprise-facing website, built from the ground up.",
    description:
      "The enterprise-facing website for Ping Up — Pakistan's SECP-licensed Shariah-compliant wealth management platform — built entirely from scratch to showcase Ping Up's white-label savings, wallet and transfer technology to enterprise partners.",
    tech: ["React", "Vite", "React Router", "JavaScript"],
    features: [
      "Enterprise landing experience",
      "Product showcase carousel",
      "Goal-based savings flows",
      "Multi-currency wallet UI",
      "Transfer & payments UI",
      "Responsive, animated layout",
    ],
    highlight: "Built from zero to shipped — architecture, componentization and pixel-level implementation handled end to end.",
    role: "Frontend Developer — designed and built the entire Ping Up Enterprise site from scratch using React and Vite.",
    image: "/projects/pingup-enterprise.png",
    visual: "nccpl",
    categories: ["Enterprise", "FinTech", "Full Stack"],
    priority: 1,
    caseStudy: {
      overview:
        "Ping Up Enterprise is the partner-facing marketing site for Ping Up, presenting its Shariah-compliant wealth management technology — savings goals, multi-currency wallets and transfers — to enterprise and B2B audiences.",
      problem:
        "Ping Up needed a standalone, fast-shipping enterprise site to pitch its platform to partners, distinct from the consumer-facing product, built without carrying the weight of a larger framework.",
      solution:
        "Built a greenfield React + Vite site from the ground up — component architecture, routing with React Router, and interactive product showcases — with no existing codebase to build on top of.",
      role: "Frontend Developer responsible for the full build: project setup, component architecture, UI implementation and shipping the site end to end.",
      architecture: [
        "React + Vite single-page application",
        "React Router for client-side navigation",
        "Componentized product showcase sections",
        "Lightweight, dependency-conscious frontend stack",
      ],
      challenges:
        "Starting from a completely empty repository and shipping a polished, on-brand enterprise site without an existing design system or component library to lean on.",
      outcome:
        "Delivered a production enterprise site from scratch, giving Ping Up a dedicated surface to present its platform to partners and enterprise clients.",
    },
  },
  {
    id: "nccpl",
    name: "NCCPL Admin Dashboard",
    category: "Enterprise Web Application",
    tagline: "An enterprise administration platform for complex financial and operational workflows.",
    description:
      "A full-featured enterprise administration platform built for complex financial and operational workflows, covering customers, auctions, transactions, transfers, redemptions and system configuration.",
    tech: ["Next.js", "NestJS", "REST APIs"],
    features: [
      "Customer management module",
      "Auction workflows",
      "Transaction processing",
      "Transfers and redemptions",
      "System configuration panels",
      "SanataSoft API integration",
      "Idenfo API integration",
    ],
    highlight: "Modular Next.js frontend backed by a NestJS service layer, built around structured admin navigation and a clean frontend/backend separation.",
    role: "Full Stack Developer — built the Next.js frontend and NestJS backend services, and integrated third-party financial and identity APIs.",
    image: "/projects/nccpl.png",
    visual: "nccpl",
    categories: ["Enterprise", "Full Stack", "FinTech"],
    priority: 2,
    caseStudy: {
      overview:
        "NCCPL Admin Dashboard is an enterprise administration platform covering customer records, auctions, transactions, transfers, redemptions and configuration for financial operations.",
      problem:
        "The business needed a single, structured administration surface to manage several interconnected financial workflows — customers, auctions, transfers and redemptions — while integrating with external financial and identity verification providers.",
      solution:
        "Built a modular Next.js frontend paired with a NestJS backend, organizing each business domain (customers, auctions, transactions, transfers, redemptions, configuration) into its own module with clear API boundaries.",
      role: "Full Stack Developer responsible for the Next.js frontend, NestJS backend services and integration of SanataSoft and Idenfo APIs.",
      architecture: [
        "Next.js frontend with structured, role-aware admin navigation",
        "NestJS backend organized into domain-driven modules",
        "REST API layer connecting frontend and backend services",
        "SanataSoft and Idenfo API integrations for financial and identity data",
        "Clear separation between presentation, business logic and data access",
      ],
      challenges:
        "Coordinating multiple financial modules with different data shapes and lifecycles while keeping the admin navigation coherent and the API layer consistent across external integrations.",
      outcome:
        "Delivered a modular architecture that keeps each operational domain independently maintainable, with a scalable pattern for adding new financial modules or API integrations.",
    },
  },
  {
    id: "pingup-microservices",
    name: "Ping Up — Backend Microservices",
    category: "Backend / Microservices Architecture",
    tagline: "The service-oriented backend powering Ping Up's product, goals, education and integration layers.",
    description:
      "A Node.js microservices backend powering Ping Up's core platform — independently deployable services for users, goals, products, investor education, notifications and third-party integrations, communicating through Redis.",
    tech: ["Node.js", "Express", "Redis", "Microservices", "REST APIs"],
    features: [
      "Users service",
      "Goals service",
      "Products service",
      "Education service",
      "Notification / email engine",
      "Core processing engine",
      "Third-party integration service",
      "Redis-backed caching & pub/sub",
    ],
    highlight: "Each domain runs as its own independently deployable Express service, communicating through Redis rather than a single monolith.",
    role: "Full Stack Developer — build and maintain services within Ping Up's backend microservices architecture.",
    visual: "pingup-microservices",
    categories: ["Enterprise", "FinTech", "Backend"],
    priority: 3,
    caseStudy: {
      overview:
        "Ping Up's backend is split into focused Node.js/Express microservices — users, goals, products, education, engine, email-engine and an integration service — rather than a single monolithic API.",
      problem:
        "As Ping Up's product surface grew (savings goals, investment products, investor education, notifications, partner integrations), a single backend needed to be decomposed into independently deployable, independently scalable services.",
      solution:
        "Built and maintained individual Express services per domain, each with its own repository and deployment lifecycle, using Redis for caching and inter-service pub/sub messaging.",
      role: "Full Stack Developer contributing to and maintaining services across the microservices layer, including business logic, Redis-backed communication and third-party integrations.",
      architecture: [
        "Domain-scoped Express services (users, goals, products, education, engine, email-engine, integration)",
        "Redis for caching and pub/sub communication between services",
        "Independent deployment per service",
        "REST APIs consumed by Ping Up's web and enterprise frontends",
      ],
      challenges:
        "Keeping service boundaries clean and communication reliable across a growing number of independently deployed services without falling back into monolithic coupling.",
      outcome:
        "A backend that scales and deploys service-by-service, letting features in one domain (e.g. goals) ship without touching unrelated services.",
    },
  },
  {
    id: "faysal-user",
    name: "Faysal Funds — User Dashboard",
    category: "FinTech / Financial Application",
    tagline: "A financial dashboard for onboarding, KYC and investment workflows.",
    description:
      "A financial user dashboard supporting onboarding, KYC verification, account approval and investment-related workflows including transfers and redemptions.",
    tech: ["Next.js", "API Integration"],
    features: [
      "User onboarding flow",
      "KYC verification",
      "Account approval status",
      "IBFT transfers",
      "KuickPay investments",
      "Fund transfers",
      "Redemptions",
    ],
    highlight: "API-driven financial workflows wrapped in a clean, responsive Next.js interface.",
    role: "Frontend Developer — built the Next.js frontend and integrated onboarding, KYC and payment/investment APIs.",
    image: "/projects/faysal-user.png",
    visual: "faysal-user",
    categories: ["FinTech", "Frontend"],
    priority: 4,
    caseStudy: {
      overview:
        "A financial dashboard that guides users through onboarding, KYC verification and day-to-day investment activity such as transfers and redemptions.",
      problem:
        "Users needed a single, guided interface to complete identity verification and manage investment actions that depend on several external financial and verification services.",
      solution:
        "Implemented a Next.js dashboard structured around the user journey — onboarding, KYC, account approval — with dedicated flows for IBFT transfers, KuickPay investments and redemptions, all driven by API integrations.",
      role: "Frontend Developer responsible for building the Next.js frontend and wiring it to onboarding, KYC and transaction APIs.",
      architecture: [
        "Next.js frontend with a staged onboarding and KYC flow",
        "API-driven investment and transfer modules",
        "Status-driven UI reflecting account approval and verification state",
        "Responsive layout for account, transfer and redemption screens",
      ],
      challenges:
        "Designing a UI that stays clear and responsive while reflecting multiple asynchronous verification and transaction states from external APIs.",
      outcome:
        "Delivered a coherent, API-driven dashboard that walks users from onboarding through KYC to active fund management without breaking flow between steps.",
    },
  },
  {
    id: "psx-lms",
    name: "PSX Learning Management System",
    category: "Enterprise LMS / EdTech",
    tagline: "Pakistan Stock Exchange's investor education platform — hardened through security remediation.",
    description:
      "A Learning Management System built for the Pakistan Stock Exchange's Investor Education initiative, delivering investment courses, webinars, tools and blogs through a Next.js frontend and NestJS backend.",
    tech: ["Next.js", "NestJS", "REST APIs"],
    features: [
      "Course & content delivery",
      "Webinar listings",
      "Investor education tools",
      "Blog publishing",
      "VAPT security remediation",
      "Bug fixes & enhancements",
      "Login & registration flows",
    ],
    highlight: "Identified and remediated multiple VAPT (Vulnerability Assessment and Penetration Testing) findings, strengthening the platform against real-world security threats.",
    role: "Full Stack Developer — maintained and enhanced an existing enterprise LMS codebase across frontend and backend, with a strong focus on security hardening.",
    image: "/projects/psx.png",
    visual: "psx",
    categories: ["Enterprise", "Full Stack"],
    priority: 5,
    caseStudy: {
      overview:
        "PSX's Learning Management System (Investor Education platform) delivers courses, webinars, tools and blog content to help investors learn about Pakistan's capital markets, built on Next.js and NestJS.",
      problem:
        "An existing enterprise LMS needed continuous feature development and bug fixes, alongside remediation of security vulnerabilities surfaced by a formal VAPT audit.",
      solution:
        "Worked across the Next.js frontend and NestJS backend to resolve critical bugs, ship feature enhancements, and systematically remediate VAPT findings without disrupting the live platform.",
      role: "Full Stack Developer responsible for frontend and backend maintenance, feature delivery and security remediation within an ongoing enterprise development cycle.",
      architecture: [
        "Next.js frontend serving courses, webinars, tools and blog content",
        "NestJS backend APIs for content, enrollment and investor data",
        "Security hardening driven by VAPT audit findings",
        "Maintained within a large, live enterprise codebase",
      ],
      challenges:
        "Adapting quickly to an existing enterprise codebase and remediating security vulnerabilities without regressing functionality on a live, public platform.",
      outcome:
        "Improved platform stability, security posture and user experience through a combination of bug fixes, VAPT remediation and feature enhancements.",
    },
  },
  {
    id: "pingup-web",
    name: "Ping Up",
    category: "Consumer FinTech Platform",
    tagline: "Pakistan's Shariah-compliant wealth management platform — maintained and extended.",
    description:
      "Ping Up's main consumer-facing website — a SECP-licensed, Shariah-compliant wealth management platform. Ongoing ownership of feature development, enhancements and maintenance as the product evolves.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Goal-based investing flows",
      "Platform & product pages",
      "SECP licensing & compliance info",
      "App download / onboarding funnel",
      "Ongoing feature rollouts",
      "Bug fixes & UX improvements",
    ],
    highlight: "Continuous ownership — every new feature and fix ships against a live, actively used consumer product.",
    role: "Full Stack Developer — maintain and extend Ping Up's main website, shipping new features and improvements as the product grows.",
    image: "/projects/pingup-website.png",
    visual: "nccpl",
    categories: ["Enterprise", "FinTech", "Full Stack"],
    priority: 6,
    caseStudy: {
      overview:
        "Ping Up's main website is the primary consumer entry point into its Shariah-compliant wealth management platform — presenting the product, its SECP license and its goal-based investing experience.",
      problem:
        "As a live consumer product, the site needs continuous iteration: new features, content updates and fixes, without downtime or regressions for existing users.",
      solution:
        "Own ongoing development on the existing React/TypeScript/Vite codebase — shipping new sections, improving UX and fixing issues as product requirements evolve.",
      role: "Full Stack Developer responsible for feature development, maintenance and iterative improvements on the live site.",
      architecture: [
        "React + TypeScript frontend built with Vite",
        "Tailwind CSS and shadcn/ui component system",
        "Content sections for goals, licensing and onboarding",
        "Iterative feature delivery on an established codebase",
      ],
      challenges:
        "Shipping continuous improvements to a live, public-facing fintech product while keeping the experience stable and on-brand.",
      outcome:
        "A consistently maintained, evolving consumer site that keeps pace with Ping Up's product and compliance requirements.",
    },
  },
  {
    id: "scatch",
    name: "Scatch",
    category: "Full-Stack E-Commerce Platform",
    tagline: "A complete e-commerce platform with customer and admin workflows.",
    description:
      "A full-stack e-commerce platform with complete customer and admin workflows, built on the MERN stack with a clean MVC architecture and role-based access control.",
    tech: ["MERN", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Secure authentication",
      "Authorization middleware",
      "Product filtering",
      "Price sorting",
      "New arrivals",
      "Discounts",
      "Availability filtering",
      "Cart management",
      "Flash messages",
      "Admin dashboard",
      "Product CRUD",
      "Responsive UI",
    ],
    highlight: "Built with a clean MVC architecture and role-based access control.",
    role: "Full Stack Developer — designed and built both the customer storefront and the admin dashboard.",
    image: "/projects/scatch.png",
    visual: "scatch",
    categories: ["Full Stack", "E-Commerce"],
    priority: 7,
    caseStudy: {
      overview:
        "Scatch is a full-stack e-commerce platform covering the complete customer shopping journey alongside an admin dashboard for product and store management.",
      problem:
        "The platform needed both a fast, filterable shopping experience for customers and a secure, role-restricted dashboard for admins to manage products and orders.",
      solution:
        "Structured the application around an MVC architecture with authorization middleware, separating customer-facing routes from admin-only routes, and built product filtering, sorting and cart logic on top of a MongoDB data layer.",
      role: "Full Stack Developer responsible for the MERN application end to end — schema design, authentication, storefront UI and admin dashboard.",
      architecture: [
        "MVC architecture across Express routes, controllers and MongoDB models",
        "Authentication and authorization middleware protecting admin routes",
        "Product filtering, sorting and availability logic",
        "Cart management with session-aware state",
        "Tailwind CSS-driven responsive UI",
      ],
      challenges:
        "Keeping the customer and admin experiences cleanly separated within a single codebase while sharing the same data models safely.",
      outcome:
        "Delivered a maintainable MVC codebase where customer and admin features can evolve independently without crossing access boundaries.",
    },
  },
];

export const clientProjects: ClientProject[] = [
  {
    id: "alquranlesson",
    name: "AlQuranLesson.com",
    url: "https://alquranlesson.com/",
    tech: ["WordPress", "PHP", "MySQL"],
    description: "A fully customized online Quran learning platform.",
    features: [
      "Online class booking",
      "Course management",
      "Blog publishing",
      "Student engagement",
      "Admin panel",
      "Teacher/student management",
      "Reporting",
      "Responsive UI",
    ],
    categories: ["WordPress"],
  },
  {
    id: "capfabricator",
    name: "Cap Fabricator",
    url: "https://capfabricator.com/",
    tech: ["WordPress", "WooCommerce"],
    description: "Custom cap manufacturing e-commerce website.",
    features: [
      "Product catalogs",
      "Galleries",
      "Customization workflows",
      "Shopping cart",
      "Responsive design",
      "Performance optimization",
    ],
    categories: ["WordPress", "E-Commerce"],
  },
  {
    id: "craft2publish",
    name: "Craft2Publish",
    url: "https://craft2publish.com/",
    tech: ["WordPress"],
    description: "Publishing services platform built for authors and publishers.",
    features: [
      "Service pages",
      "User registration",
      "Resource management",
      "Responsive design",
      "Content accessibility",
    ],
    categories: ["WordPress"],
  },
  {
    id: "gunsandarmor",
    name: "Guns and Armor",
    url: "https://gunsandarmor.pk/",
    tech: ["WordPress", "WooCommerce"],
    description: "E-commerce platform with product management and WooCommerce workflows.",
    features: [
      "Product catalog",
      "Cart and checkout",
      "Payment gateway integration",
      "Inventory management",
      "Responsive UX",
      "Ongoing maintenance",
    ],
    categories: ["WordPress", "E-Commerce"],
  },
  {
    id: "kensha",
    name: "Kensha",
    url: "https://kensha.net/",
    tech: ["WordPress", "WooCommerce"],
    description: "Complete e-commerce platform.",
    features: [
      "Product management",
      "Customer accounts",
      "Cart and order processing",
      "Responsive UI",
      "Navigation optimization",
    ],
    categories: ["WordPress", "E-Commerce"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "jQuery", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "PHP", "Python", ".NET"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    label: "CMS",
    skills: ["WordPress", "WooCommerce", "Elementor", "Wix", "Webflow"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    title: "Scalable Architecture",
    description: "Designing modular systems that remain maintainable as applications grow.",
  },
  {
    title: "API-First Development",
    description: "Building structured REST APIs and clean communication between frontend and backend services.",
  },
  {
    title: "Secure Authentication",
    description: "Implementing authentication, authorization and role-based access control.",
  },
  {
    title: "Performance",
    description: "Optimizing rendering, APIs, assets and frontend experiences.",
  },
  {
    title: "Clean Code",
    description: "Reusable components, maintainable architecture and clear separation of responsibilities.",
  },
];

export const education: EducationEntry[] = [
  {
    id: "uit",
    institution: "Usman Institute of Technology",
    affiliation: "Affiliated with NED University",
    program: "BS Computer Science",
    start: "2021",
    end: "2025",
    status: "Graduated · CGPA: 3.162",
  },
  {
    id: "aptech",
    institution: "Aptech Learning",
    program: "Diploma in Software Engineering",
    start: "2022",
    end: "2025",
    status: "Graduated",
  },
  {
    id: "jinnah",
    institution: "Jinnah Government College, North Nazimabad",
    program: "Pre-Engineering",
    start: "2019",
    end: "2020",
    status: "86.82%",
  },
];

export const careerJourney: JourneyStep[] = [
  { year: "2023", label: "WordPress Developer" },
  { year: "2024", label: "WordPress + Custom Development" },
  { year: "2025", label: "Full Stack WordPress Developer" },
  { year: "2026 — Present", label: "Full Stack / Fintech — MERN, Next.js, NestJS" },
];

export const aboutTimeline = [
  "WordPress Development",
  "Frontend Development",
  "Full Stack WordPress",
  "MERN Stack",
  "Next.js & NestJS",
  "Enterprise / FinTech Applications",
];

export const architectureFlow = ["Frontend", "Next.js", "API Layer", "NestJS / Node.js", "MongoDB / PostgreSQL"];
