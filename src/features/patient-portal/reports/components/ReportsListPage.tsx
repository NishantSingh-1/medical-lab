import { useEffect, useMemo, useState } from "react";
import { FileText } from "lucide-react";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientEmptyState } from "../../shared/components/PatientEmptyState";

import { EmptyReports } from "./EmptyReports";
import { ReportCard } from "./ReportCard";

import { useReportStore } from "../store/useReportStore";
import type { ReportItem } from "../types/report.types";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";

const demoReports: ReportItem[] = [

  {
    id: "1",
    bookingId: "BK-1001",
    reportName: "Complete Blood Count",
    patientName: "Nishant Singh",
    testDate: "26 Jul 2026",
    uploadedDate: "27 Jul 2026",
    status: "READY",
    pdfUrl: "",
  },
  {
    id: "2",
    bookingId: "BK-1002",
    reportName: "Thyroid Profile",
    patientName: "Nishant Singh",
    testDate: "21 Jul 2026",
    uploadedDate: "22 Jul 2026",
    status: "PROCESSING",
    pdfUrl: "",
  },

];
const LOAD_DEMO_REPORTS = true;
export const ReportsListPage = () => {
  const [query, setQuery] = useState("");

  const reports = useReportStore((state) => state.reports);
  const setReports = useReportStore((state) => state.setReports);

  useEffect(() => {
    if (LOAD_DEMO_REPORTS) {
      setReports(demoReports);
    } else {
      setReports([]);
    }
  }, [setReports]);

  const filteredReports = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return reports;
    }

    return reports.filter((report) =>
      `${report.reportName} ${report.patientName} ${report.bookingId}`
        .toLowerCase()
        .includes(search)
    );
  }, [reports, query]);
  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Reports"
        title="My Reports"
        description="View and download your diagnostic reports."
      />

      <PatientSearchBar
        value={query}
        placeholder="Search reports..."
        onChange={setQuery}
      />

      {reports.length === 0 ? (
        <EmptyReports />
      ) : filteredReports.length === 0 ? (
        <PatientEmptyState
          icon={<FileText size={36} />}
          title="No Matching Reports"
          description="No reports match your search. Try another keyword."
          buttonText="Clear Search"
          onButtonClick={() => setQuery("")}
        />
      ) : (
        <div className="space-y-5">
          {filteredReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}

    </PatientPageContainer>
  );
};