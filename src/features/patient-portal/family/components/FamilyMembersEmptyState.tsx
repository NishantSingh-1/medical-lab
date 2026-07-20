import { Users } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type FamilyMembersEmptyStateProps = {
  onAddClick: () => void;
};

export const FamilyMembersEmptyState = ({
  onAddClick,
}: FamilyMembersEmptyStateProps) => {
  return (
    <AppCard className="py-16 text-center">
      <Users className="mx-auto h-16 w-16 text-muted-foreground" />

      <h2 className="mt-5 text-2xl font-black text-foreground">
        No Family Members Added
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        Add your family members to book tests for them quickly.
      </p>

      <AppButton className="mt-6" onClick={onAddClick}>
        Add Family Member
      </AppButton>
    </AppCard>
  );
};