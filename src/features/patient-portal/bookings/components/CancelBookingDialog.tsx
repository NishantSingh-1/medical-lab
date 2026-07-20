import { useState } from "react";
import { AlertTriangle } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppSelect } from "@/components/common/AppSelect";
import { AppTextarea } from "@/components/common/AppTextarea";

import {
  cancellationReasons,
} from "../types/cancelBooking.types";

type Props = {
  onClose: () => void;
  onConfirm: (
    reason: string,
    note: string
  ) => void;
};

export const CancelBookingDialog = ({
  onClose,
  onConfirm,
}: Props) => {
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <AppCard className="w-full max-w-lg">

        <div className="flex items-center gap-3">

          <AlertTriangle className="text-danger" />

          <h2 className="text-xl font-black">
            Cancel Booking
          </h2>

        </div>

        <p className="mt-3 text-muted-foreground">
          Are you sure you want to cancel this booking?
        </p>

        <div className="mt-6">

          <AppSelect
            placeholder="Select cancellation reason"
            value={reason}
            onValueChange={setReason}
            options={cancellationReasons.map((item) => ({
              label: item,
              value: item,
            }))}
          />

        </div>

        <AppTextarea
          className="mt-4"
          placeholder="Additional note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className="mt-6 flex justify-end gap-3">

          <AppButton
            variant="outline"
            onClick={onClose}
          >
            Close
          </AppButton>

          <AppButton
            disabled={!reason}
            onClick={() =>
              onConfirm(reason, note)
            }
          >
            Confirm Cancel
          </AppButton>

        </div>

      </AppCard>

    </div>
  );
};