import { useEffect } from "react";

import { useAddressStore } from "../store/useAddressStore";

export const useAddress = () => {
  const setAddresses = useAddressStore((state) => state.setAddresses);

  useEffect(() => {
    setAddresses([
      {
        id: "1",
        fullName: "Nishant Singh",
        mobile: "+91 9876543210",
        addressLine1: "HSR Layout",
        addressLine2: "Near Metro Station",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560102",
        type: "HOME",
        isDefault: true,
      },
    ]);
  }, [setAddresses]);
};