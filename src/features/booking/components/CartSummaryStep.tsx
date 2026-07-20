import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useBookingStore } from "../store/useBookingStore";

export const CartSummaryStep = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    setStep,
  } = useBookingStore();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <AppCard className="p-10 text-center">
        <h2 className="text-2xl font-black text-foreground">
          Your cart is empty
        </h2>

        <p className="mt-3 text-muted-foreground">
          Search and add tests before continuing.
        </p>

        <AppButton
          className="mt-6"
          onClick={() => setStep("SEARCH")}
        >
          Browse Tests
        </AppButton>
      </AppCard>
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-black text-foreground">
          Cart Summary
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Review your selected tests.
        </p>
      </div>

      {cartItems.map((item) => (
        <AppCard
          key={item.id}
          className="flex justify-between items-center"
        >
          <div>
            <AppBadge>{item.type}</AppBadge>

            <h3 className="font-bold mt-3 text-foreground">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              Report : {item.reportTime}
            </p>
          </div>

          <div className="text-right">
            <p className="font-black text-primary text-xl">
              ₹{item.price}
            </p>

            <AppButton
              variant="ghost"
              onClick={() => removeFromCart(item.id)}
              className="mt-3 text-danger hover:bg-transparent"
            >
              <Trash2 size={16} />
              Remove
            </AppButton>
          </div>
        </AppCard>
      ))}

      <AppCard className="p-5">
        <div className="flex justify-between">
          <span className="font-bold">
            Total
          </span>

          <span className="text-2xl font-black text-primary">
            ₹{totalAmount}
          </span>
        </div>
      </AppCard>

      <div className="flex justify-between">
        <AppButton
          variant="outline"
          onClick={() => setStep("SEARCH")}
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </AppButton>

        <div className="flex gap-3">

          <AppButton
            variant="ghost"
            onClick={clearCart}
          >
            Clear Cart
          </AppButton>

          <AppButton
            onClick={() => setStep("PATIENT")}
          >
            Continue
            <ArrowRight size={18} />
          </AppButton>

        </div>
      </div>
    </div>
  );
};