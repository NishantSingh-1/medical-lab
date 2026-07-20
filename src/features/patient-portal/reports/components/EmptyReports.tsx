import { FileX2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const EmptyReports = () => {
  const navigate = useNavigate();

  return (
    <AppCard className="flex flex-col items-center py-16 text-center shadow-none">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-primary">
        <FileX2 size={42} />
      </div>

      <h2 className="mt-6 text-2xl font-black">
        No Reports Available
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Your reports will appear here after your lab tests are completed.
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