import { useEffect, useMemo, useState } from "react";
import { FileText, SearchX } from "lucide-react";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";
import { PatientStatCard } from "../../shared/components/PatientStatCard";

import { demoPrescriptions } from "../data/demoPrescriptions";
import { PrescriptionCard } from "../components/PrescriptionCard";
import { usePrescriptionStore } from "../store/usePrescriptionStore";

export const PrescriptionsPage = () => {
  const [query, setQuery] = useState("");

  const prescriptions = usePrescriptionStore(
    (state) => state.prescriptions
  );

  const setPrescriptions = usePrescriptionStore(
    (state) => state.setPrescriptions
  );

  const deletePrescription = usePrescriptionStore(
    (state) => state.deletePrescription
  );

  useEffect(() => {
    if (prescriptions.length === 0) {
      setPrescriptions(demoPrescriptions);
    }
  }, [prescriptions.length, setPrescriptions]);

  const filteredPrescriptions = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return prescriptions;
    }

    return prescriptions.filter((prescription) =>
      `${prescription.fileName} ${prescription.doctorName} ${prescription.hospitalName}`
        .toLowerCase()
        .includes(search)
    );
  }, [prescriptions, query]);

  const stats = useMemo(() => {
    return {
      total: prescriptions.length,
      active: prescriptions.filter(
        (prescription) => prescription.status === "ACTIVE"
      ).length,
      expired: prescriptions.filter(
        (prescription) => prescription.status === "EXPIRED"
      ).length,
    };
  }, [prescriptions]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Health Documents"
        title="My Prescriptions"
        description="View and manage your uploaded prescriptions."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <PatientStatCard title="Total" value={stats.total} />
        <PatientStatCard title="Active" value={stats.active} />
        <PatientStatCard title="Expired" value={stats.expired} />
      </div>

      {prescriptions.length === 0 ? (
        <PatientEmptyState
          icon={<FileText size={36} />}
          title="No Prescriptions Found"
          description="Your uploaded prescriptions will appear here."
        />
      ) : (
        <>
          <PatientSearchBar
            value={query}
            placeholder="Search prescription, doctor or hospital..."
            onChange={setQuery}
          />

          {filteredPrescriptions.length === 0 ? (
            <PatientEmptyState
              icon={<SearchX size={36} />}
              title="No Matching Prescriptions"
              description="Try searching with another doctor, hospital or file name."
              buttonText="Clear Search"
              onButtonClick={() => setQuery("")}
            />
          ) : (
            <div className="space-y-5">
              {filteredPrescriptions.map((prescription) => (
                <PrescriptionCard
                  key={prescription.id}
                  prescription={prescription}
                  onDelete={deletePrescription}
                />
              ))}
            </div>
          )}
        </>
      )}
    </PatientPageContainer>
  );
};