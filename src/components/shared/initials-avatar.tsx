import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Avatar with initials — used for team members.
 * Purely CSS/SVG-based, no external images required.
 */
export function InitialsAvatar({
  initials,
  className,
  size = "md",
}: {
  initials: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "size-12 text-sm",
    md: "size-16 text-base",
    lg: "size-20 text-lg",
  };
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full",
        "border border-border bg-gradient-to-br from-primary/15 via-card to-card",
        "font-mono font-semibold tracking-wider text-primary",
        "shadow-sm",
        sizeClasses[size],
        className,
      )}
    >
      {/* subtle ring */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-primary/20" />
      <span className="relative">{initials}</span>
    </span>
  );
}
