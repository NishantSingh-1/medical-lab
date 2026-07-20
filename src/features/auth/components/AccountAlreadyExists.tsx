import {
  AlertCircle,
  LockKeyhole,
  Smartphone,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useAuthStore } from "../store/useAuthStore";

export const AccountAlreadyExists = () => {
  const identifier = useAuthStore(
    (state) => state.identifier
  );

  const setStep = useAuthStore(
    (state) => state.setStep
  );

  return (
    <div className="space-y-5">
      <AppCard className="border-warning/30 bg-warning/10 p-5 shadow-none">
        <div className="flex items-start gap-3">
          <AlertCircle
            size={22}
            className="mt-0.5 shrink-0 text-warning"
          />

          <div>
            <h3 className="font-black text-foreground">
              Account Already Exists
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              An account is already registered with{" "}
              <span className="font-bold text-foreground">
                {identifier || "this mobile number"}
              </span>
              . Please log in to continue.
            </p>
          </div>
        </div>
      </AppCard>

      <AppButton
        type="button"
        className="w-full"
        onClick={() => setStep("OTP_REQUEST")}
      >
        <Smartphone size={18} />
        Login with OTP
      </AppButton>

      <AppButton
        type="button"
        variant="outline"
        className="w-full"
        onClick={() => setStep("PASSWORD_LOGIN")}
      >
        <LockKeyhole size={18} />
        Login with Password
      </AppButton>
    </div>
  );
};