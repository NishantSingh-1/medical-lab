import { useState } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";
import type { Address, AddressType } from "../types/address.types";

export type AddressFormValues = {
  fullName: string;
  mobile: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  type: AddressType;
  isDefault: boolean;
};

type AddressFormProps = {
  initialValues?: Partial<Address>;
  submitLabel: string;
  onSubmit: (values: AddressFormValues) => void;
  onCancel: () => void;
};

const addressTypes: AddressType[] = ["HOME", "WORK", "OTHER"];

export const AddressForm = ({
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
}: AddressFormProps) => {
  const [formValues, setFormValues] = useState<AddressFormValues>({
    fullName: initialValues?.fullName ?? "",
    mobile: initialValues?.mobile ?? "",
    addressLine1: initialValues?.addressLine1 ?? "",
    addressLine2: initialValues?.addressLine2 ?? "",
    city: initialValues?.city ?? "",
    state: initialValues?.state ?? "",
    pincode: initialValues?.pincode ?? "",
    type: initialValues?.type ?? "HOME",
    isDefault: initialValues?.isDefault ?? false,
  });

  const updateField = <K extends keyof AddressFormValues>(
    field: K,
    value: AddressFormValues[K]
  ) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const isInvalid =
      !formValues.fullName ||
      !formValues.mobile ||
      !formValues.addressLine1 ||
      !formValues.city ||
      !formValues.state ||
      !formValues.pincode;

    if (isInvalid) {
      alert("Please fill all required fields");
      return;
    }

    if (formValues.mobile.replace(/\D/g, "").length < 10) {
      alert("Please enter valid mobile number");
      return;
    }

    if (formValues.pincode.length !== 6) {
      alert("Please enter valid 6 digit pincode");
      return;
    }

    onSubmit(formValues);
  };

  return (
    <div className="space-y-4">
      <AppInput
        placeholder="Full Name"
        value={formValues.fullName}
        onChange={(event) => updateField("fullName", event.target.value)}
      />

      <AppInput
        placeholder="Mobile Number"
        value={formValues.mobile}
        maxLength={10}
        onChange={(event) =>
          updateField("mobile", event.target.value.replace(/\D/g, ""))
        }
      />

      <AppInput
        placeholder="Address Line 1"
        value={formValues.addressLine1}
        onChange={(event) => updateField("addressLine1", event.target.value)}
      />

      <AppInput
        placeholder="Address Line 2 (optional)"
        value={formValues.addressLine2}
        onChange={(event) => updateField("addressLine2", event.target.value)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <AppInput
          placeholder="City"
          value={formValues.city}
          onChange={(event) => updateField("city", event.target.value)}
        />

        <AppInput
          placeholder="State"
          value={formValues.state}
          onChange={(event) => updateField("state", event.target.value)}
        />
      </div>

      <AppInput
        placeholder="Pincode"
        value={formValues.pincode}
        maxLength={6}
        onChange={(event) =>
          updateField("pincode", event.target.value.replace(/\D/g, ""))
        }
      />

      <div>
        <p className="mb-2 text-sm font-semibold text-foreground">
          Address Type
        </p>

        <div className="grid grid-cols-3 gap-3">
          {addressTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateField("type", type)}
              className={`rounded-xl border px-4 py-3 text-sm font-bold transition ${
                formValues.type === type
                  ? "border-primary bg-primary-light text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4">
        <input
          type="checkbox"
          checked={formValues.isDefault}
          onChange={(event) => updateField("isDefault", event.target.checked)}
          className="h-4 w-4 accent-primary"
        />

        <span className="text-sm font-semibold text-foreground">
          Set as default address
        </span>
      </label>

      <div className="flex justify-end gap-3 pt-2">
        <AppButton variant="outline" onClick={onCancel}>
          Cancel
        </AppButton>

        <AppButton onClick={handleSubmit}>{submitLabel}</AppButton>
      </div>
    </div>
  );
};