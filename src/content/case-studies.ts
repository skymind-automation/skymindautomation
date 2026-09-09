export type CaseStudy = {
  slug: string;
  title: string;
  clientLabel: string; // e.g. "Fintech Platform" — generic, not a real client name
  tag: string; // category tag
  illustrative: boolean; // true = Example Solution
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  automation: string[];
  outcome: string[];
  architecture: { layer: string; detail: string }[];
  industry?: string;
  relatedServices: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rag-knowledge-platform",
    title: "Internal Knowledge Platform for Operational Teams",
    clientLabel: "B2B SaaS Company",
    tag: "RAG & Knowledge AI",
    illustrative: true,
    summary:
      "A grounded internal knowledge assistant that answers operational questions from documentation, tickets, and policies — with citations and access control.",
    problem:
      "Operations and support teams spent hours daily searching documentation, prior tickets, and internal wikis to answer recurring questions. Information was fragmented across systems, inconsistent, and slow to find.",
    solution:
      "A RAG system that ingests documentation, tickets, and policies with incremental sync, applies document-level access control, and grounds every answer in cited sources with refusal behavior when evidence is missing.",
    technology: [
      "OpenAI & Anthropic models",
      "PostgreSQL + pgvector",
      "Hybrid retrieval (vector + BM25)",
      "Reranker",
    ],
    automation: [
      "Incremental reindexing on document change",
      "Query rewriting",
      "Citation generation",
      "Feedback loop into eval set",
    ],
    outcome: [
      "Reduced average time-to-answer for internal queries",
      "Every answer grounded in a citable source",
      "Access control preserved at retrieval time",
    ],
    architecture: [
      { layer: "Ingestion", detail: "Source connectors with change detection and incremental updates." },
      { layer: "Processing", detail: "Chunking, embedding, and metadata extraction with source attribution." },
      { layer: "Retrieval", detail: "Hybrid vector + keyword search with reranking and query rewriting." },
      { layer: "Generation", detail: "Grounded answers with citations and refusal when evidence is missing." },
      { layer: "Safety", detail: "Document-level access control and prompt-injection defenses." },
    ],
    industry: "technology",
    relatedServices: ["rag", "ai-implementation", "ai-security"],
  },
  {
    slug: "support-automation",
    title: "Tier-1 Support Automation with Human Handoff",
    clientLabel: "E-commerce Platform",
    tag: "AI Automation",
    illustrative: true,
    summary:
      "An automated tier-1 support system that resolves common requests and escalates low-confidence cases to humans with full context.",
    problem:
      "Support agents were overloaded with repetitive tier-1 questions. Response times were slow, and agents had little time for complex cases.",
    solution:
      "An AI automation that classifies incoming requests, resolves common cases with grounded answers, and escalates low-confidence or sensitive cases to humans with a full summary and context.",
    technology: [
      "LLM classification & drafting",
      "Tool integration (CRM, order API)",
      "Confidence scoring",
      "Human-in-the-loop console",
    ],
    automation: [
      "Ticket classification & routing",
      "Drafted responses with approval",
      "Automated refunds within policy",
      "Escalation on low confidence",
    ],
    outcome: [
      "Reduced tier-1 ticket volume handled by humans",
      "Faster average response time on common issues",
      "Clear audit trail of automated actions",
    ],
    architecture: [
      { layer: "Intake", detail: "Webhook ingestion of new tickets from the helpdesk." },
      { layer: "Classification", detail: "Intent and sensitivity classification with confidence." },
      { layer: "Resolution", detail: "Grounded drafting and safe automated actions within policy." },
      { layer: "Escalation", detail: "Human handoff with summary, evidence, and context." },
      { layer: "Observability", detail: "Run history, success rates, and exception dashboards." },
    ],
    industry: "retail",
    relatedServices: ["ai-automation", "ai-agents", "rag"],
  },
  {
    slug: "security-red-team",
    title: "AI Red Team Engagement for an Agent Platform",
    clientLabel: "Fintech Platform",
    tag: "AI Red Teaming",
    illustrative: true,
    summary:
      "A structured red team engagement that found prompt injection paths, excessive agent permissions, and retrieval exposure before launch.",
    problem:
      "A new agent platform was about to launch with tool access to internal systems. Leadership needed confidence the system was not exploitable.",
    solution:
      "A structured red team engagement: threat modeling, adversarial prompt testing, retrieval and permission probing, and a prioritized remediation plan implemented with the engineering team.",
    technology: [
      "Adversarial prompt suite",
      "Agent permission probing",
      "Retrieval poisoning tests",
      "Tool abuse simulation",
    ],
    automation: [
      "Automated prompt injection sweeps",
      "Permission escalation probes",
      "Regression suite for fixes",
    ],
    outcome: [
      "Found exploitable paths before launch",
      "Closed permission gaps and added guardrails",
      "Established a repeatable red team methodology",
    ],
    architecture: [
      { layer: "Threat modeling", detail: "Adversary models and attack trees for the agent platform." },
      { layer: "Prompt testing", detail: "Manual and automated injection and jailbreak attempts." },
      { layer: "Retrieval testing", detail: "Unauthorized retrieval and poisoning attempts against RAG." },
      { layer: "Agent testing", detail: "Tool abuse and permission escalation probes." },
      { layer: "Remediation", detail: "Guardrails, scopes, and monitoring deployed with engineering." },
    ],
    industry: "finance",
    relatedServices: ["ai-red-teaming", "ai-security", "ai-agents"],
  },
  {
    slug: "document-intelligence",
    title: "Document Intelligence for Operations",
    clientLabel: "Logistics Company",
    tag: "AI Automation",
    illustrative: true,
    summary:
      "An automated document processing pipeline that extracts, validates, and routes structured data from high-volume operational documents.",
    problem:
      "Operations teams manually keyed data from shipping and customs documents. The process was slow, error-prone, and did not scale with volume.",
    solution:
      "A document intelligence pipeline that extracts structured fields, validates them against rules and reference data, and routes exceptions to humans for review with full traceability.",
    technology: [
      "Vision + LLM extraction",
      "Structured output validation",
      "Rules engine for validation",
      "Human review console",
    ],
    automation: [
      "Extraction with validation",
      "Exception routing",
      "Audit trail generation",
      "Source document archiving",
    ],
    outcome: [
      "Reduced manual data entry volume",
      "Improved accuracy with validation and review",
      "Full audit trail for every document",
    ],
    architecture: [
      { layer: "Ingestion", detail: "Document intake from email, portals, and uploads." },
      { layer: "Extraction", detail: "Vision + LLM extraction into typed schemas." },
      { layer: "Validation", detail: "Rules and reference-data validation with confidence." },
      { layer: "Routing", detail: "Automated acceptance or human review queue." },
      { layer: "Observability", detail: "Throughput, accuracy, and exception dashboards." },
    ],
    industry: "logistics",
    relatedServices: ["ai-automation", "ai-implementation", "ai-engineering"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
