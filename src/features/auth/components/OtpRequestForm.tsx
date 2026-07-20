import {
  type FormEvent,
  useState,
} from "react";
import {
  ArrowRight,
  LockKeyhole,
  MessageCircle,
  Phone,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";

import { useAuthStore } from "../store/useAuthStore";

const getDigitsOnly = (value: string) =>
  value.replace(/\D/g, "").slice(0, 10);

export const OtpRequestForm = () => {
  const [mobile, setMobile] = useState("");
  const [whatsAppConsent, setWhatsAppConsent] =
    useState(true);

  const setIdentifier = useAuthStore(
    (state) => state.setIdentifier
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

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (mobile.length !== 10) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }
    if (mobile === "9876543210") {
  setIdentifier(mobile);
  setStep("ACCOUNT_EXISTS");
  return;
}

    setError(null);
    setLoading(true);

    window.setTimeout(() => {
      setIdentifier(mobile);
      setLoading(false);
      setStep("OTP_VERIFY");
    }, 700);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-bold text-foreground">
          Mobile Number
        </label>

        <div className="flex items-center rounded-xl border border-border bg-background transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <div className="flex h-12 items-center gap-2 border-r border-border px-4">
            <Phone
              size={17}
              className="text-primary"
            />

            <span className="text-sm font-bold text-foreground">
              +91
            </span>
          </div>

          <AppInput
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={mobile}
            maxLength={10}
            placeholder="Enter mobile number"
            onChange={(event) => {
              setMobile(
                getDigitsOnly(event.target.value)
              );

              setError(null);
            }}
            className="h-12 flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0"
          />
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          A 6-digit OTP will be sent to this number.
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4">
        <input
          type="checkbox"
          checked={whatsAppConsent}
          onChange={(event) =>
            setWhatsAppConsent(event.target.checked)
          }
          className="mt-0.5 h-5 w-5 shrink-0 accent-primary"
        />

        <div>
          <div className="flex items-center gap-2">
            <MessageCircle
              size={17}
              className="text-primary"
            />

            <p className="text-sm font-bold text-foreground">
              Receive WhatsApp updates
            </p>
          </div>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Receive booking, report and appointment
            updates on WhatsApp.
          </p>
        </div>
      </label>

      <AppButton
        type="submit"
        disabled={mobile.length !== 10}
        className="w-full"
      >
        Continue
        <ArrowRight size={18} />
      </AppButton>

      <button
        type="button"
        onClick={() =>
          setStep("PASSWORD_LOGIN")
        }
        className="flex w-full items-center justify-center gap-2 text-sm font-bold text-primary transition hover:underline"
      >
        <LockKeyhole size={16} />
        Login with Password
      </button>
    </form>
  );
};