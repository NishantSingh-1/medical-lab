import { CheckCircle2 } from "lucide-react";

import type { RefundStatus } from "../types/refund.types";

const steps = [
  "REQUESTED",
  "PROCESSING",
  "APPROVED",
  "COMPLETED",
] as const;

type Props = {
  status: RefundStatus;
};

export const RefundTimeline = ({ status }: Props) => {
  const current = steps.indexOf(status as never);

  return (
    <div className="mt-6 flex items-center justify-between">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex flex-1 flex-col items-center"
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              index <= current
                ? "bg-primary text-white"
                : "bg-muted"
            }`}
          >
            <CheckCircle2 size={18} />
          </div>

          <p className="mt-2 text-xs font-semibold text-center">
            {step.replace("_", " ")}
          </p>
        </div>
      ))}
    </div>
  );
};