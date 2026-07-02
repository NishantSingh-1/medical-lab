import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "primary" | "success" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  primary: "bg-primary-light text-primary",
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
};

const Badge = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${badgeVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;