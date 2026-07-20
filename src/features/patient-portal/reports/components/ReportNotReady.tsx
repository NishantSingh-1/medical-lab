import { Clock3 } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";

type ReportNotReadyProps = {
  reportName: string;
};

export const ReportNotReady = ({
  reportName,
}: ReportNotReadyProps) => {
  return (
    <AppCard className="p-6 text-center shadow-none">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-warning/10 text-warning">
        <Clock3 size={30} />
      </div>

      <h2 className="mt-5 text-2xl font-black text-foreground">
        Report Not Ready Yet
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Your {reportName} sample is still being processed.
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        We will notify you when the report is available.
      </p>
    </AppCard>
  );
};