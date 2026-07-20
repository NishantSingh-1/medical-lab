import {
  type FormEvent,
  useState,
} from "react";
import {
  ArrowLeft,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";

import { useOtpTimer } from "../hooks/useOtpTimer";
import { useAuthStore } from "../store/useAuthStore";

const getDigitsOnly = (value: string) =>
  value.replace(/\D/g, "").slice(0, 6);

export const OtpVerificationForm = () => {
  const [otp, setOtp] = useState("");

  const identifier = useAuthStore(
    (state) => state.identifier
  );

  const isLocked = useAuthStore(
    (state) => state.isLocked
  );

  const setStep = useAuthStore(
    (state) => state.setStep
  );

  const setError = useAuthStore(
    (state) => state.setError
  );

  const setLoading = useAuthStore(
    (state) => state.setLoading
  );

  const incrementOtpAttempts = useAuthStore(
    (state) => state.incrementOtpAttempts
  );

  const resetOtpAttempts = useAuthStore(
    (state) => state.resetOtpAttempts
  );

  const {
    timeLeft,
    isExpired,
    resetTimer,
  } = useOtpTimer(30);

  const handleVerify = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isLocked) {
      return;
    }

    if (isExpired) {
      setError(
        "OTP has expired. Please request a new OTP."
      );
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    // Demo OTP
    if (otp !== "123456") {
      incrementOtpAttempts();
      return;
    }

    setError(null);
    setLoading(true);

    window.setTimeout(() => {
      resetOtpAttempts();
      setLoading(false);
      setStep("ROLE_SELECTION");
    }, 700);
  };

  const handleResendOtp = () => {
    setOtp("");
    setError(null);
    resetOtpAttempts();
    resetTimer();
  };

  return (
    <form
      onSubmit={handleVerify}
      className="space-y-5"
    >
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
        OTP sent to{" "}
        <span className="font-black">
          +91 {identifier}
        </span>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-foreground">
          Enter OTP
        </label>

        <AppInput
          name="otp"
          type="tel"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={otp}
          maxLength={6}
          disabled={isLocked}
          placeholder="Enter 6-digit OTP"
          onChange={(event) => {
            setOtp(
              getDigitsOnly(event.target.value)
            );

            setError(null);
          }}
          className="h-14 text-center text-xl font-black tracking-[0.45em] placeholder:text-sm placeholder:font-normal placeholder:tracking-normal"
        />
      </div>

      <AppButton
        type="submit"
        disabled={
          isLocked ||
          otp.length !== 6 ||
          isExpired
        }
        className="w-full"
      >
        <ShieldCheck size={18} />
        Verify & Continue
      </AppButton>

      <div className="text-center text-sm">
        {timeLeft > 0 ? (
          <p className="text-muted-foreground">
            Resend OTP in{" "}
            <span className="font-bold text-foreground">
              00:
              {String(timeLeft).padStart(2, "0")}
            </span>
          </p>
        ) : (
          <AppButton
            type="button"
            variant="ghost"
            disabled={isLocked}
            onClick={handleResendOtp}
            className="mx-auto text-primary hover:bg-transparent"
          >
            <RotateCcw size={16} />
            Resend OTP
          </AppButton>
        )}
      </div>

      <button
        type="button"
        onClick={() => {
          setError(null);
          resetOtpAttempts();
          setStep("OTP_REQUEST");
        }}
        className="flex w-full items-center justify-center gap-2 text-sm font-bold text-primary hover:underline"
      >
        <ArrowLeft size={16} />
        Change Mobile Number
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Demo OTP:{" "}
        <span className="font-bold text-foreground">
          123456
        </span>
      </p>
    </form>
  );
};