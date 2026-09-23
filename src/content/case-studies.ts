export type CaseStudy = {
  slug: string;
  title: string;
  /** Sector and system type. A client is named only with their permission. */
  clientLabel: string;
  tag: string;
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  /** The engineering calls that shaped the system, and why. */
  decisions: string[];
  /** What the delivered system verifiably does. No invented metrics. */
  outcome: string[];
  architecture: { layer: string; detail: string }[];
  industry?: string;
  relatedServices: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "delta-rag",
    title: "Delta RAG: cited evidence for fleet service advisors",
    clientLabel: "Fleet maintenance · Retrieval backend",
    tag: "RAG & Knowledge AI",
    summary:
      "A retrieval service that answers service-advisor questions from OEM manuals, technical service bulletins and fault-code tables, and returns cited evidence rather than a synthesised guess.",
    problem:
      "Service advisors field lookup, maintenance-interval and known-issue questions against a mix of OEM manuals, technical service bulletins and diagnostic trouble code tables. A generic search or chat layer fails here in the way that costs money: a bulletin scoped to 2021–2023 vehicles, surfaced for a 2019 truck, is a confident, billable recommendation for work that will not fix it.",
    solution:
      "A Django service over Postgres that filters on vehicle model, year and the caller's access role before any search runs, sends fault codes straight to an exact table lookup, and fuses full-text and vector search. A separate confidence gate decides whether the evidence is sufficient and answers “insufficient documentation” rather than improvising. Every passage comes back with its source document, section and bulletin number. The service returns evidence, never a synthesised answer, so a wrong result can be traced to a retrieval miss rather than a generation failure.",
    technology: [
      "Python / Django",
      "PostgreSQL",
      "pgvector (HNSW)",
      "Postgres full-text search",
      "Reciprocal Rank Fusion",
      "Voyage embeddings",
      "n8n",
    ],
    decisions: [
      "The model-year filter is never relaxed. Widening a model filter costs precision; widening a year filter produces wrong answers, so an empty result is the correct response.",
      "Fault codes bypass vector search entirely and resolve through an exact table lookup.",
      "An inferred vehicle system boosts results but never gates them. Symptoms routinely cross systems, and gating hid the one bulletin that answered the question.",
      "Confidence is computed from absolute retriever scores. The fused rank score cannot tell a strong match from the best of nothing relevant.",
      "Ingestion refuses any document it cannot tag with a vehicle model, because an untagged chunk silently disappears from every filtered query.",
    ],
    outcome: [
      "Every returned passage carries its document, section and bulletin citation",
      "Bulletins outside a vehicle's model years cannot surface",
      "Access control is enforced at retrieval time, so internal technician notes never reach an advisor",
      "A 32-case golden evaluation set grades retrieval on its own, with no language model in the loop",
      "Writing the evaluation harness surfaced four real defects that looked correct by eye",
    ],
    architecture: [
      {
        layer: "Ingestion",
        detail:
          "Manuals are chunked by procedure heading with tables kept whole, each bulletin stays one chunk, and fault codes load into a lookup table. Re-ingest is idempotent by content hash.",
      },
      {
        layer: "Filtering",
        detail:
          "Model, year, mileage and fault codes are extracted without a model call and applied before search. The vehicle context from the advisor's screen always wins over the typed query.",
      },
      {
        layer: "Retrieval",
        detail:
          "Postgres full-text and pgvector HNSW search, fused with Reciprocal Rank Fusion, with vocabulary expansion on the lexical side for mileage and unit gaps.",
      },
      {
        layer: "Confidence",
        detail:
          "A gate over absolute similarity and text-rank scores, with a bonus when both retrievers agree, decides between cited passages and an explicit insufficient-evidence answer.",
      },
      {
        layer: "Integration",
        detail:
          "The fleet ERP calls the retrieval API directly, and an n8n incident workflow queries fault codes when telemetry flags a fault.",
      },
    ],
    industry: "logistics",
    relatedServices: ["rag", "ai-engineering", "ai-automation"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
