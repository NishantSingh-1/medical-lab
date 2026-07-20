import { AppCard } from "@/components/common/AppCard";

import { useFamilyStore } from "../store/useFamilyStore";
import {
  FamilyMemberForm,
  type FamilyMemberFormValues,
} from "../components/FamilyMemberForm";

type AddFamilyMemberDialogProps = {
  onClose: () => void;
};

export const AddFamilyMemberDialog = ({
  onClose,
}: AddFamilyMemberDialogProps) => {
  const addMember = useFamilyStore((state) => state.addMember);

  const handleSubmit = (values: FamilyMemberFormValues) => {
    addMember({
      id: crypto.randomUUID(),
      ...values,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="w-full max-w-xl p-6">
        <h2 className="text-2xl font-black text-foreground">
          Add Family Member
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Add family details for faster bookings.
        </p>

        <div className="mt-6">
          <FamilyMemberForm
            submitLabel="Save Member"
            onSubmit={handleSubmit}
            onCancel={onClose}
          />
        </div>
      </AppCard>
    </div>
  );
};