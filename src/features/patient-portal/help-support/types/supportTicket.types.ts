export type SupportTicketStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "CLOSED";

export type SupportTicketPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export type SupportMessage = {
  id: string;
  sender: "PATIENT" | "SUPPORT";
  message: string;
  sentAt: string;
};

export type SupportTicket = {
  id: string;
  subject: string;
  category: string;
  description: string;
  priority: SupportTicketPriority;
  status: SupportTicketStatus;
  createdAt: string;
  messages: SupportMessage[];
};