import { AlertCircle } from "lucide-react";

type AuthAlertProps = {
  message: string;
};

export const AuthAlert = ({ message }: AuthAlertProps) => {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-danger bg-danger-light p-3 text-sm font-medium text-danger">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      <p>{message}</p>
    </div>
  );
};