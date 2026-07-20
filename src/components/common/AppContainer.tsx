import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type AppContainerProps = HTMLAttributes<HTMLDivElement>;

export function AppContainer({
  className,
  children,
  ...props
}: AppContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}