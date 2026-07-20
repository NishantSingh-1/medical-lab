import {
  Copy,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type Props = {
  onClose: () => void;
};

export const ShareReportDialog = ({
  onClose,
}: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

      <AppCard className="w-full max-w-md">

        <div className="flex items-center gap-3">

          <Share2 className="text-primary" />

          <h2 className="text-xl font-black">
            Share Report
          </h2>

        </div>

        <div className="mt-6 space-y-3">

          <AppButton fullWidth>

            <Mail size={18} />

            Share via Email

          </AppButton>

          <AppButton
            variant="outline"
            fullWidth
          >

            <MessageCircle size={18} />

            Share on WhatsApp

          </AppButton>

          <AppButton
            variant="outline"
            fullWidth
          >

            <Copy size={18} />

            Copy Link

          </AppButton>

        </div>

        <AppButton
          variant="ghost"
          className="mt-5 w-full"
          onClick={onClose}
        >
          Close
        </AppButton>

      </AppCard>

    </div>
  );
};