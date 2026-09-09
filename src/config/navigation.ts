import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Bot,
  BrainCircuit,
  Database,
  GitBranch,
  ShieldHalf,
  Workflow,
  Cpu,
  Terminal,
  Network,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavGroup = {
  title: string;
  href: string;
  items?: NavItem[];
};

export const mainNav: NavGroup[] = [
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "AI Implementation",
        href: "/services/ai-implementation",
        description: "Turn business problems into practical AI systems.",
      },
      {
        title: "AI Automation",
        href: "/services/ai-automation",
        description: "Automate repetitive processes with AI-powered workflows.",
      },
      {
        title: "RAG & Knowledge AI",
        href: "/services/rag",
        description: "Turn company information into secure knowledge systems.",
      },
      {
        title: "AI Agents",
        href: "/services/ai-agents",
        description: "Reasoning agents that retrieve information and use tools.",
      },
      {
        title: "AI Engineering",
        href: "/services/ai-engineering",
        description:
          "Prompt engineering, evaluation, optimization, structured outputs.",
      },
      {
        title: "AI Security",
        href: "/services/ai-security",
        description: "Assess and secure AI applications and integrations.",
      },
      {
        title: "AI Red Teaming",
        href: "/services/ai-red-teaming",
        description: "Simulate attacks to find weaknesses before attackers do.",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export type ServiceSlug =
  | "ai-implementation"
  | "ai-automation"
  | "rag"
  | "ai-agents"
  | "ai-engineering"
  | "ai-security"
  | "ai-red-teaming";

export type ServiceIconKey =
  | "implementation"
  | "automation"
  | "rag"
  | "agents"
  | "engineering"
  | "security"
  | "redteam";

export const serviceIconMap: Record<ServiceIconKey, LucideIcon> = {
  implementation: Cpu,
  automation: Workflow,
  rag: Database,
  agents: Bot,
  engineering: GitBranch,
  security: ShieldHalf,
  redteam: Terminal,
};

export const capabilitiesNav: NavItem[] = [
  { title: "AI Implementation", href: "/services/ai-implementation" },
  { title: "AI Automation", href: "/services/ai-automation" },
  { title: "RAG & Knowledge AI", href: "/services/rag" },
  { title: "AI Agents", href: "/services/ai-agents" },
  { title: "AI Engineering", href: "/services/ai-engineering" },
  { title: "AI Security", href: "/services/ai-security" },
  { title: "AI Red Teaming", href: "/services/ai-red-teaming" },
];

export const whatWeBuildNav: NavItem[] = [
  { title: "AI Assistants", href: "/solutions" },
  { title: "RAG Systems", href: "/services/rag" },
  { title: "AI Agents", href: "/services/ai-agents" },
  { title: "Workflow Automation", href: "/services/ai-automation" },
  { title: "Document Intelligence", href: "/solutions" },
  { title: "Customer Support AI", href: "/solutions" },
  { title: "Internal Knowledge AI", href: "/solutions" },
  { title: "AI Data Processing", href: "/solutions" },
  { title: "AI Security Systems", href: "/services/ai-security" },
  { title: "AI Monitoring", href: "/solutions" },
  { title: "System / Software Dev", href: "/solutions" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: [
      { title: "AI Implementation", href: "/services/ai-implementation" },
      { title: "AI Automation", href: "/services/ai-automation" },
      { title: "AI Engineering", href: "/services/ai-engineering" },
      { title: "AI Security", href: "/services/ai-security" },
      { title: "AI Red Teaming", href: "/services/ai-red-teaming" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Resources", href: "/resources" },
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "All Solutions", href: "/solutions" },
      { title: "Industries", href: "/industries" },
      { title: "Work", href: "/work" },
      {
        title: "BuiltWithAI",
        href: siteConfig.builtWithAI.url,
        external: true,
      },
    ],
  },
];

// Additional icon registry (used by sections)
export const utilityIcons = {
  boxes: Boxes,
  brain: BrainCircuit,
  network: Network,
} as const;
