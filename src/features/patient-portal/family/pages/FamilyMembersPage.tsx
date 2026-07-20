import { useState } from "react";
import { Plus, Users } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientEmptyState } from "../../shared/components/PatientEmptyState";

import { useFamilyMembers } from "../hooks/useFamilyMembers";
import { FamilyMemberCard } from "../components/FamilyMemberCard";
import { AddFamilyMemberDialog } from "../dialogs/AddFamilyMemberDialog";
import { EditFamilyMemberDialog } from "../dialogs/EditFamilyMemberDialog";
import { DeleteFamilyMemberDialog } from "../dialogs/DeleteFamilyMemberDialog";
import type { FamilyMember } from "../types/family.types";

export const FamilyMembersPage = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingMember, setEditingMember] = useState<FamilyMember | null>(null);
  const [deletingMember, setDeletingMember] = useState<FamilyMember | null>(
    null
  );

  const { members } = useFamilyMembers();

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Family"
        title="Family Members"
        description="Manage family profiles for faster bookings."
        action={
          <AppButton onClick={() => setShowAddDialog(true)}>
            <Plus size={18} />
            Add Member
          </AppButton>
        }
      />

      {members.length === 0 ? (
        <PatientEmptyState
          icon={<Users size={36} />}
          title="No Family Members"
          description="Add your first family member to book tests quickly."
          buttonText="Add Member"
          onButtonClick={() => setShowAddDialog(true)}
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <FamilyMemberCard
              key={member.id}
              member={member}
              onEdit={setEditingMember}
              onDelete={setDeletingMember}
            />
          ))}
        </div>
      )}

      {showAddDialog && (
        <AddFamilyMemberDialog onClose={() => setShowAddDialog(false)} />
      )}

      {editingMember && (
        <EditFamilyMemberDialog
          member={editingMember}
          onClose={() => setEditingMember(null)}
        />
      )}

      {deletingMember && (
        <DeleteFamilyMemberDialog
          member={deletingMember}
          onClose={() => setDeletingMember(null)}
        />
      )}
    </PatientPageContainer>
  );
};