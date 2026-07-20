import { AppCard } from "@/components/common/AppCard";

import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientSectionCard } from "@/features/patient-portal/shared/components/PatientSectionCard";

import { usePaymentStore } from "./store/usePaymentStore";

import { BookingConfirmation } from "./components/BookingConfirmation";
import { CashOnCollection } from "./components/CashOnCollection";
import { PaymentFailed } from "./components/PaymentFailed";
import { PaymentMethodStep } from "./components/PaymentMethodStep";
import { PaymentPending } from "./components/PaymentPending";
import { PaymentProcessing } from "./components/PaymentProcessing";
import { PaymentSuccess } from "./components/PaymentSuccess";

const stepLabels = {
  METHOD: "Method",
  PROCESSING: "Processing",
  PENDING: "Pending",
  SUCCESS: "Success",
  FAILED: "Failed",
  CASH_CONFIRM: "Cash Confirm",
  BOOKING_CONFIRMATION: "Confirmation",
} as const;

export const PaymentFlow = () => {
  const step = usePaymentStore((state) => state.step);
  const error = usePaymentStore((state) => state.error);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Patient Payment Flow"
        title="Complete Payment"
        description="Select payment method, process payment and confirm booking."
      />

      <PatientSectionCard
        title="Payment Progress"
        description="Complete payment to confirm your lab test booking."
      >
        <div className="flex flex-wrap gap-2">
          {Object.entries(stepLabels).map(([key, label], index) => {
            const isActive = step === key;

            return (
              <div
                key={key}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  {index + 1}
                </span>

                {label}
              </div>
            );
          })}
        </div>
      </PatientSectionCard>

      {error && (
        <div className="rounded-xl border border-danger bg-danger-light p-4 text-sm font-semibold text-danger">
          {error}
        </div>
      )}

      <AppCard className="p-5 shadow-none md:p-6">
        {step === "METHOD" && <PaymentMethodStep />}
        {step === "PROCESSING" && <PaymentProcessing />}
        {step === "PENDING" && <PaymentPending />}
        {step === "SUCCESS" && <PaymentSuccess />}
        {step === "FAILED" && <PaymentFailed />}
        {step === "CASH_CONFIRM" && <CashOnCollection />}
        {step === "BOOKING_CONFIRMATION" && <BookingConfirmation />}
      </AppCard>
    </PatientPageContainer>
  );
};