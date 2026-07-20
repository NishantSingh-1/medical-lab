import { Trash2 } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { Address } from "../types/address.types";
import { useAddressStore } from "../store/useAddressStore";

type DeleteAddressDialogProps = {
  address: Address;
  onClose: () => void;
};

export const DeleteAddressDialog = ({
  address,
  onClose,
}: DeleteAddressDialogProps) => {
  const deleteAddress = useAddressStore(
    (state) => state.deleteAddress
  );

  const handleDelete = () => {
    deleteAddress(address.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <AppCard className="w-full max-w-md p-6">
        <div className="flex flex-col items-center text-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <Trash2 className="text-red-600" size={28} />
          </div>

          <h2 className="mt-5 text-2xl font-black">
            Delete Address
          </h2>

          <p className="mt-3 text-muted-foreground">
            Are you sure you want to delete this address?
          </p>

          <p className="mt-2 font-bold">
            {address.fullName}
          </p>

          <div className="mt-8 flex w-full gap-3">

            <AppButton
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </AppButton>

            <AppButton
              className="flex-1"
              onClick={handleDelete}
            >
              Delete
            </AppButton>

          </div>

        </div>
      </AppCard>
    </div>
  );
};