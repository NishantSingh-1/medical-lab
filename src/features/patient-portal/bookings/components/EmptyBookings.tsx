import { CalendarX2 } from "lucide-react";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";

type EmptyBookingsProps = {
  onBookNow: () => void;
};

export const EmptyBookings = ({ onBookNow }: EmptyBookingsProps) => {
  return (
    <PatientEmptyState
      icon={<CalendarX2 size={36} />}
      title="No Bookings Yet"
      description="You have not booked any lab tests yet."
      buttonText="Book New Test"
      onButtonClick={onBookNow}
    />
  );
};