export type PackageStatus =
  | "ACTIVE"
  | "EXPIRED"
  | "USED";

export type HealthPackage = {
  id: string;
  name: string;
  bookingId: string;
  purchasedDate: string;
  expiryDate: string;
  totalTests: number;
  remainingTests: number;
  amount: number;
  status: PackageStatus;
};