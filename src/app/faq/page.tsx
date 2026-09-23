import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, type Faq } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about how SkyMind Automation scopes, builds, evaluates and secures AI systems.",
  alternates: { canonical: "/faq" },
};

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

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-3xl">
            <MonoLabel>FAQ</MonoLabel>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Common questions
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              How we scope, build, evaluate and secure AI systems. If your question is not here,
              send us a note.
            </p>
            <div className="mt-12 space-y-10">
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
                    <MessageSquare className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Engagement</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
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
