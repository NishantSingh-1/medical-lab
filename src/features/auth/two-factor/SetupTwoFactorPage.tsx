import { ShieldCheck, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const SetupTwoFactorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5">
      <AppCard className="w-full max-w-xl p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
          <ShieldCheck size={32} />
        </div>

        <h1 className="mt-6 text-center text-3xl font-black">
          Two-Factor Authentication
        </h1>

        <p className="mt-3 text-center text-muted-foreground">
          Protect your account with an extra security layer.
        </p>

        <div className="mt-8 rounded-xl border border-border p-5">
          <div className="flex items-center gap-3">
            <Smartphone className="text-primary" />

            <div>
              <h3 className="font-bold">
                SMS Verification
              </h3>

              <p className="text-sm text-muted-foreground">
                OTP will be sent to your registered mobile.
              </p>
            </div>
          </div>
        </div>

        <AppButton
          className="mt-8 w-full"
          onClick={() => navigate("/verify-2fa")}
        >
          Enable 2FA
        </AppButton>
      </AppCard>
    </div>
  );
};