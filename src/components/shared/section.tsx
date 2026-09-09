import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  withGrid?: boolean;
  gridFade?: boolean;
};

export function Section({
  className,
  containerClassName,
  children,
  withGrid = false,
  gridFade = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative py-16 sm:py-20 lg:py-28", className)}
      {...props}
    >
      {withGrid && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-grid opacity-60",
            gridFade && "bg-grid-fade",
          )}
        />
      )}
      <div className="relative">
        <Container className={containerClassName}>{children}</Container>
      </div>
    </section>
  );
}
