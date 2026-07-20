import { CalendarX } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const BookingEmptyState = () => {
  const navigate = useNavigate();

  return (
    <AppCard className="py-14 text-center">

      <CalendarX
        className="mx-auto h-20 w-20 text-muted-foreground"
      />

      <h2 className="mt-6 text-2xl font-black text-foreground">
        No Bookings Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        You haven't booked any lab tests yet.
        Browse our health packages and schedule your first booking.
      </p>

      <AppButton
        className="mt-8"
        onClick={() => navigate("/tests")}
      >
        Book Your First Test
      </AppButton>

    </AppCard>
  );
};