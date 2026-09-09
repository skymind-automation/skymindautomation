export type TeamMember = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  roleTag: "Founder" | "Co-Founder" | "Leadership";
  focus: string;
  bio: string;
  responsibilities: string[];
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};

/**
 * Founding team.
 *
 * NOTE: These are founding-team role profiles. Names and details here are
 * placeholders intended to be replaced with confirmed team information before
 * launch. They are structured so a CMS or content update can swap them without
 * touching the component layer.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: "founder",
    name: "Founder",
    initials: "SM",
    role: "Founder & Principal AI Engineer",
    roleTag: "Founder",
    focus: "AI systems architecture, RAG, and AI security",
    bio: "Leads SkyMind's engineering direction — from problem framing to production AI systems. Sets the eval-first, secure-by-default philosophy that runs through every engagement, and stays hands-on across architecture, retrieval design, and red-team work.",
    responsibilities: [
      "AI systems architecture",
      "RAG & retrieval design",
      "AI red teaming & security",
      "Engineering direction",
    ],
    links: [],
  },
  {
    slug: "co-founder",
    name: "Co-Founder",
    initials: "SK",
    role: "Co-Founder & Head of Automation",
    roleTag: "Co-Founder",
    focus: "AI automation, agents, and workflow engineering",
    bio: "Drives the automation and agents practice — designing reliable, observable workflows that put AI to work in real operations. Owns the reliability layer: retries, human-in-the-loop checkpoints, audit trails, and the operational ownership that makes automation trustworthy.",
    responsibilities: [
      "AI automation & workflows",
      "Agent design & tool scoping",
      "Reliability & observability",
      "Operational ownership",
    ],
    links: [],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
