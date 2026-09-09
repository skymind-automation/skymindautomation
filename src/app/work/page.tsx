import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, FolderOpen } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Work — Example Solutions We Architect",
  description:
    "Illustrative example solutions SkyMind Automation designs — RAG knowledge platforms, support automation, AI red teaming, and document intelligence. Not real client engagements.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>Work</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Example solutions we architect
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              A set of representative engagements that show how we frame problems, design
              systems, and engineer them for production. They are written to communicate approach,
              not to impress with logos.
            </p>

            <Alert className="mt-8 border-amber-500/30 bg-amber-500/5 text-amber-100">
              <Info className="text-amber-400" aria-hidden />
              <AlertTitle className="text-amber-200">Example solutions, not client logos</AlertTitle>
              <AlertDescription className="text-amber-100/80">
                These are illustrative example solutions showing our approach. They are not real
                client engagements. Every system below is labeled as an{" "}
                <span className="font-mono">Example Solution</span> for clarity.
              </AlertDescription>
            </Alert>
          </Container>
        </Section>

        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <Card
                  key={cs.slug}
                  className="group relative flex flex-col gap-0 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 sm:p-8"
                >
                  <CardContent className="flex flex-1 flex-col gap-5 px-0">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge variant="outline" className="font-mono text-xs">
                        {cs.tag}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-amber-500/30 bg-amber-500/10 font-mono text-xs text-amber-300"
                      >
                        Example Solution
                      </Badge>
                    </div>

                    <div>
                      <h2 className="font-sans text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                        {cs.title}
                      </h2>
                      <p className="mt-2 font-mono text-xs text-muted-foreground">
                        {cs.clientLabel}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground text-pretty">
                      {cs.summary}
                    </p>

                    <div className="mt-auto">
                      <h3 className="text-mono-label text-muted-foreground">Technology</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {cs.technology.map((tech) => (
                          <li key={tech}>
                            <Badge variant="secondary" className="font-mono text-xs">
                              {tech}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-2 border-t border-border/60 pt-4">
                      <Link
                        href={`/work/${cs.slug}`}
                        className="group/link inline-flex h-11 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={`View ${cs.title}`}
                      >
                        View
                        <ArrowRight
                          className="size-4 transition-transform group-hover/link:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
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
                    <FolderOpen className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Engagement</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Want a system like one of these?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Each example above is shaped around a real class of problem. If you recognize
                    your situation in one of them, send us a note — we can scope a similar
                    engagement around your data and your systems.
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
