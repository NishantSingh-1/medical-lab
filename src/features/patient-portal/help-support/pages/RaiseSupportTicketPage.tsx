import { useState } from "react";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";
import { AppTextarea } from "@/components/common/AppTextarea";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

import { useSupportTicketStore } from "../store/useSupportTicketStore";
import type {
  SupportTicket,
  SupportTicketPriority,
} from "../types/supportTicket.types";

export const RaiseSupportTicketPage = () => {
  const navigate = useNavigate();

  const addTicket = useSupportTicketStore(
    (state) => state.addTicket
  );

  const selectTicket = useSupportTicketStore(
    (state) => state.selectTicket
  );

  const [form, setForm] = useState({
    subject: "",
    category: "",
    description: "",
    priority: "MEDIUM" as SupportTicketPriority,
  });

  const handleSubmit = () => {
    if (
      !form.subject.trim() ||
      !form.category ||
      !form.description.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const ticket: SupportTicket = {
      id: `TKT-${Date.now()}`,
      subject: form.subject.trim(),
      category: form.category,
      description: form.description.trim(),
      priority: form.priority,
      status: "OPEN",
      createdAt: new Date().toLocaleString(),
      messages: [
        {
          id: crypto.randomUUID(),
          sender: "PATIENT",
          message: form.description.trim(),
          sentAt: new Date().toLocaleTimeString(),
        },
      ],
    };

    addTicket(ticket);
    selectTicket(ticket);

    navigate(`/dashboard/help/ticket/${ticket.id}`);
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Support"
        title="Raise Support Ticket"
        description="Tell us about your issue."
      />

      <PatientSectionCard
        title="Ticket Details"
        description="Provide complete information for faster help."
      >
        <div className="space-y-5">
          <AppInput
            placeholder="Subject"
            value={form.subject}
            onChange={(event) =>
              setForm({
                ...form,
                subject: event.target.value,
              })
            }
          />

          <select
            value={form.category}
            onChange={(event) =>
              setForm({
                ...form,
                category: event.target.value,
              })
            }
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold outline-none"
          >
            <option value="">Select category</option>
            <option value="BOOKING">Booking</option>
            <option value="PAYMENT">Payment</option>
            <option value="REPORT">Report</option>
            <option value="REFUND">Refund</option>
            <option value="ACCOUNT">Account</option>
            <option value="OTHER">Other</option>
          </select>

          <select
            value={form.priority}
            onChange={(event) =>
              setForm({
                ...form,
                priority:
                  event.target.value as SupportTicketPriority,
              })
            }
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold outline-none"
          >
            <option value="LOW">Low priority</option>
            <option value="MEDIUM">Medium priority</option>
            <option value="HIGH">High priority</option>
          </select>

          <AppTextarea
            rows={5}
            placeholder="Describe your issue..."
            value={form.description}
            onChange={(event) =>
              setForm({
                ...form,
                description: event.target.value,
              })
            }
          />

          <AppButton type="button" onClick={handleSubmit}>
            <Send size={18} />
            Submit Ticket
          </AppButton>
        </div>
      </PatientSectionCard>
    </PatientPageContainer>
  );
};