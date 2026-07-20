import { create } from "zustand";

import type {
  SupportMessage,
  SupportTicket,
} from "../types/supportTicket.types";

type SupportTicketStore = {
  tickets: SupportTicket[];
  selectedTicket: SupportTicket | null;

  addTicket: (ticket: SupportTicket) => void;
  selectTicket: (ticket: SupportTicket | null) => void;
  addMessage: (
    ticketId: string,
    message: SupportMessage
  ) => void;
};

export const useSupportTicketStore =
  create<SupportTicketStore>((set) => ({
    tickets: [],
    selectedTicket: null,

    addTicket: (ticket) =>
      set((state) => ({
        tickets: [ticket, ...state.tickets],
      })),

    selectTicket: (ticket) =>
      set({
        selectedTicket: ticket,
      }),

    addMessage: (ticketId, message) =>
      set((state) => {
        const updatedTickets = state.tickets.map((ticket) =>
          ticket.id === ticketId
            ? {
                ...ticket,
                messages: [...ticket.messages, message],
              }
            : ticket
        );

        const updatedSelectedTicket =
          state.selectedTicket?.id === ticketId
            ? {
                ...state.selectedTicket,
                messages: [
                  ...state.selectedTicket.messages,
                  message,
                ],
              }
            : state.selectedTicket;

        return {
          tickets: updatedTickets,
          selectedTicket: updatedSelectedTicket,
        };
      }),
  }));