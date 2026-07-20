export type BookingStatus =
  | "UPCOMING"
  | "SAMPLE_COLLECTION"
  | "LAB_PROCESSING"
  | "REPORT_READY"
  | "COMPLETED"
  | "CANCELLED"
  | "RESCHEDULED";

export type BookingItem = {
  id: string;
  testName: string;
  patientName: string;
  date: string;
  time: string;
  address: string;
  amount: number;
  status: BookingStatus;
};

export type TrackingStep = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};