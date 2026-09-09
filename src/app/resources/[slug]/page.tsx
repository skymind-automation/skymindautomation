import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Clock,
  BookOpen,
  FileText,
  ListChecks,
  Boxes,
  PencilLine,
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
import { resources } from "@/content/resources";
import { siteConfig } from "@/config/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return resources.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then((p) => {
    const res = resources.find((r) => r.slug === p.slug);
    if (!res) {
      return {
        title: "Resource Not Found",
      };
    }
    return {
      title: res.title,
      description: res.description,
      alternates: { canonical: `/resources/${res.slug}` },
    } as Metadata;
  });
}

const typeIconMap = {
  guide: BookOpen,
  article: FileText,
  checklist: ListChecks,
  framework: Boxes,
} as const;

export default async function ResourcePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) notFound();

  const Icon = typeIconMap[resource.type];

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
                    <Link href="/resources">Resources</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{resource.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Container>
        </Section>

        {/* Hero */}
        <Section className="pt-8 sm:pt-10 lg:pt-12">
          <Container className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="font-mono text-xs">
                {resource.type}
              </Badge>
              <Badge variant="outline" className="font-mono text-xs">
                {resource.topic}
              </Badge>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Clock className="size-3.5" aria-hidden />
                {resource.readTime}
              </span>
            </div>
            <h1 className="mt-5 font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {resource.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              {resource.description}
            </p>
          </Container>
        </Section>

        {/* Coming soon callout */}
        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container className="max-w-3xl">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card p-6 sm:p-8">
              <CardContent className="px-0">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary">
                    <PencilLine className="size-5" aria-hidden />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-primary" aria-hidden />
                      <span className="text-mono-label text-primary">
                        In progress
                      </span>
                    </div>
                    <h2 className="mt-3 font-sans text-xl font-semibold tracking-tight">
                      This article is being written.
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                      We publish engineering notes only when they are ready. This one is in
                      active draft. Subscribe to updates via the{" "}
                      <Link
                        href="/contact"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        contact form
                      </Link>{" "}
                      and we will let you know when it ships — along with what we learned writing
                      it.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                      In the meantime, if your question is urgent, reach out directly — we are
                      happy to talk through the topic with you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {/* Metadata */}
        <Section className="pt-0">
          <Container className="max-w-3xl">
            <Card className="border-border/60 p-6 sm:p-8">
              <CardContent className="px-0">
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Metadata</span>
                </div>
                <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-mono-label text-muted-foreground">Type</dt>
                    <dd className="mt-1 font-mono text-sm text-foreground">
                      {resource.type}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-mono-label text-muted-foreground">Topic</dt>
                    <dd className="mt-1 font-mono text-sm text-foreground">
                      {resource.topic}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-mono-label text-muted-foreground">Read time</dt>
                    <dd className="mt-1 font-mono text-sm text-foreground">
                      {resource.readTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-mono-label text-muted-foreground">Status</dt>
                    <dd className="mt-1 font-mono text-sm text-foreground">
                      In progress
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
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
                    <PencilLine className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Subscribe</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Want this note in your inbox when it ships?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Send us a note via the contact form mentioning this article. We will let you
                    know when it publishes — no marketing list, no spam.
                  </p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    {siteConfig.email}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/resources"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <ArrowLeft className="size-4" aria-hidden />
                    All resources
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Subscribe to updates
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
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
