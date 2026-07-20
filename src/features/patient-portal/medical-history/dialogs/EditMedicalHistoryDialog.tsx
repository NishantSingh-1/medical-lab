import { useState } from "react";
import { X } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import { AppTextarea } from "@/components/common/AppTextarea";

import { useMedicalHistoryStore } from "../store/useMedicalHistoryStore";
import type {
  MedicalHistoryRecord,
  MedicalRecordStatus,
} from "../types/medicalHistory.types";

type EditMedicalHistoryDialogProps = {
  record: MedicalHistoryRecord;
  onClose: () => void;
};

export const EditMedicalHistoryDialog = ({
  record,
  onClose,
}: EditMedicalHistoryDialogProps) => {
  const updateRecord = useMedicalHistoryStore(
    (state) => state.updateRecord
  );

  const [formData, setFormData] =
    useState<MedicalHistoryRecord>(record);

  const [medicationsText, setMedicationsText] = useState(
    record.medications.join(", ")
  );

  const updateField = <K extends keyof MedicalHistoryRecord>(
    field: K,
    value: MedicalHistoryRecord[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (
      !formData.title.trim() ||
      !formData.doctorName.trim() ||
      !formData.diagnosisDate
    ) {
      alert("Please fill all required fields.");
      return;
    }

    updateRecord({
      ...formData,
      medications: medicationsText
        .split(",")
        .map((medication) => medication.trim())
        .filter(Boolean),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="max-h-[90vh] w-full max-w-xl overflow-y-auto p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-foreground">
              Edit Medical Record
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Update diagnosis, medicines and medical notes.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close edit medical record dialog"
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Diagnosis
            </label>

            <AppInput
              value={formData.title}
              placeholder="Enter diagnosis"
              onChange={(event) =>
                updateField("title", event.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Doctor Name
            </label>

            <AppInput
              value={formData.doctorName}
              placeholder="Enter doctor name"
              onChange={(event) =>
                updateField("doctorName", event.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Diagnosis Date
            </label>

            <AppInput
              type="date"
              value={formData.diagnosisDate}
              onChange={(event) =>
                updateField("diagnosisDate", event.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Medications
            </label>

            <AppInput
              value={medicationsText}
              placeholder="Example: Thyroxine 25 mcg, Vitamin D3"
              onChange={(event) =>
                setMedicationsText(event.target.value)
              }
            />

            <p className="mt-1 text-xs text-muted-foreground">
              Multiple medicines ko comma se separate karo.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Notes
            </label>

            <AppTextarea
              value={formData.notes}
              placeholder="Enter medical notes..."
              className="min-h-28"
              onChange={(event) =>
                updateField("notes", event.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Status
            </label>

            <select
              value={formData.status}
              onChange={(event) =>
                updateField(
                  "status",
                  event.target.value as MedicalRecordStatus
                )
              }
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="ACTIVE">Active</option>
              <option value="RESOLVED">Resolved</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <AppButton
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </AppButton>

          <AppButton type="button" onClick={handleSave}>
            Save Changes
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};