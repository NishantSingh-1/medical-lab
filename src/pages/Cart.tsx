import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FlaskConical,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useCart } from "@/components/context/CartContext";

import { AddressModal } from "@/features/cart/components/AddressModal";
import { CartItems } from "@/features/cart/components/CartItems";
import { CheckoutSidebar } from "@/features/cart/components/CheckoutSidebar";

import {
  SlotModal,
  type SelectedSlot,
} from "@/features/cart/components/SlotModal";
import { usePaymentStore } from "@/features/payment/store/usePaymentStore";

export type Address = {
  fullName: string;
  mobile: string;
  houseNumber: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
};

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, subtotal } = useCart();

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] =
    useState<Address | null>(null);

  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] =
    useState<SelectedSlot | null>(null);

  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const isCartEmpty = cartItems.length === 0;

  const handleSaveAddress = (address: Address) => {
    setSelectedAddress(address);
    setIsAddressModalOpen(false);
  };
  // simple checkout handler
  const handleCheckout = () => {
    if (isCartEmpty) return;
    navigate('/checkout');
  };

  const handleConfirmSlot = (slot: SelectedSlot) => {
    setSelectedSlot(slot);
    setIsSlotModalOpen(false);
  };



  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <button
                type="button"
                onClick={() => navigate("/tests")}
                className="mb-4 flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-primary"
              >
                <ArrowLeft size={17} />
                Continue Browsing
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <ShoppingCart size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">
                    Test Booking
                  </p>

                  <h1 className="text-3xl font-black tracking-tight text-foreground">
                    My Cart
                  </h1>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Review your selected tests and complete your booking details.
              </p>
            </div>

            {!isCartEmpty && (
              <p className="text-sm font-bold text-muted-foreground">
                {cartItems.length} item
                {cartItems.length > 1 ? "s" : ""} selected
              </p>
            )}
          </header>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <section className="lg:col-span-8">
              {isCartEmpty ? (
                <EmptyCartState onBrowseTests={() => navigate("/tests")} />
              ) : (
                <CartItems />
              )}
            </section>

            <aside className="lg:col-span-4">
              
            </aside>
          </div>
        </div>
      </main>

      <AddressModal
        open={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onSave={handleSaveAddress}
      />

      <SlotModal
        open={isSlotModalOpen}
        onClose={() => setIsSlotModalOpen(false)}
        onConfirm={handleConfirmSlot}
      />
    </>
  );
};

type EmptyCartStateProps = {
  onBrowseTests: () => void;
};

const EmptyCartState = ({
  onBrowseTests,
}: EmptyCartStateProps) => {
  return (
    <AppCard className="flex min-h-[380px] flex-col items-center justify-center p-8 text-center shadow-none">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-primary">
        <FlaskConical size={34} />
      </div>

      <h2 className="mt-6 text-2xl font-black text-foreground">
        Your cart is empty
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        Add lab tests or health packages to continue with your booking.
      </p>

      <AppButton
        type="button"
        className="mt-6"
        onClick={onBrowseTests}
      >
        Browse Tests
      </AppButton>

      <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <ShieldCheck size={15} className="text-primary" />
        Secure booking with NABL-accredited labs
      </div>
    </AppCard>
  );
};

export default Cart;