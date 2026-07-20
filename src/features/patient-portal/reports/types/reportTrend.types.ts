export type TrendRecord = {
  id: string;
  reportName: string;
  parameter: string;
  value: number;
  unit: string;
  normalRange: string;
  date: string;
};

export const demoTrendData: TrendRecord[] = [
  {
    id: "1",
    reportName: "CBC",
    parameter: "Hemoglobin",
    value: 12.4,
    unit: "g/dL",
    normalRange: "13 - 17",
    date: "2026-01-20",
  },
  {
    id: "2",
    reportName: "CBC",
    parameter: "Hemoglobin",
    value: 13.2,
    unit: "g/dL",
    normalRange: "13 - 17",
    date: "2026-04-18",
  },
  {
    id: "3",
    reportName: "CBC",
    parameter: "Hemoglobin",
    value: 14.1,
    unit: "g/dL",
    normalRange: "13 - 17",
    date: "2026-07-22",
  },
];