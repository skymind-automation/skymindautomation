import * as React from "react";
import { cn } from "@/lib/utils";
import { MonoLabel } from "@/components/shared/mono-label";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  withDot?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  withDot = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <MonoLabel withDot={withDot}>{eyebrow}</MonoLabel>}
      <h2
        className={cn(
          "font-sans text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          "text-balance",
          align === "center" && "mx-auto max-w-3xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-base sm:text-lg",
            "text-pretty",
            align === "center" ? "max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
