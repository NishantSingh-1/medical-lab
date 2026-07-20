import { create } from "zustand";

import type { RefundItem } from "../types/refund.types";

type RefundStore = {
  refunds: RefundItem[];
  setRefunds: (refunds: RefundItem[]) => void;
};

export const useRefundStore = create<RefundStore>((set) => ({
  refunds: [],

  setRefunds: (refunds) =>
    set({
      refunds,
    }),
}));