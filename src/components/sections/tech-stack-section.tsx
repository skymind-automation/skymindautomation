import * as React from "react";
import { Brain, Server, Boxes } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { MonoLabel } from "@/components/shared/mono-label";
import { techStack } from "@/content/technology";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, React.ElementType> = {
  models: Brain,
  infrastructure: Server,
  "ai-systems": Boxes,
};

export function TechStackSection() {
  return (
    <Section withGrid gridFade>
      {/* Section heading */}
      <SectionHeading
        eyebrow="Technology"
        title="A real engineering stack"
        description="Models, infrastructure, and AI systems we build with. We are not exclusive partners — we select for the task."
      />

      {/* Spec-sheet terminal-style container */}
      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card/60">
        {/* terminal header */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-destructive/50" />
            <span className="size-2 rounded-full bg-amber-500/50" />
            <span className="size-2 rounded-full bg-primary/60" />
            <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              /etc/skymind/stack.config
            </span>
          </div>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
            read-only
          </span>
        </div>

        {/* columns */}
        <div className="grid gap-px bg-border/40 md:grid-cols-3">
          {techStack.map((category) => {
            const Icon = categoryIconMap[category.slug] ?? Boxes;
            return (
              <div
                key={category.slug}
                className="flex flex-col gap-5 bg-card p-5 sm:p-6"
              >
                {/* header */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background/40 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                      category/{category.slug}
                    </span>
                    <h3 className="font-sans text-base font-semibold tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* description */}
                <p className="text-muted-foreground text-xs leading-relaxed text-pretty">
                  {category.description}
                </p>

                {/* items list (terminal style) */}
                <ul className="mt-1 flex flex-col gap-2">
                  {category.items.map((item, idx) => (
                    <li key={item}>
                      <div className="group/item flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-secondary/40">
                        <span className="font-mono text-[0.62rem] text-muted-foreground/60">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "inline-block size-1.5 rounded-full bg-primary/70",
                            "transition-transform group-hover/item:scale-125",
                          )}
                          aria-hidden
                        />
                        <span className="font-mono text-[0.72rem] tracking-tight text-foreground/85">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* footer disclaimer */}
        <div className="flex flex-col gap-2 border-t border-border bg-secondary/20 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <MonoLabel className="text-muted-foreground">
            We are technology-agnostic. No exclusive partnerships implied.
          </MonoLabel>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground/70">
            {"// last reviewed: this quarter"}
          </span>
        </div>
      </div>
    </Section>
  );
}
