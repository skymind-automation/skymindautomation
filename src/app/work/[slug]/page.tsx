import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  CircleDot,
  Wrench,
  Target,
  GitBranch,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getRelatedServices } from "@/content/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then((p) => {
    const cs = getCaseStudy(p.slug);
    if (!cs) {
      return {
        title: "Example Solution Not Found",
      };
    }
    return {
      title: cs.title,
      description: cs.summary,
      alternates: { canonical: `/work/${cs.slug}` },
    } as Metadata;
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const related = getRelatedServices(cs.relatedServices);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <Section className="pt-28 pb-0 sm:pt-32 lg:pt-36">
          <Container>
            <Breadcrumb aria-label="Breadcrumb">
              <BreadcrumbList className="font-mono text-xs">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/work">Work</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{cs.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Container>
        </Section>

        {/* Hero */}
        <Section className="pt-8 sm:pt-10 lg:pt-12">
          <Container className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="font-mono text-xs">
                {cs.tag}
              </Badge>
              {cs.illustrative && (
                <Badge
                  variant="outline"
                  className="border-amber-500/30 bg-amber-500/10 font-mono text-xs text-amber-300"
                >
                  Example Solution
                </Badge>
              )}
            </div>
            <h1 className="mt-5 font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {cs.title}
            </h1>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              {cs.clientLabel}
            </p>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              {cs.summary}
            </p>
          </Container>
        </Section>

        {/* Problem + Solution */}
        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container className="max-w-4xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border-border/60 p-6 sm:p-8">
                <CardContent className="px-0">
                  <div className="flex items-center gap-2">
                    <CircleDot className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Problem</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    {cs.problem}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60 p-6 sm:p-8">
                <CardContent className="px-0">
                  <div className="flex items-center gap-2">
                    <Target className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Solution</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    {cs.solution}
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Technology + Automation */}
        <Section className="pt-0">
          <Container className="max-w-4xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border-border/60 p-6 sm:p-8">
                <CardContent className="px-0">
                  <div className="flex items-center gap-2">
                    <Layers className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Technology</span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cs.technology.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary" className="font-mono text-xs">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border/60 p-6 sm:p-8">
                <CardContent className="px-0">
                  <div className="flex items-center gap-2">
                    <Wrench className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Automation</span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {cs.automation.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground text-pretty"
                      >
                        <ChevronRight
                          className="mt-0.5 size-3.5 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Outcome callout */}
        <Section className="pt-0">
          <Container className="max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <Target className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Outcome</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {cs.outcome.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-3 text-sm text-foreground text-pretty sm:text-base"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Architecture — layered diagram */}
        <Section className="pt-0">
          <Container className="max-w-4xl">
            <div className="flex items-center gap-2">
              <GitBranch className="size-4 text-primary" aria-hidden />
              <span className="text-mono-label text-primary">Architecture</span>
            </div>
            <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
              A layered system
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground text-pretty sm:text-base">
              Each layer has a clear responsibility and a clear contract with the layers above
              and below. Read top-to-bottom for the request path; bottom-to-top for the data
              path.
            </p>

            <ol className="mt-10 space-y-0">
              {cs.architecture.map((layer, idx) => (
                <li key={layer.layer} className="relative">
                  {/* Connector line */}
                  {idx < cs.architecture.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[1.4rem] top-[3.5rem] h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/40 to-transparent"
                    />
                  )}
                  <div className="relative flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40 sm:p-6">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 font-mono text-sm text-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-mono text-sm font-medium text-primary">
                        {layer.layer}
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                        {layer.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* Related services */}
        {related.length > 0 && (
          <Section className="pt-0">
            <Container className="max-w-5xl">
              <div className="flex items-center gap-2">
                <Layers className="size-4 text-primary" aria-hidden />
                <span className="text-mono-label text-primary">Related services</span>
              </div>
              <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                Services that map to this work
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="group relative flex flex-col gap-3 rounded-xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="text-mono-label text-muted-foreground">
                      {svc.shortName}
                    </span>
                    <h3 className="font-sans text-base font-semibold tracking-tight">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-muted-foreground text-pretty">
                      {svc.tagline}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-primary">
                      View service
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* Bottom CTA */}
        <Section className="pt-0">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <Target className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Engagement</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Want to scope something similar?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Tell us about your problem, your systems, and your constraints. We will come
                    back with a scoped proposal — pilot, implementation, assessment, or red team.
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
