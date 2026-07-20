import { useState } from "react";
import { CalendarClock } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { DateSelector } from "./DateSelector";
import { SlotSelector } from "./SlotSelector";
import { useAvailableSlots } from "../hooks/useAvailableSlots";

type RescheduleBookingDialogProps = {
  onClose: () => void;
  onConfirm: (date: string, time: string) => void;
};

export const RescheduleBookingDialog = ({
  onClose,
  onConfirm,
}: RescheduleBookingDialogProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState("");

  const availableSlots = useAvailableSlots(selectedDate);
  const selectedSlot = availableSlots.find((slot) => slot.id === selectedSlotId);

  const handleConfirm = () => {
    if (!selectedDate || !selectedSlot) return;

    onConfirm(selectedDate, selectedSlot.time);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <AppCard className="w-full max-w-2xl">
        <div className="flex items-start gap-3">
          <CalendarClock className="mt-1 text-primary" />

          <div>
            <h2 className="text-xl font-black text-foreground">
              Reschedule Booking
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Select a new date and available slot.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <DateSelector
            value={selectedDate}
            onChange={(value) => {
              setSelectedDate(value);
              setSelectedSlotId("");
            }}
          />

          {selectedDate && (
            <SlotSelector
              slots={availableSlots}
              selectedSlot={selectedSlotId}
              onSelect={setSelectedSlotId}
            />
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <AppButton variant="outline" onClick={onClose}>
            Cancel
          </AppButton>

          <AppButton
            disabled={!selectedDate || !selectedSlot}
            onClick={handleConfirm}
          >
            Confirm Reschedule
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};