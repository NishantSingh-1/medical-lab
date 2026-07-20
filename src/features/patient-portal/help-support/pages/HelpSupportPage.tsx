import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";
import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { Phone, Mail, MessageCircle } from "lucide-react";

import { FAQCard } from "../components/FAQCard";
import { ContactCard } from "../components/ContactCard";
import { RaiseTicketForm } from "../components/RaiseTicketForm";
import { SupportInfoCard } from "../components/SupportInfoCard";
import { Plus, TicketCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";

import { useSupportTicketStore } from "../store/useSupportTicketStore";
import type { SupportTicket } from "../types/supportTicket.types";

import { faqData } from "../data/faqData";
import { useMemo, useState } from "react";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

const TicketCard = ({
  ticket,
  onOpen,
}: {
  ticket: SupportTicket;
  onOpen: (ticket: SupportTicket) => void;
}) => (
  <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <p className="text-sm font-semibold text-slate-900">
          {ticket.subject ?? `Ticket #${ticket.id}`}
        </p>
      </div>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
        {ticket.status ?? "Open"}
      </span>
    </div>
    <div className="mt-4 flex justify-end">
      <AppButton type="button" onClick={() => onOpen(ticket)}>
        View
      </AppButton>
    </div>
  </div>
);

export const HelpSupportPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const tickets = useSupportTicketStore(
    (state) => state.tickets
  );

  const selectTicket = useSupportTicketStore(
    (state) => state.selectTicket
  );

  const filteredFaqs = useMemo(() => {
    return faqData.filter((faq) =>
      `${faq.question} ${faq.answer}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Help Center"
        title="Help & Support"
        description="Need help? Browse FAQs or contact our support team."
      />

      <PatientSearchBar
        value={query}
        placeholder="Search FAQs..."
        onChange={setQuery}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <ContactCard
          icon={<Phone size={22} />}
          title="Call Support"
          value="+91 98765 43210"
        />

        <ContactCard
          icon={<Mail size={22} />}
          title="Email Support"
          value="support@medlab.com"
        />

        <ContactCard
          icon={<MessageCircle size={22} />}
          title="WhatsApp"
          value="+91 98765 43210"
        />
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <FAQCard
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

      <RaiseTicketForm />
      <PatientSectionCard
        title="Support Tickets"
        description="Raise a new ticket or continue an existing conversation."
        action={
          <AppButton
            type="button"
            onClick={() =>
              navigate("/dashboard/help/raise-ticket")
            }
          >
            <Plus size={18} />
            Raise Ticket
          </AppButton>
        }
      >
        {tickets.length === 0 ? (
          <PatientEmptyState
            icon={<TicketCheck size={36} />}
            title="No Support Tickets"
            description="You have not raised any support tickets yet."
            buttonText="Raise Ticket"
            onButtonClick={() =>
              navigate("/dashboard/help/raise-ticket")
            }
          />
        ) : (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onOpen={(selectedTicket: SupportTicket) => {
                  selectTicket(selectedTicket);

                  navigate(
                    `/dashboard/help/ticket/${selectedTicket.id}`
                  );
                }}
              />
            ))}
          </div>
        )}
      </PatientSectionCard>

      <SupportInfoCard />
    </PatientPageContainer>
  );
};