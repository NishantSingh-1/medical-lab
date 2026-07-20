import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";
import { AppCard } from "@/components/common/AppCard";

export const VerifyTwoFactorPage = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    alert("2FA Enabled Successfully");

    navigate("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5">
      <AppCard className="w-full max-w-md p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
          <ShieldCheck size={32} />
        </div>

        <h1 className="mt-5 text-center text-2xl font-black">
          Verify OTP
        </h1>

        <p className="mt-2 text-center text-muted-foreground">
          Enter the 6-digit verification code.
        </p>

        <AppInput
          className="mt-6 text-center text-xl tracking-[10px]"
          maxLength={6}
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, ""))
          }
        />

        <AppButton
          className="mt-6 w-full"
          onClick={handleVerify}
        >
          Verify
        </AppButton>
      </AppCard>
    </div>
  );
};