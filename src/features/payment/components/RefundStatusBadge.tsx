import { AppBadge } from "@/components/common/AppBadge";

import type { RefundStatus } from "../types/refund.types";

type Props = {
  status: RefundStatus;
};

const variant = {
  REQUESTED: "warning",
  PROCESSING: "primary",
  APPROVED: "success",
  COMPLETED: "success",
  REJECTED: "danger",
} as const;

export const RefundStatusBadge = ({ status }: Props) => {
  return (
    <AppBadge variant={variant[status]}>
      {status.replace("_", " ")}
    </AppBadge>
  );
};