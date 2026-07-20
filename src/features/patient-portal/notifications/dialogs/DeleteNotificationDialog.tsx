import { BellOff } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useNotificationStore } from "../store/useNotificationStore";
import type { PatientNotification } from "../types/notification.types";

type DeleteNotificationDialogProps = {
  notification: PatientNotification;
  onClose: () => void;
};

export const DeleteNotificationDialog = ({
  notification,
  onClose,
}: DeleteNotificationDialogProps) => {
  const deleteNotification = useNotificationStore(
    (state) => state.deleteNotification
  );

  const handleDelete = () => {
    deleteNotification(notification.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-danger/10 text-danger">
          <BellOff size={30} />
        </div>

        <h2 className="mt-5 text-2xl font-black text-foreground">
          Delete Notification?
        </h2>

        <p className="mt-3 text-sm text-muted-foreground">
          Are you sure you want to delete this notification?
        </p>

        <div className="mt-5 rounded-xl border border-border bg-muted/30 p-4 text-left">
          <p className="font-bold text-foreground">
            {notification.title}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {notification.message}
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <AppButton
            variant="outline"
            className="flex-1"
            onClick={onClose}
          >
            Cancel
          </AppButton>

          <AppButton
            variant="destructive"
            className="flex-1"
            onClick={handleDelete}
          >
            Delete
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};