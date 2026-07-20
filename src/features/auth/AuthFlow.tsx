import { useEffect } from "react";
import {
  Loader2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import { AppCard } from "@/components/common/AppCard";

import { AccountAlreadyExists } from "./components/AccountAlreadyExists";
import { AuthAlert } from "./components/AuthAlert";
import { OtpRequestForm } from "./components/OtpRequestForm";
import { OtpVerificationForm } from "./components/OtpVerificationForm";
import { PasswordLoginForm } from "./components/PasswordLoginForm";
import { RoleSelection } from "./components/RoleSelection";

import { useAuthStore } from "./store/useAuthStore";

export const AuthFlow = () => {
  const step = useAuthStore((state) => state.step);
  const error = useAuthStore((state) => state.error);
  const isLoading = useAuthStore((state) => state.isLoading);
  const setStep = useAuthStore((state) => state.setStep);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleToken = params.get("token");

    if (googleToken) {
      setStep("ROLE_SELECTION");
    }
  }, [setStep]);

  const getHeading = () => {
    if (step === "OTP_VERIFY") {
      return "Verify OTP";
    }

    if (step === "PASSWORD_LOGIN") {
      return "Login with Password";
    }

    if (step === "ACCOUNT_EXISTS") {
      return "Account Found";
    }

    if (
      step === "ROLE_SELECTION" ||
      step === "SOCIAL_CALLBACK"
    ) {
      return "Choose Your Role";
    }

    return "Login / Register";
  };

  const getDescription = () => {
    if (step === "OTP_VERIFY") {
      return "Enter the verification code sent to your mobile number.";
    }

    if (step === "PASSWORD_LOGIN") {
      return "Enter your registered email or mobile and password.";
    }

    if (step === "ACCOUNT_EXISTS") {
      return "This mobile number is already registered with MedLab.";
    }

    if (
      step === "ROLE_SELECTION" ||
      step === "SOCIAL_CALLBACK"
    ) {
      return "Select the account role you want to continue with.";
    }

    return "Enter your mobile number to continue securely.";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-8 sm:px-6">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <AppCard className="relative w-full max-w-md overflow-hidden border border-border p-0 shadow-xl">
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-card/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />

              <p className="text-sm font-semibold text-muted-foreground">
                Please wait...
              </p>
            </div>
          </div>
        )}

        <div className="border-b border-border bg-primary/5 px-6 py-5 sm:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-sm">
              <span className="text-xl font-black">M</span>
            </div>

            <div>
              <p className="text-xl font-black text-primary">
                MedLab
              </p>

              <p className="text-xs font-semibold text-muted-foreground">
                Diagnostic Services
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-7 text-center">
            <h1 className="text-3xl font-black tracking-tight text-foreground">
              {getHeading()}
            </h1>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {getDescription()}
            </p>
          </div>

          {error && (
            <div className="mb-5">
              <AuthAlert message={error} />
            </div>
          )}

          <div>
            {step === "OTP_REQUEST" && (
              <OtpRequestForm />
            )}

            {step === "OTP_VERIFY" && (
              <OtpVerificationForm />
            )}

            {step === "PASSWORD_LOGIN" && (
              <PasswordLoginForm />
            )}

            {step === "ACCOUNT_EXISTS" && (
              <AccountAlreadyExists />
            )}

            {step === "ROLE_SELECTION" && (
              <RoleSelection />
            )}

            {step === "SOCIAL_CALLBACK" && (
              <RoleSelection />
            )}
          </div>

          <div className="mt-7 space-y-4">
            <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-primary"
              />

              <div>
                <p className="text-sm font-bold text-foreground">
                  Secure authentication
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Your login details are encrypted and securely verified.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-2 text-center text-xs text-muted-foreground">
              <LockKeyhole
                size={14}
                className="mt-0.5 shrink-0"
              />

              <span>
                By continuing, you agree to our{" "}
                <button
                  type="button"
                  className="font-bold text-primary hover:underline"
                >
                  Privacy Policy
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-bold text-primary hover:underline"
                >
                  Terms & Conditions
                </button>
                .
              </span>
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};