import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArrowLink } from "@/components/shared/arrow-link";
import { services } from "@/content/services";
import { serviceIconMap } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <Section withGrid gridFade>
      <SectionHeading
        eyebrow="Capabilities"
        title="What we build, automate, and secure"
        description="Full-spectrum AI engineering — from first implementation to red-team hardening."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
        {services.map((service, idx) => {
          const Icon = serviceIconMap[service.icon];
          const isSecurity = service.slug === "ai-security";
          const isRedTeam = service.slug === "ai-red-teaming";
          const isCritical = isSecurity || isRedTeam;
          const isFeatured = isRedTeam; // AI Red Teaming gets a wide featured card on lg
          const index = String(idx + 1).padStart(2, "0");

          return (
            <article
              key={service.slug}
              className={cn(
                "group relative flex flex-col rounded-lg border bg-card p-6 transition-all duration-300",
                "hover:-translate-y-1",
                isCritical
                  ? "border-amber-500/25 hover:border-amber-500/50 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--primary)_22%,transparent)]"
                  : "border-border hover:border-primary/40 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--primary)_25%,transparent)]",
                isFeatured
                  ? "lg:col-span-6 lg:flex-row lg:items-stretch lg:gap-8 lg:p-8"
                  : "lg:col-span-2",
              )}
            >
              {/* mono index */}
              <span
                aria-hidden
                className="absolute right-5 top-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground/60"
              >
                {index}
              </span>

              {/* Icon + Critical tag */}
              <div
                className={cn(
                  "flex items-center gap-3",
                  isFeatured && "lg:flex-col lg:items-start lg:gap-4",
                )}
              >
                <span
                  className={cn(
                    "inline-flex size-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-300",
                    isCritical
                      ? "border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:border-amber-500/60"
                      : "border-border bg-background/40 text-primary group-hover:border-primary/40",
                  )}
                >
                  <Icon className="size-5" />
                </span>
                {isCritical && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-amber-400/90">
                    <span
                      aria-hidden
                      className="inline-block size-1 rounded-full bg-amber-400 pulse-dot"
                    />
                    Critical
                  </span>
                )}
              </div>

              {/* Content */}
              <div
                className={cn(
                  "mt-5 flex flex-1 flex-col gap-3",
                  isFeatured && "lg:mt-0 lg:flex-1 lg:gap-4",
                )}
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-balance">
                    {service.name}
                  </h3>
                  <p className="text-sm font-medium text-primary/90 text-pretty">
                    {service.tagline}
                  </p>
                </div>
                <p
                  className={cn(
                    "text-sm text-muted-foreground text-pretty",
                    isFeatured ? "lg:max-w-2xl" : "line-clamp-3",
                  )}
                >
                  {service.summary}
                </p>
              </div>

              {/* Explore link */}
              <div
                className={cn(
                  "mt-6 flex items-center border-t border-border pt-4",
                  isFeatured && "lg:mt-0 lg:w-56 lg:flex-none lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0",
                )}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex min-h-[2.75rem] items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-sm"
                >
                  Explore
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex justify-end">
        <ArrowLink href="/services">View all services</ArrowLink>
      </div>
    </Section>
  );
}
