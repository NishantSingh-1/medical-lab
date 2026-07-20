import { create } from "zustand";
import type { SupportTicket } from "../types/helpSupport.types";

type HelpSupportStore = {
  tickets: SupportTicket[];

  addTicket: (ticket: SupportTicket) => void;
};

export const useHelpSupportStore = create<HelpSupportStore>((set) => ({
  tickets: [],

  addTicket: (ticket) =>
    set((state) => ({
      tickets: [...state.tickets, ticket],
    })),
}));