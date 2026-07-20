import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type AppInputProps = ComponentProps<typeof Input> & {
  error?: string;
  label?: string;
};

export function AppInput({
  label,
  error,
  className,
  id,
  ...props
}: AppInputProps) {
  const inputId = id || props.name;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-foreground"
        >
          {label}
        </label>
      )}

      <Input
        id={inputId}
        className={cn(
          "h-12 rounded-xl border-border bg-background px-4 text-sm",
          "focus-visible:ring-2 focus-visible:ring-primary",
          error && "border-danger focus-visible:ring-danger",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}