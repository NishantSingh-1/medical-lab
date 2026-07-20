import { Search } from "lucide-react";
import { AppInput } from "@/components/common/AppInput";

type PatientSearchBarProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export const PatientSearchBar = ({
  value,
  placeholder = "Search...",
  onChange,
}: PatientSearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      <AppInput
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-12
          pl-11
          rounded-2xl
          border
          border-border
          bg-background
          transition-all
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
        "
      />
    </div>
  );
};