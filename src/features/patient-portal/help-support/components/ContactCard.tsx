import type { ReactNode } from "react";

import { AppCard } from "@/components/common/AppCard";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

export const ContactCard = ({
  icon,
  title,
  value,
}: ContactCardProps) => {
  return (
    <AppCard className="p-6 text-center shadow-none transition hover:border-primary/40">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-black text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {value}
      </p>
    </AppCard>
  );
};