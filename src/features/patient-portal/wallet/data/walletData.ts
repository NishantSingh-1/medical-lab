import type { WalletSummary, WalletTransaction } from "../types/wallet.types";

export const walletSummary: WalletSummary = {
  balance: 450,
  earned: 1200,
  used: 750,
};

export const walletTransactions: WalletTransaction[] = [
  {
    id: "1",
    title: "Referral Bonus",
    amount: 300,
    type: "CREDIT",
    date: "12 Jul 2026",
  },
  {
    id: "2",
    title: "CBC Test Discount",
    amount: 150,
    type: "DEBIT",
    date: "10 Jul 2026",
  },
  {
    id: "3",
    title: "Health Package Cashback",
    amount: 150,
    type: "CREDIT",
    date: "05 Jul 2026",
  },
];