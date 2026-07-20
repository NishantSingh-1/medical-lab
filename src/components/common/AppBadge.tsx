import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type AppBadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline"
  | "muted";

type AppBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: AppBadgeVariant;
};

const badgeVariants: Record<AppBadgeVariant, string> = {
  primary: "bg-primary-light text-primary-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
  info: "bg-info/10 text-info",
  outline: "border border-border bg-background text-foreground",
  muted: "bg-muted text-muted-foreground",
};

export function AppBadge({
  variant = "primary",
  className,
  children,
  ...props
}: AppBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-3 py-1",
        "text-xs font-semibold leading-none",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}