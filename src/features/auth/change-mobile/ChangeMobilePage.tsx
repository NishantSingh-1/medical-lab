import { useState } from "react";
import { Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

export const ChangeMobilePage = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleContinue = () => {
    if (mobile.length !== 10) {
      alert("Enter a valid mobile number");
      return;
    }

    navigate("/change-mobile/verify", {
      state: { mobile },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <AppCard className="w-full max-w-md p-6">
        <Smartphone className="text-primary" size={40} />

        <h1 className="mt-4 text-2xl font-black">
          Change Mobile Number
        </h1>

        <p className="mt-2 text-muted-foreground">
          Enter your new mobile number.
        </p>

        <AppInput
          className="mt-6"
          placeholder="New Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
        />

        <AppButton
          className="mt-5 w-full"
          onClick={handleContinue}
        >
          Send OTP
        </AppButton>
      </AppCard>
    </div>
  );
};