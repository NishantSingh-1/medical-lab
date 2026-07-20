import { create } from "zustand";
import type { Address } from "../types/address.types";

type AddressStore = {
  addresses: Address[];

  setAddresses: (addresses: Address[]) => void;

  addAddress: (address: Address) => void;

  updateAddress: (address: Address) => void;

  deleteAddress: (id: string) => void;
};

export const useAddressStore = create<AddressStore>((set) => ({
  addresses: [],

  setAddresses: (addresses) =>
    set({
      addresses,
    }),

  addAddress: (address) =>
    set((state) => ({
      addresses: [...state.addresses, address],
    })),

  updateAddress: (updatedAddress) =>
    set((state) => ({
      addresses: state.addresses.map((address) =>
        address.id === updatedAddress.id ? updatedAddress : address
      ),
    })),

  deleteAddress: (id) =>
    set((state) => ({
      addresses: state.addresses.filter(
        (address) => address.id !== id
      ),
    })),
}));