import { create } from "zustand";
import type {
  Address,
  BookingStep,
  CollectionType,
  Patient,
  Slot,
  TestPackage,
} from "../types/booking.types";

type BookingStore = {
  step: BookingStep;
  cartItems: TestPackage[];
  selectedPatient: Patient | null;
  collectionType: CollectionType | null;
  selectedAddress: Address | null;
  selectedSlot: Slot | null;
  prescriptionFile: File | null;
  error: string | null;

  setStep: (step: BookingStep) => void;
  addToCart: (item: TestPackage) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setSelectedPatient: (patient: Patient) => void;
  setCollectionType: (type: CollectionType) => void;
  setSelectedAddress: (address: Address) => void;
  setSelectedSlot: (slot: Slot) => void;
  setPrescriptionFile: (file: File | null) => void;
  setError: (error: string | null) => void;
  resetBooking: () => void;
};

export const useBookingStore = create<BookingStore>((set, get) => ({
  step: "SEARCH",
  cartItems: [],
  selectedPatient: null,
  collectionType: null,
  selectedAddress: null,
  selectedSlot: null,
  prescriptionFile: null,
  error: null,

  setStep: (step) => set({ step, error: null }),

  addToCart: (item) => {
    const exists = get().cartItems.some((cartItem) => cartItem.id === item.id);

    if (exists) {
      set({ error: "This test/package is already added to cart." });
      return;
    }

    set({
      cartItems: [...get().cartItems, item],
      error: null,
    });
  },

  removeFromCart: (id) =>
    set({
      cartItems: get().cartItems.filter((item) => item.id !== id),
    }),

  clearCart: () => set({ cartItems: [] }),

  setSelectedPatient: (selectedPatient) =>
    set({
      selectedPatient,
      error: null,
    }),

  setCollectionType: (collectionType) =>
    set({
      collectionType,
      error: null,
    }),

  setSelectedAddress: (selectedAddress) =>
    set({
      selectedAddress,
      error: null,
    }),

  setSelectedSlot: (selectedSlot) =>
    set({
      selectedSlot,
      error: null,
    }),

  setPrescriptionFile: (prescriptionFile) =>
    set({
      prescriptionFile,
      error: null,
    }),

  setError: (error) => set({ error }),

  resetBooking: () =>
    set({
      step: "SEARCH",
      cartItems: [],
      selectedPatient: null,
      collectionType: null,
      selectedAddress: null,
      selectedSlot: null,
      prescriptionFile: null,
      error: null,
    }),
}));