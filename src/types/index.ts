export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  mode: string;
  start: string;
  end: string;
  current?: boolean;
  technologies: string[];
  responsibilities: string[];
}

export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "Enterprise"
  | "FinTech"
  | "E-Commerce"
  | "WordPress";

export interface ProjectFeature {
  label: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  role: string;
  architecture: string[];
  challenges: string;
  outcome: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  highlight: string;
  role: string;
  link?: string;
  /** Real product screenshot, e.g. "/projects/scatch.png". Takes priority over `visual` when present. */
  image?: string;
  /** Fallback illustrative mockup key, used when no real screenshot is available (e.g. confidential/backend work). */
  visual: "nccpl" | "faysal-user" | "faysal-admin" | "scatch" | "psx" | "pingup-microservices";
  categories: ProjectCategory[];
  caseStudy: CaseStudy;
  priority: number;
}

export interface ClientProject {
  id: string;
  name: string;
  url: string;
  tech: string[];
  description: string;
  features: string[];
  categories: ProjectCategory[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  affiliation?: string;
  program: string;
  start: string;
  end: string;
  status: string;
}

export interface JourneyStep {
  year: string;
  label: string;
}
