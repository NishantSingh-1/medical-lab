import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type AppLoaderProps = {
  text?: string;
  className?: string;
};

export function AppLoader({ text = "Loading...", className }: AppLoaderProps) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-col items-center justify-center gap-3 text-muted-foreground",
        className
      )}
    >
      <Loader2 className="h-7 w-7 animate-spin text-primary" />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}