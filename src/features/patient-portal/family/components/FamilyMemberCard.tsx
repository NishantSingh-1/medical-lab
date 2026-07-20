import { Phone, User } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { FamilyMember } from "../types/family.types";

type Props = {
  member: FamilyMember;
  onEdit: (member: FamilyMember) => void;
  onDelete: (member: FamilyMember) => void;
};

export const FamilyMemberCard = ({
  member,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <AppCard className="p-5">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <User size={22} />
          </div>

          <div>
            <h3 className="font-black text-foreground">
              {member.fullName}
            </h3>

            <AppBadge className="mt-2">
              {member.relation}
            </AppBadge>
          </div>
        </div>

        <p className="text-xl font-black text-primary">
          {member.age}Y
        </p>
      </div>

      <div className="mt-5 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Phone size={15} />
          {member.mobile}
        </div>

        <div>
          Blood Group : {member.bloodGroup}
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <AppButton variant="outline" onClick={() => onEdit(member)}>
          Edit
        </AppButton>

        <AppButton variant="destructive" onClick={() => onDelete(member)}>
          Delete
        </AppButton>
      </div>
    </AppCard>
  );
};