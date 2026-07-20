export type PrescriptionStatus = "ACTIVE" | "EXPIRED";

export type PrescriptionItem = {
  id: string;
  doctorName: string;
  hospitalName: string;
  prescribedDate: string;
  validUntil: string;
  fileName: string;
  status: PrescriptionStatus;
};