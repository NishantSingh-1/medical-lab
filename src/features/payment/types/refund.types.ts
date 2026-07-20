export type RefundStatus =
  | "REQUESTED"
  | "PROCESSING"
  | "APPROVED"
  | "COMPLETED"
  | "REJECTED";

export type RefundItem = {
  id: string;
  paymentId: string;
  bookingId: string;
  refundAmount: number;
  refundDate: string;
  expectedDate: string;
  reason: string;
  status: RefundStatus;
};