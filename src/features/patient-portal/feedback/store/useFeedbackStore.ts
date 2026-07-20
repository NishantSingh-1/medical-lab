import { create } from "zustand";

import type { FeedbackData } from "../types/feedback.types";

type FeedbackStore = {
  feedback: FeedbackData;

  updateFeedback: (
    key: keyof FeedbackData,
    value: string | number
  ) => void;

  resetFeedback: () => void;
};

const initialState: FeedbackData = {
  overallRating: 0,
  collectionRating: 0,
  staffRating: 0,
  comment: "",
};

export const useFeedbackStore =
  create<FeedbackStore>((set) => ({
    feedback: initialState,

    updateFeedback: (key, value) =>
      set((state) => ({
        feedback: {
          ...state.feedback,
          [key]: value,
        },
      })),

    resetFeedback: () =>
      set({
        feedback: initialState,
      }),
  }));