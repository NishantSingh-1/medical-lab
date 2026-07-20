import { useState } from "react";
import {
  Check,
  Copy,
  Mail,
  MessageCircle,
  Share2,
  X,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

type ReportShareDialogProps = {
  reportId: string;
  reportName: string;
  onClose: () => void;
};

export const ReportShareDialog = ({
  reportId,
  reportName,
  onClose,
}: ReportShareDialogProps) => {
  const [copied, setCopied] = useState(false);

  const secureLink = `${window.location.origin}/shared-report/${reportId}?token=demo-secure-token`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(secureLink);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Unable to copy link.");
    }
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      `Here is my ${reportName} report: ${secureLink}`
    );

    window.open(
      `https://wa.me/?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent(
      `${reportName} - MedLab Report`
    );

    const body = encodeURIComponent(
      `You can securely view the report using this link:\n${secureLink}`
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const nativeShare = async () => {
    if (!navigator.share) {
      await copyLink();
      return;
    }

    try {
      await navigator.share({
        title: reportName,
        text: `Secure MedLab report: ${reportName}`,
        url: secureLink,
      });
    } catch {
      return;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <AppCard className="w-full max-w-lg p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-foreground">
              Share Report Securely
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Share a temporary secure link for {reportName}.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close report sharing dialog"
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Secure Report Link
          </label>

          <div className="flex gap-3">
            <AppInput
              value={secureLink}
              readOnly
              className="min-w-0 flex-1"
            />

            <AppButton
              type="button"
              variant="outline"
              onClick={copyLink}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy"}
            </AppButton>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <AppButton type="button" onClick={shareOnWhatsApp}>
            <MessageCircle size={18} />
            WhatsApp
          </AppButton>

          <AppButton
            type="button"
            variant="outline"
            onClick={shareByEmail}
          >
            <Mail size={18} />
            Email
          </AppButton>

          <AppButton
            type="button"
            variant="outline"
            onClick={nativeShare}
          >
            <Share2 size={18} />
            Share
          </AppButton>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Demo link only. API integration ke baad backend secure token aur
          expiry generate karega.
        </p>
      </AppCard>
    </div>
  );
};