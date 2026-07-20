import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    navigate("/reset-password/success");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          <LockKeyhole size={22} />
        </div>

        <h1 className="mt-5 text-2xl font-black text-foreground">
          Set New Password
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Create a strong password for your account.
        </p>

        <div className="mt-6 space-y-4">
          <AppInput
            type="password"
            placeholder="New password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <AppInput
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>

        <AppButton className="mt-5 w-full" onClick={handleReset}>
          Reset Password
        </AppButton>
      </AppCard>
    </div>
  );
};