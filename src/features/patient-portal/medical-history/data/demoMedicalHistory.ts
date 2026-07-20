import type { MedicalHistoryRecord } from "../types/medicalHistory.types";

export const demoMedicalHistory: MedicalHistoryRecord[] = [
  {
    id: "MH-1001",
    title: "Thyroid",
    diagnosisDate: "10 Jan 2025",
    doctorName: "Dr. Sharma",
    notes: "Regular thyroid monitoring advised.",
    medications: ["Thyroxine 25 mcg"],
    status: "ACTIVE",
  },
  {
    id: "MH-1002",
    title: "Vitamin D Deficiency",
    diagnosisDate: "18 Aug 2024",
    doctorName: "Dr. Verma",
    notes: "Vitamin D supplements prescribed.",
    medications: ["Vitamin D3"],
    status: "RESOLVED",
  },
];