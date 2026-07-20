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

type AddMedicalHistoryDialogProps = {
  onClose: () => void;
};

export const AddMedicalHistoryDialog = ({
  onClose,
}: AddMedicalHistoryDialogProps) => {
  const addRecord = useMedicalHistoryStore((state) => state.addRecord);

  const [formData, setFormData] = useState({
    title: "",
    diagnosisDate: "",
    doctorName: "",
    notes: "",
    medications: "",
    status: "ACTIVE" as MedicalRecordStatus,
  });

  const handleSave = () => {
    if (
      !formData.title.trim() ||
      !formData.diagnosisDate ||
      !formData.doctorName.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newRecord: MedicalHistoryRecord = {
      id: crypto.randomUUID(),
      title: formData.title.trim(),
      diagnosisDate: formData.diagnosisDate,
      doctorName: formData.doctorName.trim(),
      notes: formData.notes.trim(),
      medications: formData.medications
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      status: formData.status,
    };

    addRecord(newRecord);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="max-h-[90vh] w-full max-w-xl overflow-y-auto p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-foreground">
              Add Medical Record
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Add diagnosis, medicines and medical notes.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close add medical record dialog"
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
                setFormData({
                  ...formData,
                  title: event.target.value,
                })
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
                setFormData({
                  ...formData,
                  doctorName: event.target.value,
                })
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
                setFormData({
                  ...formData,
                  diagnosisDate: event.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Medications
            </label>

            <AppInput
              value={formData.medications}
              placeholder="Example: Thyroxine 25 mcg, Vitamin D3"
              onChange={(event) =>
                setFormData({
                  ...formData,
                  medications: event.target.value,
                })
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
                setFormData({
                  ...formData,
                  notes: event.target.value,
                })
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
                setFormData({
                  ...formData,
                  status: event.target.value as MedicalRecordStatus,
                })
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
            Save Record
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};