import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import { useBookingStore } from "../store/useBookingStore";
import type { TestPackage } from "../types/booking.types";

const testsData: TestPackage[] = [
  {
    id: "cbc",
    title: "Complete Blood Count (CBC)",
    type: "TEST",
    price: 395,
    reportTime: "Same Day",
  },
  {
    id: "thyroid",
    title: "Thyroid Profile",
    type: "TEST",
    price: 610,
    reportTime: "Same Day",
  },
  {
    id: "full-body",
    title: "Full Body Checkup",
    type: "PACKAGE",
    price: 1499,
    reportTime: "24 Hours",
  },
  {
    id: "lipid",
    title: "Lipid Profile",
    type: "TEST",
    price: 800,
    reportTime: "Same Day",
  },
];

export const TestSearchStep = () => {
  const [query, setQuery] = useState("");

  const addToCart = useBookingStore((state) => state.addToCart);
  const setStep = useBookingStore((state) => state.setStep);
  const cartItems = useBookingStore((state) => state.cartItems);

  const filteredTests = useMemo(() => {
    return testsData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-black text-foreground">
          Browse Tests & Packages
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Search and add tests/packages to your cart.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-xl border border-border bg-card px-4">
        <Search className="h-4 w-4 text-muted-foreground" />

        <AppInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search CBC, Thyroid, Full Body..."
          className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {filteredTests.map((item) => {
          const isAdded = cartItems.some((cartItem) => cartItem.id === item.id);

          return (
            <AppCard key={item.id} className="flex flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <AppBadge>{item.type}</AppBadge>
                  <span className="text-sm font-bold text-primary">
                    ₹{item.price}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Report delivery: {item.reportTime}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <AppButton type="button" variant="outline">
                  Details
                </AppButton>

                <AppButton
                  type="button"
                  disabled={isAdded}
                  onClick={() => addToCart(item)}
                >
                  {isAdded ? "Added" : "Add"}
                </AppButton>
              </div>
            </AppCard>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <AppButton
          type="button"
          disabled={cartItems.length === 0}
          onClick={() => setStep("CART")}
        >
          Continue to Cart ({cartItems.length})
        </AppButton>
      </div>
    </div>
  );
};