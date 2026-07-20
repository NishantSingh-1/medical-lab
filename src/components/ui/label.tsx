import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
  optional?: boolean;
}

function Label({
  className,
  children,
  required,
  optional,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "mb-2 inline-flex items-center gap-1",
        "text-sm font-semibold",
        "text-[var(--color-text)]",
        "select-none",
        "peer-disabled:cursor-not-allowed",
        "peer-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}

      {required && (
        <span className="text-[var(--color-danger)]">*</span>
      )}

      {optional && (
        <span className="text-xs font-normal text-[var(--color-muted)]">
          (Optional)
        </span>
      )}
    </LabelPrimitive.Root>
  );
}

export { Label };