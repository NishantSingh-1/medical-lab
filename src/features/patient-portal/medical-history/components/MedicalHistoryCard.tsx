import { CalendarDays, Edit, Pill, Stethoscope, Trash2 } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { MedicalHistoryRecord } from "../types/medicalHistory.types";

type MedicalHistoryCardProps = {
  record: MedicalHistoryRecord;
  onEdit: (record: MedicalHistoryRecord) => void;
  onDelete: (record: MedicalHistoryRecord) => void;
};

export const MedicalHistoryCard = ({
  record,
  onEdit,
  onDelete,
}: MedicalHistoryCardProps) => {
  return (
    <AppCard className="p-5 shadow-none">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-black text-foreground">
              {record.title}
            </h3>

            <AppBadge
              variant={record.status === "ACTIVE" ? "warning" : "success"}
            >
              {record.status}
            </AppBadge>
          </div>

          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-primary" />
              Diagnosed: {record.diagnosisDate}
            </div>

            <div className="flex items-center gap-2">
              <Stethoscope size={16} className="text-primary" />
              {record.doctorName}
            </div>

            <div className="flex items-start gap-2">
              <Pill size={16} className="mt-0.5 text-primary" />

              <div className="flex flex-wrap gap-2">
                {record.medications.length > 0 ? (
                  record.medications.map((medication) => (
                    <AppBadge key={medication}>{medication}</AppBadge>
                  ))
                ) : (
                  <span>No medications</span>
                )}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {record.notes}
          </p>
        </div>

        <div className="flex gap-2">
          <AppButton
            type="button"
            variant="outline"
            size="icon"
            onClick={() => onEdit(record)}
          >
            <Edit size={16} />
          </AppButton>

          <AppButton
            type="button"
            variant="destructive"
            size="icon"
            onClick={() => onDelete(record)}
          >
            <Trash2 size={16} />
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};