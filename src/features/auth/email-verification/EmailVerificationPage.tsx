import { MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const EmailVerificationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
          <MailCheck size={30} />
        </div>

        <h1 className="mt-5 text-2xl font-black text-foreground">
          Verify Your Email
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We have sent a verification link to your registered email address.
          Open your inbox and click the link to verify your MedLab account.
        </p>

        <div className="mt-7 space-y-3">
          <AppButton
            type="button"
            className="w-full"
            onClick={() => alert("Verification email resent successfully.")}
          >
            Resend Verification Email
          </AppButton>

          <AppButton
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => navigate("/signin")}
          >
            Back to Sign In
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};