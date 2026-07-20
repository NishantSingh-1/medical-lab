import { useEffect } from "react";
import {
  ArrowLeft,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useCart } from "@/components/context/CartContext";

import { useBookingStore } from "../store/useBookingStore";

import { AddressSelectionStep } from "./AddressSelectionStep";
import { BookingReviewStep } from "./BookingReviewStep";
import { CollectionTypeStep } from "./CollectionTypeStep";
import { PatientSelectionStep } from "./PatientSelectionStep";
import { PrescriptionUploadStep } from "./PrescriptionUploadStep";
import { SlotSelectionStep } from "./SlotSelectionStep";

const stepLabels = {
  PATIENT: "Patient",
  COLLECTION: "Collection",
  ADDRESS: "Address",
  SLOT: "Slot",
  PRESCRIPTION: "Prescription",
  REVIEW: "Review",
} as const;

export const BookingFlow = () => {
  const navigate = useNavigate();

  const { cartItems } = useCart();

  const step = useBookingStore((state) => state.step);
  const error = useBookingStore((state) => state.error);
  const setStep = useBookingStore((state) => state.setStep);

  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + Number(item.price),
    0
  );

  /*
   * Old booking store may still contain SEARCH or CART.
   * Checkout now starts from PATIENT because test browsing and cart
   * are handled on the public website.
   */
  useEffect(() => {
    if (step === "SEARCH" || step === "CART") {
      setStep("PATIENT");
    }
  }, [step, setStep]);

  /*
   * User should not open checkout without selecting tests.
   */
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [cartItems.length, navigate]);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Checkout Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </button>

          <div className="text-center">
            <p className="text-xl font-black text-primary">
              MedLab
            </p>

            <p className="hidden text-xs text-muted-foreground sm:block">
              Secure Test Booking
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <ShieldCheck size={17} className="text-primary" />
            <span className="hidden sm:inline">
              Secure Checkout
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div>
          <p className="text-sm font-bold text-primary">
            Test Booking
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-foreground">
            Complete Your Booking
          </h1>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Select the patient, collection method, address and
            appointment slot.
          </p>
        </div>

        {/* Selected Tests Summary */}
        <AppCard className="p-5 shadow-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <ClipboardList size={21} />
              </div>

              <div>
                <p className="font-black text-foreground">
                  Selected Tests
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {cartItems.length} item
                  {cartItems.length > 1 ? "s" : ""} selected
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="text-lg font-black text-foreground">
                ₹{subtotal}
              </p>

              <AppButton
                type="button"
                variant="outline"
                onClick={() => navigate("/cart")}
              >
                Edit Cart
              </AppButton>
            </div>
          </div>

          <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item: any, index: number) => (
              <div
                key={`${item.title}-${index}`}
                className="rounded-xl border border-border bg-background p-4"
              >
                <p className="font-bold text-foreground">
                  {item.title}
                </p>

                <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">
                    {item.reportTime}
                  </span>

                  <span className="font-black text-primary">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AppCard>

        {/* Checkout Progress */}
        <AppCard className="p-5 shadow-none">
          <div>
            <h2 className="font-black text-foreground">
              Booking Progress
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Complete the following steps to confirm your booking.
            </p>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {Object.entries(stepLabels).map(
              ([key, label], index) => {
                const isActive = step === key;

                return (
                  <div
                    key={key}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition ${
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
              }
            )}
          </div>
        </AppCard>

        {error && (
          <div className="rounded-xl border border-danger bg-danger-light p-4 text-sm font-semibold text-danger">
            {error}
          </div>
        )}

        {/* Current Checkout Step */}
        <AppCard className="p-5 shadow-none md:p-6">
          {step === "PATIENT" && <PatientSelectionStep />}

          {step === "COLLECTION" && (
            <CollectionTypeStep />
          )}

          {step === "ADDRESS" && <AddressSelectionStep />}

          {step === "SLOT" && <SlotSelectionStep />}

          {step === "PRESCRIPTION" && (
            <PrescriptionUploadStep />
          )}

          {step === "REVIEW" && <BookingReviewStep />}
        </AppCard>

        <div className="flex items-center justify-center gap-2 pb-4 text-xs font-semibold text-muted-foreground">
          <ShieldCheck size={15} className="text-primary" />
          Your booking and personal details are securely protected.
        </div>
      </main>
    </div>
  );
};