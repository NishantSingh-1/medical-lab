import { CalendarCheck2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type Props = {
  date: string;
  time: string;
  onClose: () => void;
};

export const RescheduleSuccessDialog = ({
  date,
  time,
  onClose,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <AppCard className="w-full max-w-lg text-center">

        <CalendarCheck2
          className="mx-auto text-success"
          size={70}
        />

        <h2 className="mt-5 text-2xl font-black text-foreground">
          Booking Rescheduled
        </h2>

        <p className="mt-3 text-muted-foreground">
          Your booking has been successfully rescheduled.
        </p>

        <div className="mt-6 rounded-xl bg-success-light p-5">

          <p className="text-sm text-muted-foreground">
            New Appointment
          </p>

          <h3 className="mt-2 text-xl font-black text-success">
            {date}
          </h3>

          <p className="font-semibold">
            {time}
          </p>

        </div>

        <div className="mt-8 flex gap-3">

          <AppButton
            variant="outline"
            className="flex-1"
            onClick={onClose}
          >
            Close
          </AppButton>

          <AppButton
            className="flex-1"
            onClick={() => navigate("/booking-details")}
          >
            View Booking
          </AppButton>

        </div>

      </AppCard>
    </div>
  );
};