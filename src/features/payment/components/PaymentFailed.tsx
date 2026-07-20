import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { usePaymentStore } from "../store/usePaymentStore";

export const PaymentFailed = () => {
  const setStep = usePaymentStore((state) => state.setStep);
  const setStatus = usePaymentStore((state) => state.setStatus);
  const setError = usePaymentStore((state) => state.setError);

  const handleRetry = () => {
    setError(null);
    setStatus("PROCESSING");
    setStep("PROCESSING");
  };

  const handleChangeMethod = () => {
    setError(null);
    setStatus("IDLE");
    setStep("METHOD");
  };

  return (
    <div className="text-center">
      <AppCard className="mx-auto max-w-lg p-8">
        <AlertTriangle className="mx-auto h-16 w-16 text-danger" />

        <h2 className="mt-5 text-3xl font-black text-foreground">
          Payment Failed
        </h2>

        <p className="mt-3 text-sm text-muted-foreground">
          Your payment could not be completed. Please retry or choose another
          payment method.
        </p>

        <div className="mt-6 rounded-xl border border-danger bg-danger-light p-4 text-sm font-semibold text-danger">
          Bank declined the transaction or payment timed out.
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <AppButton onClick={handleRetry} className="w-full">
            <RefreshCw size={18} />
            Retry Payment
          </AppButton>

          <AppButton
            variant="outline"
            onClick={handleChangeMethod}
            className="w-full"
          >
            <ArrowLeft size={18} />
            Change Method
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};