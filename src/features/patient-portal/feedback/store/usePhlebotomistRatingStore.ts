import { create } from "zustand";

import type { PhlebotomistRating } from "../types/phlebotomistRating.types";

type RatingStore = {
  rating: PhlebotomistRating;

  update: (
    key: keyof PhlebotomistRating,
    value: string | number
  ) => void;

  reset: () => void;
};

const initialState: PhlebotomistRating = {
  bookingId: "BK-1001",
  phlebotomistId: "PHL-101",
  phlebotomistName: "Rahul Kumar",
  rating: 0,
  comment: "",
};

export const usePhlebotomistRatingStore =
  create<RatingStore>((set) => ({
    rating: initialState,

    update: (key, value) =>
      set((state) => ({
        rating: {
          ...state.rating,
          [key]: value,
        },
      })),

    reset: () =>
      set({
        rating: initialState,
      }),
  }));