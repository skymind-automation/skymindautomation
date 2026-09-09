import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Compass,
  GitBranch,
  ShieldCheck,
  Ban,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Card, CardContent } from "@/components/ui/card";
import { TeamSection } from "@/components/sections/team-section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About — SkyMind Automation",
  description:
    "SkyMind Automation is an AI engineering company. We design, build, automate, evaluate, and secure AI systems that work in production — engineering-first, eval-driven, secure-by-default.",
  alternates: { canonical: "/about" },
};

const engineeringPhilosophy: { title: string; description: string }[] = [
  {
    title: "Eval-first",
    description:
      "Evaluation drives every decision. We build the eval harness before we ship the feature, and we measure regressions on every change.",
  },
  {
    title: "Observable systems",
    description:
      "If it runs in production, it must be observable. Traces, metrics, and feedback loops are not optional — they are the system.",
  },
  {
    title: "Versioned prompts",
    description:
      "Prompts are code. They live in version control, are reviewed, and are diffed against prior behavior. No silent edits.",
  },
  {
    title: "Structured outputs",
    description:
      "Outputs are typed, validated, and parsed. We prefer structured output schemas over free text wherever the downstream consumer is a system.",
  },
  {
    title: "No black boxes",
    description:
      "We refuse to ship systems we cannot explain. Every model call, every retrieval, every tool use is traceable to a reason.",
  },
  {
    title: "Respect cost & latency",
    description:
      "AI systems are also systems. We design for cost and latency budgets from the start, not as an afterthought.",
  },
  {
    title: "Security-by-default",
    description:
      "Guardrails, access control, and abuse prevention are part of the system design — not a security review at the end.",
  },
];

const securityPhilosophy: { title: string; description: string }[] = [
  {
    title: "Attack before deploy",
    description:
      "We red-team systems before they reach production. Find exploitable paths when the cost of fixing them is still low.",
  },
  {
    title: "Least privilege",
    description:
      "Agents, tools, and integrations get the narrowest scope required to do their job. Broad permissions are a smell.",
  },
  {
    title: "Defense in depth",
    description:
      "No single control is trusted alone. Input validation, guardrails, access control, monitoring, and human checkpoints layer together.",
  },
  {
    title: "Full traces",
    description:
      "Every model call, tool use, and retrieval is logged with enough context to investigate incidents — without leaking secrets.",
  },
  {
    title: "No exposed secrets",
    description:
      "API keys, system prompts, and internal data never reach the client. We design the boundary deliberately.",
  },
  {
    title: "Abuse prevention",
    description:
      "Rate limiting, input validation, and abuse detection are built into AI endpoints — not bolted on after launch.",
  },
];

const whatWeDontDo: { title: string; description: string }[] = [
  {
    title: "No vaporware",
    description:
      "We do not sell futures. If a capability is not buildable today, we say so. We do not promise systems that depend on capabilities that do not exist.",
  },
  {
    title: "No demo-only systems",
    description:
      "Every system we ship is built to run in production. We do not build polished demos with no path to operate.",
  },
  {
    title: "No client name-dropping",
    description:
      "We do not trade on logos. Our case studies are illustrative examples of our approach, not client references.",
  },
  {
    title: "No fabricated case studies",
    description:
      "Every example we publish is labeled as an illustrative example. We do not invent metrics, clients, or outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>About</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              SkyMind Automation
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              {siteConfig.positioning}
            </p>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground text-pretty sm:text-base">
              We are an AI engineering company. Not a consultancy that talks about AI, not a
              product vendor with a chatbot — engineers who design, build, automate, evaluate,
              and secure AI systems for organizations that need them to work.
            </p>
          </Container>
        </Section>

        {/* Mission & Vision — sticky heading layout */}
        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-2">
                  <Target className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Mission</span>
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  Why we exist
                </h2>
              </div>
              <div>
                <p className="font-sans text-xl font-medium tracking-tight text-balance sm:text-2xl">
                  To help organizations design, implement, automate, and secure AI systems that
                  actually work in production.
                </p>
                <p className="mt-5 text-sm text-muted-foreground text-pretty sm:text-base">
                  Most AI efforts stall not because models are not smart enough, but because the
                  engineering around them — retrieval, evaluation, integration, observability,
                  security — is treated as an afterthought. We exist to close that gap. We treat
                  AI systems like any other critical system: with rigor, with tests, with
                  security, and with operational ownership.
                </p>
                <p className="mt-4 text-sm text-muted-foreground text-pretty sm:text-base">
                  We work with organizations that want their AI to do real work, not just look
                  smart in a demo. That means we build for the messy realities of production:
                  unreliable inputs, real users, real adversaries, real cost constraints, and
                  real regulators.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-2">
                  <Eye className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Vision</span>
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  Where we are going
                </h2>
              </div>
              <div>
                <p className="font-sans text-xl font-medium tracking-tight text-balance sm:text-2xl">
                  A world where every organization can deploy AI with the same engineering rigor
                  as any other critical system.
                </p>
                <p className="mt-5 text-sm text-muted-foreground text-pretty sm:text-base">
                  Today, AI is too often shipped on vibes. Models get released without eval
                  harnesses, agents get tool access without scope, RAG systems get deployed
                  without access control, and security is treated as a compliance question
                  rather than an engineering one.
                </p>
                <p className="mt-4 text-sm text-muted-foreground text-pretty sm:text-base">
                  We want to live in a world where deploying an AI system carries the same
                  expectations as deploying a payments system or an identity system — observable,
                  tested, secured, and accountable. That is the world we build toward with every
                  engagement.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Approach */}
        <Section withGrid className="pt-0">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-2">
                  <Compass className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Approach</span>
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  Engineering-first
                </h2>
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-pretty sm:text-base">
                  Our approach is engineering-first and eval-driven. We start with the problem,
                  not the model. We design the system before we write code. We instrument and
                  evaluate before we ship. We attack before we deploy. And we keep iterating
                  once the system is live — because AI systems drift, and drift unmanaged
                  becomes incident.
                </p>
                <p className="mt-4 text-sm text-muted-foreground text-pretty sm:text-base">
                  Every engagement runs through the same nine stages:{" "}
                  <Link
                    href="/#process"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    discover, analyze, design, build, integrate, evaluate, secure, deploy,
                    optimize
                  </Link>
                  . The shape of each stage changes with the engagement, but the discipline does
                  not. See the full{" "}
                  <Link
                    href="/services"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    services
                  </Link>{" "}
                  we deliver under that discipline.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Eval-driven",
                    "Observable",
                    "Secure-by-default",
                    "Versioned",
                    "Reproducible",
                    "Honest",
                  ].map((principle) => (
                    <div
                      key={principle}
                      className="rounded-lg border border-border/60 bg-card/40 px-3 py-3 text-center"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Engineering philosophy */}
        <Section className="pt-0">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-2">
                  <GitBranch className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Engineering</span>
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  Engineering philosophy
                </h2>
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-pretty sm:text-base">
                  The principles below are not aspirational posters. They are the way we work
                  every day, and the way we expect to be held accountable by the teams we work
                  with.
                </p>
                <ul className="mt-8 space-y-4">
                  {engineeringPhilosophy.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/40"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <p className="font-sans text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground text-pretty sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Security philosophy */}
        <Section withGrid className="pt-0">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Security</span>
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  Security philosophy
                </h2>
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-pretty sm:text-base">
                  AI systems are attack surface. We treat them accordingly — before, during, and
                  after deployment.
                </p>
                <ul className="mt-8 space-y-4">
                  {securityPhilosophy.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/40"
                    >
                      <ShieldCheck
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <p className="font-sans text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground text-pretty sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* What we don't do */}
        <Section className="pt-0">
          <Container className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-2">
                  <Ban className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Honesty</span>
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
                  What we don&apos;t do
                </h2>
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-pretty sm:text-base">
                  Saying no is part of engineering discipline. Below is a list of things we will
                  not do, even when asked, because they make AI worse — for you and for the
                  people who depend on your systems.
                </p>
                <ul className="mt-8 space-y-4">
                  {whatWeDontDo.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/40"
                    >
                      <Ban className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <div>
                        <p className="font-sans text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground text-pretty sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Founding team */}
        <TeamSection />

        {/* Bottom CTA */}
        <Section className="pt-0">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <Compass className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Engagement</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Build AI that earns its place in production
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Tell us the problem you are trying to solve. We will tell you honestly
                    whether we are the right partner — and if we are, we will scope a real
                    engagement with real deliverables.
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
