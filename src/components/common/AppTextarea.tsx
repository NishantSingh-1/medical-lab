import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type AppTextareaProps = ComponentProps<typeof Textarea> & {
  label?: string;
  error?: string;
};

export function AppTextarea({
  label,
  error,
  className,
  id,
  ...props
}: AppTextareaProps) {
  const textareaId = id || props.name;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-semibold text-foreground"
        >
          {label}
        </label>
      )}

      <Textarea
        id={textareaId}
        className={cn(
          "min-h-28 rounded-xl border-border bg-background px-4 py-3 text-sm",
          "focus-visible:ring-2 focus-visible:ring-primary",
          error && "border-danger focus-visible:ring-danger",
          className
        )}
        {...props}
      />

      {error && <p className="text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}