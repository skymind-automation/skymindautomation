import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { MonoLabel } from "@/components/shared/mono-label";

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden border-y border-border bg-secondary/30"
    >
      {/* grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-70"
      />
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, color-mix(in oklab, var(--primary) 22%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <MonoLabel>Ready when you are</MonoLabel>

          <h2
            id="cta-heading"
            className="mt-6 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Start an AI project.
          </h2>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg text-pretty">
            Tell us what you&apos;re trying to achieve. We&apos;ll respond within
            one business day.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Start an AI Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-background/40 px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Explore capabilities
            </Link>
          </div>

          {/* trust line */}
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-6 sm:flex-row sm:gap-6">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              OWASP · MITRE ATLAS · NIST AI RMF
            </span>
            <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              No vendor lock-in.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
