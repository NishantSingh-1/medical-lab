import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Plus,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

import { useBookingStore } from "../store/useBookingStore";
import type { Address } from "../types/booking.types";
import { PincodeNotServiceable } from "./PincodeNotServiceable";

const SERVICEABLE_PINCODES = [
  "560001",
  "560002",
  "560034",
  "560102",
];

const initialAddresses: Address[] = [
  {
    id: "1",
    fullName: "Nishant Singh",
    mobile: "9876543210",
    address: "HSR Layout",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560102",
  },
];

const emptyAddress: Address = {
  id: "",
  fullName: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

export const AddressSelectionStep = () => {
  const {
    selectedAddress,
    setSelectedAddress,
    setStep,
    setError,
    setCollectionType,
  } = useBookingStore();

  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [address, setAddress] = useState<Address>(emptyAddress);
  const [serviceabilityChecked, setServiceabilityChecked] = useState(false);

  const isAddressServiceable = SERVICEABLE_PINCODES.includes(
    address.pincode
  );

  const resetForm = () => {
    setAddress(emptyAddress);
    setShowForm(false);
    setServiceabilityChecked(false);
    setError(null);
  };

  const updateAddressField = (
    field: keyof Address,
    value: string
  ) => {
    setAddress((current) => ({
      ...current,
      [field]: value,
    }));

    if (field === "pincode") {
      setServiceabilityChecked(false);
    }
  };

  const saveAddress = () => {
    const hasEmptyField =
      !address.fullName.trim() ||
      !address.mobile.trim() ||
      !address.address.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.pincode.trim();

    if (hasEmptyField) {
      setError("Please fill all fields.");
      return;
    }

    if (address.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (address.pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    setServiceabilityChecked(true);

    if (!isAddressServiceable) {
      setError(null);
      return;
    }

    const newAddress: Address = {
      ...address,
      id: crypto.randomUUID(),
    };

    setAddresses((current) => [...current, newAddress]);
    setSelectedAddress(newAddress);
    resetForm();
  };

  if (serviceabilityChecked && !isAddressServiceable) {
    return (
      <PincodeNotServiceable
        pincode={address.pincode}
        onWalkIn={() => {
          setCollectionType("LAB" as any);
          setError(null);
          setStep("SLOT");
        }}
        onChangeAddress={() => {
          setServiceabilityChecked(false);
          setError(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black text-foreground">
          Select Address
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose your sample collection address.
        </p>
      </div>

      <div className="space-y-4">
        {addresses.map((item) => {
          const isSelected = selectedAddress?.id === item.id;

          return (
            <AppCard
              key={item.id}
              onClick={() => {
                setSelectedAddress(item);
                setError(null);
              }}
              className={`cursor-pointer p-5 transition ${
                isSelected
                  ? "border-primary ring-2 ring-primary/10"
                  : "hover:border-primary/40"
              }`}
            >
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="font-black text-foreground">
                    {item.fullName}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.address}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {item.city}, {item.state} - {item.pincode}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-foreground">
                    +91 {item.mobile}
                  </p>
                </div>
              </div>
            </AppCard>
          );
        })}
      </div>

      {!showForm ? (
        <AppButton
          type="button"
          variant="outline"
          onClick={() => {
            setShowForm(true);
            setError(null);
          }}
        >
          <Plus size={18} />
          Add New Address
        </AppButton>
      ) : (
        <AppCard className="space-y-4 p-5 shadow-none">
          <div>
            <h3 className="text-lg font-black text-foreground">
              Add New Address
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Enter complete address details for home collection.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <AppInput
              placeholder="Full Name"
              value={address.fullName}
              onChange={(event) =>
                updateAddressField("fullName", event.target.value)
              }
            />

            <AppInput
              placeholder="Mobile Number"
              maxLength={10}
              value={address.mobile}
              onChange={(event) =>
                updateAddressField(
                  "mobile",
                  event.target.value.replace(/\D/g, "")
                )
              }
            />

            <AppInput
              placeholder="Address"
              value={address.address}
              onChange={(event) =>
                updateAddressField("address", event.target.value)
              }
              className="md:col-span-2"
            />

            <AppInput
              placeholder="City"
              value={address.city}
              onChange={(event) =>
                updateAddressField("city", event.target.value)
              }
            />

            <AppInput
              placeholder="State"
              value={address.state}
              onChange={(event) =>
                updateAddressField("state", event.target.value)
              }
            />

            <AppInput
              placeholder="Pincode"
              maxLength={6}
              value={address.pincode}
              onChange={(event) =>
                updateAddressField(
                  "pincode",
                  event.target.value.replace(/\D/g, "")
                )
              }
              className="md:col-span-2"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <AppButton type="button" onClick={saveAddress}>
              Save Address
            </AppButton>

            <AppButton
              type="button"
              variant="outline"
              onClick={resetForm}
            >
              Cancel
            </AppButton>
          </div>
        </AppCard>
      )}

      <div className="flex justify-between gap-3">
        <AppButton
          type="button"
          variant="outline"
          onClick={() => {
            setError(null);
            setStep("COLLECTION");
          }}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton
          type="button"
          disabled={!selectedAddress}
          onClick={() => {
            setError(null);
            setStep("SLOT");
          }}
        >
          Continue
          <ArrowRight size={18} />
        </AppButton>
      </div>
    </div>
  );
};