import { create } from "zustand";

import type { HealthPackage } from "../types/package.types";

type PackageStore = {
  packages: HealthPackage[];
  setPackages: (packages: HealthPackage[]) => void;
};

export const usePackageStore = create<PackageStore>((set) => ({
  packages: [],

  setPackages: (packages) =>
    set({
      packages,
    }),
}));