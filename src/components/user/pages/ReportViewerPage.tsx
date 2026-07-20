import { ArrowLeft, Download, FileText, Printer, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "../../common/AppButton";
import { AppCard } from "../../common/AppCard";

const ReportViewerPage = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    alert("Report download started");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    alert("Report share feature coming soon");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <AppButton
        type="button"
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        Back
      </AppButton>

      <AppCard className="p-6">
        <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              CBC Report
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Booking ID: BK-1001 • Patient: Nishant Singh
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <AppButton
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download size={18} />
              Download
            </AppButton>

            <AppButton
              variant="secondary"
              onClick={handlePrint}
              className="flex items-center gap-2"
            >
              <Printer size={18} />
              Print
            </AppButton>

            <AppButton
              variant="secondary"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 size={18} />
              Share
            </AppButton>
          </div>
        </div>

        <AppCard className="mt-6 flex min-h-[520px] items-center justify-center bg-slate p-6">
          <div className="max-w-md text-center">
            <FileText
              size={70}
              className="mx-auto text-primary"
            />

            <h2 className="mt-4 text-xl font-bold text-foreground">
              Report Preview
            </h2>

            <p className="mt-2 text-muted-foreground">
              PDF preview will appear here once backend report file is connected.
            </p>

            <AppButton
              onClick={handleDownload}
              className="mt-5"
            >
              Download Sample PDF
            </AppButton>
          </div>
        </AppCard>
      </AppCard>
    </div>
  );
};

export default ReportViewerPage;