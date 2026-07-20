import { useEffect } from "react";

import { useProfileStore } from "../store/useProfileStore";

export const useProfile = () => {
  const setProfile = useProfileStore(
    (state) => state.setProfile
  );

  useEffect(() => {
    setProfile({
      id: "1",

      fullName: "Nishant Singh",

      email: "nishant@gmail.com",

      mobile: "+91 9876543210",

      gender: "Male",

      age: 24,

      city: "Bangalore",

      bloodGroup: "O+",

      allergies: ["Dust"],

      diseases: [],

      emergencyContact: "+91 9999999999",

      avatar: "",
    });

    // Later:
    // profileService.getProfile()
  }, [setProfile]);
};