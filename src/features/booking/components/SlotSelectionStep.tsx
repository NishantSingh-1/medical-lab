import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useBookingStore } from "../store/useBookingStore";
import type { Slot } from "../types/booking.types";
import { NoSlotsAvailable } from "./NoSlotsAvailable";

const dates = ["25 Jul", "26 Jul", "27 Jul", "28 Jul"];

const slotsByDate: Record<string, Slot[]> = {
  "25 Jul": [
    { date: "25 Jul", time: "07:00 AM", available: true },
    { date: "25 Jul", time: "08:00 AM", available: false },
    { date: "25 Jul", time: "09:00 AM", available: true },
    { date: "25 Jul", time: "10:00 AM", available: true },
  ],
  "26 Jul": [],

  "27 Jul": [
    { date: "27 Jul", time: "10:00 AM", available: true },
    { date: "27 Jul", time: "12:00 PM", available: true },
    { date: "27 Jul", time: "02:00 PM", available: false },
    { date: "27 Jul", time: "04:00 PM", available: true },
  ],
  "28 Jul": [],
};

export const SlotSelectionStep = () => {
  const {
    selectedSlot,
    setSelectedSlot,
    setStep,
  } = useBookingStore();

  const [selectedDate, setSelectedDate] = useState(dates[0]);

  const slots = useMemo(
    () => slotsByDate[selectedDate] ?? [],
    [selectedDate]
  );

  const availableSlots = slots.filter(
    (slot) => slot.available
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black">
          Choose Collection Slot
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Select your preferred collection date and time.
        </p>
      </div>

      <div>
        <h3 className="mb-3 font-bold">
          Collection Date
        </h3>

        <div className="flex flex-wrap gap-3">
          {dates.map((date) => (
            <AppButton
              key={date}
              variant={
                selectedDate === date
                  ? "default"
                  : "outline"
              }
              onClick={() => {
                setSelectedDate(date);
                setSelectedSlot(null as unknown as Slot);
              }}
            >
              <CalendarDays size={16} />
              {date}
            </AppButton>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-bold">
          Available Slots
        </h3>

        {availableSlots.length === 0 ? (
          <NoSlotsAvailable
            onChangeDate={() => {
              setSelectedDate(dates[0]);
              setSelectedSlot(null as unknown as Slot);
            }}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {slots.map((slot) => (
              <AppCard
                key={slot.time}
                onClick={() => {
                  if (!slot.available) return;

                  setSelectedSlot(slot);
                }}
                className={`cursor-pointer text-center transition ${!slot.available
                  ? "cursor-not-allowed opacity-50"
                  : selectedSlot?.time === slot.time
                    ? "border-primary ring-2 ring-primary-light"
                    : ""
                  }`}
              >
                <h4 className="font-bold">
                  {slot.time}
                </h4>

                <div className="mt-3">
                  {slot.available ? (
                    <AppBadge variant="success">
                      Available
                    </AppBadge>
                  ) : (
                    <AppBadge variant="danger">
                      Full
                    </AppBadge>
                  )}
                </div>
              </AppCard>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <AppButton
          variant="outline"
          onClick={() => setStep("ADDRESS")}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton
          disabled={!selectedSlot}
          onClick={() => setStep("PRESCRIPTION")}
        >
          Continue
          <ArrowRight size={18} />
        </AppButton>
      </div>
    </div>
  );
};