import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  Clock,
  ListChecks,
  Package,
  Sparkles,
  Target,
  TrendingUp,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { MonoLabel } from "@/components/shared/mono-label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  services,
  getService,
  getRelatedServices,
  type Service,
} from "@/content/services";
import { serviceIconMap } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// High-risk / adversarial services get a distinct visual treatment.
const RISK_SLUGS = new Set(["ai-security", "ai-red-teaming"]);

// Coarse category grouping for the spec card.
const SERVICE_CATEGORY: Record<string, string> = {
  "ai-implementation": "Build & Deploy",
  "ai-automation": "Build & Deploy",
  rag: "AI Systems",
  "ai-agents": "AI Systems",
  "ai-engineering": "Engineering",
  "ai-security": "Security",
  "ai-red-teaming": "Security Testing",
};

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }

  const title = `${service.name} — AI Services`;
  const description = service.summary;
  const canonical = `/services/${service.slug}`;
  const ogImage = `/og.png`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.name} — SkyMind Automation`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Icons used in the outcomes band (cycles per item).
const OUTCOME_ICONS = [Target, TrendingUp, ShieldCheck];

function getServiceId(slug: string): string {
  const index = services.findIndex((s) => s.slug === slug);
  return `SVC-${String(index + 1).padStart(3, "0")}`;
}

function Breadcrumb({ service }: { service: Service }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Home
          </Link>
        </li>
        <li aria-hidden className="text-muted-foreground/60">
          /
        </li>
        <li>
          <Link
            href="/services"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Services
          </Link>
        </li>
        <li aria-hidden className="text-muted-foreground/60">
          /
        </li>
        <li aria-current="page" className="text-foreground">
          {service.shortName}
        </li>
      </ol>
    </nav>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const Icon = serviceIconMap[service.icon];
  const isRisk = RISK_SLUGS.has(service.slug);
  const serviceId = getServiceId(service.slug);
  const category = SERVICE_CATEGORY[service.slug] ?? "AI Capability";
  const related = getRelatedServices(service.relatedServices);
  const firstRelated = related[0];
  const contactHref = `/contact?service=${encodeURIComponent(service.name)}`;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero band */}
        <Section
          withGrid
          gridFade
          className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16"
          containerClassName="max-w-6xl"
        >
          {/* Breadcrumb */}
          <Breadcrumb service={service} />

          <div className="mt-8 flex flex-col gap-6">
            {/* Service ID chip */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-primary">
                {serviceId}
              </span>
              <span className="h-px w-8 bg-border" aria-hidden />
              <Badge
                variant="outline"
                className={cn(
                  "h-6 font-mono text-[0.65rem] uppercase tracking-wider",
                  isRisk &&
                    "border-destructive/40 text-destructive/90",
                )}
              >
                {category}
              </Badge>
              {isRisk && (
                <Badge
                  variant="outline"
                  className="h-6 border-destructive/40 font-mono text-[0.65rem] uppercase tracking-wider text-destructive/90"
                >
                  Adversarial Posture
                </Badge>
              )}
            </div>

            {/* Icon */}
            <div
              className={cn(
                "flex size-14 items-center justify-center rounded-xl border",
                isRisk
                  ? "border-destructive/30 bg-destructive/5 text-destructive"
                  : "border-primary/30 bg-primary/5 text-primary",
              )}
            >
              <Icon className="size-7" aria-hidden />
            </div>

            {/* H1 + tagline */}
            <h1 className="font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="max-w-3xl text-lg text-primary/90 text-pretty sm:text-xl">
              {service.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link href={contactHref}>
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              {firstRelated && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base"
                >
                  <Link href={`/services/${firstRelated.slug}`}>
                    See {firstRelated.shortName}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </Section>

        {/* 2. Overview — 2 col with sticky spec card */}
        <Section className="pt-8 sm:pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
            {/* Prose left */}
            <div className="flex flex-col gap-6">
              <MonoLabel>Overview</MonoLabel>
              <p className="text-lg leading-relaxed text-foreground/90 text-pretty">
                {service.longDescription}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {service.description}
              </p>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4 text-primary" aria-hidden />
                Built to be operated, owned, and iterated by your team — not a
                black box.
              </div>
            </div>

            {/* Sticky spec card right */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Card className="gap-0 p-6">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Service Spec
                  </h2>
                  <span className="font-mono text-xs text-primary">
                    {serviceId}
                  </span>
                </div>
                <dl className="divide-y divide-border/60">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="size-4 text-muted-foreground" aria-hidden />
                      Category
                    </dt>
                    <dd className="text-right text-sm font-medium">
                      {category}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ListChecks className="size-4 text-muted-foreground" aria-hidden />
                      Deliverables
                    </dt>
                    <dd className="text-right font-mono text-sm font-medium">
                      {String(service.deliverables.length).padStart(2, "0")}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Target className="size-4 text-muted-foreground" aria-hidden />
                      Capabilities
                    </dt>
                    <dd className="text-right font-mono text-sm font-medium">
                      {String(service.capabilities.length).padStart(2, "0")}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="size-4 text-muted-foreground" aria-hidden />
                      Typical timeline
                    </dt>
                    <dd className="text-right text-sm font-medium">2–12 weeks</dd>
                  </div>
                </dl>
                <div className="mt-4 border-t border-border/60 pt-4">
                  <Button asChild className="h-11 w-full">
                    <Link href={contactHref}>
                      Start {service.shortName}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </aside>
          </div>
        </Section>

        {/* 3. Capabilities — 2 col card grid */}
        <Section
          withGrid
          gridFade
          className="pt-8 sm:pt-12"
          containerClassName="max-w-6xl"
        >
          <SectionHeading
            eyebrow="Capabilities"
            title="What this engagement covers"
            description="Each capability is a scoped workstream with defined deliverables and acceptance criteria."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.capabilities.map((cap, i) => (
              <Card
                key={cap.title}
                className="group gap-3 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden />
                </div>
                <h3 className="font-sans text-lg font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  {cap.description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* 4. Deliverables — checklist */}
        <Section className="pt-8 sm:pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[20rem_1fr] lg:gap-14">
            <div className="flex flex-col gap-4">
              <MonoLabel>Deliverables</MonoLabel>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                What you walk away with
              </h2>
              <p className="max-w-md text-base text-muted-foreground text-pretty">
                Tangible artifacts your team owns and operates — not a deck and
                a handshake.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d) => (
                <li
                  key={d.title}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <span
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary"
                    aria-hidden
                  >
                    <Check className="size-4" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-base font-semibold tracking-tight">
                      {d.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {d.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 5. Outcomes — callout band */}
        <Section className="pt-8 sm:pt-12">
          <Container className="max-w-6xl">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border p-8 sm:p-12",
                isRisk
                  ? "border-destructive/30 bg-destructive/5"
                  : "border-primary/30 bg-primary/5",
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -right-20 -top-20 size-72 rounded-full blur-3xl",
                  isRisk ? "bg-destructive/10" : "bg-primary/10",
                )}
              />
              <div className="relative flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <MonoLabel>Outcomes</MonoLabel>
                  <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    What changes after this engagement
                  </h2>
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {service.outcomes.map((outcome, i) => {
                    const OutcomeIcon = OUTCOME_ICONS[i % OUTCOME_ICONS.length];
                    return (
                      <li key={outcome} className="flex flex-col gap-3">
                        <span
                          className={cn(
                            "flex size-10 items-center justify-center rounded-lg border",
                            isRisk
                              ? "border-destructive/30 text-destructive"
                              : "border-primary/30 text-primary",
                          )}
                          aria-hidden
                        >
                          <OutcomeIcon className="size-5" />
                        </span>
                        <p className="text-base text-foreground/90 text-pretty">
                          {outcome}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* 6. Related services */}
        {related.length > 0 && (
          <Section
            withGrid
            gridFade
            className="pt-8 sm:pt-12"
            containerClassName="max-w-6xl"
          >
            <div className="mb-10 flex flex-col gap-4">
              <MonoLabel>Related Services</MonoLabel>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Frequently combined with
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => {
                const RelIcon = serviceIconMap[rel.icon];
                const relRisk = RISK_SLUGS.has(rel.slug);
                return (
                  <li key={rel.slug} className="h-full">
                    <Link
                      href={`/services/${rel.slug}`}
                      className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`Explore ${rel.name}`}
                    >
                      <Card className="h-full gap-4 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50">
                        <div className="flex h-full flex-col gap-4">
                          <div
                            className={cn(
                              "flex size-10 items-center justify-center rounded-lg border",
                              relRisk
                                ? "border-destructive/30 bg-destructive/5 text-destructive"
                                : "border-primary/30 bg-primary/5 text-primary",
                            )}
                          >
                            <RelIcon className="size-5" aria-hidden />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="font-sans text-base font-semibold tracking-tight">
                              {rel.name}
                            </h3>
                            <p className="text-sm text-muted-foreground text-pretty">
                              {rel.tagline}
                            </p>
                          </div>
                          <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
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
        )}

        {/* 7. FAQ */}
        <Section className="pt-8 sm:pt-12">
          <Container className="max-w-3xl">
            <div className="mb-8 flex flex-col gap-4">
              <MonoLabel>FAQ</MonoLabel>
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Common questions about {service.shortName}
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground text-pretty">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>

        {/* 8. Final CTA */}
        <Section className="pt-8 pb-24 sm:pb-28">
          <Container className="max-w-5xl">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border p-8 sm:p-12",
                isRisk
                  ? "border-destructive/30 bg-destructive/5"
                  : "border-primary/30 bg-primary/5",
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -right-24 -top-24 size-64 rounded-full blur-3xl",
                  isRisk ? "bg-destructive/15" : "bg-primary/15",
                )}
              />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-3">
                  <MonoLabel>Start the engagement</MonoLabel>
                  <h2 className="font-sans text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    Start {service.name}
                  </h2>
                  <p className="max-w-xl text-sm text-muted-foreground text-pretty sm:text-base">
                    Tell us about your problem. We&apos;ll scope a path that
                    fits your stack, timeline, and risk posture.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button asChild size="lg" className="h-12 px-6 text-base">
                    <Link href={contactHref}>
                      Start {service.shortName}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-12 px-6 text-base"
                  >
                    <Link href="/services">
                      <ArrowLeft className="size-4" />
                      All services
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
