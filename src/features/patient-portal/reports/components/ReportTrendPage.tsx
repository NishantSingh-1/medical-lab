import { useReportTrend } from "../hooks/useReportTrend";
import { TrendChart } from "./TrendChart";

export const ReportTrendPage = () => {
  useReportTrend();

  return (
    <section className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <TrendChart />
      </div>
    </section>
  );
};