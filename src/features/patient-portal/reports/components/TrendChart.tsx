import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { AppCard } from "@/components/common/AppCard";
import { useReportTrendStore } from "../store/useReportTrendStore";

export const TrendChart = () => {
  const trends = useReportTrendStore((state) => state.trends);

  return (
    <AppCard className="p-6">
      <h2 className="mb-6 text-xl font-black text-foreground">
        Health Trend
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trends}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#0F8A73"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </AppCard>
  );
};