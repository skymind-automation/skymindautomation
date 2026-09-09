import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Workflow,
  Database,
  Wrench,
  BrainCircuit,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type ProjectTile = {
  label: string;
  icon: React.ElementType;
  accent?: boolean;
};

const projectTiles: ProjectTile[] = [
  { label: "AGENT", icon: Bot },
  { label: "AUTOMATION", icon: Workflow, accent: true },
  { label: "RAG", icon: Database },
  { label: "TOOL", icon: Wrench },
  { label: "ASSISTANT", icon: BrainCircuit },
  { label: "PIPELINE", icon: Workflow, accent: true },
];

export function BuiltWithAISection() {
  const url = siteConfig.builtWithAI.url;
  const hostname = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return "builtwithai.dev";
    }
  })();

  return (
    <Section withGrid gridFade>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <MonoLabel>Ecosystem</MonoLabel>
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Discover what AI can build.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl text-pretty">
            {siteConfig.builtWithAI.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Explore BuiltWithAI
              <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Part of the SkyMind ecosystem.
            </span>
          </div>
        </div>

        {/* Right: mock browser / showcase card */}
        <div className="relative">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${siteConfig.builtWithAI.name}`}
            className="group block focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-xl"
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-xl border border-border bg-card",
                "shadow-sm transition-all duration-300",
                "group-hover:border-primary/40 group-hover:shadow-[0_8px_40px_-8px_color-mix(in_oklab,var(--primary)_30%,transparent)]",
                "group-hover:-translate-y-0.5",
              )}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-destructive/50" />
                  <span className="size-2.5 rounded-full bg-amber-500/50" />
                  <span className="size-2.5 rounded-full bg-primary/60" />
                </div>
                <div className="flex h-7 flex-1 items-center gap-2 rounded-md border border-border bg-background/60 px-3 font-mono text-[0.7rem] text-muted-foreground">
                  <span className="inline-block size-1.5 rounded-full bg-primary pulse-dot" />
                  {hostname}
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              {/* Body */}
              <div className="relative p-4 sm:p-5">
                {/* subtle scan line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan"
                />
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                      /showcase
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {projectTiles.length} live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {projectTiles.map((tile) => {
                    const Icon = tile.icon;
                    return (
                      <div
                        key={tile.label}
                        className={cn(
                          "relative flex flex-col gap-2 rounded-lg border border-border bg-background/40 p-3 transition-colors",
                          "group-hover:border-border/80",
                          tile.accent && "bg-primary/5 border-primary/20",
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-4",
                            tile.accent ? "text-primary" : "text-muted-foreground",
                          )}
                        />
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-foreground/80">
                          {tile.label}
                        </span>
                        <span className="font-mono text-[0.6rem] text-muted-foreground/70">
                          v1.2.0
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* fake status bar */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="inline-block size-1.5 rounded-full bg-primary pulse-dot" />
                    Indexing
                  </span>
                  <span>updated 2m ago</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}
