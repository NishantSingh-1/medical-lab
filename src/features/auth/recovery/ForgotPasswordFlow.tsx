import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

type RecoveryStep = "REQUEST" | "LINK_SENT";

export const ForgotPasswordFlow = () => {
  const [step, setStep] = useState<RecoveryStep>("REQUEST");
  const [email, setEmail] = useState("");

  const handleRequestLink = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) return;

    setStep("LINK_SENT");
  };

  if (step === "LINK_SENT") {
    return (
      <AppCard className="mx-auto w-full max-w-md p-6 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />

        <h2 className="mt-4 text-2xl font-black text-foreground">
          Check your email
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          We have sent a password reset link to{" "}
          <span className="font-bold text-foreground">{email}</span>
        </p>

        <AppButton
          type="button"
          variant="ghost"
          onClick={() => setStep("REQUEST")}
          className="mt-5 text-primary hover:bg-transparent"
        >
          Try another email
        </AppButton>
      </AppCard>
    );
  }

  return (
    <AppCard className="mx-auto w-full max-w-md p-6">
      <Mail className="h-10 w-10 text-primary" />

      <h2 className="mt-4 text-2xl font-black text-foreground">
        Forgot Password
      </h2>

      <p className="mt-1 text-sm text-muted-foreground">
        Enter your email and we will send you a reset link.
      </p>

      <form onSubmit={handleRequestLink} className="mt-6 space-y-4">
        <AppInput
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <AppButton type="submit" className="w-full">
          Send Reset Link
        </AppButton>
      </form>
    </AppCard>
  );
};