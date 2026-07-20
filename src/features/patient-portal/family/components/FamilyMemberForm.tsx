import { useState } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";
import { AppSelect } from "@/components/common/AppSelect";

import type { FamilyMember } from "../types/family.types";

export type FamilyMemberFormValues = Omit<FamilyMember, "id">;

type FamilyMemberFormProps = {
  initialValues?: FamilyMember;
  submitLabel: string;
  onSubmit: (values: FamilyMemberFormValues) => void;
  onCancel: () => void;
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

export const FamilyMemberForm = ({
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
}: FamilyMemberFormProps) => {
  const [form, setForm] = useState<FamilyMemberFormValues>({
    fullName: initialValues?.fullName ?? "",
    relation: initialValues?.relation ?? "Father",
    age: initialValues?.age ?? 0,
    gender: initialValues?.gender ?? "Male",
    mobile: initialValues?.mobile ?? "",
    bloodGroup: initialValues?.bloodGroup ?? "O+",
  });

  const handleSubmit = () => {
    if (!form.fullName.trim() || !form.mobile.trim() || form.age <= 0) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
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
          onChange={(e) =>
            setForm({
              ...form,
              age: Number(e.target.value),
            })
          }
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
          maxLength={10}
          onChange={(e) =>
            setForm({
              ...form,
              mobile: e.target.value.replace(/\D/g, ""),
            })
          }
        />

        <AppInput
          placeholder="Blood Group"
          value={form.bloodGroup}
          onChange={(e) =>
            setForm({
              ...form,
              bloodGroup: e.target.value,
            })
          }
        />
      </div>

      <div className="flex justify-end gap-3">
        <AppButton variant="outline" onClick={onCancel}>
          Cancel
        </AppButton>

        <AppButton onClick={handleSubmit}>{submitLabel}</AppButton>
      </div>
    </div>
  );
};