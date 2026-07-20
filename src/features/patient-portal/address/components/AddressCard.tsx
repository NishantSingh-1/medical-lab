import { Edit, MapPin, Trash2 } from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { Address } from "../types/address.types";

type AddressCardProps = {
  address: Address;

  onEdit?: (address: Address) => void;

  onDelete?: (address: Address) => void;

  showActions?: boolean;

  showType?: boolean;

  showDefaultBadge?: boolean;
};
export const AddressCard = ({
  address,
  onEdit,
  onDelete,
  showActions = true,
  showType = true,
  showDefaultBadge = true,
}: AddressCardProps) => {
  return (
    <AppCard className="p-5">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <MapPin className="mt-1 text-primary" size={22} />

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-black">{address.fullName}</h3>

              {showType && <AppBadge>{address.type}</AppBadge>}

              {address.isDefault && showDefaultBadge && (
                <AppBadge variant="success">
                  Default
                </AppBadge>
              )}
            </div>

            <p className="mt-2 font-semibold">
              {address.mobile}
            </p>

            <p className="text-muted-foreground mt-2">
              {address.addressLine1}
            </p>

            {address.addressLine2 && (
              <p className="text-muted-foreground">
                {address.addressLine2}
              </p>
            )}

            <p className="text-muted-foreground">
              {address.city}, {address.state}
            </p>

            <p className="text-muted-foreground">
              {address.pincode}
            </p>
          </div>
        </div>

       {showActions && (
  <div className="flex gap-2">
    <AppButton
      size="icon"
      variant="outline"
      onClick={() => onEdit?.(address)}
    >
      <Edit size={16} />
    </AppButton>

    <AppButton
      size="icon"
      variant="outline"
      onClick={() => onDelete?.(address)}
    >
      <Trash2 size={16} />
    </AppButton>
  </div>
)}
      </div>
    </AppCard>
  );
};