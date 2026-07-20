import { Camera, ShieldCheck, UserCircle2 } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";

type ProfileAvatarProps = {
  name: string;
  avatar?: string;
  onUploadClick: () => void;
};

export const ProfileAvatar = ({
  name,
  avatar,
  onUploadClick,
}: ProfileAvatarProps) => {
  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <UserCircle2 className="h-24 w-24 text-primary" />
        )}

        <AppButton
          type="button"
          size="icon"
          onClick={onUploadClick}
          className="absolute -bottom-1 -right-1 h-9 w-9 rounded-full"
        >
          <Camera size={16} />
        </AppButton>
      </div>

      <div>
        <h2 className="text-2xl font-black text-foreground">{name}</h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck size={16} className="text-primary" />
          Verified Patient
        </div>

        <div className="mt-3">
          <AppBadge>Patient Profile</AppBadge>
        </div>
      </div>
    </div>
  );
};