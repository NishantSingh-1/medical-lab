import * as React from "react";
import { cn } from "@/lib/utils";

type CardSize = "sm" | "default" | "lg";
type CardVariant = "default" | "flat" | "highlight" | "outline";

function Card({
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: CardSize;
  variant?: CardVariant;
}) {
  const sizes = {
    sm: "p-4 rounded-xl",
    default: "p-5 rounded-2xl",
    lg: "p-6 rounded-3xl",
  };

  const variants = {
    default: "bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)]",
    flat: "bg-white border border-[var(--color-border)] shadow-none",
    highlight: "bg-[var(--color-surface)] border border-[var(--color-primary)] shadow-[var(--shadow-card)]",
    outline: "bg-transparent border border-[var(--color-border)] shadow-none",
  };

  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col overflow-hidden text-[var(--color-text)] transition-all",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mb-4", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-base md:text-lg font-bold leading-snug text-[var(--color-text)]",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm text-[var(--color-muted)]", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex-1", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mt-4 flex items-center border-t border-[var(--color-border)] pt-4",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};