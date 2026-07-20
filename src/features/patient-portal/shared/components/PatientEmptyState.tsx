import type { ReactNode } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type PatientEmptyStateProps = {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const PatientEmptyState = ({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}: PatientEmptyStateProps) => {
  return (
    <AppCard className="flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>

      <h2 className="mt-6 text-2xl font-black text-foreground">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        {description}
      </p>

      {buttonText && onButtonClick && (
        <AppButton
          className="mt-8"
          onClick={onButtonClick}
        >
          {buttonText}
        </AppButton>
      )}
    </AppCard>
  );
};