export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type SupportTicket = {
  id: string;
  subject: string;
  category: string;
  description: string;
  status: "OPEN" | "CLOSED";
};