import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArrowLink } from "@/components/shared/arrow-link";
import { whatWeBuildIconMap } from "@/components/shared/what-we-build-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { whatWeBuild } from "@/content/technology";
import { transformationStages } from "@/content/process";

export const metadata: Metadata = {
  title: "Solutions — AI Systems We Design and Ship",
  description:
    "AI assistants, RAG systems, agents, workflow automation, document intelligence, customer support AI, internal knowledge AI, AI security systems, and more — the systems SkyMind Automation designs and ships.",
  alternates: { canonical: "/solutions" },
};

type SolutionCluster = {
  title: string;
  description: string;
  items: (typeof whatWeBuild)[number]["name"][];
};

const clusters: SolutionCluster[] = [
  {
    title: "Knowledge & Assistants",
    description:
      "Systems that ground answers in your knowledge — with citations, access control, and refusal behavior when evidence is missing.",
    items: ["AI Assistants", "RAG Systems", "Internal Knowledge AI", "Customer Support AI"],
  },
  {
    title: "Agents & Automation",
    description:
      "Reasoning agents and event-driven automations that act safely inside bounded permissions with human checkpoints.",
    items: ["AI Agents", "Workflow Automation", "AI Data Processing"],
  },
  {
    title: "Intelligence & Documents",
    description:
      "Extraction, classification, and validation from high-volume documents and live production signals.",
    items: ["Document Intelligence", "AI Monitoring"],
  },
  {
    title: "Systems & Security",
    description:
      "Production AI systems and the guardrails, filters, and monitoring that keep them safe in real deployments.",
    items: ["AI Security Systems", "System / Software Dev"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>Solutions</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              AI systems we design and ship
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              A map of the systems we build — not slide-ware, not demos. Each one is engineered
              for production: observable, evaluated, secured, and integrated with the systems your
              teams already use. The shape of a solution is always constrained by your data, your
              architecture, and your risk tolerance; the categories below describe the territory.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="outline" className="font-mono">
                11 systems
              </Badge>
              <Badge variant="outline" className="font-mono">
                4 clusters
              </Badge>
              <Badge variant="outline" className="font-mono">
                9-stage delivery
              </Badge>
            </div>
          </Container>
        </Section>

        {clusters.map((cluster, idx) => (
          <Section
            key={cluster.title}
            className={idx === 0 ? "pt-4 sm:pt-4 lg:pt-4" : undefined}
          >
            <Container>
              <div className="flex flex-col gap-3 border-l-2 border-primary/40 pl-4 sm:pl-6">
                <span className="text-mono-label text-muted-foreground">
                  Cluster 0{idx + 1}
                </span>
                <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                  {cluster.title}
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground text-pretty sm:text-base">
                  {cluster.description}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {cluster.items.map((itemName) => {
                  const item = whatWeBuild.find((w) => w.name === itemName);
                  if (!item) return null;
                  const Icon = whatWeBuildIconMap[item.icon];
                  return (
                    <Card
                      key={item.name}
                      className="group relative gap-0 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                    >
                      <CardContent className="px-0">
                        <div className="flex items-start gap-4">
                          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary">
                            <Icon className="size-5" aria-hidden />
                          </span>
                          <div className="flex-1">
                            <h3 className="font-sans text-lg font-semibold tracking-tight">
                              {item.name}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground text-pretty">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-5 border-t border-border/60 pt-4">
                          <ArrowLink href="/contact">Talk to us</ArrowLink>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </Container>
          </Section>
        ))}

        {/* How we deliver */}
        <Section withGrid>
          <Container>
            <SectionHeading
              eyebrow="How we deliver"
              title="A 9-stage process from problem to production"
              description="Every solution we ship runs through the same engineering discipline — discover, analyze, design, build, integrate, evaluate, secure, deploy, optimize. No black boxes. No vibe-driven releases."
            />

            <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {transformationStages.map((stage) => (
                <li
                  key={stage.slug}
                  className="group relative rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-primary">{stage.number}</span>
                    <span className="text-mono-label text-muted-foreground">Stage</span>
                  </div>
                  <h3 className="mt-3 font-sans text-base font-semibold">{stage.name}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground text-pretty">
                    {stage.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#process"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                See the process
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore services
              </Link>
            </div>
          </Container>
        </Section>

        {/* Bottom CTA */}
        <Section className="pt-0">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Engagement</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Have a system in mind?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Tell us the problem you are trying to solve, the systems you already run, and
                    the constraints we need to respect. We will come back with a scoped proposal —
                    a pilot, an implementation, an assessment, or a red team exercise.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Start a conversation
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
