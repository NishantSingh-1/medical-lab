import { AlertTriangle } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useMedicalHistoryStore } from "../store/useMedicalHistoryStore";
import type { MedicalHistoryRecord } from "../types/medicalHistory.types";

type DeleteMedicalHistoryDialogProps = {
  record: MedicalHistoryRecord;
  onClose: () => void;
};

export const DeleteMedicalHistoryDialog = ({
  record,
  onClose,
}: DeleteMedicalHistoryDialogProps) => {
  const deleteRecord = useMedicalHistoryStore(
    (state) => state.deleteRecord
  );

  const handleDelete = () => {
    deleteRecord(record.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="w-full max-w-md p-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-danger/10">
            <AlertTriangle className="text-danger" size={34} />
          </div>

          <h2 className="mt-5 text-2xl font-black text-foreground">
            Delete Medical Record?
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            This action cannot be undone.
          </p>

          <div className="mt-5 w-full rounded-xl border border-border bg-muted/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Diagnosis
            </p>

            <p className="mt-1 text-lg font-bold text-foreground">
              {record.title}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Doctor: {record.doctorName}
            </p>
          </div>

          <div className="mt-6 flex w-full gap-3">
            <AppButton
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </AppButton>

            <AppButton
              className="flex-1"
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </AppButton>
          </div>
        </div>
      </AppCard>
    </div>
  );
};