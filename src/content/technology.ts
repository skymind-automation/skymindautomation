export type TechCategory = {
  slug: string;
  name: string;
  description: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    slug: "models",
    name: "Models",
    description:
      "We select models based on the task — cost, latency, privacy, and quality. We do not assume any single provider is the right answer.",
    items: [
      "OpenAI",
      "Anthropic",
      "Google",
      "Open-source models",
    ],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    description:
      "Production-grade infrastructure for retrieval, state, caching, and deployment — chosen to fit your existing stack.",
    items: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "Cloud platforms",
    ],
  },
  {
    slug: "ai-systems",
    name: "AI Systems",
    description:
      "The system layer around models: retrieval, agents, evaluation, guardrails, and orchestration that make AI behave predictably.",
    items: [
      "RAG",
      "Agents",
      "LLM APIs",
      "Vector search",
      "Evaluation",
      "Guardrails",
      "Workflow engines",
    ],
  },
];

export const whatWeBuild = [
  {
    name: "AI Assistants",
    description: "Conversational assistants grounded in your knowledge and tools.",
    icon: "assistant" as const,
  },
  {
    name: "RAG Systems",
    description: "Grounded retrieval-augmented systems with citations and access control.",
    icon: "rag" as const,
  },
  {
    name: "AI Agents",
    description: "Reasoning agents that use tools safely under bounded permissions.",
    icon: "agent" as const,
  },
  {
    name: "Workflow Automation",
    description: "Event-driven automations with retries, queues, and human checkpoints.",
    icon: "workflow" as const,
  },
  {
    name: "Document Intelligence",
    description: "Extraction, classification, and validation from high-volume documents.",
    icon: "document" as const,
  },
  {
    name: "Customer Support AI",
    description: "Tier-1 resolution with safe automated actions and human handoff.",
    icon: "support" as const,
  },
  {
    name: "Internal Knowledge AI",
    description: "Internal knowledge assistants grounded in policies and documentation.",
    icon: "knowledge" as const,
  },
  {
    name: "AI Data Processing",
    description: "Pipelines that clean, enrich, and structure data with AI.",
    icon: "data" as const,
  },
  {
    name: "AI Security Systems",
    description: "Guardrails, filters, and monitoring for production AI systems.",
    icon: "security" as const,
  },
  {
    name: "AI Monitoring",
    description: "Observability, drift detection, and quality tracking for AI in production.",
    icon: "monitor" as const,
  },
  {
    name: "System / Software Dev",
    description: "Full-stack software development around your AI capabilities.",
    icon: "system" as const,
  },
] as const;

export type WhatWeBuildItem = (typeof whatWeBuild)[number];

// AI security attack surface categories (for the differentiator section)
export const securityAttackSurface = [
  {
    title: "Prompt Injection",
    description: "Indirect and direct injection that hijacks model behavior.",
  },
  {
    title: "Jailbreaks",
    description: "Bypasses of safety instructions and system prompts.",
  },
  {
    title: "Sensitive Information Disclosure",
    description: "Extraction of system prompts, data, and secrets.",
  },
  {
    title: "RAG Poisoning",
    description: "Injection of malicious content into retrieval sources.",
  },
  {
    title: "Unauthorized Retrieval",
    description: "Access to documents a user should not be able to retrieve.",
  },
  {
    title: "Excessive Agent Permissions",
    description: "Agents with broader tool access than required.",
  },
  {
    title: "Tool Abuse",
    description: "Chaining tools in unintended ways to escalate privileges.",
  },
  {
    title: "Insecure Integrations",
    description: "Weak auth, missing validation, and exposed internal APIs.",
  },
  {
    title: "AI API Security",
    description: "Rate limiting, auth, and abuse prevention on AI endpoints.",
  },
  {
    title: "Data Leakage",
    description: "PII, secrets, and internal data leaking through outputs.",
  },
] as const;
