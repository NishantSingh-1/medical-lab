import { create } from "zustand";

import type { UserRole } from "../types/role.types";

type RoleStore = {
  role: UserRole | null;

  setRole: (role: UserRole) => void;

  clearRole: () => void;
};

export const useRoleStore =
  create<RoleStore>((set) => ({
    role: null,

    setRole: (role) =>
      set({
        role,
      }),

    clearRole: () =>
      set({
        role: null,
      }),
  }));