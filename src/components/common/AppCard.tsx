import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type AppCardVariant = "default" | "flat" | "bordered" | "interactive";

type AppCardProps = ComponentProps<typeof Card> & {
  variant?: AppCardVariant;
};

const cardVariants: Record<AppCardVariant, string> = {
  default: "bg-card border-border shadow-sm",
  flat: "bg-card border-transparent shadow-none",
  bordered: "bg-card border-border shadow-none",
  interactive:
    "bg-card border-border shadow-sm hover:-translate-y-1 hover:shadow-md cursor-pointer",
};

export function AppCard({
  variant = "default",
  className,
  children,
  ...props
}: AppCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border p-5 transition-all duration-300",
        cardVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}