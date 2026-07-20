import { create } from "zustand";

import type { PaymentItem } from "../types/payment.types";

type PaymentHistoryStore = {
  payments: PaymentItem[];
  selectedPayment: PaymentItem | null;

  setPayments: (payments: PaymentItem[]) => void;
  setSelectedPayment: (payment: PaymentItem | null) => void;
};

export const usePaymentHistoryStore =
  create<PaymentHistoryStore>((set) => ({
    payments: [],
    selectedPayment: null,

    setPayments: (payments) => set({ payments }),

    setSelectedPayment: (payment) =>
      set({ selectedPayment: payment }),
  }));