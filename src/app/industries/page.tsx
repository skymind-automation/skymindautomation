import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries — AI Engineering Across Industries",
  description:
    "AI engineering across healthcare, pharma, logistics, education, finance, retail, real estate, manufacturing, professional services, and technology — grounded systems with safety and access control front of mind.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>Industries</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              AI engineering across industries
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              We work with organizations across regulated and operations-heavy industries where AI
              has to do more than look smart in a demo — it has to be grounded, observable,
              auditable, and safe. Below is how the same engineering discipline lands differently
              across ten industries we know.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="outline" className="font-mono">
                10 industries
              </Badge>
              <Badge variant="outline" className="font-mono">
                Grounded by default
              </Badge>
              <Badge variant="outline" className="font-mono">
                Access-controlled
              </Badge>
            </div>
          </Container>
        </Section>

        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container>
            <div className="space-y-8">
              {industries.map((industry, idx) => {
                const headingId = `${industry.slug}-heading`;
                return (
                  <Card
                    key={industry.slug}
                    id={industry.slug}
                    aria-labelledby={headingId}
                    className="scroll-mt-32 overflow-hidden border-border/60 p-0 transition-colors hover:border-primary/40"
                  >
                    <CardContent className="px-0">
                      {/* Header row */}
                      <div className="flex flex-col gap-3 border-b border-border/60 bg-card/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-xs text-primary">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h2
                              id={headingId}
                              className="font-sans text-xl font-semibold tracking-tight sm:text-2xl"
                            >
                              {industry.name}
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm text-muted-foreground text-pretty sm:text-base">
                              {industry.summary}
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 items-center gap-2 sm:flex">
                          <Badge variant="outline" className="font-mono">
                            {industry.applications.length} applications
                          </Badge>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                        {/* Applications */}
                        <div className="border-b border-border/60 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                          <h3 className="text-mono-label text-muted-foreground">Applications</h3>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {industry.applications.map((app) => (
                              <li key={app}>
                                <Badge variant="secondary" className="font-mono text-xs">
                                  {app}
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Use cases */}
                        <div className="p-6 sm:p-8">
                          <h3 className="text-mono-label text-muted-foreground">
                            Example use cases
                          </h3>
                          <ul className="mt-4 space-y-3">
                            {industry.exampleUseCases.map((uc) => (
                              <li
                                key={uc.title}
                                className="rounded-lg border border-border/50 bg-background/40 p-4"
                              >
                                <div className="flex items-start gap-3">
                                  <Layers
                                    className="mt-0.5 size-4 shrink-0 text-primary"
                                    aria-hidden
                                  />
                                  <div>
                                    <p className="text-sm font-medium text-foreground">
                                      {uc.title}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground text-pretty">
                                      {uc.description}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
                    <Layers className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Industry</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Don&apos;t see your industry listed?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    The discipline transfers. If your work is grounded in real data, real
                    workflows, and real constraints, we can scope an AI system around it. Reach
                    out and we will tell you honestly whether we are the right partner.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Talk to us
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
