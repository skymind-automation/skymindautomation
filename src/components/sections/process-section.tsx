import * as React from "react";
import { Shield } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { transformationStages } from "@/content/process";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const secureStage = transformationStages.find((s) => s.slug === "secure");

  return (
    <Section withGrid gridFade>
      <style>{`
        @keyframes process-flow {
          0% { top: 0%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .process-flow-bead {
          animation: process-flow 7s linear infinite;
        }
      `}</style>

      <SectionHeading
        eyebrow="How we work"
        title="The AI transformation process"
        description="Nine stages from discovery to optimization. Engineering discipline applied to AI."
      />

      <div className="relative mt-12 max-w-3xl">
        {/* Connector line */}
        <div
          aria-hidden
          className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent sm:left-6"
        >
          {/* Animated flow bead */}
          <div className="process-flow-bead absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>

        <ol className="flex flex-col gap-5 sm:gap-6">
          {transformationStages.map((stage) => {
            const isSecure = stage.slug === "secure";
            return (
              <li
                key={stage.slug}
                className="relative pl-14 sm:pl-20"
              >
                {/* Node dot */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-5 top-5 z-10 size-3.5 -translate-x-1/2 rounded-full ring-4 ring-background transition-all sm:left-6",
                    isSecure
                      ? "bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_20%,transparent)]"
                      : "bg-primary/70 group-hover/stage:bg-primary",
                  )}
                />

                <article
                  className={cn(
                    "group/stage relative flex flex-col gap-3 rounded-lg border bg-card p-5 transition-all duration-300 sm:p-6",
                    "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--primary)_22%,transparent)]",
                    isSecure
                      ? "border-primary/40 bg-primary/[0.04]"
                      : "border-border",
                  )}
                >
                  {/* Header: number + name + (shield for Secure) */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span
                      className={cn(
                        "font-mono text-sm font-semibold tabular-nums transition-all duration-300 group-hover/stage:text-glow",
                        isSecure
                          ? "text-primary text-glow"
                          : "text-primary/80",
                      )}
                    >
                      {stage.number}
                    </span>
                    <h3 className="font-sans text-lg font-semibold tracking-tight sm:text-xl">
                      {stage.name}
                    </h3>
                    {isSecure && (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-primary">
                        <Shield className="size-3" />
                        Differentiator
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-pretty sm:text-base">
                    {stage.description}
                  </p>

                  {/* Outputs as chips */}
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {stage.outputs.map((output) => (
                      <li
                        key={output}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em]",
                          isSecure
                            ? "border-primary/25 bg-primary/5 text-primary/80"
                            : "border-border bg-background/40 text-foreground/70",
                        )}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "inline-block size-1 rounded-full",
                            isSecure ? "bg-primary" : "bg-primary/70",
                          )}
                        />
                        {output}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>

        {/* Footer summary */}
        {secureStage && (
          <p className="mt-8 pl-14 sm:pl-20 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
            <span className="text-primary">Stage 07</span>
            <span className="mx-2 text-muted-foreground/40">·</span>
            Where most teams ship without testing — we attack first.
          </p>
        )}
      </div>
    </Section>
  );
}
