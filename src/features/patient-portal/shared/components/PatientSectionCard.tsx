import type { ReactNode } from "react";

import { AppCard } from "@/components/common/AppCard";

type PatientSectionCardProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
};

export const PatientSectionCard = ({
  title,
  description,
  action,
  children,
}: PatientSectionCardProps) => {
  return (
    <AppCard className="p-6 shadow-none">
      {(title || action) && (
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            {title && (
              <h2 className="text-xl font-black text-foreground">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          {action}
        </div>
      )}

      {children}
    </AppCard>
  );
};