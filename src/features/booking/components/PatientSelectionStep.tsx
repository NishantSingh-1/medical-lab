import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, User } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

import { useBookingStore } from "../store/useBookingStore";
import type { Patient } from "../types/booking.types";

const initialPatients: Patient[] = [
  {
    id: "1",
    name: "Nishant Singh",
    relation: "Self",
    age: "24",
    gender: "Male",
  },
  {
    id: "2",
    name: "Rohit Singh",
    relation: "Brother",
    age: "20",
    gender: "Male",
  },
];

export const PatientSelectionStep = () => {
  const {
    selectedPatient,
    setSelectedPatient,
    setStep,
  } = useBookingStore();

  const [patients, setPatients] = useState(initialPatients);

  const [showForm, setShowForm] = useState(false);

  const [newPatient, setNewPatient] = useState<Patient>({
    id: "",
    name: "",
    relation: "",
    age: "",
    gender: "",
  });

  const handleAddPatient = () => {
    if (
      !newPatient.name ||
      !newPatient.relation ||
      !newPatient.age ||
      !newPatient.gender
    ) {
      return;
    }

    const patient = {
      ...newPatient,
      id: Date.now().toString(),
    };

    setPatients((prev) => [...prev, patient]);
    setNewPatient({
      id: "",
      name: "",
      relation: "",
      age: "",
      gender: "",
    });

    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black">
          Select Patient
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Choose the patient for this booking.
        </p>
      </div>

      {patients.map((patient) => (
        <AppCard
          key={patient.id}
          onClick={() => setSelectedPatient(patient)}
          className={`cursor-pointer transition-all ${
            selectedPatient?.id === patient.id
              ? "border-primary"
              : ""
          }`}
        >
          <div className="flex justify-between items-center">

            <div className="flex gap-4">

              <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center">
                <User size={20} />
              </div>

              <div>
                <h3 className="font-bold">
                  {patient.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {patient.relation}
                </p>
              </div>

            </div>

            <AppBadge>
              {patient.gender} • {patient.age}
            </AppBadge>

          </div>
        </AppCard>
      ))}

      {!showForm ? (
        <AppButton
          variant="outline"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          Add Family Member
        </AppButton>
      ) : (
        <AppCard className="space-y-4">

          <AppInput
            placeholder="Full Name"
            value={newPatient.name}
            onChange={(e) =>
              setNewPatient({
                ...newPatient,
                name: e.target.value,
              })
            }
          />

          <AppInput
            placeholder="Relation"
            value={newPatient.relation}
            onChange={(e) =>
              setNewPatient({
                ...newPatient,
                relation: e.target.value,
              })
            }
          />

          <AppInput
            placeholder="Age"
            value={newPatient.age}
            onChange={(e) =>
              setNewPatient({
                ...newPatient,
                age: e.target.value,
              })
            }
          />

          <AppInput
            placeholder="Gender"
            value={newPatient.gender}
            onChange={(e) =>
              setNewPatient({
                ...newPatient,
                gender: e.target.value,
              })
            }
          />

          <div className="flex gap-3">

            <AppButton
              onClick={handleAddPatient}
            >
              Save
            </AppButton>

            <AppButton
              variant="outline"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </AppButton>

          </div>

        </AppCard>
      )}

      <div className="flex justify-between">

        <AppButton
          variant="outline"
          onClick={() => setStep("CART")}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton
          disabled={!selectedPatient}
          onClick={() => setStep("COLLECTION")}
        >
          Continue
          <ArrowRight size={18} />
        </AppButton>

      </div>
    </div>
  );
};