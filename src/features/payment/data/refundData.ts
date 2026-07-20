import type { RefundItem } from "../types/refund.types";

export const refundData: RefundItem[] = [
  {
    id: "REF-1001",
    paymentId: "PAY-1002",
    bookingId: "BK-1002",
    refundAmount: 610,
    refundDate: "22 Jul 2026",
    expectedDate: "28 Jul 2026",
    reason: "Booking Cancelled",
    status: "PROCESSING",
  },
  {
    id: "REF-1002",
    paymentId: "PAY-1003",
    bookingId: "BK-1003",
    refundAmount: 800,
    refundDate: "20 Jul 2026",
    expectedDate: "26 Jul 2026",
    reason: "Duplicate Payment",
    status: "COMPLETED",
  },
];