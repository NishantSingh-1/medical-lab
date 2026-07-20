import { CheckCircle2, Download, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { usePaymentStore } from "../store/usePaymentStore";

export const PaymentSuccess = () => {
  const navigate = useNavigate();

  const transactionId = usePaymentStore(
    (state) => state.transactionId
  );

  const setStep = usePaymentStore((state) => state.setStep);

  const handleContinue = () => {
    setStep("BOOKING_CONFIRMATION");
  };

  return (
    <div className="text-center">
      <AppCard className="mx-auto max-w-lg p-8">

        <CheckCircle2
          className="mx-auto text-success"
          size={70}
        />

        <h2 className="mt-5 text-3xl font-black text-foreground">
          Payment Successful
        </h2>

        <p className="mt-3 text-muted-foreground">
          Your payment has been completed successfully.
        </p>

        <div className="mt-6 rounded-xl bg-success-light p-4">

          <p className="text-sm text-muted-foreground">
            Transaction ID
          </p>

          <h3 className="mt-1 font-black text-success">
            {transactionId}
          </h3>

        </div>

        <div className="mt-8 flex flex-col gap-3">

          <AppButton onClick={handleContinue}>
            Continue
          </AppButton>

          <AppButton
            variant="outline"
            onClick={() => alert("Invoice download API")}
          >
            <Download size={18} />
            Download Receipt
          </AppButton>

          <AppButton
            variant="ghost"
            onClick={() => navigate("/")}
          >
            <Home size={18} />
            Back Home
          </AppButton>

        </div>

      </AppCard>
    </div>
  );
};