import { CalendarX2 } from "lucide-react";

import { PatientEmptyState } from "@/features/patient-portal/shared/components/PatientEmptyState";

type NoSlotsAvailableProps = {
  onChangeDate: () => void;
};

export const NoSlotsAvailable = ({
  onChangeDate,
}: NoSlotsAvailableProps) => {
  return (
    <PatientEmptyState
      icon={<CalendarX2 size={36} />}
      title="No Slots Available"
      description="No collection slots are available for the selected date."
      buttonText="Choose Another Date"
      onButtonClick={onChangeDate}
    />
  );
};