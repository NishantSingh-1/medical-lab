export type ReportStatus =
  | "PROCESSING"
  | "READY"
  | "DOWNLOADED"
  | "EXPIRED";

export type ReportItem = {
  id: string;
  bookingId: string;
  reportName: string;
  patientName: string;
  testDate: string;
  uploadedDate: string;
  status: ReportStatus;
  pdfUrl: string;
};