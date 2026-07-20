import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

export const ForgotPasswordRequest = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter your registered email.");
      return;
    }

    navigate("/forgot-password/sent", {
      state: { email },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          <Mail size={22} />
        </div>

        <h1 className="mt-5 text-2xl font-black text-foreground">
          Forgot Password?
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Enter your registered email and we will send you a reset link.
        </p>

        <AppInput
          type="email"
          value={email}
          placeholder="Registered email"
          onChange={(event) => setEmail(event.target.value)}
          className="mt-6"
        />

        <AppButton className="mt-5 w-full" onClick={handleSubmit}>
          Send Reset Link
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