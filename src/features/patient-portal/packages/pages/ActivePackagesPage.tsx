import { useEffect } from "react";
import { PackageOpen } from "lucide-react";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";

import { PackageCard } from "../components/PackageCard";
import { packageData } from "../data/packageData";
import { usePackageStore } from "../store/usePackageStore";

export const ActivePackagesPage = () => {
  const packages = usePackageStore(
    (state) => state.packages
  );

  const setPackages = usePackageStore(
    (state) => state.setPackages
  );

  useEffect(() => {
    setPackages(packageData);
  }, [setPackages]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Packages"
        title="Active Health Packages"
        description="View your active and expired health packages."
      />

      {packages.length === 0 ? (
        <PatientEmptyState
          icon={<PackageOpen size={36} />}
          title="No Active Packages"
          description="Purchase a package to get discounted lab tests."
        />
      ) : (
        <div className="space-y-5">
          {packages.map((item) => (
            <PackageCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </PatientPageContainer>
  );
};