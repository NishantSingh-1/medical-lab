import {
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useAuthStore } from "../store/useAuthStore";

export const LoginMethodSelector = () => {
  const setStep = useAuthStore(
    (state) => state.setStep
  );

  return (
    <div className="space-y-4">
      <AppCard className="p-0 shadow-none">
        <button
          type="button"
          onClick={() =>
            setStep("OTP_REQUEST")
          }
          className="flex w-full items-center gap-4 p-4 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
            <Phone size={20} />
          </span>

          <span>
            <span className="block font-bold text-foreground">
              Mobile OTP
            </span>

            <span className="text-sm text-muted-foreground">
              Continue using mobile verification.
            </span>
          </span>
        </button>
      </AppCard>

      <AppCard className="p-0 shadow-none">
        <button
          type="button"
          onClick={() =>
            setStep("PASSWORD_LOGIN")
          }
          className="flex w-full items-center gap-4 p-4 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
            <Mail size={20} />
          </span>

          <span>
            <span className="block font-bold text-foreground">
              Password Login
            </span>

            <span className="text-sm text-muted-foreground">
              Use email/mobile and password.
            </span>
          </span>
        </button>
      </AppCard>

      <AppButton
        type="button"
        variant="outline"
        className="w-full"
        onClick={() =>
          setStep("SOCIAL_CALLBACK")
        }
      >
        <ShieldCheck size={18} />
        Continue with Google
      </AppButton>
    </div>
  );
};