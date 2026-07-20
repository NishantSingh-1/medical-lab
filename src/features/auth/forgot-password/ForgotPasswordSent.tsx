import { MailCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const ForgotPasswordSent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email =
    (location.state as { email?: string } | null)?.email ??
    "your registered email";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <MailCheck size={64} className="mx-auto text-success" />

        <h1 className="mt-5 text-2xl font-black text-foreground">
          Reset Link Sent
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          We sent a password reset link to
        </p>

        <p className="mt-1 font-bold text-foreground">{email}</p>

        <AppButton
          className="mt-6 w-full"
          onClick={() => navigate("/reset-password")}
        >
          Open Reset Password
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