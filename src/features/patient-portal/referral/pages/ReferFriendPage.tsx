import { useState } from "react";
import {
  Check,
  Copy,
  Gift,
  MessageCircle,
  Share2,
  Users,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientStatCard } from "../../shared/components/PatientStatCard";

import { useReferralStore } from "../store/useReferralStore";

export const ReferFriendPage = () => {
  const [copiedField, setCopiedField] = useState<
    "CODE" | "LINK" | null
  >(null);

  const referral = useReferralStore((state) => state.referral);

  const copyToClipboard = async (
    value: string,
    field: "CODE" | "LINK"
  ) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopiedField(field);

      window.setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch {
      alert("Unable to copy. Please copy it manually.");
    }
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `Use my MedLab referral code ${referral.referralCode} and book your lab tests: ${referral.referralLink}`
    );

    window.open(
      `https://wa.me/?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleNativeShare = async () => {
    const shareData = {
      title: "MedLab Referral",
      text: `Use my referral code ${referral.referralCode}.`,
      url: referral.referralLink,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        return;
      }

      return;
    }

    await copyToClipboard(referral.referralLink, "LINK");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Rewards"
        title="Refer a Friend"
        description="Invite friends to MedLab and earn referral rewards."
      />

      <div className="grid grid-cols-2 gap-4">
        <PatientStatCard
          title="Friends Joined"
          value={referral.friendsJoined}
        />

        <PatientStatCard
          title="Rewards Earned"
          value={`₹${referral.rewardsEarned}`}
        />
      </div>

      <AppCard className="overflow-hidden p-0 shadow-none">
        <div className="bg-primary p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Gift size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-black">
                Invite friends and earn
              </h2>

              <p className="mt-2 text-sm text-white/80">
                Share your referral code. Rewards are added when
                your friend completes their first eligible booking.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Referral Code
            </p>

            <div className="mt-2 flex flex-col gap-3 rounded-xl border border-dashed border-primary bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-2xl font-black tracking-wider text-primary">
                {referral.referralCode}
              </span>

              <AppButton
                type="button"
                variant="outline"
                onClick={() =>
                  copyToClipboard(
                    referral.referralCode,
                    "CODE"
                  )
                }
              >
                {copiedField === "CODE" ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}

                {copiedField === "CODE"
                  ? "Copied"
                  : "Copy Code"}
              </AppButton>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Referral Link
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <div className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground">
                <p className="truncate">
                  {referral.referralLink}
                </p>
              </div>

              <AppButton
                type="button"
                variant="outline"
                onClick={() =>
                  copyToClipboard(
                    referral.referralLink,
                    "LINK"
                  )
                }
              >
                {copiedField === "LINK" ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}

                {copiedField === "LINK"
                  ? "Copied"
                  : "Copy Link"}
              </AppButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <AppButton
              type="button"
              onClick={handleWhatsAppShare}
            >
              <MessageCircle size={18} />
              Share on WhatsApp
            </AppButton>

            <AppButton
              type="button"
              variant="outline"
              onClick={handleNativeShare}
            >
              <Share2 size={18} />
              Share Referral
            </AppButton>
          </div>
        </div>
      </AppCard>

      <AppCard className="p-6 shadow-none">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            <Users size={22} />
          </div>

          <div>
            <h3 className="text-lg font-black text-foreground">
              How referrals work
            </h3>

            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>1. Share your referral code or link.</p>
              <p>2. Your friend creates a MedLab account.</p>
              <p>3. They complete their first eligible booking.</p>
              <p>4. Your reward is credited after confirmation.</p>
            </div>
          </div>
        </div>
      </AppCard>
    </PatientPageContainer>
  );
};