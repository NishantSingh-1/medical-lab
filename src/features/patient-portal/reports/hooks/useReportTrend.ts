import { useEffect } from "react";

import { demoTrendData } from "../types/reportTrend.types";
import { useReportTrendStore } from "../store/useReportTrendStore";

export const useReportTrend = () => {
  const setTrends = useReportTrendStore(
    (state) => state.setTrends
  );

  useEffect(() => {
    // Backend API later
    setTrends(demoTrendData);
  }, [setTrends]);
};