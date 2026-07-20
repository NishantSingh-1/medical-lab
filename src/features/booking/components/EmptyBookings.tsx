import { CalendarX2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const EmptyBookings = () => {
  const navigate = useNavigate();

  return (
    <AppCard className="flex flex-col items-center justify-center py-16 text-center shadow-none">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-primary">
        <CalendarX2 size={42} />
      </div>

      <h2 className="mt-6 text-2xl font-black text-foreground">
        No Bookings Yet
      </h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        You haven't booked any lab tests yet.
        Start by searching and booking your first test.
      </p>

      <AppButton
        className="mt-8"
        onClick={() => navigate("/dashboard/tests")}
      >
        Book New Test
      </AppButton>
    </AppCard>
  );
};