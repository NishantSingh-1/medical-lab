import { Loader2 } from "lucide-react";

export const PatientLoading = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />

      <p className="mt-4 text-sm font-semibold text-muted-foreground">
        {text}
      </p>
    </div>
  );
};