import {
  Banknote,
  CreditCard,
  Smartphone,
  Landmark,
  ArrowRight,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppBadge } from "@/components/common/AppBadge";
import {
  usePaymentStore,
  type PaymentMethod,
} from "../store/usePaymentStore";

type PaymentMethodOption = {
  id: PaymentMethod;
  title: string;
  description: string;
};

type PaymentMethodStepProps = {
  compact?: boolean;
  showContinueButton?: boolean;
};

const paymentMethods: PaymentMethodOption[] = [
  {
    id: "UPI",
    title: "UPI",
    description: "Pay using PhonePe, Google Pay, Paytm or any UPI app.",
  },
  {
    id: "CARD",
    title: "Credit / Debit Card",
    description: "Pay securely using Visa, Mastercard or RuPay.",
  },
  {
    id: "NET_BANKING",
    title: "Net Banking",
    description: "Pay directly from your bank account.",
  },
  {
    id: "CASH_ON_COLLECTION",
    title: "Cash on Collection",
    description: "Pay when our phlebotomist collects your sample.",
  },
];

const methodIcons: Record<
  PaymentMethodOption["id"],
  typeof Smartphone
> = {
  UPI: Smartphone,
  CARD: CreditCard,
  NET_BANKING: Landmark,
  CASH_ON_COLLECTION: Banknote,
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

  const handleContinue = () => {
    if (!selectedMethod) return;

    if (selectedMethod === "CASH_ON_COLLECTION") {
      setStep("CASH_CONFIRM");
      return;
    }

    setStep("PROCESSING");
  };

  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
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
          const Icon = methodIcons[method.id];
          const isSelected =
            selectedMethod === method.id;

          return (
            <AppCard
              key={method.id}
              onClick={() =>
                setSelectedMethod(method.id)
              }
              className={`cursor-pointer transition-all ${
                compact ? "p-3" : ""
              } ${
                isSelected
                  ? "border-primary ring-2 ring-primary-light"
                  : "hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary ${
                    compact
                      ? "h-10 w-10"
                      : "h-12 w-12"
                  }`}
                >
                  <Icon
                    size={compact ? 18 : 22}
                  />
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground">
                      {method.title}
                    </h3>

                    {method.id ===
                      "CASH_ON_COLLECTION" && (
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
            disabled={!selectedMethod}
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