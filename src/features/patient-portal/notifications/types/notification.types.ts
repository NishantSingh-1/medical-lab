export type NotificationType =
  | "BOOKING"
  | "REPORT"
  | "PAYMENT"
  | "SYSTEM";

export type PatientNotification = {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  type: NotificationType;
  isRead: boolean;
};