import { X } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";
import { AddressForm, type AddressFormValues } from "./AddressForm";
import { useAddressStore } from "../store/useAddressStore";

type AddAddressDialogProps = {
  onClose: () => void;
};

export const AddAddressDialog = ({ onClose }: AddAddressDialogProps) => {
  const addAddress = useAddressStore((state) => state.addAddress);

  const handleSubmit = (values: AddressFormValues) => {
    addAddress({
      id: Date.now().toString(),
      ...values,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <AppCard className="w-full max-w-xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-foreground">Add Address</h2>

          <button type="button" onClick={onClose}>
            <X />
          </button>
        </div>

        <AddressForm
          submitLabel="Save Address"
          onSubmit={handleSubmit}
          onCancel={onClose}
        />
      </AppCard>
    </div>
  );
};