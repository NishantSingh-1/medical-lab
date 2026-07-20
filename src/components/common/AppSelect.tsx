import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type SelectOption = {
  label: string;
  value: string;
};

type AppSelectProps = {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  className?: string;
};

export function AppSelect({
  label,
  placeholder = "Select",
  options,
  value,
  onValueChange,
  error,
  className,
}: AppSelectProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-semibold text-foreground">
          {label}
        </label>
      )}

      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          className={cn(
            "h-12 rounded-xl border-border bg-background",
            "focus:ring-2 focus:ring-primary",
            error && "border-danger",
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && (
        <p className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}