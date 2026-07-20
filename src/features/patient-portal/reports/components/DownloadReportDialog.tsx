import { Download } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type DownloadReportDialogProps = {
  onClose: () => void;
  reportName: string;
};

export const DownloadReportDialog = ({
  onClose,
  reportName,
}: DownloadReportDialogProps) => {
  const handleDownload = (type: "pdf" | "invoice") => {
    console.log(`Download ${type}:`, reportName);

    // Backend API
    // reportService.download(reportId)

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <AppCard className="w-full max-w-md">
        <div className="flex items-center gap-3">
          <Download className="text-primary" />

          <h2 className="text-xl font-black">
            Download Report
          </h2>
        </div>

        <p className="mt-4 text-muted-foreground">
          Select what you want to download.
        </p>

        <div className="mt-6 space-y-3">
          <AppButton
            fullWidth
            onClick={() => handleDownload("pdf")}
          >
            Download Report PDF
          </AppButton>

          <AppButton
            variant="outline"
            fullWidth
            onClick={() => handleDownload("invoice")}
          >
            Download Invoice
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