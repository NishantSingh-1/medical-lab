import { create } from "zustand";

import type { FamilyMember } from "../types/family.types";

type FamilyStore = {
  members: FamilyMember[];
  selectedMember: FamilyMember | null;

  setMembers: (members: FamilyMember[]) => void;
  addMember: (member: FamilyMember) => void;
  updateMember: (member: FamilyMember) => void;
  deleteMember: (id: string) => void;
  selectMember: (member: FamilyMember | null) => void;
};

export const useFamilyStore = create<FamilyStore>((set) => ({
  members: [],
  selectedMember: null,

  setMembers: (members) => set({ members }),

  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),

  updateMember: (member) =>
    set((state) => ({
      members: state.members.map((item) =>
        item.id === member.id ? member : item
      ),
    })),

  deleteMember: (id) =>
    set((state) => ({
      members: state.members.filter((item) => item.id !== id),
    })),

  selectMember: (member) =>
    set({
      selectedMember: member,
    }),
}));