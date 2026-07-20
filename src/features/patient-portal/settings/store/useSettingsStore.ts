import { create } from "zustand";

import type { PatientSettings } from "../types/settings.types";

type SettingsStore = {
  settings: PatientSettings;
  updateSetting: <K extends keyof PatientSettings>(
    key: K,
    value: PatientSettings[K]
  ) => void;
  resetSettings: () => void;
};

const defaultSettings: PatientSettings = {
  emailNotifications: true,
  smsNotifications: true,
  whatsappNotifications: false,
  bookingReminders: true,
  reportAlerts: true,
  promotionalUpdates: false,
  language: "English",
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: defaultSettings,

  updateSetting: (key, value) =>
    set((state) => ({
      settings: {
        ...state.settings,
        [key]: value,
      },
    })),

  resetSettings: () =>
    set({
      settings: defaultSettings,
    }),
}));