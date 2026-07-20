import { useNavigate } from "react-router-dom";

import { AppCard } from "@/components/common/AppCard";
import { useProfile } from "../hooks/useProfile";
import { useProfileStore } from "../store/useProfileStore";
import { EditProfileForm } from "../pages/EditProfileForm";
import type { Profile } from "../types/profile.types";

export const EditProfilePage = () => {
  useProfile();

  const navigate = useNavigate();
  const profile = useProfileStore((state) => state.profile);
  const updateProfile = useProfileStore((state) => state.updateProfile);

  if (!profile) {
    return (
      <AppCard className="p-10 text-center">
        Loading Profile...
      </AppCard>
    );
  }

  const handleSave = (updatedProfile: Profile) => {
    updateProfile(updatedProfile);
    navigate("/dashboard/profile");
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <EditProfileForm
        profile={profile}
        onCancel={() => navigate("/dashboard/profile")}
        onSave={handleSave}
      />
    </div>
  );
};