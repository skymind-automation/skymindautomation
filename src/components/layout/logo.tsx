"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SkyMindLogo — the brand "SM" monogram: two interlocking angular facets
 * (S above, M below) linked by network nodes, painted with the brand
 * cyan → blue → violet → magenta gradient.
 *
 * @param withWordmark - renders the "SKYMIND" wordmark + "AUTOMATION" suffix
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
  // Unique per instance — the mark renders in both navbar and footer, and
  // duplicate gradient ids would make one of them paint from the other's defs.
  const gradientId = `skymind-mark-${React.useId().replace(/:/g, "")}`;

  const mark = (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SkyMind Automation logo"
      className={cn("size-7", className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="4"
          y1="2"
          x2="28"
          y2="30"
        >
          <stop offset="0%" stopColor="var(--brand-cyan)" />
          <stop offset="38%" stopColor="var(--brand-blue)" />
          <stop offset="70%" stopColor="var(--brand-violet)" />
          <stop offset="100%" stopColor="var(--brand-magenta)" />
        </linearGradient>
      </defs>

      {/* Upper facet — angled cube face */}
      <path
        d="M10.4 5.6 H23.4 L19.4 11 H6.4 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Lower facet — angular "M" */}
      <path
        d="M7.4 13.2 V26.6 H11.8 V20.4 L16 24.6 L20.2 20.4 V26.6 H24.6 V13.2 L16 21.8 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Connector stalks with nodes — network / signal */}
      <path
        d="M23 6.3 27 2.6"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="27.6" cy="2" r="1.7" fill={`url(#${gradientId})`} />
      <path
        d="M7.4 26.5 4.4 29.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="3.8" cy="30.1" r="1.7" fill={`url(#${gradientId})`} />
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
