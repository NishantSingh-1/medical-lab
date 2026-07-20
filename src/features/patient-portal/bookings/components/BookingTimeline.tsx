import { CheckCircle2, Circle } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";

import { useBookingTrackingStore } from "../store/useBookingTrackingStore";

export const BookingTimeline = () => {
  const trackingSteps = useBookingTrackingStore(
    (state) => state.trackingSteps
  );

  return (
    <AppCard>
      <h2 className="text-xl font-black">
        Booking Timeline
      </h2>

      <div className="mt-8 space-y-8">
        {trackingSteps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex gap-4"
          >
            <div className="relative">

              {step.completed ? (
                <CheckCircle2
                  className="text-success"
                  size={26}
                />
              ) : (
                <Circle
                  className="text-muted-foreground"
                  size={26}
                />
              )}

              {index !== trackingSteps.length - 1 && (
                <div className="absolute left-3 top-7 h-10 w-[2px] bg-border" />
              )}
            </div>

            <div>

              <h3 className="font-bold">
                {step.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>

            </div>

          </div>
        ))}
      </div>
    </AppCard>
  );
};