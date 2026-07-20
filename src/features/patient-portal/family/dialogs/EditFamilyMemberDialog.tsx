import { useState } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import { AppSelect } from "@/components/common/AppSelect";

import { useFamilyStore } from "../store/useFamilyStore";
import type { FamilyMember } from "../types/family.types";

type EditFamilyMemberDialogProps = {
  member: FamilyMember;
  onClose: () => void;
};

const relationOptions = [
  { label: "Father", value: "Father" },
  { label: "Mother", value: "Mother" },
  { label: "Brother", value: "Brother" },
  { label: "Sister", value: "Sister" },
  { label: "Spouse", value: "Spouse" },
  { label: "Son", value: "Son" },
  { label: "Daughter", value: "Daughter" },
  { label: "Other", value: "Other" },
];

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

export const EditFamilyMemberDialog = ({
  member,
  onClose,
}: EditFamilyMemberDialogProps) => {
  const updateMember = useFamilyStore((state) => state.updateMember);
  const [form, setForm] = useState<FamilyMember>(member);

  const handleUpdate = () => {
    if (!form.fullName.trim() || !form.mobile.trim() || form.age <= 0) {
      alert("Please fill all required fields.");
      return;
    }

    updateMember(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="w-full max-w-xl p-6">
        <h2 className="text-2xl font-black text-foreground">
          Edit Family Member
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <AppInput
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />

          <AppSelect
            value={form.relation}
            options={relationOptions}
            placeholder="Relation"
            onValueChange={(value) =>
              setForm({
                ...form,
                relation: value as FamilyMember["relation"],
              })
            }
          />

          <AppInput
            type="number"
            placeholder="Age"
            value={String(form.age || "")}
            onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
          />

          <AppSelect
            value={form.gender}
            options={genderOptions}
            placeholder="Gender"
            onValueChange={(value) =>
              setForm({
                ...form,
                gender: value as FamilyMember["gender"],
              })
            }
          />

          <AppInput
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />

          <AppInput
            placeholder="Blood Group"
            value={form.bloodGroup}
            onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <AppButton variant="outline" onClick={onClose}>
            Cancel
          </AppButton>

          <AppButton onClick={handleUpdate}>Update Member</AppButton>
        </div>
      </AppCard>
    </div>
  );
};