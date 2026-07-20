import {
  type FormEvent,
  useState,
} from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";

import { useAuthStore } from "../store/useAuthStore";

export const PasswordLoginForm = () => {
  const [identifier, setIdentifierInput] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const setStep = useAuthStore(
    (state) => state.setStep
  );

  const setIdentifier = useAuthStore(
    (state) => state.setIdentifier
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

    if (
      !identifier.trim() ||
      !password.trim()
    ) {
      setError(
        "Please enter your email/mobile and password."
      );
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    setError(null);
    setIdentifier(identifier.trim());
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setStep("ROLE_SELECTION");
    }, 700);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-bold text-foreground">
          Email or Mobile
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <Mail
            size={17}
            className="text-muted-foreground"
          />

          <AppInput
            value={identifier}
            placeholder="Enter email or mobile"
            onChange={(event) => {
              setIdentifierInput(
                event.target.value
              );

              setError(null);
            }}
            className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-foreground">
          Password
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <Lock
            size={17}
            className="text-muted-foreground"
          />

          <AppInput
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            placeholder="Enter password"
            onChange={(event) => {
              setPassword(event.target.value);
              setError(null);
            }}
            className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />

          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() =>
              setShowPassword(
                (current) => !current
              )
            }
            className="text-muted-foreground transition hover:text-primary"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            setStep("OTP_REQUEST")
          }
          className="mt-2 text-sm font-bold text-primary hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <AppButton
        type="submit"
        className="w-full"
      >
        Login
      </AppButton>

      <button
        type="button"
        onClick={() =>
          setStep("OTP_REQUEST")
        }
        className="flex w-full items-center justify-center gap-2 text-sm font-bold text-primary hover:underline"
      >
        <ArrowLeft size={16} />
        Login with OTP instead
      </button>
    </form>
  );
};