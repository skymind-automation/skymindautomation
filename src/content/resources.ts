export type Faq = {
  question: string;
  answer: string;
  category: "general" | "services" | "security" | "engagement";
};

export const faqs: Faq[] = [
  {
    category: "general",
    question: "What does SkyMind Automation actually do?",
    answer:
      "We design, build, automate, evaluate, and secure AI systems for organizations. That spans AI implementation, automation, RAG systems, agents, AI engineering, security assessments, and red teaming. We build real systems, not slide decks.",
  },
  {
    category: "general",
    question: "Who do you work with?",
    answer:
      "SMEs, startups, enterprises, and technology companies that are adopting AI and need a partner to build, integrate, automate, or secure it. We work with both technical and non-technical teams.",
  },
  {
    category: "services",
    question: "Do you build with commercial or open-source models?",
    answer:
      "Both. Model selection is driven by the task, data sensitivity, cost, latency, and quality requirements. We make the tradeoffs explicit and benchmark before committing.",
  },
  {
    category: "services",
    question: "Can you work with our existing stack?",
    answer:
      "Yes. We integrate with existing APIs, databases, identity systems, and tooling. We avoid forcing a parallel stack and design AI to live inside your existing architecture.",
  },
  {
    category: "services",
    question: "Do you build systems you didn't design?",
    answer:
      "Yes. We assess, harden, optimize, and operate existing AI systems. We frequently inherit systems built elsewhere.",
  },
  {
    category: "engagement",
    question: "How does an engagement start?",
    answer:
      "Typically with a discovery call to understand goals, constraints, and existing systems. From there we propose a scoped engagement — a pilot, an implementation, an assessment, or a red team exercise — with clear deliverables.",
  },
  {
    category: "engagement",
    question: "How long do projects take?",
    answer:
      "Pilots and assessments can be 2–6 weeks. Full implementations typically range from 4 to 12 weeks depending on scope, data readiness, and integration complexity. We scope precisely before starting.",
  },
  {
    category: "engagement",
    question: "How do you handle IP and confidentiality?",
    answer:
      "Your data, prompts, and IP remain yours. We operate under clear agreements and design systems that keep sensitive data within your environment where possible.",
  },
  {
    category: "security",
    question: "What's the difference between AI Security and AI Red Teaming?",
    answer:
      "Red teaming is offensive simulation — we attack your system to find exploitable weaknesses. AI Security is the full lifecycle: assessment, engineering fixes, guardrails, and ongoing monitoring. They overlap and are often combined.",
  },
  {
    category: "security",
    question: "Do you follow a specific framework?",
    answer:
      "We draw on the OWASP LLM Top 10, MITRE ATLAS, and the NIST AI RMF, combined with practical adversarial testing and engineering rigor.",
  },
];

export type Resource = {
  slug: string;
  title: string;
  description: string;
  type: "guide" | "article" | "checklist" | "framework";
  readTime: string;
  topic: string;
};

export const resources: Resource[] = [
  {
    slug: "ai-implementation-checklist",
    title: "The AI Implementation Checklist",
    description:
      "A practical checklist for moving an AI capability from prototype to production — covering data, retrieval, evaluation, guardrails, and operations.",
    type: "checklist",
    readTime: "8 min read",
    topic: "AI Implementation",
  },
  {
    slug: "rag-architecture-guide",
    title: "Designing a RAG System That Survives Production",
    description:
      "How to design retrieval, chunking, reranking, and evaluation for a RAG system that holds up under real usage — with grounding and access control.",
    type: "guide",
    readTime: "12 min read",
    topic: "RAG",
  },
  {
    slug: "ai-red-team-methodology",
    title: "A Practical AI Red Team Methodology",
    description:
      "How we scope and run red team engagements against AI systems — threat modeling, attack trees, and reproducible findings.",
    type: "framework",
    readTime: "15 min read",
    topic: "AI Security",
  },
  {
    slug: "agent-safety-patterns",
    title: "Agent Safety Patterns: Scopes, Gates, and Traces",
    description:
      "Engineering patterns for building agents that can be trusted in production — permission scopes, human approval gates, and execution traces.",
    type: "guide",
    readTime: "10 min read",
    topic: "AI Agents",
  },
  {
    slug: "eval-first-engineering",
    title: "Eval-First AI Engineering",
    description:
      "Why evaluation should drive every decision in an AI system — and how to build an eval harness that actually catches regressions.",
    type: "article",
    readTime: "9 min read",
    topic: "AI Engineering",
  },
  {
    slug: "prompt-injection-defense",
    title: "Defending Against Prompt Injection",
    description:
      "A practical guide to prompt injection vectors and the engineering defenses that actually reduce risk in production systems.",
    type: "guide",
    readTime: "11 min read",
    topic: "AI Security",
  },
];
