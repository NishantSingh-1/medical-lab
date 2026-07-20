import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type ConfirmDialogProps = {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  icon?: ReactNode;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDialog = ({
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  icon,
  danger = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
            danger ? "bg-danger/10 text-danger" : "bg-primary/10 text-primary"
          }`}
        >
          {icon ?? <AlertTriangle size={30} />}
        </div>

        <h2 className="mt-5 text-2xl font-black text-foreground">{title}</h2>

        <p className="mt-3 text-sm text-muted-foreground">{description}</p>

        <div className="mt-8 flex gap-3">
          <AppButton variant="outline" className="flex-1" onClick={onCancel}>
            {cancelText}
          </AppButton>

          <AppButton
            variant={danger ? "destructive" : "default"}
            className="flex-1"
            onClick={onConfirm}
          >
            {confirmText}
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};