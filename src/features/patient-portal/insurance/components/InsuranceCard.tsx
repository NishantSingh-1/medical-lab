import { CalendarDays, CreditCard, ShieldCheck, Trash2 } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { InsuranceItem } from "../types/insurance.types";

type InsuranceCardProps = {
  insurance: InsuranceItem;
  onDelete: (insurance: InsuranceItem) => void;
};

export const InsuranceCard = ({
  insurance,
  onDelete,
}: InsuranceCardProps) => {
  return (
    <AppCard className="p-5 shadow-none">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            <ShieldCheck size={22} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-black text-foreground">
                {insurance.provider}
              </h3>

              <AppBadge
                variant={
                  insurance.status === "ACTIVE"
                    ? "success"
                    : "danger"
                }
              >
                {insurance.status}
              </AppBadge>
            </div>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-primary" />
                Policy: {insurance.policyNumber}
              </div>

              <p>Member ID: {insurance.memberId}</p>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-primary" />
                Valid till: {insurance.validTill}
              </div>
            </div>
          </div>
        </div>

        <AppButton
          type="button"
          variant="destructive"
          onClick={() => onDelete(insurance)}
        >
          <Trash2 size={17} />
          Delete
        </AppButton>
      </div>
    </AppCard>
  );
};