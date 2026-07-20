import { Bell, Check, Trash2 } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { PatientNotification } from "../types/notification.types";

type NotificationCardProps = {
  notification: PatientNotification;
  onRead: (id: string) => void;
  onDelete: (notification: PatientNotification) => void;
};

export const NotificationCard = ({
  notification,
  onRead,
  onDelete,
}: NotificationCardProps) => {
  return (
    <AppCard className="p-5 shadow-none">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          <Bell size={22} />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-black text-foreground">
              {notification.title}
            </h3>

            {!notification.isRead && (
              <AppBadge variant="warning">
                New
              </AppBadge>
            )}
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {notification.message}
          </p>

          <p className="mt-3 text-xs text-muted-foreground">
            {notification.createdAt}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {!notification.isRead && (
            <AppButton
              size="icon"
              variant="outline"
              onClick={() => onRead(notification.id)}
            >
              <Check size={16} />
            </AppButton>
          )}

          <AppButton
            size="icon"
            variant="destructive"
            onClick={() => onDelete(notification)}
          >
            <Trash2 size={16} />
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};