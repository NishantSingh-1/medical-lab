import type { PaymentItem } from "../types/payment.types";

export const paymentData: PaymentItem[] = [
  {
    id: "PAY-1001",
    bookingId: "BK-1001",
    invoiceId: "INV-1001",
    testName: "Complete Blood Count (CBC)",
    patientName: "Nishant Singh",
    amount: 395,
    paymentDate: "26 Jul 2026",
    paymentMethod: "UPI",
    status: "PAID",
  },
  {
    id: "PAY-1002",
    bookingId: "BK-1002",
    invoiceId: "INV-1002",
    testName: "Thyroid Profile",
    patientName: "Nishant Singh",
    amount: 610,
    paymentDate: "20 Jul 2026",
    paymentMethod: "CARD",
    status: "REFUNDED",
  },
  {
    id: "PAY-1003",
    bookingId: "BK-1003",
    invoiceId: "INV-1003",
    testName: "Lipid Profile",
    patientName: "Nishant Singh",
    amount: 800,
    paymentDate: "18 Jul 2026",
    paymentMethod: "NET_BANKING",
    status: "PENDING",
  },
];