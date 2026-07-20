import { useMemo, useState } from "react";
import { ArrowLeft, Send, HelpCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";

import { useSupportTicketStore } from "../store/useSupportTicketStore";

export const SupportTicketDetailPage = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams();

  const [message, setMessage] = useState("");

  const tickets = useSupportTicketStore((state) => state.tickets);
  const selectedTicket = useSupportTicketStore(
    (state) => state.selectedTicket
  );
  const selectTicket = useSupportTicketStore(
    (state) => state.selectTicket
  );
  const addMessage = useSupportTicketStore(
    (state) => state.addMessage
  );

  const ticket = useMemo(() => {
    if (selectedTicket?.id === ticketId) {
      return selectedTicket;
    }

    return tickets.find((item) => item.id === ticketId) ?? null;
  }, [selectedTicket, ticketId, tickets]);

  if (!ticket) {
    return (
      <PatientPageContainer>
        <PatientEmptyState
          icon={<HelpCircle size={24} />}
          title="Support Ticket Not Found"
          description="The requested support ticket is unavailable."
          buttonText="Back to Help"
          onButtonClick={() => navigate("/dashboard/help")}
        />
      </PatientPageContainer>
    );
  }

  const handleSendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || ticket.status === "CLOSED") {
      return;
    }

    addMessage(ticket.id, {
      id: crypto.randomUUID(),
      sender: "PATIENT",
      message: trimmedMessage,
      sentAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setMessage("");
  };

  const statusVariant =
    ticket.status === "CLOSED"
      ? "success"
      : ticket.status === "IN_PROGRESS"
        ? "warning"
        : "primary";

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Support Ticket"
        title={ticket.subject}
        description={`${ticket.id} • ${ticket.category}`}
        action={
          <AppButton
            type="button"
            variant="outline"
            onClick={() => {
              selectTicket(null);
              navigate("/dashboard/help");
            }}
          >
            <ArrowLeft size={18} />
            Back
          </AppButton>
        }
      />

      <AppCard className="p-5 shadow-none">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">
              Created {ticket.createdAt}
            </p>

            <p className="mt-1 text-sm font-semibold text-foreground">
              Priority: {ticket.priority}
            </p>
          </div>

          <AppBadge variant={statusVariant}>
            {ticket.status.replace("_", " ")}
          </AppBadge>
        </div>
      </AppCard>

      <AppCard className="flex min-h-[480px] flex-col p-0 shadow-none">
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {ticket.messages.map((item) => {
            const isPatient = item.sender === "PATIENT";

            return (
              <div
                key={item.id}
                className={`flex ${isPatient ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 sm:max-w-[70%] ${isPatient
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground"
                    }`}
                >
                  <p className="text-sm leading-6">
                    {item.message}
                  </p>

                  <p
                    className={`mt-1 text-xs ${isPatient
                        ? "text-white/70"
                        : "text-muted-foreground"
                      }`}
                  >
                    {item.sender === "PATIENT"
                      ? "You"
                      : "Support"}{" "}
                    • {item.sentAt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border p-4">
          {ticket.status === "CLOSED" ? (
            <p className="text-center text-sm font-semibold text-muted-foreground">
              This support ticket is closed.
            </p>
          ) : (
            <div className="flex gap-3">
              <AppInput
                value={message}
                placeholder="Type your message..."
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSendMessage();
                  }
                }}
              />

              <AppButton
                type="button"
                disabled={!message.trim()}
                onClick={handleSendMessage}
              >
                <Send size={18} />
                Send
              </AppButton>
            </div>
          )}
        </div>
      </AppCard>
    </PatientPageContainer>
  );
};