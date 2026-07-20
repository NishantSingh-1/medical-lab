import { CalendarDays } from "lucide-react";

import { AppInput } from "@/components/common/AppInput";

type DateSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const DateSelector = ({
  value,
  onChange,
}: DateSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <CalendarDays size={16} />
        Select Date
      </label>

      <AppInput
        type="date"
        value={value}
        min={new Date().toISOString().split("T")[0]}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};