export type ProcessStage = {
  number: string;
  slug: string;
  name: string;
  description: string;
  outputs: string[];
};

// Full 9-stage AI transformation process
export const transformationStages: ProcessStage[] = [
  {
    number: "01",
    slug: "discover",
    name: "Discover",
    description:
      "We start by understanding the business: goals, constraints, existing systems, and the people the AI will serve. We don't start with models — we start with the problem.",
    outputs: ["Stakeholder map", "Problem framing", "Constraints & goals"],
  },
  {
    number: "02",
    slug: "analyze",
    name: "Analyze",
    description:
      "We audit the data, systems, and workflows that surround the problem. Quality of AI is bounded by quality of inputs — we make those explicit.",
    outputs: ["Data audit", "System map", "Workflow analysis"],
  },
  {
    number: "03",
    slug: "design",
    name: "Design",
    description:
      "We design the system architecture: model, retrieval, tools, guardrails, human-in-the-loop points, and observability. Design before code.",
    outputs: ["Architecture design", "Eval plan", "Risk register"],
  },
  {
    number: "04",
    slug: "build",
    name: "Build",
    description:
      "We build the system with engineering rigor: versioned prompts, structured outputs, tests, and reproducibility. Not a notebook — a system.",
    outputs: ["Production code", "Eval harness", "Documentation"],
  },
  {
    number: "05",
    slug: "integrate",
    name: "Integrate",
    description:
      "We connect the AI to your real systems: APIs, identity, data, and existing tooling. The AI lives inside your stack, not beside it.",
    outputs: ["System integration", "Auth & access control", "Data pipelines"],
  },
  {
    number: "06",
    slug: "evaluate",
    name: "Evaluate",
    description:
      "We measure the system against real success criteria with automated and human evals. We don't ship on vibes — we ship on evidence.",
    outputs: ["Eval results", "Quality baselines", "Regression suite"],
  },
  {
    number: "07",
    slug: "secure",
    name: "Secure",
    description:
      "We attack the system before deployment: prompt injection, retrieval poisoning, tool abuse, sensitive disclosure. Find weaknesses first.",
    outputs: ["Security assessment", "Guardrails", "Monitoring"],
  },
  {
    number: "08",
    slug: "deploy",
    name: "Deploy",
    description:
      "We ship with safety: gradual rollout, monitoring, rollback, and clear ownership. Production-grade, not demo-grade.",
    outputs: ["Deployment plan", "Rollback strategy", "On-call runbook"],
  },
  {
    number: "09",
    slug: "optimize",
    name: "Optimize",
    description:
      "We iterate: cost, latency, quality, and new capabilities. AI systems drift; we keep them sharp with ongoing evaluation and improvement.",
    outputs: ["Optimization roadmap", "Cost & latency review", "Iterative improvements"],
  },
];

// Compact lifecycle shown in hero visual
export const lifecycleStages = [
  { label: "Business", description: "Understand goals, constraints, and systems." },
  { label: "Discover", description: "Frame the problem and stakeholders." },
  { label: "Design", description: "Architecture, eval plan, and risk register." },
  { label: "Build", description: "Production code with tests and evals." },
  { label: "Automate", description: "Workflows, agents, and integrations." },
  { label: "Evaluate", description: "Measure against real success criteria." },
  { label: "Secure", description: "Attack first. Harden before launch." },
  { label: "Monitor", description: "Observability, drift detection, iteration." },
] as const;
