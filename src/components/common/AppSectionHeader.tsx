import { cn } from "@/lib/utils";

type AppSectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function AppSectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: AppSectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}