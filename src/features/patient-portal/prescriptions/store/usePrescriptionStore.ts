import { create } from "zustand";

import type { PrescriptionItem } from "../types/prescription.types";

type PrescriptionStore = {
  prescriptions: PrescriptionItem[];
  setPrescriptions: (items: PrescriptionItem[]) => void;
  deletePrescription: (id: string) => void;
};

export const usePrescriptionStore = create<PrescriptionStore>((set) => ({
  prescriptions: [],

  setPrescriptions: (items) => set({ prescriptions: items }),

  deletePrescription: (id) =>
    set((state) => ({
      prescriptions: state.prescriptions.filter(
        (prescription) => prescription.id !== id
      ),
    })),
}));