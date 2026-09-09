import * as React from "react";
import { Boxes, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { whatWeBuild } from "@/content/technology";
import { whatWeBuildIconMap } from "@/components/shared/what-we-build-icons";
import { cn } from "@/lib/utils";

export function WhatWeBuildSection() {
  return (
    <Section withGrid gridFade>
      <SectionHeading
        eyebrow="Systems we ship"
        title="Real AI systems, not demos"
        description="Production-grade AI capabilities across assistants, agents, retrieval, automation, and security."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {whatWeBuild.map((item, idx) => {
          const Icon = whatWeBuildIconMap[item.icon] ?? Boxes;
          const sysId = `SYS-${String(idx + 1).padStart(3, "0")}`;
          return (
            <article
              key={item.name}
              className={cn(
                "group relative flex flex-col gap-3 rounded-lg border border-dashed border-border bg-card/50 p-5 transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card",
                "focus-within:border-primary/50 focus-within:bg-card",
              )}
            >
              {/* Top: icon + ↗ indicator */}
              <div className="flex items-start justify-between">
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background/40 text-primary transition-colors group-hover:border-primary/50 group-hover:text-primary">
                  <Icon className="size-4" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans text-sm font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>

              {/* mono ID footer */}
              <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                  {sysId}
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-primary/60">
                  deployable
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
