import { HeartPulse, ShieldAlert, Stethoscope } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppCard } from "@/components/common/AppCard";
import type { Profile } from "../types/profile.types";

type Props = {
  profile: Profile;
};

export const MedicalInfoCard = ({ profile }: Props) => {
  return (
    <AppCard>
      <h3 className="text-lg font-black text-foreground">Medical Information</h3>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <HeartPulse className="text-primary" size={20} />
            <p className="font-bold text-foreground">Blood Group</p>
          </div>
          <AppBadge className="mt-3">{profile.bloodGroup}</AppBadge>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="text-primary" size={20} />
            <p className="font-bold text-foreground">Allergies</p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {profile.allergies.length > 0 ? (
              profile.allergies.map((item) => <AppBadge key={item}>{item}</AppBadge>)
            ) : (
              <AppBadge variant="success">None</AppBadge>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Stethoscope className="text-primary" size={20} />
            <p className="font-bold text-foreground">Chronic Diseases</p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {profile.diseases.length > 0 ? (
              profile.diseases.map((item) => <AppBadge key={item}>{item}</AppBadge>)
            ) : (
              <AppBadge variant="success">None</AppBadge>
            )}
          </div>
        </div>
      </div>
    </AppCard>
  );
};