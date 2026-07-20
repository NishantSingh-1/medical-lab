import { useMemo, useState } from "react";
import { Check, FlaskConical } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { PatientEmptyState } from "@/features/patient-portal/shared/components/PatientEmptyState";
import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientSearchBar } from "@/features/patient-portal/shared/components/PatientSearchBar";

type PatientTest = {
  id: string;
  name: string;
  price: number;
  reportTime: string;
  category: string;
};

const patientTests: PatientTest[] = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC)",
    price: 395,
    reportTime: "Same Day",
    category: "Blood Test",
  },
  {
    id: "thyroid",
    name: "Thyroid Profile",
    price: 610,
    reportTime: "Same Day",
    category: "Thyroid",
  },
  {
    id: "lipid",
    name: "Lipid Profile",
    price: 800,
    reportTime: "Same Day",
    category: "Heart Health",
  },
];

export const PatientTestsPage = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [selectedTestIds, setSelectedTestIds] = useState<string[]>([]);

  const filteredTests = useMemo(() => {
    return patientTests.filter((test) =>
      `${test.name} ${test.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
    );
  }, [query]);

  const selectedTests = useMemo(() => {
    return patientTests.filter((test) =>
      selectedTestIds.includes(test.id)
    );
  }, [selectedTestIds]);

  const totalAmount = selectedTests.reduce(
    (total, test) => total + test.price,
    0
  );

  const toggleTest = (testId: string) => {
    setSelectedTestIds((current) =>
      current.includes(testId)
        ? current.filter((id) => id !== testId)
        : [...current, testId]
    );
  };

  const handleContinue = () => {
    if (selectedTests.length === 0) {
      alert("Please select at least one test.");
      return;
    }

    // Later selected tests Zustand store me save honge.
    navigate("/dashboard/booking-flow");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Lab Tests"
        title="Book New Test"
        description="Search and select lab tests from your patient portal."
      />

      <PatientSearchBar
        value={query}
        placeholder="Search tests or categories..."
        onChange={setQuery}
      />

      {filteredTests.length === 0 ? (
        <PatientEmptyState
          icon={<FlaskConical size={36} />}
          title="No Tests Found"
          description="Try searching with another test name or category."
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTests.map((test) => {
            const isSelected = selectedTestIds.includes(test.id);

            return (
              <AppCard
                key={test.id}
                className={`p-5 transition ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/10"
                    : "hover:border-primary/40"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <AppBadge>{test.category}</AppBadge>

                    <h3 className="mt-3 text-lg font-black text-foreground">
                      {test.name}
                    </h3>
                  </div>

                  {isSelected && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                      <Check size={17} />
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  Report delivery: {test.reportTime}
                </p>

                <p className="mt-5 text-2xl font-black text-primary">
                  ₹{test.price}
                </p>

                <AppButton
                  variant={isSelected ? "default" : "outline"}
                  className="mt-5 w-full"
                  onClick={() => toggleTest(test.id)}
                >
                  {isSelected ? "Selected" : "Add to Booking"}
                </AppButton>
              </AppCard>
            );
          })}
        </div>
      )}

      {selectedTests.length > 0 && (
        <AppCard className="sticky bottom-4 z-20 flex flex-col gap-4 border-primary/30 p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              {selectedTests.length} test
              {selectedTests.length > 1 ? "s" : ""} selected
            </p>

            <p className="text-2xl font-black text-primary">
              ₹{totalAmount}
            </p>
          </div>

          <AppButton onClick={handleContinue}>
            Continue Booking
          </AppButton>
        </AppCard>
      )}
    </PatientPageContainer>
  );
};