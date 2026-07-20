import {
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useCart } from "@/components/context/CartContext";
import { useBookingStore } from "../store/useBookingStore";

export const BookingReviewStep = () => {
  const { cartItems } = useCart();

  const {
    selectedPatient,
    selectedAddress,
    selectedSlot,
    collectionType,
    prescriptionFile,
    setStep,
    resetBooking,
  } = useBookingStore();

  const subtotal = cartItems.reduce(
    (sum: number, item: any) =>
      sum + Number(item.price),
    0
  );

  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const handleConfirm = () => {
    alert("Booking Confirmed Successfully 🎉");
    resetBooking();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black">
          Review Booking
        </h2>

        <p className="mt-1 text-muted-foreground">
          Verify all booking details.
        </p>
      </div>

      <AppCard>
        <h3 className="font-bold">
          Selected Tests
        </h3>

        {cartItems.map((item: any, index: number) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-between border-b border-border py-3 last:border-b-0"
          >
            <span>{item.title}</span>

            <span className="font-bold">
              ₹{item.price}
            </span>
          </div>
        ))}
      </AppCard>

      <AppCard>
        <h3 className="mb-3 font-bold">
          Patient
        </h3>

        <p>{selectedPatient?.name}</p>
        <p>{selectedPatient?.relation}</p>
      </AppCard>

      <AppCard>
        <h3 className="mb-3 font-bold">
          Collection
        </h3>

        <p>{collectionType}</p>

        <p className="mt-2">
          {selectedAddress?.address}
        </p>

        <p>{selectedAddress?.city}</p>
      </AppCard>

      <AppCard>
        <h3 className="mb-3 font-bold">
          Slot
        </h3>

        <p>{selectedSlot?.date}</p>
        <p>{selectedSlot?.time}</p>
      </AppCard>

      {prescriptionFile && (
        <AppCard>
          <h3 className="font-bold">
            Prescription
          </h3>

          <p className="mt-2">
            {prescriptionFile.name}
          </p>
        </AppCard>
      )}

      <AppCard>
        <div className="space-y-3">
          <SummaryRow
            label="Subtotal"
            value={`₹${subtotal}`}
          />

          <SummaryRow
            label="GST (5%)"
            value={`₹${gst}`}
          />

          <div className="border-t border-border pt-3">
            <SummaryRow
              label="Total Amount"
              value={`₹${total}`}
              emphasized
            />
          </div>
        </div>
      </AppCard>

      <div className="flex justify-between">
        <AppButton
          variant="outline"
          onClick={() => setStep("PRESCRIPTION")}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton onClick={handleConfirm}>
          <CheckCircle2 size={18} />
          Confirm Booking
        </AppButton>
      </div>
    </div>
  );
};

type SummaryRowProps = {
  label: string;
  value: string;
  emphasized?: boolean;
};

const SummaryRow = ({
  label,
  value,
  emphasized = false,
}: SummaryRowProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={
          emphasized
            ? "font-black text-foreground"
            : "font-semibold text-muted-foreground"
        }
      >
        {label}
      </span>

      <span
        className={
          emphasized
            ? "text-2xl font-black text-primary"
            : "font-bold text-foreground"
        }
      >
        {value}
      </span>
    </div>
  );
};