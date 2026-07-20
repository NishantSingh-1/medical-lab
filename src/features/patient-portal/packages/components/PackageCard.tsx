import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { HealthPackage } from "../types/package.types";
import { PackageStatusBadge } from "./PackageStatusBadge";

type Props = {
  item: HealthPackage;
};

export const PackageCard = ({ item }: Props) => {
  const navigate = useNavigate();

  return (
    <AppCard className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-black">
            {item.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {item.bookingId}
          </p>
        </div>

        <PackageStatusBadge
          status={item.status}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Info
          label="Purchased"
          value={item.purchasedDate}
        />

        <Info
          label="Expiry"
          value={item.expiryDate}
        />

        <Info
          label="Remaining Tests"
          value={`${item.remainingTests}/${item.totalTests}`}
        />

        <Info
          label="Amount"
          value={`₹${item.amount}`}
        />
      </div>

      <div className="flex gap-3">
        <AppButton
          onClick={() =>
            navigate("/dashboard/tests")
          }
        >
          <CalendarDays size={18} />
          Book Test
        </AppButton>

        <AppButton variant="outline">
          Renew Package
        </AppButton>
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