import { useEffect } from "react";
import { Loader2, ShieldCheck } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";
import { usePaymentStore } from "../store/usePaymentStore";

export const PaymentProcessing = () => {
  const selectedMethod = usePaymentStore((state) => state.selectedMethod);
  const setStep = usePaymentStore((state) => state.setStep);
  const setStatus = usePaymentStore((state) => state.setStatus);
  const setTransactionId = usePaymentStore((state) => state.setTransactionId);

  useEffect(() => {
    setStatus("PROCESSING");

    const timer = window.setTimeout(() => {
      const randomStatus = Math.random();

      if (randomStatus < 0.7) {
        setTransactionId(`TXN-${Date.now()}`);
        setStatus("SUCCESS");
        setStep("SUCCESS");
        return;
      }

      if (randomStatus < 0.85) {
        setStatus("PENDING");
        setStep("PENDING");
        return;
      }

      setStatus("FAILED");
      setStep("FAILED");
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [setStatus, setStep, setTransactionId]);

  return (
    <div className="text-center">
      <AppCard className="mx-auto max-w-md p-8">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />

        <h2 className="mt-5 text-2xl font-black text-foreground">
          Processing Payment
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Please do not close or refresh this page.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary-light p-3 text-sm font-bold text-primary">
          <ShieldCheck size={18} />
          Secure {selectedMethod} payment
        </div>
      </AppCard>
    </div>
  );
};