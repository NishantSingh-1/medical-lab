export type PaymentMethodId =
  | "cod"
  | "online"
  | "upi";

export type PaymentMethod = {
  id: PaymentMethodId;
  title: string;
  description: string;
};

export type PaymentStep =
  | "METHOD"
  | "CASH_CONFIRM"
  | "PROCESSING"
  | "SUCCESS";