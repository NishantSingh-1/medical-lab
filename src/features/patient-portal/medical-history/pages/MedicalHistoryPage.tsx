import { useEffect, useMemo, useState } from "react";
import { HeartPulse, Plus } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";

import { demoMedicalHistory } from "../data/demoMedicalHistory";
import { useMedicalHistoryStore } from "../store/useMedicalHistoryStore";
import type { MedicalHistoryRecord } from "../types/medicalHistory.types";

import { MedicalHistoryCard } from "../components/MedicalHistoryCard";
import { DeleteMedicalHistoryDialog } from "../dialogs/DeleteMedicalHistoryDialog";
import { EditMedicalHistoryDialog } from "../dialogs/EditMedicalHistoryDialog";
import { AddMedicalHistoryDialog } from "../dialogs/AddMedicalHistoryDialog";

export const MedicalHistoryPage = () => {
  const [query, setQuery] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingRecord, setEditingRecord] =
    useState<MedicalHistoryRecord | null>(null);
  const [deletingRecord, setDeletingRecord] =
    useState<MedicalHistoryRecord | null>(null);

  const records = useMedicalHistoryStore((state) => state.records);
  const setRecords = useMedicalHistoryStore((state) => state.setRecords);

  useEffect(() => {
    if (records.length === 0) {
      setRecords(demoMedicalHistory);
    }
  }, [records.length, setRecords]);

  const filteredRecords = useMemo(() => {
    return records.filter((record) =>
      `${record.title} ${record.doctorName} ${record.notes}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
    );
  }, [query, records]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Health Records"
        title="Medical History"
        description="Manage your diagnoses, medications and medical notes."
        action={
          <AppButton onClick={() => setShowAddDialog(true)}>
            <Plus size={18} />
            Add Record
          </AppButton>
        }
      />

      <PatientSearchBar
        value={query}
        placeholder="Search diagnosis, doctor or notes..."
        onChange={setQuery}
      />

      {filteredRecords.length === 0 ? (
        <PatientEmptyState
          icon={<HeartPulse size={36} />}
          title="No Medical Records Found"
          description="Add your first medical history record."
          buttonText="Add Record"
          onButtonClick={() => setShowAddDialog(true)}
        />
      ) : (
        <div className="space-y-5">
          {filteredRecords.map((record) => (
            <MedicalHistoryCard
              key={record.id}
              record={record}
              onEdit={setEditingRecord}
              onDelete={setDeletingRecord}
            />
          ))}
        </div>
      )}

     {showAddDialog && (
  <AddMedicalHistoryDialog
    onClose={() => setShowAddDialog(false)}
  />
)}

{editingRecord && (
  <EditMedicalHistoryDialog
    record={editingRecord}
    onClose={() => setEditingRecord(null)}
  />
)}

{deletingRecord && (
  <DeleteMedicalHistoryDialog
    record={deletingRecord}
    onClose={() => setDeletingRecord(null)}
  />
)}
    </PatientPageContainer>
  );
};