import { useMemo, useState } from "react";
import { CalendarDays, Clock, X } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

export type SelectedSlot = {
  date: string;
  dateLabel: string;
  time: string;
};

type SlotModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (slot: SelectedSlot) => void;
};

type DateOption = {
  value: string;
  label: string;
  day: string;
};

const timeGroups = [
  {
    label: "Morning",
    slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"],
  },
  {
    label: "Afternoon",
    slots: ["12:00 PM", "12:30 PM", "01:00 PM", "02:00 PM"],
  },
  {
    label: "Evening",
    slots: ["04:00 PM", "05:00 PM", "06:00 PM"],
  },
];

const formatDateValue = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const formatDateLabel = (date: Date) => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

const getDateOptions = (): DateOption[] => {
  const labels = ["Today", "Tomorrow", "Day After Tomorrow"];

  return labels.map((label, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return {
      value: formatDateValue(date),
      label,
      day: formatDateLabel(date),
    };
  });
};

export const SlotModal = ({
  open,
  onClose,
  onConfirm,
}: SlotModalProps) => {
  const dateOptions = useMemo(() => getDateOptions(), []);

  const [selectedDate, setSelectedDate] = useState(
    dateOptions[0]?.value ?? ""
  );
  const [selectedTime, setSelectedTime] = useState("");

  if (!open) {
    return null;
  }

  const handleConfirm = () => {
    const date = dateOptions.find(
      (option) => option.value === selectedDate
    );

    if (!date || !selectedTime) {
      return;
    }

    onConfirm({
      date: date.value,
      dateLabel: `${date.label}, ${date.day}`,
      time: selectedTime,
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="slot-modal-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card shadow-xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-border p-5">
          <div>
            <h2
              id="slot-modal-title"
              className="text-xl font-black text-foreground"
            >
              Select Appointment Slot
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Choose a suitable date and time for sample collection.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close slot modal"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-7 p-5">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <CalendarDays size={18} className="text-primary" />

              <h3 className="font-black text-foreground">
                Select Date
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {dateOptions.map((option) => {
                const isSelected =
                  selectedDate === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedDate(option.value)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      isSelected
                        ? "border-primary bg-primary-light"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <p
                      className={`text-sm font-black ${
                        isSelected
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {option.label}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {option.day}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" />

              <h3 className="font-black text-foreground">
                Select Time
              </h3>
            </div>

            <div className="space-y-6">
              {timeGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-sm font-bold text-muted-foreground">
                    {group.label}
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {group.slots.map((time) => {
                      const isSelected =
                        selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background text-foreground hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
            <AppButton
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </AppButton>

            <AppButton
              type="button"
              disabled={!selectedDate || !selectedTime}
              onClick={handleConfirm}
            >
              Confirm Slot
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};