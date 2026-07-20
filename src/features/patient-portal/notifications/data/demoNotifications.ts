import type { PatientNotification } from "../types/notification.types";

export const demoNotifications: PatientNotification[] = [
  {
    id: "NT-1001",
    title: "Booking Confirmed",
    message: "Your CBC test booking has been confirmed.",
    createdAt: "Today, 10:30 AM",
    type: "BOOKING",
    isRead: false,
  },
  {
    id: "NT-1002",
    title: "Report Ready",
    message: "Your Thyroid Profile report is ready to download.",
    createdAt: "Yesterday, 04:15 PM",
    type: "REPORT",
    isRead: false,
  },
  {
    id: "NT-1003",
    title: "Payment Successful",
    message: "Payment of ₹610 was completed successfully.",
    createdAt: "20 Jul 2026",
    type: "PAYMENT",
    isRead: true,
  },
];