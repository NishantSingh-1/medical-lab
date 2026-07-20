import { create } from "zustand";

import {
  walletSummary,
  walletTransactions,
} from "../data/walletData";

export const useWalletStore = create(() => ({
  summary: walletSummary,
  transactions: walletTransactions,
}));