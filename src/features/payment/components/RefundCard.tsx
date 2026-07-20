import { AppCard } from "@/components/common/AppCard";

import type { RefundItem } from "../types/refund.types";

import { RefundStatusBadge } from "./RefundStatusBadge";
import { RefundTimeline } from "./RefundTimeline";

type Props = {
  refund: RefundItem;
};

export const RefundCard = ({ refund }: Props) => {
  return (
    <AppCard className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-black">
            {refund.id}
          </h3>

          <p className="text-sm text-muted-foreground">
            {refund.reason}
          </p>
        </div>

        <RefundStatusBadge
          status={refund.status}
        />
      </div>

      <RefundTimeline
        status={refund.status}
      />

      <div className="grid gap-3 md:grid-cols-2">
        <Info
          label="Payment"
          value={refund.paymentId}
        />

        <Info
          label="Booking"
          value={refund.bookingId}
        />

        <Info
          label="Refund Amount"
          value={`₹${refund.refundAmount}`}
        />

        <Info
          label="Expected"
          value={refund.expectedDate}
        />
      </div>
    </AppCard>
  );
};

const Info = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <p className="text-xs text-muted-foreground">
      {label}
    </p>

    <p className="font-bold">
      {value}
    </p>
  </div>
);