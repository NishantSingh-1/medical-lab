import { create } from "zustand";

import type { ReferralStats } from "../types/referral.types";

type ReferralStore = {
  referral: ReferralStats;
};

export const useReferralStore = create<ReferralStore>(() => ({
  referral: {
    referralCode: "NISHANT50",
    referralLink: "https://medlab.com/ref/NISHANT50",
    friendsJoined: 12,
    rewardsEarned: 600,
  },
}));