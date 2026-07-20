import { create } from "zustand";

import type { MedicalHistoryRecord } from "../types/medicalHistory.types";

type MedicalHistoryStore = {
  records: MedicalHistoryRecord[];

  setRecords: (records: MedicalHistoryRecord[]) => void;
  addRecord: (record: MedicalHistoryRecord) => void;
  updateRecord: (record: MedicalHistoryRecord) => void;
  deleteRecord: (id: string) => void;
};

export const useMedicalHistoryStore = create<MedicalHistoryStore>((set) => ({
  records: [],

  setRecords: (records) => set({ records }),

  addRecord: (record) =>
    set((state) => ({
      records: [...state.records, record],
    })),

  updateRecord: (updatedRecord) =>
    set((state) => ({
      records: state.records.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      ),
    })),

  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    })),
}));