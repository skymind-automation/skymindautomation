import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MonoLabel } from "@/components/shared/mono-label";
import {
  ShieldAlert,
  Lock,
  EyeOff,
  Database,
  KeyRound,
  Users,
  Wrench,
  Unplug,
  Network,
  AlertTriangle,
  ArrowRight,
  Crosshair,
  type LucideIcon,
} from "lucide-react";
import { securityAttackSurface } from "@/content/technology";
import { cn } from "@/lib/utils";

const attackIconMap: LucideIcon[] = [
  ShieldAlert, // Prompt Injection
  Lock, // Jailbreaks
  EyeOff, // Sensitive Information Disclosure
  Database, // RAG Poisoning
  KeyRound, // Unauthorized Retrieval
  Users, // Excessive Agent Permissions
  Wrench, // Tool Abuse
  Unplug, // Insecure Integrations
  Network, // AI API Security
  AlertTriangle, // Data Leakage
];

const methodologyFrameworks = [
  "OWASP LLM Top 10",
  "MITRE ATLAS",
  "NIST AI RMF",
];

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 py-16 sm:py-20 lg:py-28">
      <style>{`
        @keyframes sec-scanline {
          0% { top: -2%; opacity: 0; }
          8% { opacity: 0.7; }
          92% { opacity: 0.7; }
          100% { top: 102%; opacity: 0; }
        }
        .sec-scanline {
          animation: sec-scanline 7s linear infinite;
        }
        @keyframes sec-target-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sec-target {
          animation: sec-target-spin 120s linear infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Background: grid with custom radial mask (full-bleed) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-80"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 70% 30%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 70% 30%, black 20%, transparent 80%)",
        }}
      />

      {/* Background: primary radial glows (full-bleed) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 15%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 55%), radial-gradient(circle at 10% 90%, color-mix(in oklab, var(--primary) 8%, transparent), transparent 50%)",
        }}
      />

      {/* Decorative target / radar crosshair (top-right corner, slow spin) */}
      <Crosshair
        aria-hidden
        className="sec-target pointer-events-none absolute -right-32 -top-32 size-[480px] text-primary/10 lg:-right-24 lg:-top-24 lg:size-[560px]"
        strokeWidth={0.6}
      />

      {/* Animated scan line (full-bleed horizontal sweep) */}
      <div
        aria-hidden
        className="sec-scanline pointer-events-none absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklab, var(--primary) 70%, transparent), transparent)",
          boxShadow:
            "0 0 24px 0 color-mix(in oklab, var(--primary) 50%, transparent)",
        }}
      />

      <Container className="relative">
        {/* Heading block */}
        <div className="flex flex-col gap-5">
          <MonoLabel>Differentiator</MonoLabel>
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Don&apos;t just deploy AI.{" "}
            <span className="text-amber-400 text-glow">Attack it first.</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
            Most teams ship AI without ever testing it as an attacker would. We
            attack your AI systems — prompts, retrieval, agents, integrations —
            before anyone else does.
          </p>
        </div>

        {/* Threat catalog */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
          {securityAttackSurface.map((item, idx) => {
            const Icon = attackIconMap[idx] ?? AlertTriangle;
            const threatId = `THREAT-${String(idx + 1).padStart(2, "0")}`;
            return (
              <article
                key={item.title}
                className={cn(
                  "group/threat relative flex items-start gap-4 rounded-lg border border-border bg-card/60 p-4 transition-all duration-300 sm:p-5",
                  "hover:border-amber-500/40 hover:bg-card hover:shadow-[0_4px_24px_-8px_color-mix(in_oklab,var(--primary)_22%,transparent)]",
                )}
              >
                {/* Danger icon */}
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background/40 text-amber-400 transition-colors group-hover/threat:border-amber-500/40">
                  <Icon className="size-4" />
                </span>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-foreground">
                      {item.title}
                    </h3>
                    <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground/60 sm:inline">
                      {threatId}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
          <Button
            asChild
            size="lg"
            className="h-12 min-w-[16rem] px-7 text-base font-medium shadow-[0_8px_32px_-12px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
          >
            <Link href="/contact?service=AI+Security">
              Request an AI Security Assessment
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Link
            href="/services/ai-security"
            className="group inline-flex min-h-[3rem] items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-sm"
          >
            Explore AI Security service
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Methodology line */}
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            methodology
          </span>
          <span className="font-mono text-[0.65rem] text-muted-foreground/40">
            /
          </span>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {methodologyFrameworks.map((fw, i) => (
              <li key={fw} className="flex items-center gap-3">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-primary/90">
                  {fw}
                </span>
                {i < methodologyFrameworks.length - 1 && (
                  <span
                    aria-hidden
                    className="font-mono text-[0.65rem] text-muted-foreground/40"
                  >
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
