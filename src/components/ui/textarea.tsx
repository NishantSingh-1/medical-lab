import * as React from "react";

import { cn } from "@/lib/utils";

type TextareaProps = React.ComponentProps<"textarea"> & {
  error?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
};

function Textarea({
  className,
  error = false,
  resize = "vertical",
  ...props
}: TextareaProps) {
  const resizeClasses = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

  return (
    <textarea
      data-slot="textarea"
      aria-invalid={error}
      className={cn(
        "min-h-28 w-full rounded-xl border bg-white px-4 py-3",
        "text-sm leading-6 outline-none transition-all",
        "border-[var(--color-border)]",
        "text-[var(--color-text)]",
        "placeholder:text-[var(--color-muted)]",
        "focus:border-[var(--color-primary)]",
        "focus:ring-2 focus:ring-[var(--color-primary)]/20",
        "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60",
        error &&
          "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/20",
        resizeClasses[resize],
        className
      )}
      {...props}
    />
  );
}

export { Textarea };