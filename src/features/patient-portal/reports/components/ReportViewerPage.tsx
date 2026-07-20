import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Printer,
  Share2,
  ZoomIn,
  ZoomOut,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { useReportStore } from "../store/useReportStore";
import { DownloadReportDialog } from "./DownloadReportDialog";
import { ShareReportDialog } from "./ShareReportDialog";
import { ReportStatus } from "./ReportStatus";

export const PatientReportViewerPage = () => {
  const navigate = useNavigate();
  const selectedReport = useReportStore((state) => state.selectedReport);

  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  if (!selectedReport) {
    return (
      <section className="min-h-screen bg-background px-4 py-10 md:px-8">
        <div className="mx-auto max-w-5xl">
          <AppCard className="p-10 text-center">
            <FileText className="mx-auto h-16 w-16 text-muted-foreground" />

            <h2 className="mt-4 text-2xl font-black text-foreground">
              Report not found
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Please select a report from your reports list.
            </p>

            <AppButton
              className="mt-6"
              onClick={() => navigate("/my-reports")}
            >
              Back to Reports
            </AppButton>
          </AppCard>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <AppButton
          variant="ghost"
          onClick={() => navigate("/my-reports")}
          className="mb-5 px-0 text-primary hover:bg-transparent"
        >
          <ArrowLeft size={18} />
          Back to Reports
        </AppButton>

        <AppCard className="p-5 md:p-6">
          <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black text-foreground">
                  {selectedReport.reportName}
                </h1>

                <ReportStatus status={selectedReport.status} />
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Booking ID: {selectedReport.bookingId} • Patient:{" "}
                {selectedReport.patientName}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Uploaded: {selectedReport.uploadedDate}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <AppButton onClick={() => setShowDownloadDialog(true)}>
                <Download size={18} />
                Download
              </AppButton>

              <AppButton variant="outline" onClick={() => window.print()}>
                <Printer size={18} />
                Print
              </AppButton>

              <AppButton
                variant="outline"
                onClick={() => setShowShareDialog(true)}
              >
                <Share2 size={18} />
                Share
              </AppButton>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-muted-foreground">
              PDF Preview
            </p>

            <div className="flex gap-2">
              <AppButton variant="outline" size="sm">
                <ZoomOut size={16} />
                Zoom Out
              </AppButton>

              <AppButton variant="outline" size="sm">
                <ZoomIn size={16} />
                Zoom In
              </AppButton>
            </div>
          </div>

          <AppCard className="mt-5 flex min-h-[560px] items-center justify-center bg-card p-6">
            <div className="max-w-md text-center">
              <FileText className="mx-auto h-20 w-20 text-primary" />

              <h2 className="mt-4 text-xl font-black text-foreground">
                Report Preview
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                PDF preview will appear here once backend report file is
                connected.
              </p>

              <AppButton
                className="mt-5"
                onClick={() => setShowDownloadDialog(true)}
              >
                <Download size={18} />
                Download Sample PDF
              </AppButton>
            </div>
          </AppCard>
        </AppCard>
      </div>

      {showDownloadDialog && (
        <DownloadReportDialog
          reportName={selectedReport.reportName}
          onClose={() => setShowDownloadDialog(false)}
        />
      )}

      {showShareDialog && (
        <ShareReportDialog onClose={() => setShowShareDialog(false)} />
      )}
    </section>
  );
};