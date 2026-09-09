import * as React from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArrowLink } from "@/components/shared/arrow-link";
import { caseStudies } from "@/content/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudiesSection() {
  return (
    <Section withGrid gridFade>
      <SectionHeading
        eyebrow="Work"
        title="Example solutions we architect"
        description="Illustrative systems showing how we frame, build, and secure AI. (Example Solution labels mark illustrative content.)"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {caseStudies.map((cs, idx) => {
          const featured = idx === 0;
          return (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className={cn(
                "group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300",
                "hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--primary)_25%,transparent)]",
                "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                featured && "sm:col-span-2 lg:p-8",
              )}
            >
              {/* top row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {cs.tag}
                </span>
                {cs.illustrative && (
                  <span
                    title="Illustrative example — not a real client engagement"
                    className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-amber-400"
                  >
                    <Info className="size-3" />
                    Example Solution
                  </span>
                )}
              </div>

              {/* title + client */}
              <div className="mt-5 flex flex-col gap-2">
                <h3
                  className={cn(
                    "font-sans font-semibold tracking-tight text-balance",
                    featured
                      ? "text-2xl sm:text-3xl"
                      : "text-xl sm:text-2xl",
                  )}
                >
                  {cs.title}
                </h3>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {cs.clientLabel}
                </span>
              </div>

              {/* summary */}
              <p className="mt-4 text-muted-foreground text-sm sm:text-base text-pretty">
                {cs.summary}
              </p>

              {/* tech chips */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cs.technology.slice(0, featured ? 6 : 4).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-foreground/70"
                  >
                    <span className="inline-block size-1 rounded-full bg-primary/70" />
                    {tech}
                  </span>
                ))}
              </div>

              {/* link */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  View case study
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {cs.relatedServices.length} services
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        <ArrowLink href="/work">See all work</ArrowLink>
      </div>
    </Section>
  );
}
