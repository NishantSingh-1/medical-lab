import { Mail, MapPin, Phone, User, VenusAndMars } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";
import type { Profile } from "../types/profile.types";

type PersonalInfoCardProps = {
  profile: Profile;
};

export const PersonalInfoCard = ({ profile }: PersonalInfoCardProps) => {
  const infoItems = [
    {
      label: "Full Name",
      value: profile.fullName,
      icon: User,
    },
    {
      label: "Mobile",
      value: profile.mobile,
      icon: Phone,
    },
    {
      label: "Email",
      value: profile.email,
      icon: Mail,
    },
    {
      label: "Gender / Age",
      value: `${profile.gender}, ${profile.age}`,
      icon: VenusAndMars,
    },
    {
      label: "City",
      value: profile.city,
      icon: MapPin,
    },
  ];

  return (
    <AppCard className="p-6">
      <h3 className="text-lg font-black text-foreground">
        Personal Information
      </h3>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {infoItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-xs font-semibold text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AppCard>
  );
};