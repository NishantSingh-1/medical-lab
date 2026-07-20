import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

export const VerifyMobileOtpPage = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

    navigate("/change-mobile/success");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6">
        <ShieldCheck className="text-primary" size={40} />

        <h1 className="mt-4 text-2xl font-black">
          Verify OTP
        </h1>

        <p className="mt-2 text-muted-foreground">
          Enter the 6-digit OTP sent to your mobile.
        </p>

        <AppInput
          className="mt-6"
          maxLength={6}
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, ""))
          }
        />

        <AppButton
          className="mt-5 w-full"
          onClick={handleVerify}
        >
          Verify OTP
        </AppButton>
      </AppCard>
    </div>
  );
};