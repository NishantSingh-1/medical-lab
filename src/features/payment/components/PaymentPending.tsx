import { Clock, RefreshCw } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { usePaymentStore } from "../store/usePaymentStore";

export const PaymentPending = () => {
  const setStep = usePaymentStore((state) => state.setStep);
  const setStatus = usePaymentStore((state) => state.setStatus);
  const setTransactionId = usePaymentStore((state) => state.setTransactionId);

  const handleCheckStatus = () => {
    setTransactionId(`TXN-${Date.now()}`);
    setStatus("SUCCESS");
    setStep("SUCCESS");
  };

  return (
    <div className="text-center">
      <AppCard className="mx-auto max-w-md p-8">
        <Clock className="mx-auto h-12 w-12 text-warning" />

        <h2 className="mt-5 text-2xl font-black text-foreground">
          Payment Pending
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          We are waiting for bank confirmation. You can check status again.
        </p>

        <AppButton onClick={handleCheckStatus} className="mt-6 w-full">
          <RefreshCw size={18} />
          Check Status
        </AppButton>
      </AppCard>
    </div>
  );
};