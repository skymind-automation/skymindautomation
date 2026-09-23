"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Traced from the master logo artwork; stops are sampled colours, so the mark
// stays exact in both themes rather than following the UI accent tokens.
const STOPS: [number, string][] = [
  [0, "#01ECFD"],
  [0.167, "#0ABAF8"],
  [0.333, "#2182F4"],
  [0.5, "#4242F2"],
  [0.667, "#7622F3"],
  [0.833, "#B01AF7"],
  [1, "#C915F9"],
];

export function SkyMindLogo({
  className,
  withWordmark = false,
  wordmarkClassName,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  withWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  // The mark renders in the navbar and footer at once; a shared gradient id
  // would make one instance paint from the other's defs.
  const id = `sm-${React.useId().replace(/:/g, "")}`;
  const paint = `url(#${id})`;

  const mark = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SkyMind Automation"
      className={cn("size-7", className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="16.15"
          y1="8.6"
          x2="43.95"
          y2="59.21"
        >
          {STOPS.map(([offset, color]) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <path
        d="M28.64 1.41 4.39 14.47 2.74 16.63 2.64 20.16 4.29 22.64 29.86 36.36 39.07 30.83 16.04 17.57 29.21 10.81 43.6 18.85 50.05 13.2Z"
        fill={paint}
        stroke={paint}
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path
        d="M56.1 26.21 55.59 26.05 29.66 41.53 3.18 28.07 2.75 47.73 3.84 49.31 10.32 52.92 11.83 51.68 12.31 41.3 29.75 50.6 46.78 41.17 47.22 59.5 54.44 54.93 56.1 52.54Z"
        fill={paint}
        stroke={paint}
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M59.01 11.66 42.98 25.56" stroke={paint} strokeWidth="1.66" strokeLinecap="round" />
      <circle cx="59.01" cy="11.66" r="2.98" fill={paint} />
      <circle cx="42.98" cy="25.56" r="2.13" fill={paint} />
      <path d="M4.99 60.19 18.44 50.44" stroke={paint} strokeWidth="1.79" strokeLinecap="round" />
      <circle cx="4.99" cy="60.19" r="2.96" fill={paint} />
      <circle cx="18.44" cy="50.44" r="2.02" fill={paint} />
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
