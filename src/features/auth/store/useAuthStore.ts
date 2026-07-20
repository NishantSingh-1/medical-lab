import { create } from "zustand";

import type {
  AuthStore,
  AuthUser,
} from "../types/auth.types";

const MAX_OTP_ATTEMPTS = 3;
const INITIAL_USER: AuthUser | null = null;

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Login page open hote hi mobile input dikhega.
  step: "OTP_REQUEST",

  identifier: "",
  otpAttempts: 0,
  isLocked: false,
  isLoading: false,
  error: null,
  user: INITIAL_USER,

  setStep: (step) =>
    set({
      step,
      error: null,
    }),

  setIdentifier: (identifier) =>
    set({
      identifier,
    }),

  setLoading: (isLoading) =>
    set({
      isLoading,
    }),

  setError: (error) =>
    set({
      error,
    }),

  setUser: (user) =>
    set({
      user,
    }),

  incrementOtpAttempts: () => {
    const nextAttempts = get().otpAttempts + 1;

    if (nextAttempts >= MAX_OTP_ATTEMPTS) {
      set({
        otpAttempts: nextAttempts,
        isLocked: true,
        error:
          "Too many incorrect attempts. Please try again after 15 minutes.",
      });

      return;
    }

    set({
      otpAttempts: nextAttempts,
      error: `Invalid OTP. ${
        MAX_OTP_ATTEMPTS - nextAttempts
      } attempt(s) remaining.`,
    });
  },

  resetOtpAttempts: () =>
    set({
      otpAttempts: 0,
      isLocked: false,
      error: null,
    }),

  reset: () =>
    set({
      step: "OTP_REQUEST",
      identifier: "",
      otpAttempts: 0,
      isLocked: false,
      isLoading: false,
      error: null,
      user: INITIAL_USER,
    }),
}));