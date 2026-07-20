import { create } from "zustand";

import type { Profile } from "../types/profile.types";

type ProfileStore = {
  profile: Profile | null;

  setProfile: (
    profile: Profile
  ) => void;

  updateProfile: (
    data: Partial<Profile>
  ) => void;
};

export const useProfileStore =
  create<ProfileStore>((set) => ({
    profile: null,

    setProfile: (profile) =>
      set({ profile }),

    updateProfile: (data) =>
      set((state) => ({
        profile: state.profile
          ? {
              ...state.profile,
              ...data,
            }
          : null,
      })),
  }));