import { UserCircle2, ShieldCheck } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppCard } from "@/components/common/AppCard";

type SidebarUserCardProps = {
  name: string;
  role: string;
  profileCompletion: number;
};

export const SidebarUserCard = ({
  name,
  role,
  profileCompletion,
}: SidebarUserCardProps) => {
  return (
    <AppCard className="mx-4 mt-4 border-none bg-primary/5 shadow-none">
      <div className="flex items-center gap-3">
        <UserCircle2
          className="text-primary"
          size={54}
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-black text-foreground">
            {name}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <ShieldCheck
              size={14}
              className="text-primary"
            />

            <span className="text-xs text-muted-foreground">
              {role}
            </span>
          </div>

          <div className="mt-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-muted-foreground">
                Profile
              </span>

              <span className="text-[11px] font-bold text-primary">
                {profileCompletion}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{
                  width: `${profileCompletion}%`,
                }}
              />
            </div>
          </div>

          <AppBadge className="mt-3">
            Verified Patient
          </AppBadge>
        </div>
      </div>
    </AppCard>
  );
};