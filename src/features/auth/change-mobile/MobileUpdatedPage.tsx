import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const MobileUpdatedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <CheckCircle2
          size={70}
          className="mx-auto text-success"
        />

        <h1 className="mt-5 text-2xl font-black">
          Mobile Updated
        </h1>

        <p className="mt-2 text-muted-foreground">
          Your registered mobile number has been updated successfully.
        </p>

        <AppButton
          className="mt-6 w-full"
          onClick={() => navigate("/dashboard/profile")}
        >
          Back to Profile
        </AppButton>
      </AppCard>
    </div>
  );
};