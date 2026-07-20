import {
  Banknote,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppBadge } from "@/components/common/AppBadge";

import { usePaymentStore } from "../store/usePaymentStore";

export const CashOnCollection = () => {
  const setStep = usePaymentStore((state) => state.setStep);

  const setBooking = usePaymentStore((state) => state.setBooking);

  const handleConfirm = () => {
    setBooking({
      bookingId: `BK-${Date.now()}`,
      transactionId: "",
      amount: 1599,
      paymentMethod: "CASH_ON_COLLECTION",
      patientName: "Nishant Singh",
      slot: "26 Jul • 09:00 AM",
      address: "HSR Layout, Bangalore",
    });

    setStep("BOOKING_CONFIRMATION");
  };

  return (
    <div className="space-y-6">

      <div>

        <h2 className="text-2xl font-black text-foreground">
          Cash On Collection
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Pay when our phlebotomist visits your location.
        </p>

      </div>

      <AppCard>

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light">
            <Banknote className="text-primary" />
          </div>

          <div>

            <h3 className="font-bold">
              Cash / Card On Collection
            </h3>

            <p className="text-sm text-muted-foreground">
              Pay after sample collection.
            </p>

          </div>

        </div>

        <div className="mt-6 space-y-3">

          <AppBadge variant="success">
            No Advance Payment Required
          </AppBadge>

          <ul className="space-y-2 text-sm text-muted-foreground">

            <li>✔ Certified Phlebotomist</li>

            <li>✔ Cash / Card Accepted</li>

            <li>✔ Digital Receipt</li>

            <li>✔ Secure Payment</li>

          </ul>

        </div>

      </AppCard>

      <div className="flex justify-between">

        <AppButton
          variant="outline"
          onClick={() => setStep("METHOD")}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton
          onClick={handleConfirm}
        >
          <CheckCircle2 size={18} />
          Confirm Booking
        </AppButton>

      </div>

    </div>
  );
};