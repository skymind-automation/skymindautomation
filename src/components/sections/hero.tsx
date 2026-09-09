"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { lifecycleStages } from "@/content/process";
import { Container } from "@/components/shared/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { Button } from "@/components/ui/button";

const HERO_CAPABILITIES = [
  "AI Implementation",
  "RAG Systems",
  "AI Agents",
  "AI Automation",
  "AI Engineering",
  "Evaluation",
  "AI Red Teaming",
  "AI Security",
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section
      className="relative isolate overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* background: grid + radial primary glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)]"
      />

      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
        {/* ---------------- Left column: copy + CTAs ---------------- */}
        <motion.div
          className="flex flex-col gap-7 lg:col-span-6"
          {...fade}
        >
          <MonoLabel>AI Engineering &amp; Automation</MonoLabel>

          <h1
            id="hero-heading"
            className="text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-primary text-glow">Build AI.</span>{" "}
            <span className="text-foreground">Automate Work.</span>{" "}
            <span className="text-foreground">Secure Intelligence.</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="text-foreground/90">
              {siteConfig.supportingStatement}
            </span>{" "}
            {siteConfig.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-12 w-full sm:w-auto">
              <Link href="/contact">
                Start an AI Project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 w-full border border-border bg-transparent text-foreground hover:bg-accent/50 hover:text-foreground sm:w-auto"
            >
              <Link href="/services">
                Explore Our Capabilities
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Capability marquee */}
          <div
            className="group relative mt-2 -mx-4 overflow-hidden sm:-mx-6 lg:mx-0"
            aria-label="Capability highlights"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent"
            />
            <div
              className="flex w-max gap-2 pr-4 transition-[animation-play-state] duration-300 group-hover:[animation-play-state:paused] animate-marquee"
            >
              {[...HERO_CAPABILITIES, ...HERO_CAPABILITIES].map((cap, i) => (
                <span
                  key={`${cap}-${i}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  <span className="size-1 rounded-full bg-primary/70" />
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ---------------- Right column: lifecycle visual ---------------- */}
        <motion.div
          className="relative lg:col-span-6"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              })}
        >
          {/* decorative floating code card */}
          <div
            aria-hidden
            className="absolute -right-2 -top-6 z-20 hidden rotate-1 sm:block lg:-right-4"
          >
            <div className="relative w-64 rounded-lg border border-border bg-card/80 p-3 shadow-xl backdrop-blur-md">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-destructive/70" />
                <span className="size-2 rounded-full bg-amber-400/70" />
                <span className="size-2 rounded-full bg-primary/70" />
                <span className="ml-auto font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                  deploy.sh
                </span>
              </div>
              <pre className="overflow-x-auto font-mono text-[0.7rem] leading-relaxed text-muted-foreground scrollbar-tech">
                <code>
                  <span className="text-primary">$</span> skymind.deploy({"{"}{" "}
                  {"\n"}  guarded: <span className="text-primary">true</span>,
                  {"\n"}  observability: <span className="text-primary">true</span>{" "}
                  {"\n"}
                  {"}"})
                </code>
              </pre>
              <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary">
                ✓ build passing · 0 vulns
              </p>
            </div>
          </div>

          {/* visual frame */}
          <div className="relative mt-10 rounded-xl border border-border bg-card/30 p-4 backdrop-blur-sm sm:p-6 lg:mt-0">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-mono-label text-primary">
                <span className="mr-2 inline-block size-1.5 rounded-full bg-primary pulse-dot align-middle" />
                AI Lifecycle
              </p>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                8 stages
              </span>
            </div>

            {/* Desktop / tablet: vertical lifecycle with flow line */}
            <div className="hidden sm:block">
              <LifecycleVertical reduce={!!reduce} />
            </div>

            {/* Mobile: horizontal scroll-snap row */}
            <div className="sm:hidden">
              <LifecycleHorizontal />
            </div>
          </div>
        </motion.div>
      </Container>

      {/* scoped styles for the lifecycle flow animation */}
      <style>{`
        @keyframes hero-flow-down {
          0% { transform: translateY(-110%); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(110%); opacity: 0; }
        }
        .hero-flow-pulse {
          animation: hero-flow-down 4.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes hero-flow-right {
          0% { transform: translateX(-110%); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        .hero-flow-pulse-x {
          animation: hero-flow-right 3.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-flow-pulse,
          .hero-flow-pulse-x {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ----------------------- Vertical lifecycle (desktop) ---------------------- */

function LifecycleVertical({ reduce }: { reduce: boolean }) {
  return (
    <ol className="relative flex flex-col gap-3 pl-8">
      {/* vertical flow line */}
      <div
        aria-hidden
        className="absolute left-[14px] top-1 bottom-1 w-px overflow-hidden bg-border"
      >
        {/* animated primary pulse traveling downward */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent",
            !reduce && "hero-flow-pulse",
          )}
        />
      </div>

      {lifecycleStages.map((stage, i) => {
        const isSecure = stage.label === "Secure";
        const isMonitor = stage.label === "Monitor";
        const isLast = i === lifecycleStages.length - 1;
        return (
          <li key={stage.label} className="group relative">
            {/* node */}
            <span
              className={cn(
                "absolute -left-8 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border bg-background font-mono text-[0.6rem] font-medium transition-colors",
                (isSecure || isMonitor)
                  ? "border-primary/50 text-primary"
                  : "border-border text-muted-foreground",
                "group-hover:border-primary/60 group-hover:text-primary",
              )}
            >
              {isSecure ? (
                <ShieldCheck className="size-3.5" />
              ) : isMonitor ? (
                <Activity className="size-3.5" />
              ) : (
                String(i + 1).padStart(2, "0")
              )}
            </span>

            {/* content */}
            <div
              className={cn(
                "flex items-start justify-between gap-3 rounded-lg border border-border bg-card/40 px-3 py-2.5 transition-all duration-200 group-hover:-translate-y-px group-hover:border-primary/40 group-hover:bg-card/70",
                isLast && "border-primary/30 bg-primary/[0.04]",
              )}
            >
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-sans text-sm font-medium text-foreground">
                  {stage.label}
                </span>
                <span className="truncate text-xs text-muted-foreground group-hover:text-muted-foreground">
                  {stage.description}
                </span>
              </div>
              <span className="shrink-0 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ----------------------- Horizontal lifecycle (mobile) ----------------------- */

function LifecycleHorizontal() {
  return (
    <div className="relative -mx-4 overflow-x-auto px-4 pb-2 scrollbar-tech sm:-mx-6 sm:px-6">
      <ol className="flex w-max gap-3">
        {lifecycleStages.map((stage, i) => {
          const isSecure = stage.label === "Secure";
          const isMonitor = stage.label === "Monitor";
          return (
            <li
              key={stage.label}
              className="group relative flex w-32 shrink-0 snap-start flex-col gap-2 rounded-lg border border-border bg-card/40 p-3 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full border bg-background font-mono text-[0.6rem]",
                    (isSecure || isMonitor)
                      ? "border-primary/50 text-primary"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {isSecure ? (
                    <ShieldCheck className="size-3.5" />
                  ) : isMonitor ? (
                    <Activity className="size-3.5" />
                  ) : (
                    String(i + 1).padStart(2, "0")
                  )}
                </span>
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="font-sans text-sm font-medium text-foreground">
                {stage.label}
              </span>
              <span className="text-[0.7rem] leading-relaxed text-muted-foreground">
                {stage.description}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
