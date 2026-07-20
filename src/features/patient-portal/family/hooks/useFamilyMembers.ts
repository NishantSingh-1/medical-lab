import { useEffect } from "react";

import { useFamilyStore } from "../store/useFamilyStore";

export const useFamilyMembers = () => {
  const members = useFamilyStore((state) => state.members);
  const setMembers = useFamilyStore((state) => state.setMembers);

  useEffect(() => {
    if (members.length === 0) {
     
    }
  }, [members.length, setMembers]);

  return {
    members,
  };
};