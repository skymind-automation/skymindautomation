import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, ShieldAlert } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { MonoLabel } from "@/components/shared/mono-label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/content/services";
import { serviceIconMap } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — AI Engineering, Automation & Security",
  description:
    "SkyMind Automation delivers end-to-end AI services: implementation, automation, RAG, agents, engineering, security, and red teaming. Build, automate, evaluate, and secure AI systems.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — AI Engineering, Automation & Security",
    description:
      "End-to-end AI services: implementation, automation, RAG, agents, engineering, security, and red teaming.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
};

// Services in a higher-risk / adversarial posture — visually distinct.
const RISK_SLUGS = new Set(["ai-security", "ai-red-teaming"]);

const ENGAGE_STEPS = [
  {
    no: "01",
    title: "Discover",
    description:
      "Map opportunities, data, and feasibility. Decide where AI returns value and where it does not.",
  },
  {
    no: "02",
    title: "Design",
    description:
      "Architecture, model selection, retrieval, tools, and safety boundaries — scoped and documented.",
  },
  {
    no: "03",
    title: "Build",
    description:
      "Implement, integrate, and evaluate. Ship into your stack with observability and guardrails.",
  },
  {
    no: "04",
    title: "Operate",
    description:
      "Run in production. Monitor, evaluate, and iterate against measurable quality and cost.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero band */}
        <Section
          withGrid
          className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16"
          containerClassName="max-w-5xl"
        >
          <div className="flex flex-col gap-6">
            <MonoLabel>Capabilities</MonoLabel>
            <h1 className="font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Services
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              SkyMind Automation builds, automates, evaluates, and secures AI
              systems. From problem framing to deployed production capability —
              with the engineering rigor and safety boundaries that real
              systems require.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link href="/contact">
                  Start an AI Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
              >
                <Link href="/work">View Work</Link>
              </Button>
            </div>
          </div>
        </Section>

        {/* Services grid */}
        <Section className="pt-8 sm:pt-12">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The Catalog"
              title="Seven services. One disciplined approach."
              description="Each service ships as a scoped engagement with deliverables, evaluation, and operational ownership — not a slide deck."
              className="max-w-2xl"
            />
            <Badge
              variant="outline"
              className="hidden h-7 items-center gap-1.5 px-3 font-mono text-xs sm:inline-flex"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              {services.length} SERVICES
            </Badge>
          </div>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIconMap[service.icon];
              const isRisk = RISK_SLUGS.has(service.slug);
              const number = String(index + 1).padStart(2, "0");
              const href = `/services/${service.slug}`;

              return (
                <li key={service.slug} className="h-full">
                  <Link
                    href={href}
                    className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`Explore ${service.name}`}
                  >
                    <Card
                      className={cn(
                        "group relative h-full gap-0 overflow-hidden p-6 transition-all duration-300",
                        "group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg",
                        "group-focus-within:border-primary/50 group-focus-within:shadow-lg",
                        isRisk &&
                          "border-destructive/30 group-hover:border-destructive/60",
                      )}
                    >
                      <div className="flex h-full flex-col gap-5">
                        {/* Top row: number + risk flag */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs tracking-widest text-muted-foreground">
                            {number}
                          </span>
                          {isRisk && (
                            <Badge
                              variant="outline"
                              className="border-destructive/40 font-mono text-[0.65rem] uppercase tracking-wider text-destructive/90"
                            >
                              <ShieldAlert className="size-3" />
                              Adversarial
                            </Badge>
                          )}
                        </div>

                        {/* Icon */}
                        <div
                          className={cn(
                            "flex size-12 items-center justify-center rounded-lg border transition-colors",
                            isRisk
                              ? "border-destructive/30 bg-destructive/5 text-destructive"
                              : "border-primary/30 bg-primary/5 text-primary",
                          )}
                        >
                          <Icon className="size-6" aria-hidden />
                        </div>

                        {/* Title + tagline + summary */}
                        <div className="flex flex-1 flex-col gap-2">
                          <h3 className="font-sans text-xl font-semibold tracking-tight">
                            {service.name}
                          </h3>
                          <p className="text-sm font-medium text-primary/90">
                            {service.tagline}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground text-pretty">
                            {service.summary}
                          </p>
                        </div>

                        {/* Explore link */}
                        <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                          Explore
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* How we engage — mini process band */}
        <Section
          withGrid
          gridFade
          className="py-20 sm:py-24"
          containerClassName="max-w-6xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-md flex-col gap-4">
              <MonoLabel>Engagement</MonoLabel>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                How we engage
              </h2>
              <p className="text-base text-muted-foreground text-pretty">
                Every engagement follows the same disciplined shape: understand,
                design, build, operate — with evaluation and ownership at every
                stage.
              </p>
              <Button asChild variant="outline" className="mt-2 h-11 w-fit">
                <Link href="/#process">
                  See the full process
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <ol className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              {ENGAGE_STEPS.map((step) => (
                <li
                  key={step.no}
                  className="group relative rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-sm text-primary">
                      {step.no}
                    </span>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                  </div>
                  <h3 className="font-sans text-base font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Bottom CTA */}
        <Section className="pt-4 pb-24 sm:pb-28">
          <Container className="max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid opacity-30"
              />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-3">
                  <MonoLabel>Need help scoping?</MonoLabel>
                  <h2 className="font-sans text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    Not sure which service you need? Talk to us.
                  </h2>
                  <p className="max-w-xl text-sm text-muted-foreground text-pretty sm:text-base">
                    Tell us about your business problem. We&apos;ll map it to the
                    right engagement — or scope a custom path that combines
                    services.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button asChild size="lg" className="h-12 px-6 text-base">
                    <Link href="/contact">
                      Talk to us
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-12 px-6 text-base"
                  >
                    <Link href="/resources">
                      <Search className="size-4" />
                      Browse resources
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
