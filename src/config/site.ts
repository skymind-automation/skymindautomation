export const siteConfig = {
  name: "SkyMind Automation",
  domain: "skymindautomation.com",
  url: "https://skymindautomation.com",
  shortName: "SkyMind",
  description:
    "SkyMind Automation designs and builds AI systems, intelligent workflows, RAG applications, agents, and AI security solutions for organizations ready to put AI to work.",
  tagline: "Build AI. Automate Work. Secure Intelligence.",
  supportingStatement:
    "We build, integrate, automate, evaluate, and secure AI systems for businesses.",
  positioning:
    "We build, integrate, automate, evaluate, and secure AI systems for businesses.",
  email: "hello@skymindautomation.com",
  securityEmail: "security@skymindautomation.com",
  builtWithAI: {
    name: "BuiltWithAI",
    description:
      "BuiltWithAI is the public showcase and discovery platform for software, agents, automations, tools and projects built with AI.",
    // Configured later — placeholder until confirmed. Use env if available.
    url: process.env.NEXT_PUBLIC_BUILTWITHAI_URL || "https://builtwithai.dev",
  },
  social: {
    // Only populated when real URLs are confirmed.
    // x: "https://x.com/skymindauto",
    // github: "https://github.com/skymindautomation",
    // linkedin: "https://www.linkedin.com/company/skymindautomation",
  },
  contact: {
    phone: "", // configured later
  },
} as const;

export type SiteConfig = typeof siteConfig;
