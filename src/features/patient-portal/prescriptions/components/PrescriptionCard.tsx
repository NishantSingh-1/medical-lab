import {
  CalendarDays,
  Download,
  FileText,
  Trash2,
} from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { PrescriptionItem } from "../types/prescription.types";

type Props = {
  prescription: PrescriptionItem;
  onDelete: (id: string) => void;
};

export const PrescriptionCard = ({
  prescription,
  onDelete,
}: Props) => {
  return (
    <AppCard className="p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-primary" />

            <h3 className="text-lg font-black">
              {prescription.fileName}
            </h3>

            <AppBadge
              variant={
                prescription.status === "ACTIVE"
                  ? "success"
                  : "danger"
              }
            >
              {prescription.status}
            </AppBadge>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {prescription.doctorName}
          </p>

          <p className="text-sm text-muted-foreground">
            {prescription.hospitalName}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays size={16} />
            {prescription.prescribedDate}
          </div>
        </div>

        <div className="flex gap-3">
          <AppButton
            variant="outline"
            onClick={() => alert("Download API")}
          >
            <Download size={18} />
            Download
          </AppButton>

          <AppButton
            variant="destructive"
            onClick={() =>
              onDelete(prescription.id)
            }
          >
            <Trash2 size={18} />
            Delete
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};