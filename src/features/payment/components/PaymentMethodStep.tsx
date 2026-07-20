import {
  ArrowRight,
  CreditCard,
  Landmark,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { usePaymentStore } from "../store/usePaymentStore";
import type { PaymentMethod } from "../types/payment.types";

type PaymentMethodStepProps = {
  compact?: boolean;
  showContinueButton?: boolean;
};

type LocalPaymentMethod = {
  id: PaymentMethod | "COD" | "ONLINE" | "UPI";
  title: string;
  description: string;
};

const paymentMethods: LocalPaymentMethod[] = [
  {
    id: "COD",
    title: "Pay at Home",
    description: "Pay during sample collection",
  },
  {
    id: "ONLINE",
    title: "Online Payment",
    description: "Pay securely online",
  },
  {
    id: "UPI",
    title: "UPI",
    description: "Pay using any UPI app",
  },
];

const methodIcons = {
  COD: Landmark,
  ONLINE: CreditCard,
  UPI: Smartphone,
};

export const PaymentMethodStep = ({
  compact = false,
  showContinueButton = true,
}: PaymentMethodStepProps) => {
  const selectedMethod = usePaymentStore(
    (state) => state.selectedMethod
  );

  const setSelectedMethod = usePaymentStore(
    (state) => state.setSelectedMethod
  );

  const setStep = usePaymentStore(
    (state) => state.setStep
  );

  const selectedMethodId = selectedMethod as LocalPaymentMethod["id"] | null;

  const handleSelectMethod = (
    methodId: LocalPaymentMethod["id"]
  ) => {
    setSelectedMethod(methodId as PaymentMethod);
  };

  const handleContinue = () => {
    if (!selectedMethodId) {
      return;
    }

    if (selectedMethodId === "COD") {
      setStep("CASH_CONFIRM");
      return;
    }

    setStep("PROCESSING");
  };

  return (
    <div
      className={
        compact ? "space-y-4" : "space-y-6"
      }
    >
      <div>
        <h2
          className={
            compact
              ? "text-lg font-black text-foreground"
              : "text-2xl font-black text-foreground"
          }
        >
          Payment Method
        </h2>

        {!compact && (
          <p className="mt-1 text-sm text-muted-foreground">
            Choose how you want to pay for your booking.
          </p>
        )}
      </div>

      <div className="grid gap-3">
        {paymentMethods.map((method) => {
          const Icon = methodIcons[method.id as keyof typeof methodIcons] as unknown as LucideIcon;
          const isSelected =
            selectedMethodId === method.id;

          return (
            <AppCard
              key={String(method.id)}
              onClick={() =>
                handleSelectMethod(method.id)
              }
              className={[
                "cursor-pointer transition-all",
                compact ? "p-3" : "",
                isSelected
                  ? "border-primary ring-2 ring-primary-light"
                  : "hover:border-primary/40",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex items-center gap-3">
                <span
                  className={[
                    "flex shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary",
                    compact
                      ? "h-10 w-10"
                      : "h-12 w-12",
                  ].join(" ")}
                >
                  <Icon
                    size={compact ? 18 : 22}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-foreground">
                      {method.title}
                    </h3>

                    {method.id === "COD" && (
                      <AppBadge variant="warning">
                        Pay Later
                      </AppBadge>
                    )}
                  </div>

                  {!compact && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  )}
                </div>
              </div>
            </AppCard>
          );
        })}
      </div>

      {showContinueButton && (
        <div className="flex justify-end">
          <AppButton
            type="button"
            disabled={!selectedMethodId}
            onClick={handleContinue}
          >
            Continue
            <ArrowRight size={18} />
          </AppButton>
        </div>
      )}
    </div>
  );
};