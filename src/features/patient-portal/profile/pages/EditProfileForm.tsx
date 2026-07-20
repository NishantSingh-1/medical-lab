import { useState } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import { AppSelect } from "@/components/common/AppSelect";

import type { Profile } from "../types/profile.types";

type EditProfileFormProps = {
  profile: Profile;
  onCancel: () => void;
  onSave: (profile: Profile) => void;
};

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

const bloodGroupOptions = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

export const EditProfileForm = ({
  profile,
  onCancel,
  onSave,
}: EditProfileFormProps) => {
  const [formData, setFormData] = useState<Profile>(profile);

  const updateField = <K extends keyof Profile>(field: K, value: Profile[K]) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert("Please fill required fields");
      return;
    }

    onSave(formData);
  };

  return (
    <AppCard className="p-6">
      <h2 className="text-2xl font-black text-foreground">Edit Profile</h2>

      <p className="mt-1 text-sm text-muted-foreground">
        Update your personal and medical information.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <AppInput
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
        />

        <AppInput
          placeholder="Email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
        />

        <AppInput
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(event) => updateField("mobile", event.target.value)}
        />

        <AppSelect
          value={formData.gender}
          onValueChange={(value) => updateField("gender", value)}
          placeholder="Select Gender"
          options={genderOptions}
        />

        <AppInput
          placeholder="Age"
          value={String(formData.age)}
          onChange={(event) =>
            updateField("age", Number(event.target.value.replace(/\D/g, "")))
          }
        />

        <AppInput
          placeholder="City"
          value={formData.city}
          onChange={(event) => updateField("city", event.target.value)}
        />

        <AppSelect
          value={formData.bloodGroup}
          onValueChange={(value) => updateField("bloodGroup", value)}
          placeholder="Select Blood Group"
          options={bloodGroupOptions}
        />

        <AppInput
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={(event) =>
            updateField("emergencyContact", event.target.value)
          }
        />
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <AppButton variant="outline" onClick={onCancel}>
          Cancel
        </AppButton>

        <AppButton onClick={handleSave}>Save Changes</AppButton>
      </div>
    </AppCard>
  );
};