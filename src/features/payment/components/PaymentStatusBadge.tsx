import { AppBadge } from "@/components/common/AppBadge";

import type { PaymentStatus } from "../types/payment.types";

type PaymentStatusBadgeProps = {
  status: PaymentStatus;
};

const statusVariant: Record<
  PaymentStatus,
  "success" | "warning" | "danger" | "primary"
> = {
  PAID: "success",
  PENDING: "warning",
  FAILED: "danger",
  REFUNDED: "primary",
};

const statusLabel: Record<PaymentStatus, string> = {
  PAID: "Paid",
  PENDING: "Pending",
  FAILED: "Failed",
  REFUNDED: "Refunded",
};

export const PaymentStatusBadge = ({
  status,
}: PaymentStatusBadgeProps) => {
  return (
    <AppBadge variant={statusVariant[status]}>
      {statusLabel[status]}
    </AppBadge>
  );
};