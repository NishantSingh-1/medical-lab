export type PaymentStatus =
  | "PAID"
  | "PENDING"
  | "FAILED"
  | "REFUNDED";

export type PaymentMethod =
  | "UPI"
  | "CARD"
  | "CASH"
  | "NET_BANKING";

export type PaymentItem = {
  id: string;
  bookingId: string;
  invoiceId: string;
  testName: string;
  patientName: string;
  amount: number;
  paymentDate: string;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
};