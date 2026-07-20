import {
  CalendarDays,
  CreditCard,
  FileText,
  ReceiptText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { usePaymentHistoryStore } from "../store/usePaymentHistoryStore";
import type { PaymentItem } from "../types/payment.types";
import { PaymentStatusBadge } from "./PaymentStatusBadge";

type PaymentCardProps = {
  payment: PaymentItem;
};

const paymentMethodLabel = {
  UPI: "UPI",
  CARD: "Card",
  CASH: "Cash",
  NET_BANKING: "Net Banking",
} as const;

export const PaymentCard = ({
  payment,
}: PaymentCardProps) => {
  const navigate = useNavigate();

  const setSelectedPayment = usePaymentHistoryStore(
    (state) => state.setSelectedPayment
  );

  const handleViewInvoice = () => {
    setSelectedPayment(payment);

    navigate(
      `/dashboard/payments/invoice/${payment.invoiceId}`
    );
  };

  return (
    <AppCard className="p-5 shadow-none transition hover:border-primary/40">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-black text-foreground">
              {payment.testName}
            </h3>

            <PaymentStatusBadge status={payment.status} />
          </div>

          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            Payment ID: {payment.id}
          </p>

          <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 xl:grid-cols-4">
            <InfoItem
              icon={<FileText size={16} />}
              label="Booking"
              value={payment.bookingId}
            />

            <InfoItem
              icon={<ReceiptText size={16} />}
              label="Invoice"
              value={payment.invoiceId}
            />

            <InfoItem
              icon={<CalendarDays size={16} />}
              label="Date"
              value={payment.paymentDate}
            />

            <InfoItem
              icon={<CreditCard size={16} />}
              label="Method"
              value={paymentMethodLabel[payment.paymentMethod]}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
          <p className="text-2xl font-black text-primary">
            ₹{payment.amount}
          </p>

          <AppButton
            type="button"
            variant="outline"
            onClick={handleViewInvoice}
          >
            <ReceiptText size={17} />
            View Invoice
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const InfoItem = ({
  icon,
  label,
  value,
}: InfoItemProps) => {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 text-primary">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide">
          {label}
        </p>

        <p className="truncate text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
};