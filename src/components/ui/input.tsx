import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  error?: boolean;
};

function Input({ className, type, error = false, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={error}
      className={cn(
        "h-12 w-full min-w-0 rounded-xl border bg-white px-4 text-sm outline-none transition-all",
        "border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-muted)]",
        "focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
        "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60",
        error &&
          "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };