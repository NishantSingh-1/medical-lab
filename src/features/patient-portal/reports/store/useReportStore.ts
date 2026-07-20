import { create } from "zustand";

import type { ReportItem } from "../types/report.types";

type ReportStore = {
  reports: ReportItem[];

  selectedReport: ReportItem | null;

  setReports: (
    reports: ReportItem[]
  ) => void;

  setSelectedReport: (
    report: ReportItem | null
  ) => void;

  reset: () => void;
};

export const useReportStore =
  create<ReportStore>((set) => ({
    reports: [],

    selectedReport: null,

    setReports: (reports) =>
      set({ reports }),

    setSelectedReport: (
      selectedReport
    ) =>
      set({
        selectedReport,
      }),

    reset: () =>
      set({
        reports: [],
        selectedReport: null,
      }),
  }));