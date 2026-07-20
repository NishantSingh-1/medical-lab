import { create } from "zustand";

import type { InsuranceItem } from "../types/insurance.types";

type InsuranceStore = {
  insurance: InsuranceItem[];
  setInsurance: (items: InsuranceItem[]) => void;
  deleteInsurance: (id: string) => void;
};

export const useInsuranceStore = create<InsuranceStore>((set) => ({
  insurance: [],

  setInsurance: (items) =>
    set({
      insurance: items,
    }),

  deleteInsurance: (id) =>
    set((state) => ({
      insurance: state.insurance.filter(
        (item) => item.id !== id
      ),
    })),
}));