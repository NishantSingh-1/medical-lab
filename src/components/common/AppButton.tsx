import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type AppButtonProps = ComponentProps<typeof Button> & {
  loading?: boolean;
};

export function AppButton({
  className,
  children,
  loading = false,
  disabled,
  variant,
  ...props
}: AppButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn(
        "rounded-xl font-semibold transition-all duration-300",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}