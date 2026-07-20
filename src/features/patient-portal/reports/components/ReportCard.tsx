import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Download,
  Eye,
  RefreshCw,
  Share2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { ReportItem } from "../types/report.types";
import { useReportStore } from "../store/useReportStore";
import { ReportStatus } from "./ReportStatus";
import { ReportShareDialog } from "./ReportShareDialog";

type Props = {
  report: ReportItem;
};

export const ReportCard = ({ report }: Props) => {
  const navigate = useNavigate();

  const [showShareDialog, setShowShareDialog] = useState(false);

  const setSelectedReport = useReportStore(
    (state) => state.setSelectedReport
  );

  const isReady =
    report.status === "READY" ||
    report.status === "DOWNLOADED";

  const isProcessing = report.status === "PROCESSING";
  const isExpired = report.status === "EXPIRED";

  const handleView = () => {
    if (!isReady) return;

    setSelectedReport(report);
    navigate("/dashboard/reports/viewer");
  };

  const handleDownload = () => {
    if (!isReady) return;

    alert("Download API");
  };

  const handleRequestAgain = () => {
    alert(`New report link requested for ${report.reportName}`);
  };

  return (
    <>
      <AppCard className="p-5 shadow-none">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-black text-foreground">
              {report.reportName}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {report.patientName}
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays size={16} />
              {report.uploadedDate}
            </div>

            <div className="mt-4">
              <ReportStatus status={report.status} />
            </div>

            {isProcessing && (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/10 p-4">
                <Clock3
                  size={20}
                  className="mt-0.5 shrink-0 text-warning"
                />

                <div>
                  <p className="font-bold text-foreground">
                    Report Not Ready Yet
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Your sample is still being processed. We will notify
                    you when the report is available.
                  </p>
                </div>
              </div>
            )}

            {isExpired && (
              <div className="mt-4 rounded-xl border border-danger/30 bg-danger/10 p-4">
                <p className="font-bold text-danger">
                  Report Link Expired
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  This download link is no longer valid. Request a new
                  secure link to access your report.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {isExpired ? (
              <AppButton
                type="button"
                variant="outline"
                onClick={handleRequestAgain}
              >
                <RefreshCw size={18} />
                Request New Link
              </AppButton>
            ) : (
              <>
                <AppButton
                  type="button"
                  variant="outline"
                  disabled={!isReady}
                  onClick={handleView}
                >
                  <Eye size={18} />
                  View
                </AppButton>

                <AppButton
                  type="button"
                  disabled={!isReady}
                  onClick={handleDownload}
                >
                  <Download size={18} />
                  Download
                </AppButton>

                <AppButton
                  type="button"
                  variant="outline"
                  disabled={!isReady}
                  onClick={() => setShowShareDialog(true)}
                >
                  <Share2 size={18} />
                  Share
                </AppButton>
              </>
            )}
          </div>
        </div>
      </AppCard>

      {showShareDialog && (
        <ReportShareDialog
          reportId={report.id}
          reportName={report.reportName}
          onClose={() => setShowShareDialog(false)}
        />
      )}
    </>
  );
};