export type WalletTransaction = {
  id: string;
  title: string;
  amount: number;
  type: "CREDIT" | "DEBIT";
  date: string;
};

export type WalletSummary = {
  balance: number;
  earned: number;
  used: number;
};