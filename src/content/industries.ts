export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  applications: string[];
  exampleUseCases: { title: string; description: string }[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    summary:
      "Clinical knowledge retrieval, document intelligence, and patient-facing assistants — built with privacy and compliance front of mind.",
    applications: [
      "Clinical knowledge retrieval",
      "Document intelligence",
      "Patient-facing assistants",
      "Operations automation",
    ],
    exampleUseCases: [
      {
        title: "Clinical knowledge assistant",
        description:
          "A grounded RAG assistant that answers clinical and operational questions from approved guidelines.",
      },
      {
        title: "Document intelligence",
        description:
          "Extraction and classification of intake forms, claims, and records with audit trails.",
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    shortName: "Pharma",
    summary:
      "Literature review, regulatory document processing, and research assistants grounded in authoritative sources.",
    applications: [
      "Literature review automation",
      "Regulatory document processing",
      "Research assistants",
      "Data extraction",
    ],
    exampleUseCases: [
      {
        title: "Literature review agent",
        description:
          "An agent that summarizes and cross-references publications with citations.",
      },
      {
        title: "Regulatory document intelligence",
        description:
          "Extraction and validation of structured fields from regulatory submissions.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    shortName: "Logistics",
    summary:
      "Routing automation, exception handling, and document processing across the supply chain.",
    applications: [
      "Routing automation",
      "Exception handling",
      "Document processing",
      "Forecasting assistance",
    ],
    exampleUseCases: [
      {
        title: "Exception triage automation",
        description:
          "Automated triage and routing of shipment exceptions with human escalation.",
      },
      {
        title: "Customs document processing",
        description:
          "Extraction and validation of shipping and customs documents at scale.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    shortName: "Education",
    summary:
      "Personalized tutoring, content generation, and institutional knowledge systems with safety guardrails.",
    applications: [
      "Personalized tutoring",
      "Content generation",
      "Institutional knowledge AI",
      "Assessment assistance",
    ],
    exampleUseCases: [
      {
        title: "Tutoring assistant",
        description:
          "A grounded tutor that adapts to student level and cites source material.",
      },
      {
        title: "Institutional knowledge base",
        description:
          "Internal RAG system for policies, curriculum, and operations.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    shortName: "Finance",
    summary:
      "Document intelligence, compliance assistance, and secure internal knowledge systems with strict access control.",
    applications: [
      "Document intelligence",
      "Compliance assistance",
      "Internal knowledge AI",
      "Risk research automation",
    ],
    exampleUseCases: [
      {
        title: "Compliance research agent",
        description:
          "An agent that researches regulatory requirements with citations and audit logs.",
      },
      {
        title: "Deal document intelligence",
        description:
          "Extraction and review of large deal and portfolio documents.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    shortName: "Retail",
    summary:
      "Customer support AI, catalog enrichment, and operations automation across channels.",
    applications: [
      "Customer support AI",
      "Catalog enrichment",
      "Operations automation",
      "Merchandising assistance",
    ],
    exampleUseCases: [
      {
        title: "Support automation",
        description:
          "A grounded assistant that resolves tier-1 customer questions with handoff.",
      },
      {
        title: "Catalog enrichment",
        description:
          "Automated generation and enrichment of product attributes and descriptions.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    summary:
      "Document processing, listing intelligence, and internal knowledge systems for property teams.",
    applications: [
      "Document processing",
      "Listing intelligence",
      "Internal knowledge AI",
      "Lead qualification",
    ],
    exampleUseCases: [
      {
        title: "Listing intelligence",
        description:
          "Automated enrichment and summarization of property listings.",
      },
      {
        title: "Lease document processing",
        description:
          "Extraction of key terms and obligations from contracts.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    shortName: "Manufacturing",
    summary:
      "Maintenance knowledge AI, quality document processing, and operations automation.",
    applications: [
      "Maintenance knowledge AI",
      "Quality document processing",
      "Operations automation",
      "Safety incident review",
    ],
    exampleUseCases: [
      {
        title: "Maintenance knowledge assistant",
        description:
          "A grounded assistant for technicians built from manuals and incident history.",
      },
      {
        title: "Quality document processing",
        description:
          "Extraction and routing of inspection and quality records.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    shortName: "Professional Services",
    summary:
      "Knowledge systems, document review, and research automation for consulting, legal, and accounting teams.",
    applications: [
      "Knowledge systems",
      "Document review",
      "Research automation",
      "Engagement intelligence",
    ],
    exampleUseCases: [
      {
        title: "Engagement knowledge system",
        description:
          "A RAG system grounding consultants in prior work, templates, and regulations.",
      },
      {
        title: "Contract review automation",
        description:
          "Extraction and flagging of key clauses across contract sets.",
      },
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    shortName: "Technology",
    summary:
      "Engineering copilots, internal knowledge AI, and automation for technical teams.",
    applications: [
      "Engineering copilots",
      "Internal knowledge AI",
      "Support automation",
      "Code & docs intelligence",
    ],
    exampleUseCases: [
      {
        title: "Engineering knowledge assistant",
        description:
          "A grounded assistant for engineers across docs, runbooks, and codebases.",
      },
      {
        title: "Support tier-1 automation",
        description:
          "Automated resolution and routing of internal support tickets.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
