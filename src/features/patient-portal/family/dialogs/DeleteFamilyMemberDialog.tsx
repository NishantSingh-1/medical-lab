import { Trash2 } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useFamilyStore } from "../store/useFamilyStore";
import type { FamilyMember } from "../types/family.types";

type DeleteFamilyMemberDialogProps = {
  member: FamilyMember;
  onClose: () => void;
};

export const DeleteFamilyMemberDialog = ({
  member,
  onClose,
}: DeleteFamilyMemberDialogProps) => {
  const deleteMember = useFamilyStore((state) => state.deleteMember);

  const handleDelete = () => {
    deleteMember(member.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-danger-light text-danger">
          <Trash2 size={30} />
        </div>

        <h2 className="mt-5 text-2xl font-black text-foreground">
          Delete Family Member?
        </h2>

        <p className="mt-3 text-sm text-muted-foreground">
          Are you sure you want to remove{" "}
          <span className="font-bold text-foreground">{member.fullName}</span>{" "}
          from your family members?
        </p>

        <div className="mt-8 flex gap-3">
          <AppButton variant="outline" className="flex-1" onClick={onClose}>
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
      </AppCard>
    </div>
  );
};