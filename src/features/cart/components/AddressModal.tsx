import { useState } from "react";
import { X } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

type AddressForm = {
  fullName: string;
  mobile: string;
  houseNumber: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
};

type AddressModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (address: AddressForm) => void;
};

const initialAddress: AddressForm = {
  fullName: "",
  mobile: "",
  houseNumber: "",
  street: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
};

export const AddressModal = ({
  open,
  onClose,
  onSave,
}: AddressModalProps) => {
  const [formData, setFormData] = useState(initialAddress);

  if (!open) {
    return null;
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    onSave(formData);
    setFormData(initialAddress);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card shadow-xl">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="text-xl font-black text-foreground">
              Add New Address
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Enter your home collection address.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 p-5 sm:grid-cols-2"
        >
          <AddressInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <AddressInput
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <AddressInput
            label="House / Flat Number"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            required
          />

          <AddressInput
            label="Street / Area"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />

          <AddressInput
            label="Landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
          />

          <AddressInput
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <AddressInput
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />

          <AddressInput
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

          <div className="flex justify-end gap-3 sm:col-span-2">
            <AppButton
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </AppButton>

            <AppButton type="submit">
              Save Address
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  );
};

type AddressInputProps = {
  label: string;
  name: keyof AddressForm;
  value: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const AddressInput = ({
  label,
  name,
  value,
  required = false,
  onChange,
}: AddressInputProps) => {
  return (
    <label className="space-y-2">
      <span className="text-sm font-bold text-foreground">
        {label}
      </span>

      <input
        type="text"
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary"
      />
    </label>
  );
};