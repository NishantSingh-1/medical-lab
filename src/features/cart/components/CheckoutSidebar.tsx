import type { ReactNode } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Plus,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { SelectedSlot } from "@/features/cart/components/SlotModal";
import { PaymentMethodStep } from "@/features/payment/components/PaymentMethodStep";
import { usePaymentStore } from "@/features/payment/store/usePaymentStore";

type Address = {
  fullName: string;
  mobile: string;
  houseNumber: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
};

type CheckoutSidebarProps = {
  subtotal: number;
  gst: number;
  total: number;
  isCartEmpty: boolean;
  selectedAddress: Address | null;
  selectedSlot: SelectedSlot | null;
  onAddAddress: () => void;
  onAddSlot: () => void;
  onCheckout: () => void;
};

export const CheckoutSidebar = ({
  subtotal,
  gst,
  total,
  isCartEmpty,
  selectedAddress,
  selectedSlot,
  onAddAddress,
  onAddSlot,
  onCheckout,
}: CheckoutSidebarProps) => {
  // Hook component ke andar hona chahiye.
  const selectedMethod = usePaymentStore(
    (state) => state.selectedMethod
  );

  const isCheckoutDisabled =
    isCartEmpty ||
    !selectedAddress ||
    !selectedSlot ||
    !selectedMethod;

  const checkoutButtonText = getCheckoutButtonText({
    isCartEmpty,
    hasAddress: Boolean(selectedAddress),
    hasSlot: Boolean(selectedSlot),
    hasPaymentMethod: Boolean(selectedMethod),
  });

  return (
    <AppCard className="p-5 shadow-none sm:p-6 lg:sticky lg:top-8">
      {/* Address */}
      <CheckoutSection
        icon={<MapPin size={19} />}
        title="Home Visit Address"
        actionLabel={selectedAddress ? "Change" : "Add"}
        onAction={onAddAddress}
      >
        {selectedAddress ? (
          <AddressDetails address={selectedAddress} />
        ) : (
          <EmptySectionMessage>
            Add an address for home sample collection.
          </EmptySectionMessage>
        )}
      </CheckoutSection>

      {/* Appointment Slot */}
      <div className="mt-4">
        <CheckoutSection
          icon={<CalendarDays size={19} />}
          title="Appointment Slot"
          actionLabel={selectedSlot ? "Change" : "Add"}
          onAction={onAddSlot}
        >
          {selectedSlot ? (
            <SlotDetails slot={selectedSlot} />
          ) : (
            <EmptySectionMessage>
              Select a date and time for sample collection.
            </EmptySectionMessage>
          )}
        </CheckoutSection>
      </div>

      {/* Payment Method */}
      <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-4">
        <PaymentMethodStep
          compact
          showContinueButton={false}
        />
      </div>

      {/* Coupon */}
      <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-foreground">
              Apply Coupon
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Save more on your booking
            </p>
          </div>

          <AppButton
            type="button"
            variant="outline"
            size="sm"
          >
            Apply
          </AppButton>
        </div>
      </div>

      {/* Order Summary Header */}
      <div className="mt-5 flex items-center gap-3 border-b border-border pb-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
          <ReceiptText size={20} />
        </div>

        <div>
          <h2 className="text-lg font-black text-foreground">
            Order Summary
          </h2>

          <p className="text-xs text-muted-foreground">
            Price details
          </p>
        </div>
      </div>

      {/* Price Details */}
      <div className="mt-5 space-y-4 text-sm">
        <SummaryRow
          label="Subtotal"
          value={`₹${subtotal}`}
        />

        <SummaryRow
          label="Discount"
          value="-₹0"
        />

        <SummaryRow
          label="GST (5%)"
          value={`₹${gst}`}
        />

        <SummaryRow
          label="Home Collection"
          value="FREE"
        />

        <div className="border-t border-border pt-4">
          <SummaryRow
            label="Total Amount"
            value={`₹${total}`}
            emphasized
          />
        </div>
      </div>

      {/* Checkout */}
      {isCartEmpty ? (
        <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4 text-center">
          <p className="text-sm font-bold text-foreground">
            No items selected
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Add at least one test to continue.
          </p>
        </div>
      ) : (
        <>
          <AppButton
            type="button"
            className="mt-6 w-full"
            disabled={isCheckoutDisabled}
            onClick={onCheckout}
          >
            {checkoutButtonText}
          </AppButton>

          {isCheckoutDisabled && (
            <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
              {!selectedAddress
                ? "Please add your home visit address first."
                : !selectedSlot
                  ? "Please select your appointment slot."
                  : !selectedMethod
                    ? "Please select a payment method."
                    : ""}
            </p>
          )}
        </>
      )}

      {/* Security */}
      <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
        <ShieldCheck
          size={14}
          className="text-primary"
        />

        Secure and encrypted checkout
      </div>
    </AppCard>
  );
};

type CheckoutSectionProps = {
  icon: ReactNode;
  title: string;
  actionLabel: string;
  onAction: () => void;
  children: ReactNode;
};

const CheckoutSection = ({
  icon,
  title,
  actionLabel,
  onAction,
  children,
}: CheckoutSectionProps) => {
  return (
    <section className="rounded-2xl border border-border bg-muted/30 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            {icon}
          </div>

          <div className="min-w-0">
            <p className="font-black text-foreground">
              {title}
            </p>

            {children}
          </div>
        </div>

        <button
          type="button"
          onClick={onAction}
          className="flex shrink-0 items-center gap-1 text-xs font-black text-primary transition hover:opacity-80"
        >
          <Plus size={15} />
          {actionLabel}
        </button>
      </div>
    </section>
  );
};

type AddressDetailsProps = {
  address: Address;
};

const AddressDetails = ({
  address,
}: AddressDetailsProps) => {
  return (
    <div className="mt-2 text-sm leading-6 text-muted-foreground">
      <p className="font-bold text-foreground">
        {address.fullName}
      </p>

      <p>
        {address.houseNumber}, {address.street}
      </p>

      {address.landmark && (
        <p>{address.landmark}</p>
      )}

      <p>
        {address.city}, {address.state} - {address.pincode}
      </p>

      <p>{address.mobile}</p>
    </div>
  );
};

type SlotDetailsProps = {
  slot: SelectedSlot;
};

const SlotDetails = ({
  slot,
}: SlotDetailsProps) => {
  return (
    <div className="mt-2">
      <p className="text-sm font-bold text-foreground">
        {slot.dateLabel}
      </p>

      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Clock
          size={14}
          className="text-primary"
        />

        {slot.time}
      </p>
    </div>
  );
};

type EmptySectionMessageProps = {
  children: ReactNode;
};

const EmptySectionMessage = ({
  children,
}: EmptySectionMessageProps) => {
  return (
    <p className="mt-1 text-xs leading-5 text-muted-foreground">
      {children}
    </p>
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
            ? "text-xl font-black text-foreground"
            : "font-bold text-foreground"
        }
      >
        {value}
      </span>
    </div>
  );
};

type CheckoutButtonTextParams = {
  isCartEmpty: boolean;
  hasAddress: boolean;
  hasSlot: boolean;
  hasPaymentMethod: boolean;
};

const getCheckoutButtonText = ({
  isCartEmpty,
  hasAddress,
  hasSlot,
  hasPaymentMethod,
}: CheckoutButtonTextParams) => {
  if (isCartEmpty) {
    return "Add Tests to Continue";
  }

  if (!hasAddress) {
    return "Add Address to Continue";
  }

  if (!hasSlot) {
    return "Select Appointment Slot";
  }

  if (!hasPaymentMethod) {
    return "Select Payment Method";
  }

  return "Schedule Appointment";
};