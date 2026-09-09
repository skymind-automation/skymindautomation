import * as React from "react";
import { cn } from "@/lib/utils";

type MonoLabelProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  withDot?: boolean;
};

export function MonoLabel({
  className,
  children,
  withDot = true,
  ...props
}: MonoLabelProps) {
  return (
    <span
      className={cn(
        "text-mono-label inline-flex items-center gap-2 text-primary",
        className,
      )}
      {...props}
    >
      {withDot && (
        <span
          aria-hidden
          className="inline-block size-1.5 rounded-full bg-primary pulse-dot"
        />
      )}
      {children}
    </span>
  );
}
