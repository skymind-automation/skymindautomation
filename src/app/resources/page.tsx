import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, FileText, ListChecks, Boxes } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { resources, faqs, type Faq } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources — Engineering Notes on AI",
  description:
    "Practical engineering notes on AI implementation, RAG architecture, AI red teaming, agent safety, eval-first engineering, and prompt injection defense. Plus answers to common questions.",
  alternates: { canonical: "/resources" },
};

const typeIconMap = {
  guide: BookOpen,
  article: FileText,
  checklist: ListChecks,
  framework: Boxes,
} as const;

const categoryLabels: Record<Faq["category"], string> = {
  general: "General",
  services: "Services",
  security: "Security",
  engagement: "Engagement",
};

const categoryOrder: Faq["category"][] = [
  "general",
  "services",
  "engagement",
  "security",
];

function FaqsByCategory({ category }: { category: Faq["category"] }) {
  const items = faqs.filter((f) => f.category === category);
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-mono-label text-muted-foreground">
        {categoryLabels[category]}
      </h3>
      <Accordion type="single" collapsible className="mt-4 w-full">
        {items.map((faq) => {
          const itemId = `faq-${category}-${faq.question
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")}`;
          return (
            <AccordionItem
              key={faq.question}
              value={itemId}
              className="border-border/60"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground text-pretty sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>Resources</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Engineering notes on AI
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              Notes we are writing on the practice of building AI systems — implementation
              checklists, RAG architecture, agent safety, red teaming, eval-first engineering,
              and prompt injection defense. Each piece is grounded in the work, not in marketing.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="outline" className="font-mono">
                {resources.length} notes
              </Badge>
              <Badge variant="outline" className="font-mono">
                {faqs.length} FAQ
              </Badge>
              <Badge variant="outline" className="font-mono">
                In progress
              </Badge>
            </div>
          </Container>
        </Section>

        {/* Resources grid */}
        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((res) => {
                const Icon = typeIconMap[res.type];
                return (
                  <Card
                    key={res.slug}
                    className="group relative flex flex-col gap-0 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  >
                    <CardContent className="flex flex-1 flex-col gap-4 px-0">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <Badge variant="outline" className="font-mono text-xs">
                          {res.type}
                        </Badge>
                      </div>

                      <div>
                        <p className="text-mono-label text-muted-foreground">{res.topic}</p>
                        <h2 className="mt-2 font-sans text-lg font-semibold tracking-tight text-balance">
                          {res.title}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground text-pretty">
                          {res.description}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                        <span className="font-mono text-xs text-muted-foreground">
                          {res.readTime}
                        </span>
                        <Link
                          href={`/resources/${res.slug}`}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          aria-label={`Read ${res.title}`}
                        >
                          Read
                          <ArrowRight
                            className="size-3.5 transition-transform group-hover/link:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section withGrid className="pt-0">
          <Container className="max-w-3xl">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-4 text-primary" aria-hidden />
              <span className="text-mono-label text-primary">FAQ</span>
            </div>
            <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Common questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
              The questions we get most often. If yours is not here, send us a note.
            </p>

            <div className="mt-10 space-y-10">
              {categoryOrder.map((cat) => (
                <FaqsByCategory key={cat} category={cat} />
              ))}
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
                    <BookOpen className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Engagement</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Have a question we did not answer?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Send us your question. We answer honestly, including telling you when we are
                    not the right partner for what you need.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Ask a question
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
