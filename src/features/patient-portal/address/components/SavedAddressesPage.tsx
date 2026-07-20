import { useState } from "react";
import { MapPinned, Plus } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientEmptyState } from "../../shared/components/PatientEmptyState";

import { useAddress } from "../hooks/useAddress";
import { useAddressStore } from "../store/useAddressStore";
import type { Address } from "../types/address.types";

import { AddressCard } from "./AddressCard";
import { AddAddressDialog } from "./AddAddressDialog";
import { EditAddressDialog } from "./EditAddressDialog";
import { DeleteAddressDialog } from "./DeleteAddressDialog";

export const SavedAddressesPage = () => {
  useAddress();

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [deletingAddress, setDeletingAddress] = useState<Address | null>(null);

  const addresses = useAddressStore((state) => state.addresses);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Addresses"
        title="Saved Addresses"
        description="Manage your saved sample collection addresses."
        action={
          <AppButton onClick={() => setShowAddDialog(true)}>
            <Plus size={18} />
            Add Address
          </AppButton>
        }
      />

      {addresses.length === 0 ? (
        <PatientEmptyState
          icon={<MapPinned size={36} />}
          title="No Address Found"
          description="Please add your first sample collection address."
          buttonText="Add Address"
          onButtonClick={() => setShowAddDialog(true)}
        />
      ) : (
        <div className="space-y-5">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              onEdit={setEditingAddress}
              onDelete={setDeletingAddress}
            />
          ))}
        </div>
      )}

      {showAddDialog && (
        <AddAddressDialog onClose={() => setShowAddDialog(false)} />
      )}

      {editingAddress && (
        <EditAddressDialog
          address={editingAddress}
          onClose={() => setEditingAddress(null)}
        />
      )}

      {deletingAddress && (
        <DeleteAddressDialog
          address={deletingAddress}
          onClose={() => setDeletingAddress(null)}
        />
      )}
    </PatientPageContainer>
  );
};