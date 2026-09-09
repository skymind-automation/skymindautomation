import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SkyMindLogo — a geometric hex+cube "sky/mind" mark.
 *
 * The outer hexagon suggests intelligence/network; the inner cube facets
 * suggest structure/engineering. Purely geometric — NOT a robot. Uses
 * `currentColor` so the parent controls the accent (default `text-primary`).
 *
 * @param withWordmark - renders the "SkyMind" wordmark + mono "Automation" suffix
 */
export function SkyMindLogo({
  className,
  withWordmark = false,
  wordmarkClassName,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  withWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  const mark = (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SkyMind Automation logo"
      className={cn("size-7 text-primary", className)}
      {...props}
    >
      {/* outer hexagon — intelligence / network boundary */}
      <path
        d="M16 1.2 28.5 8.4 28.5 23.6 16 30.8 3.5 23.6 3.5 8.4 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* inner cube facets — built / engineered system */}
      {/* top rhombus */}
      <path
        d="M16 6.6 24.2 11.3 16 16 7.8 11.3 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* right facet */}
      <path
        d="M16 16 24.2 11.3 24.2 20.7 16 25.4 Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* left facet */}
      <path
        d="M16 16 7.8 11.3 7.8 20.7 16 25.4 Z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* subtle center node */}
      <circle cx="16" cy="16" r="1.1" fill="var(--background)" opacity="0.9" />
    </svg>
  );

  if (!withWordmark) return mark;

  return (
    <span className={cn("inline-flex items-center gap-2.5", wordmarkClassName)}>
      {mark}
      <span className="flex flex-col leading-none">
        <span className="font-sans text-base font-semibold tracking-tight text-foreground">
          SkyMind
          <span className="ml-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Automation
          </span>
        </span>
      </span>
    </span>
  );
}
