import { Clock } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";

import type { AvailableSlot } from "../types/reschedule.types";

type SlotSelectorProps = {
  slots: AvailableSlot[];
  selectedSlot: string;
  onSelect: (id: string) => void;
};

export const SlotSelector = ({
  slots,
  selectedSlot,
  onSelect,
}: SlotSelectorProps) => {
  if (slots.length === 0) {
    return (
      <AppCard className="p-6 text-center">
        <p className="text-sm text-muted-foreground">
          No slots available for selected date.
        </p>
      </AppCard>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {slots.map((slot) => (
        <button
          key={slot.id}
          type="button"
          disabled={!slot.available}
          onClick={() => onSelect(slot.id)}
          className={`rounded-xl border p-4 transition-all ${
            selectedSlot === slot.id
              ? "border-primary bg-primary-light"
              : "border-border bg-card"
          } ${
            !slot.available
              ? "cursor-not-allowed opacity-50"
              : "hover:border-primary"
          }`}
        >
          <Clock className="mx-auto mb-2 text-primary" size={18} />

          <p className="font-semibold">{slot.time}</p>

          <p className="mt-1 text-xs text-muted-foreground">
            {slot.available ? "Available" : "Booked"}
          </p>
        </button>
      ))}
    </div>
  );
};