import { ArrowLeft, Download, Printer, ReceiptText } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { PatientEmptyState } from "../../patient-portal/shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../patient-portal/shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../patient-portal/shared/components/PatientSectionCard";

import { paymentData } from "../data/paymentData";
import { PaymentStatusBadge } from "../components/PaymentStatusBadge";
import { usePaymentHistoryStore } from "../store/usePaymentHistoryStore";

export const InvoicePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedPayment = usePaymentHistoryStore(
    (state) => state.selectedPayment
  );

  const payment =
    selectedPayment?.invoiceId === id
      ? selectedPayment
      : paymentData.find((item) => item.invoiceId === id);

  if (!payment) {
    return (
      <PatientPageContainer>
        <PatientEmptyState
          icon={<ReceiptText size={36} />}
          title="Invoice Not Found"
          description="We could not find the requested invoice."
          buttonText="Back to Payments"
          onButtonClick={() => navigate("/dashboard/payments")}
        />
      </PatientPageContainer>
    );
  }

  const subtotal = payment.amount;
  const discount = 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal - discount + gst;

  const handleDownload = () => {
    alert(`Downloading invoice ${payment.invoiceId}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Invoice"
        title={`Invoice ${payment.invoiceId}`}
        description="View payment, patient and billing details."
        action={
          <AppButton
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/payments")}
          >
            <ArrowLeft size={18} />
            Back
          </AppButton>
        }
      />

      <AppCard className="p-6 shadow-none print:border-0 print:shadow-none">
        <div className="flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-black text-primary">
              MedLab
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Diagnostic Services
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Invoice Number
            </p>

            <p className="font-bold text-foreground">
              {payment.invoiceId}
            </p>
          </div>

          <div className="text-left md:text-right">
            <PaymentStatusBadge status={payment.status} />

            <p className="mt-4 text-sm text-muted-foreground">
              Payment Date
            </p>

            <p className="font-bold text-foreground">
              {payment.paymentDate}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Payment ID
            </p>

            <p className="font-bold text-foreground">
              {payment.id}
            </p>
          </div>
        </div>

        <div className="grid gap-6 border-b border-border py-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Bill To
            </p>

            <h3 className="mt-2 text-lg font-black text-foreground">
              {payment.patientName}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Booking ID: {payment.bookingId}
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Payment Method
            </p>

            <p className="mt-2 font-bold text-foreground">
              {payment.paymentMethod.replace("_", " ")}
            </p>
          </div>
        </div>

        <div className="py-6">
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-[1fr_auto] gap-4 bg-muted/40 px-4 py-3 text-sm font-bold text-foreground">
              <span>Description</span>
              <span>Amount</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4 px-4 py-4">
              <div>
                <p className="font-bold text-foreground">
                  {payment.testName}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Diagnostic lab test
                </p>
              </div>

              <p className="font-bold text-foreground">
                ₹{subtotal}
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto max-w-md space-y-3 border-t border-border pt-6">
          <SummaryRow label="Subtotal" value={`₹${subtotal}`} />
          <SummaryRow label="Discount" value={`- ₹${discount}`} />
          <SummaryRow label="GST (5%)" value={`₹${gst}`} />

          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-lg font-black text-foreground">
              Total
            </span>

            <span className="text-3xl font-black text-primary">
              ₹{total}
            </span>
          </div>
        </div>
      </AppCard>

      <PatientSectionCard
        title="Invoice Actions"
        description="Download or print a copy of your invoice."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <AppButton type="button" onClick={handleDownload}>
            <Download size={18} />
            Download Invoice
          </AppButton>

          <AppButton
            type="button"
            variant="outline"
            onClick={handlePrint}
          >
            <Printer size={18} />
            Print Invoice
          </AppButton>
        </div>
      </PatientSectionCard>
    </PatientPageContainer>
  );
};

type SummaryRowProps = {
  label: string;
  value: string;
};

const SummaryRow = ({
  label,
  value,
}: SummaryRowProps) => {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-muted-foreground">
        {label}
      </span>

      <span className="font-bold text-foreground">
        {value}
      </span>
    </div>
  );
};