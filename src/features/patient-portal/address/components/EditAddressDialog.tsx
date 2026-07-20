import { X } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";
import type { Address } from "../types/address.types";
import { useAddressStore } from "../store/useAddressStore";
import { AddressForm, type AddressFormValues } from "./AddressForm";

type EditAddressDialogProps = {
  address: Address;
  onClose: () => void;
};

export const EditAddressDialog = ({
  address,
  onClose,
}: EditAddressDialogProps) => {
  const updateAddress = useAddressStore((state) => state.updateAddress);

  const handleSubmit = (values: AddressFormValues) => {
    updateAddress({
      ...address,
      ...values,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <AppCard className="w-full max-w-xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-foreground">
            Edit Address
          </h2>

          <button type="button" onClick={onClose}>
            <X />
          </button>
        </div>

        <AddressForm
          initialValues={address}
          submitLabel="Update Address"
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </AppCard>
    </div>
  );
};