import { create } from "zustand";

import type {
  PaymentMethod,
  PaymentStatus,
} from "../types/payment.types";

type PaymentStep = string;

type BookingConfirmation = unknown;

type PaymentStore = {
  step: PaymentStep;
  status: PaymentStatus;

  selectedMethod: PaymentMethod | null;

  isLoading: boolean;

  error: string | null;

  transactionId: string | null;

  booking: BookingConfirmation | null;

  setStep: (step: PaymentStep) => void;

  setStatus: (status: PaymentStatus) => void;

  setSelectedMethod: (method: PaymentMethod) => void;

  setLoading: (loading: boolean) => void;

  setError: (error: string | null) => void;

  setTransactionId: (id: string) => void;

  setBooking: (booking: BookingConfirmation) => void;

  reset: () => void;
};

const initialState = {
  step: "METHOD" as PaymentStep,

  status: "IDLE" as PaymentStatus,

  selectedMethod: null,

  isLoading: false,

  error: null,

  transactionId: null,

  booking: null,
};

export const usePaymentStore = create<PaymentStore>((set) => ({
  ...initialState,

  setStep: (step) => set({ step }),

  setStatus: (status) => set({ status }),

  setSelectedMethod: (selectedMethod) =>
    set({ selectedMethod }),

  setLoading: (isLoading) =>
    set({ isLoading }),

  setError: (error) =>
    set({ error }),

  setTransactionId: (transactionId) =>
    set({ transactionId }),

  setBooking: (booking) =>
    set({ booking }),

  reset: () =>
    set(initialState),
}));