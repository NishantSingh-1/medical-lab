import { Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const AccountSuspendedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-danger/10 text-danger">
          <Ban size={30} />
        </div>

        <h1 className="mt-5 text-2xl font-black text-foreground">
          Account Suspended
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Your account has been suspended. Contact support to understand the
          reason and request account reactivation.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <AppButton
            onClick={() => navigate("/dashboard/help")}
          >
            Contact Support
          </AppButton>

          <AppButton
            variant="outline"
            onClick={() => navigate("/signin")}
          >
            Back to Sign In
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};