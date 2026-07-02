import { ArrowLeft, Download, FileText, Printer, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../common/Button";
import Card from "../../common/Card";

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
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-primary mb-6 flex items-center gap-2 font-semibold"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <Card className="p-6">
        <div className="flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-dark text-2xl font-bold">CBC Report</h1>
            <p className="mt-1 text-sm text-gray-500">
              Booking ID: BK-1001 • Patient: Nishant Singh
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-xl px-4 py-2"
            >
              <Download size={18} />
              Download
            </Button>

            <Button
              variant="secondary"
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-xl px-4 py-2"
            >
              <Printer size={18} />
              Print
            </Button>

            <Button
              variant="secondary"
              onClick={handleShare}
              className="flex items-center gap-2 rounded-xl px-4 py-2"
            >
              <Share2 size={18} />
              Share
            </Button>
          </div>
        </div>

        <Card className="mt-6 flex min-h-[520px] items-center justify-center bg-slate-50 p-6">
          <div className="max-w-md text-center">
            <FileText size={70} className="text-primary mx-auto" />

            <h2 className="text-dark mt-4 text-xl font-bold">
              Report Preview
            </h2>

            <p className="mt-2 text-gray-500">
              PDF preview will appear here once backend report file is connected.
            </p>

            <Button
              onClick={handleDownload}
              className="mt-5 rounded-xl px-5 py-2"
            >
              Download Sample PDF
            </Button>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default ReportViewerPage;