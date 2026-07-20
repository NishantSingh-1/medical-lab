import { MapPinOff } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type PincodeNotServiceableProps = {
  pincode?: string;
  onWalkIn: () => void;
  onChangeAddress: () => void;
};

export const PincodeNotServiceable = ({
  pincode,
  onWalkIn,
  onChangeAddress,
}: PincodeNotServiceableProps) => {
  return (
    <AppCard className="p-8 text-center shadow-none">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-danger/10 text-danger">
        <MapPinOff size={30} />
      </div>

      <h2 className="mt-5 text-2xl font-black text-foreground">
        Home Collection Not Available
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        We currently do not provide home sample collection
        {pincode ? ` for pincode ${pincode}` : " in this area"}.
      </p>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <AppButton onClick={onWalkIn}>
          Choose Lab Visit
        </AppButton>

        <AppButton variant="outline" onClick={onChangeAddress}>
          Change Address
        </AppButton>
      </div>
    </AppCard>
  );
};