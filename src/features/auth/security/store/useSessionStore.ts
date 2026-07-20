import { create } from "zustand";

type SessionState = {
  sessionExpired: boolean;
  openSessionExpired: () => void;
  closeSessionExpired: () => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  sessionExpired: false,

  openSessionExpired: () =>
    set({
      sessionExpired: true,
    }),

  closeSessionExpired: () =>
    set({
      sessionExpired: false,
    }),
}));