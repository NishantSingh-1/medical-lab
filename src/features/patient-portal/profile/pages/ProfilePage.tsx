import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";

import { PatientLoading } from "@/features/patient-portal/shared/components/PatientLoading";
import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientSectionCard } from "@/features/patient-portal/shared/components/PatientSectionCard";

import { useProfile } from "../hooks/useProfile";
import { useProfileStore } from "../store/useProfileStore";

import { MedicalInfoCard } from "../components/MedicalInfoCard";
import { PersonalInfoCard } from "../components/PersonalInfoCard";
import { ProfileAvatar } from "../components/ProfileAvatar";

export const ProfilePage = () => {
  useProfile();

  const navigate = useNavigate();
  const profile = useProfileStore((state) => state.profile);

  if (!profile) {
    return (
      <PatientPageContainer>
        <PatientLoading text="Loading profile..." />
      </PatientPageContainer>
    );
  }

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Profile"
        title="My Profile"
        description="Manage your personal and medical information."
        action={
          <AppButton onClick={() => navigate("/dashboard/profile/edit")}>
            <Pencil size={18} />
            Edit Profile
          </AppButton>
        }
      />

      <PatientSectionCard>
        <ProfileAvatar
          name={profile.fullName}
          avatar={profile.avatar}
          onUploadClick={() => console.log("Upload avatar")}
        />
      </PatientSectionCard>

      <PersonalInfoCard profile={profile} />

      <MedicalInfoCard profile={profile} />
    </PatientPageContainer>
  );
};