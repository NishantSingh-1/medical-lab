import { AppBadge } from "@/components/common/AppBadge";

import type { PackageStatus } from "../types/package.types";

type Props = {
  status: PackageStatus;
};

const variant = {
  ACTIVE: "success",
  EXPIRED: "danger",
  USED: "warning",
} as const;

export const PackageStatusBadge = ({
  status,
}: Props) => {
  return (
    <AppBadge variant={variant[status]}>
      {status}
    </AppBadge>
  );
};