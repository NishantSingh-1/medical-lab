import { create } from "zustand";

import type { TrendRecord } from "../types/reportTrend.types";

type ReportTrendStore = {
  trends: TrendRecord[];
  selectedParameter: string;

  setTrends: (trends: TrendRecord[]) => void;
  setSelectedParameter: (value: string) => void;
};

export const useReportTrendStore =
  create<ReportTrendStore>((set) => ({
    trends: [],
    selectedParameter: "Hemoglobin",

    setTrends: (trends) =>
      set({ trends }),

    setSelectedParameter: (
      selectedParameter
    ) =>
      set({
        selectedParameter,
      }),
  }));