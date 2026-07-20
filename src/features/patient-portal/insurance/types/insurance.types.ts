export type InsuranceStatus = "ACTIVE" | "EXPIRED";

export type InsuranceItem = {
  id: string;
  provider: string;
  policyNumber: string;
  memberId: string;
  validTill: string;
  status: InsuranceStatus;
};