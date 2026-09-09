import * as React from "react";
import Link from "next/link";
import {
  HeartPulse,
  Pill,
  Truck,
  GraduationCap,
  Banknote,
  ShoppingBag,
  Building2,
  Factory,
  Briefcase,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArrowLink } from "@/components/shared/arrow-link";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

// Per-industry icon (kept local so we don't push icon mapping into content layer)
const industryIconMap: Record<string, React.ElementType> = {
  healthcare: HeartPulse,
  pharmaceuticals: Pill,
  logistics: Truck,
  education: GraduationCap,
  finance: Banknote,
  retail: ShoppingBag,
  "real-estate": Building2,
  manufacturing: Factory,
  "professional-services": Briefcase,
  technology: Cpu,
};

function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = industryIconMap[slug] ?? Cpu;
  return <Icon className={className} />;
}

export function IndustriesSection() {
  return (
    <Section withGrid gridFade>
      <SectionHeading
        eyebrow="Industries"
        title="AI engineering across industries"
        description="We build and secure AI systems for organizations where AI touches real operations."
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries#${industry.slug}`}
            className={cn(
              "group relative flex flex-col gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-300",
              "hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_25%,transparent)]",
              "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "min-h-[160px]",
            )}
          >
            {/* icon */}
            <div className="flex items-center justify-between">
              <span className="inline-flex size-8 items-center justify-center rounded-md border border-border bg-background/40 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <IndustryIcon slug={industry.slug} className="size-4" />
              </span>
              <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100" />
            </div>

            {/* name + summary */}
            <div className="flex flex-col gap-1.5">
              <h3 className="font-sans text-sm font-semibold tracking-tight">
                {industry.shortName}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                {industry.summary}
              </p>
            </div>

            {/* top 2 applications */}
            <div className="mt-auto flex flex-wrap gap-1 pt-2">
              {industry.applications.slice(0, 2).map((app) => (
                <span
                  key={app}
                  className="inline-flex items-center rounded border border-border bg-background/40 px-1.5 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {app}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        <ArrowLink href="/industries">Explore industries</ArrowLink>
      </div>
    </Section>
  );
}
