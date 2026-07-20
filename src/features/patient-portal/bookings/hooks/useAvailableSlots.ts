import { useMemo } from "react";

import {
  demoSlots,
} from "../types/reschedule.types";

export const useAvailableSlots = (
  selectedDate: string
) => {
  return useMemo(() => {
    return demoSlots.filter(
      (slot) => slot.date === selectedDate
    );
  }, [selectedDate]);
};