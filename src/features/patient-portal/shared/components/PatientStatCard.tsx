import type { ReactNode } from "react";

import { AppCard } from "@/components/common/AppCard";

type PatientStatCardProps = {
  title: string;
  value: number | string;
  icon?: ReactNode;
};

export const PatientStatCard = ({
  title,
  value,
  icon,
}: PatientStatCardProps) => {
  return (
    <AppCard className="p-5 shadow-none transition-all hover:border-primary/30 hover:shadow-sm">
      {icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
          {icon}
        </div>
      )}

      <p className="mt-4 text-sm font-semibold text-muted-foreground">
        {title}
      </p>

      <h3 className="mt-1 text-3xl font-black text-foreground">
        {value}
      </h3>
    </AppCard>
  );
};