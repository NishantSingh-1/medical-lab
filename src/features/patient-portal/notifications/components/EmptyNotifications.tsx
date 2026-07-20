import { Bell } from "lucide-react";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";

export const EmptyNotifications = () => {
  return (
    <PatientEmptyState
      icon={<Bell size={36} />}
      title="No Notifications Yet"
      description="We'll notify you about bookings, reports and offers."
      buttonText="Book Test"
      onButtonClick={() => {
        window.location.href = "/dashboard/tests";
      }}
    />
  );
};