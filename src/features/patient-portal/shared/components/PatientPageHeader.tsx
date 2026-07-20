import type { ReactNode } from "react";

import { AppBadge } from "@/components/common/AppBadge";

type PatientPageHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export const PatientPageHeader = ({
  badge,
  title,
  description,
  action,
}: PatientPageHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {badge && <AppBadge>{badge}</AppBadge>}

        <h1 className="mt-3 text-3xl font-black text-foreground">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
};