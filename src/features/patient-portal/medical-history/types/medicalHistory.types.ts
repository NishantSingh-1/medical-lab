export type MedicalRecordStatus = "ACTIVE" | "RESOLVED";

export type MedicalHistoryRecord = {
  id: string;
  title: string;
  diagnosisDate: string;
  doctorName: string;
  notes: string;
  medications: string[];
  status: MedicalRecordStatus;
};