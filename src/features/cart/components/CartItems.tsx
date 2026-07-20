import { Trash2, FlaskConical, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppCard } from "@/components/common/AppCard";
import { AppButton } from "@/components/common/AppButton";

import {
  useCart,
  type CartItem,
} from "@/components/context/CartContext";

export const CartItems = () => {
  const navigate = useNavigate();

  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="space-y-4">
      {cartItems.map((item: CartItem) => (
        <AppCard
          key={item.id}
          className="p-5 shadow-none"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <div className="h-24 w-full overflow-hidden rounded-2xl bg-muted sm:w-28">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <FlaskConical />
                </div>
              )}
            </div>

            <div className="flex-1">
              <p className="text-xs font-black uppercase text-primary">
                Diagnostic Test
              </p>

              <h2 className="mt-1 text-lg font-black">
                {item.title}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Report Delivery :
                {item.reportTime}
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <h2 className="text-2xl font-black text-primary">
                ₹{item.price}
              </h2>

              <AppButton
                variant="outline"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <Trash2 size={16} />
                Remove
              </AppButton>
            </div>

          </div>
        </AppCard>
      ))}

      <button
        onClick={() => navigate("/tests")}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-primary py-4 font-bold text-primary"
      >
        <Plus />
        Add More Tests
      </button>
    </div>
  );
};