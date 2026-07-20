import { create } from "zustand";

export type SessionState =
  | "ACTIVE"
  | "EXPIRED"
  | "LOCKED"
  | "SUSPENDED"
  | "LOGOUT_CONFIRM";

type SessionStore = {
  status: SessionState;
  setStatus: (status: SessionState) => void;
};

export const useSessionStore = create<SessionStore>((set) => ({
  status: "ACTIVE",

  setStatus: (status) =>
    set({
      status,
    }),
}));