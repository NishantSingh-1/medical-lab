import type { PrescriptionItem } from "../types/prescription.types";

export const demoPrescriptions: PrescriptionItem[] = [
  {
    id: "PR-1001",
    doctorName: "Dr. Sharma",
    hospitalName: "City Care Hospital",
    prescribedDate: "20 Jul 2026",
    validUntil: "20 Oct 2026",
    fileName: "thyroid-prescription.pdf",
    status: "ACTIVE",
  },
  {
    id: "PR-1002",
    doctorName: "Dr. Verma",
    hospitalName: "Health Plus Clinic",
    prescribedDate: "10 Jan 2026",
    validUntil: "10 Apr 2026",
    fileName: "vitamin-d-prescription.pdf",
    status: "EXPIRED",
  },
];