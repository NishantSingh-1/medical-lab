import { Link2Off } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const ResetPasswordInvalid = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <Link2Off size={64} className="mx-auto text-danger" />

        <h1 className="mt-5 text-2xl font-black text-foreground">
          Reset Link Expired
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          This password reset link is invalid or has expired.
        </p>

        <AppButton
          className="mt-6 w-full"
          onClick={() => navigate("/forgot-password")}
        >
          Request New Link
        </AppButton>

        <AppButton
          variant="ghost"
          className="mt-3 w-full"
          onClick={() => navigate("/signin")}
        >
          Back to Sign In
        </AppButton>
      </AppCard>
    </div>
  );
};