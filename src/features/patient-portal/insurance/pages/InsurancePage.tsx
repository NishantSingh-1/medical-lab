import { useEffect, useMemo, useState } from "react";
import { Plus, SearchX, ShieldCheck } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";
import { PatientStatCard } from "../../shared/components/PatientStatCard";

import { AddInsuranceDialog } from "../components/AddInsuranceDialog";
import { InsuranceCard } from "../components/InsuranceCard";
import { demoInsurance } from "../data/demoInsurance";
import { useInsuranceStore } from "../store/useInsuranceStore";
import type { InsuranceItem } from "../types/insurance.types";

export const InsurancePage = () => {
  const [query, setQuery] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [deletingInsurance, setDeletingInsurance] =
    useState<InsuranceItem | null>(null);

  const insurance = useInsuranceStore((state) => state.insurance);
  const setInsurance = useInsuranceStore(
    (state) => state.setInsurance
  );
  const deleteInsurance = useInsuranceStore(
    (state) => state.deleteInsurance
  );

  useEffect(() => {
    if (insurance.length === 0) {
      setInsurance(demoInsurance);
    }
  }, [insurance.length, setInsurance]);

  const filteredInsurance = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return insurance;
    }

    return insurance.filter((item) =>
      `${item.provider} ${item.policyNumber} ${item.memberId}`
        .toLowerCase()
        .includes(search)
    );
  }, [insurance, query]);

  const stats = useMemo(() => {
    return {
      total: insurance.length,
      active: insurance.filter((item) => item.status === "ACTIVE").length,
      expired: insurance.filter((item) => item.status === "EXPIRED").length,
    };
  }, [insurance]);

  const handleDelete = () => {
    if (!deletingInsurance) return;

    deleteInsurance(deletingInsurance.id);
    setDeletingInsurance(null);
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Insurance"
        title="Insurance Details"
        description="Manage your health insurance policies."
        action={
          <AppButton onClick={() => setShowAddDialog(true)}>
            <Plus size={18} />
            Add Insurance
          </AppButton>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <PatientStatCard title="Total" value={stats.total} />
        <PatientStatCard title="Active" value={stats.active} />
        <PatientStatCard title="Expired" value={stats.expired} />
      </div>

      {insurance.length === 0 ? (
        <PatientEmptyState
          icon={<ShieldCheck size={36} />}
          title="No Insurance Added"
          description="Add your health insurance information."
          buttonText="Add Insurance"
          onButtonClick={() => setShowAddDialog(true)}
        />
      ) : (
        <>
          <PatientSearchBar
            value={query}
            placeholder="Search provider, policy or member ID..."
            onChange={setQuery}
          />

          {filteredInsurance.length === 0 ? (
            <PatientEmptyState
              icon={<SearchX size={36} />}
              title="No Matching Insurance"
              description="Try another provider, policy number or member ID."
              buttonText="Clear Search"
              onButtonClick={() => setQuery("")}
            />
          ) : (
            <div className="space-y-5">
              {filteredInsurance.map((item) => (
                <InsuranceCard
                  key={item.id}
                  insurance={item}
                  onDelete={setDeletingInsurance}
                />
              ))}
            </div>
          )}
        </>
      )}

      {showAddDialog && (
        <AddInsuranceDialog
          onClose={() => setShowAddDialog(false)}
        />
      )}

      {deletingInsurance && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 text-center">
            <h2 className="text-2xl font-black text-foreground">
              Delete Insurance?
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Remove {deletingInsurance.provider} insurance details?
            </p>

            <div className="mt-6 flex gap-3">
              <AppButton
                variant="outline"
                className="flex-1"
                onClick={() => setDeletingInsurance(null)}
              >
                Cancel
              </AppButton>

              <AppButton
                variant="destructive"
                className="flex-1"
                onClick={handleDelete}
              >
                Delete
              </AppButton>
            </div>
          </div>
        </div>
      )}
    </PatientPageContainer>
  );
};