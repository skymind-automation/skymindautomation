import type { ServiceIconKey } from "@/config/navigation";

export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceDeliverable = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  icon: ServiceIconKey;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  longDescription: string;
  capabilities: ServiceCapability[];
  deliverables: ServiceDeliverable[];
  outcomes: string[];
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const services: Service[] = [
  {
    slug: "ai-implementation",
    icon: "implementation",
    name: "AI Implementation",
    shortName: "Implementation",
    tagline: "Turn business problems into practical AI systems.",
    summary:
      "Turn business problems into practical AI systems. We move from concept to a deployed, production-grade AI capability integrated into your stack.",
    description:
      "End-to-end implementation of AI capabilities inside your product, workflow, or operations — from problem framing to deployed system.",
    longDescription:
      "AI implementation is where most organizations stall: a model works in a notebook but never reaches production. SkyMind closes that gap. We frame the business problem, select models and infrastructure, design the data and retrieval layer, build the application surface, integrate with your systems, and ship a measurable, observable AI capability. Every implementation includes evaluation harnesses, guardrails, observability, and a clear path to operate and iterate.",
    capabilities: [
      {
        title: "Problem framing & feasibility",
        description:
          "Translate business goals into a concrete AI problem with measurable success criteria and clear feasibility signals.",
      },
      {
        title: "Model selection & architecture",
        description:
          "Choose between commercial and open-source models, design retrieval, tools, and orchestration layers.",
      },
      {
        title: "Build & integration",
        description:
          "Ship the model into your product or workflow with APIs, auth, observability, and safe failure modes.",
      },
      {
        title: "Evaluation & guardrails",
        description:
          "Define metrics, build evals, and apply guardrails so the system behaves predictably in production.",
      },
    ],
    deliverables: [
      {
        title: "Production AI capability",
        description:
          "A deployed AI system integrated with your stack, instrumented and observable.",
      },
      {
        title: "Evaluation harness",
        description:
          "Automated and human evals that measure quality, safety, and drift over time.",
      },
      {
        title: "Architecture & runbooks",
        description:
          "Documented system design, ownership, and operational runbooks for your team.",
      },
    ],
    outcomes: [
      "A working AI capability in production, not just a demo",
      "Clear metrics that prove the system is doing its job",
      "Operational ownership your team can maintain",
    ],
    faqs: [
      {
        question: "Do you build with open-source or commercial models?",
        answer:
          "Both. We select based on cost, latency, privacy, and quality requirements — and we make the tradeoffs explicit.",
      },
      {
        question: "Can you work with our existing stack?",
        answer:
          "Yes. We integrate with existing APIs, databases, and identity systems rather than forcing a parallel stack.",
      },
      {
        question: "How long does an implementation take?",
        answer:
          "Typical implementations range from 4 to 12 weeks depending on scope, data readiness, and integration complexity.",
      },
    ],
    relatedServices: ["ai-engineering", "rag", "ai-agents"],
  },
  {
    slug: "ai-automation",
    icon: "automation",
    name: "AI Automation",
    shortName: "Automation",
    tagline: "Automate repetitive processes using AI-powered workflows and agents.",
    summary:
      "Automate repetitive processes using AI-powered workflows and agents — from document handling to multi-step operations.",
    description:
      "Replace repetitive, rules-bound, and LLM-augmented work with reliable AI automations that run on schedule or on event.",
    longDescription:
      "Most operational cost is hidden in repetitive work — triaging tickets, extracting data, drafting responses, routing requests, generating reports. SkyMind designs AI automations that handle these reliably: event-triggered or scheduled, with deterministic scaffolding around non-deterministic models. We build with retries, human-in-the-loop checkpoints, audit logs, and clear failure handling so automations can be trusted in production.",
    capabilities: [
      {
        title: "Workflow discovery & mapping",
        description:
          "Identify high-ROI automation candidates and map the steps, decisions, and human checkpoints.",
      },
      {
        title: "Agent & workflow orchestration",
        description:
          "Build scheduled or event-driven automations with retries, queues, and human-in-the-loop gates.",
      },
      {
        title: "Document & data automation",
        description:
          "Extract, classify, summarize, and route information from documents, emails, and structured sources.",
      },
      {
        title: "Monitoring & reliability",
        description:
          "Observability, alerting, and replay so automations fail loudly and recover gracefully.",
      },
    ],
    deliverables: [
      {
        title: "Deployed automations",
        description:
          "Production automations running on schedule or event with audit trails.",
      },
      {
        title: "Human-in-the-loop consoles",
        description:
          "Lightweight review UIs for low-confidence cases and escalations.",
      },
      {
        title: "Operational dashboards",
        description:
          "Visibility into run history, success rates, costs, and exceptions.",
      },
    ],
    outcomes: [
      "Hours of manual work returned to your team every week",
      "Consistent, auditable handling of repetitive requests",
      "Clear visibility into what automation is doing and why",
    ],
    faqs: [
      {
        question: "What can be automated?",
        answer:
          "Anything with a predictable trigger and a definable outcome — especially tasks that involve reading, classifying, summarizing, drafting, or routing.",
      },
      {
        question: "How do you handle errors?",
        answer:
          "Automations fail loudly, escalate to humans on low confidence, and preserve full audit logs for every run.",
      },
      {
        question: "Do you replace our existing tools?",
        answer:
          "No. We connect to them. Automations layer on top of your existing systems via APIs and webhooks.",
      },
    ],
    relatedServices: ["ai-implementation", "ai-agents"],
  },
  {
    slug: "rag",
    icon: "rag",
    name: "RAG & Knowledge AI",
    shortName: "RAG",
    tagline: "Turn company information into secure AI-powered knowledge systems.",
    summary:
      "Turn company information into secure AI-powered knowledge systems grounded in your documents, policies, and data.",
    description:
      "Retrieval-augmented generation systems that answer from your authoritative sources — not from model memory.",
    longDescription:
      "A RAG system is only as good as its retrieval, ingestion, and evaluation. SkyMind builds RAG systems that are accurate, grounded, and safe: document processing pipelines, chunking and embedding strategies, vector and hybrid search, reranking, citation, and evaluation harnesses that measure grounding, recall, and answer quality. We design access controls so users only retrieve what they're allowed to see, and we add guardrails against prompt injection and sensitive disclosure.",
    capabilities: [
      {
        title: "Ingestion & processing",
        description:
          "Connect to documents, wikis, databases, and APIs with incremental updates and source attribution.",
      },
      {
        title: "Retrieval architecture",
        description:
          "Hybrid vector + keyword search, reranking, and query rewriting tuned for your domain.",
      },
      {
        title: "Grounding & citations",
        description:
          "Every answer is grounded in sources with citations, and refusal behavior when evidence is missing.",
      },
      {
        title: "Access control & safety",
        description:
          "Document-level permissions, redaction, and prompt-injection defenses.",
      },
    ],
    deliverables: [
      {
        title: "Knowledge AI system",
        description:
          "A grounded question-answering system with citations and source attribution.",
      },
      {
        title: "Ingestion pipeline",
        description:
          "Automated sync from your sources with change detection and reindexing.",
      },
      {
        title: "Evaluation suite",
        description:
          "Grounding, recall, and answer-quality evals with regression tracking.",
      },
    ],
    outcomes: [
      "Answers your team can trust because they're grounded in your sources",
      "Reduced time-to-answer for internal knowledge",
      "Clear provenance for every response",
    ],
    faqs: [
      {
        question: "Can RAG work with our permissions model?",
        answer:
          "Yes. We enforce document-level access control so users only retrieve and receive information they are authorized to see.",
      },
      {
        question: "How do you prevent hallucination?",
        answer:
          "Grounding, reranking, refusal behavior, and grounding evaluations. We never rely on the model's memory alone.",
      },
      {
        question: "What sources can you connect to?",
        answer:
          "Wikis, drives, document stores, databases, ticketing systems, and APIs — with incremental reindexing.",
      },
    ],
    relatedServices: ["ai-implementation", "ai-security", "ai-engineering"],
  },
  {
    slug: "ai-agents",
    icon: "agents",
    name: "AI Agents",
    shortName: "Agents",
    tagline: "Build agents capable of reasoning, retrieving information, and interacting with tools.",
    summary:
      "Build agents capable of reasoning, retrieving information, and interacting with tools — safely scoped and observable.",
    description:
      "Agents that reason, plan, retrieve, and use tools — with bounded permissions, observability, and human oversight.",
    longDescription:
      "Agents unlock capabilities that single prompts cannot: multi-step research, tool use, autonomous task completion, and orchestration across systems. They also introduce real risk. SkyMind designs agents with explicit tool scopes, permission boundaries, step limits, and full traceability. We instrument every action so you can audit what an agent did, why, and with what authority — and we design human-in-the-loop gates for high-impact actions.",
    capabilities: [
      {
        title: "Agent design & planning",
        description:
          "ReAct, plan-and-execute, and supervised multi-agent patterns matched to the task.",
      },
      {
        title: "Tool integration & scoping",
        description:
          "Connect agents to internal and external tools with explicit permission scopes and rate limits.",
      },
      {
        title: "Memory & state",
        description:
          "Short-term and long-term memory, scratchpads, and durable state for long-running tasks.",
      },
      {
        title: "Safety & oversight",
        description:
          "Step limits, action allowlists, human approval gates, and full execution traces.",
      },
    ],
    deliverables: [
      {
        title: "Production agent system",
        description:
          "Deployed agents with scoped tools, memory, and observability.",
      },
      {
        title: "Tool & permission registry",
        description:
          "A clear registry of what each agent can call, with what arguments, and why.",
      },
      {
        title: "Trace & replay tooling",
        description:
          "Inspectable traces for every agent run, with replay for debugging.",
      },
    ],
    outcomes: [
      "Autonomous completion of multi-step tasks with safety rails",
      "Clear audit trail of agent reasoning and actions",
      "Human control over high-impact decisions",
    ],
    faqs: [
      {
        question: "How do you stop agents from doing something dangerous?",
        answer:
          "Tool scopes, action allowlists, step limits, and human approval gates for high-impact actions. Agents cannot exceed their granted permissions.",
      },
      {
        question: "Can agents use our internal tools?",
        answer:
          "Yes. We wrap internal APIs as scoped tools with explicit argument schemas and permission checks.",
      },
      {
        question: "How do you debug agent behavior?",
        answer:
          "Every run produces a full trace of reasoning, tool calls, and observations that can be inspected and replayed.",
      },
    ],
    relatedServices: ["ai-automation", "ai-security", "ai-engineering"],
  },
  {
    slug: "ai-engineering",
    icon: "engineering",
    name: "AI Engineering",
    shortName: "Engineering",
    tagline: "Prompt engineering, model selection, evaluation, optimization, structured outputs and integrations.",
    summary:
      "Prompt engineering, model selection, evaluation, optimization, structured outputs and integrations for AI systems that scale.",
    description:
      "The engineering discipline behind production AI: prompts, evals, structured outputs, optimization, and integration.",
    longDescription:
      "Production AI is an engineering problem, not a prompting trick. SkyMind brings rigor: versioned prompts with regression tests, structured outputs with validation, model selection driven by evals not vibes, latency and cost optimization, caching, and integration patterns that survive real traffic. We treat prompts, models, and retrieval as configurable components under test — not as black boxes.",
    capabilities: [
      {
        title: "Prompt engineering & versioning",
        description:
          "Versioned, reviewed prompts with regression tests and A/B comparison.",
      },
      {
        title: "Structured outputs & validation",
        description:
          "Typed schemas, validation, and retries so model output becomes safe application input.",
      },
      {
        title: "Evaluation & model selection",
        description:
          "Automated and human evals across models, prompts, and retrieval configs.",
      },
      {
        title: "Optimization & cost control",
        description:
          "Caching, routing, model cascades, and prompt compression to control cost and latency.",
      },
    ],
    deliverables: [
      {
        title: "Versioned prompt & model registry",
        description:
          "A registry of prompts, models, and configs with versioning and rollback.",
      },
      {
        title: "Evaluation pipeline",
        description:
          "Automated evals run on every change, with human eval workflows.",
      },
      {
        title: "Optimization report",
        description:
          "Latency, cost, and quality baselines with concrete optimization recommendations.",
      },
    ],
    outcomes: [
      "Predictable, measurable AI behavior under change",
      "Lower cost and latency without sacrificing quality",
      "Engineering rigor applied to AI components",
    ],
    faqs: [
      {
        question: "Can you improve our existing prompts?",
        answer:
          "Yes. We audit prompts, build regression evals, and iterate with measurable quality and cost improvements.",
      },
      {
        question: "Do you support structured outputs?",
        answer:
          "Yes. We implement typed schemas with validation, retries, and fallbacks so model output is safe to consume programmatically.",
      },
      {
        question: "How do you pick models?",
        answer:
          "Through evaluation. We benchmark candidates on your tasks using your data and your success criteria.",
      },
    ],
    relatedServices: ["ai-implementation", "rag", "ai-agents"],
  },
  {
    slug: "ai-security",
    icon: "security",
    name: "AI Security",
    shortName: "Security",
    tagline: "Assess and secure AI applications, agents, RAG systems and LLM integrations.",
    summary:
      "Assess and secure AI applications, agents, RAG systems and LLM integrations against real-world threats.",
    description:
      "Security assessments and engineering controls for AI systems: threats, defenses, and ongoing monitoring.",
    longDescription:
      "AI systems introduce a new attack surface: prompt injection, retrieval poisoning, tool abuse, sensitive disclosure, and insecure integrations. SkyMind assesses these systems like attackers and secures them like engineers. We map the attack surface, run targeted tests against prompts, retrieval, agents, and integrations, and deliver concrete engineering fixes — guardrails, input filters, output sanitization, permission boundaries, and monitoring.",
    capabilities: [
      {
        title: "Attack surface mapping",
        description:
          "Identify every input, tool, retrieval path, and integration that an attacker could influence.",
      },
      {
        title: "Prompt injection & jailbreak testing",
        description:
          "Test prompts, system messages, and retrieved content for injection and bypass paths.",
      },
      {
        title: "Retrieval & data exposure testing",
        description:
          "Test RAG systems for unauthorized retrieval, poisoning, and sensitive information disclosure.",
      },
      {
        title: "Agent & tool abuse testing",
        description:
          "Test agent permissions, tool scopes, and step limits for escalation and abuse paths.",
      },
    ],
    deliverables: [
      {
        title: "Security assessment report",
        description:
          "Findings ranked by risk with concrete engineering remediations.",
      },
      {
        title: "Guardrail & filter implementation",
        description:
          "Deployed input filters, output sanitization, and runtime guardrails.",
      },
      {
        title: "Monitoring & alerting",
        description:
          "Detection for abuse patterns, anomalies, and policy violations.",
      },
    ],
    outcomes: [
      "Clear understanding of where your AI system is vulnerable",
      "Concrete engineering fixes, not just findings",
      "Ongoing detection for abuse and policy violations",
    ],
    faqs: [
      {
        question: "What's the difference between AI Security and AI Red Teaming?",
        answer:
          "Red teaming is offensive simulation — we attack your system to find weaknesses. AI Security is the full lifecycle: assessment, engineering fixes, and ongoing monitoring. They overlap but are scoped differently.",
      },
      {
        question: "Can you secure systems you didn't build?",
        answer:
          "Yes. We assess and harden existing AI systems regardless of who built them.",
      },
      {
        question: "Do you follow a specific framework?",
        answer:
          "We draw on OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF, and practical adversarial testing.",
      },
    ],
    relatedServices: ["ai-red-teaming", "rag", "ai-agents"],
  },
  {
    slug: "ai-red-teaming",
    icon: "redteam",
    name: "AI Red Teaming",
    shortName: "Red Teaming",
    tagline: "Simulate attacks against AI systems to identify weaknesses before attackers do.",
    summary:
      "Simulate attacks against AI systems to identify weaknesses before attackers do — structured, scoped, and documented.",
    description:
      "Structured adversarial simulation against AI systems to find exploitable weaknesses before real attackers do.",
    longDescription:
      "Red teaming is the discipline of attacking your own AI system before someone else does. SkyMind runs structured red team engagements: threat modeling, attack tree construction, automated and manual probing of prompts, retrieval, agents, and integrations, and clear documentation of every finding with reproduction steps and severity. We test for prompt injection, jailbreaks, sensitive disclosure, RAG poisoning, unauthorized retrieval, excessive permissions, tool abuse, and insecure integrations.",
    capabilities: [
      {
        title: "Threat modeling",
        description:
          "Map adversaries, motivations, and attack paths specific to your AI system and its data.",
      },
      {
        title: "Adversarial prompt testing",
        description:
          "Manual and automated prompt injection, jailbreak, and bypass attempts.",
      },
      {
        title: "Retrieval & poisoning tests",
        description:
          "Test whether attackers can poison retrieval or extract unauthorized information.",
      },
      {
        title: "Agent & integration probing",
        description:
          "Probe agents for permission escalation, tool abuse, and integration weaknesses.",
      },
    ],
    deliverables: [
      {
        title: "Red team report",
        description:
          "Every finding with reproduction steps, evidence, severity, and remediation guidance.",
      },
      {
        title: "Attack tree documentation",
        description:
          "Documented attack paths and adversarial models for your system.",
      },
      {
        title: "Prioritized remediation plan",
        description:
          "Concrete, ranked fixes for engineering and product teams.",
      },
    ],
    outcomes: [
      "Find exploitable weaknesses before attackers do",
      "Evidence-based prioritization for security investment",
      "A repeatable methodology your team can run again",
    ],
    faqs: [
      {
        question: "Is red teaming safe for production systems?",
        answer:
          "Yes. We scope engagements carefully, use isolated test environments where possible, and avoid destructive actions against production data.",
      },
      {
        question: "How long is a red team engagement?",
        answer:
          "Typically 2–6 weeks depending on system scope, depth, and whether we test in isolated or live environments.",
      },
      {
        question: "Do you provide remediation support?",
        answer:
          "Yes. We provide prioritized remediation guidance and can implement fixes directly via our AI Security engagement.",
      },
    ],
    relatedServices: ["ai-security", "ai-agents", "rag"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}
