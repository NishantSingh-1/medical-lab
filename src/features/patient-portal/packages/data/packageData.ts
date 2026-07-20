import type { HealthPackage } from "../types/package.types";

export const packageData: HealthPackage[] = [
  {
    id: "PKG-1001",
    name: "Full Body Checkup",
    bookingId: "BK-1001",
    purchasedDate: "20 Jul 2026",
    expiryDate: "20 Jul 2027",
    totalTests: 15,
    remainingTests: 8,
    amount: 2999,
    status: "ACTIVE",
  },
  {
    id: "PKG-1002",
    name: "Diabetes Care Package",
    bookingId: "BK-1002",
    purchasedDate: "15 Jan 2026",
    expiryDate: "15 Jul 2026",
    totalTests: 8,
    remainingTests: 0,
    amount: 1899,
    status: "EXPIRED",
  },
];