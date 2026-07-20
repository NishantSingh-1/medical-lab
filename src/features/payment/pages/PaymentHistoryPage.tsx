import { useEffect, useMemo, useState } from "react";
import { CreditCard, SearchX } from "lucide-react";

import { PatientEmptyState } from "../../patient-portal/shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../patient-portal/shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../patient-portal/shared/components/PatientSearchBar";
import { PatientStatCard } from "../../patient-portal/shared/components/PatientStatCard";

import { PaymentCard } from "../components/PaymentCard";
import { paymentData } from "../data/paymentData";
import { usePaymentHistoryStore } from "../store/usePaymentHistoryStore";

export const PaymentHistoryPage = () => {
  const [query, setQuery] = useState("");

  const payments = usePaymentHistoryStore(
    (state) => state.payments
  );

  const setPayments = usePaymentHistoryStore(
    (state) => state.setPayments
  );

  useEffect(() => {
    setPayments(paymentData);
  }, [setPayments]);

  const filteredPayments = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return payments;
    }

    return payments.filter((payment) =>
      `${payment.id} ${payment.bookingId} ${payment.invoiceId} ${payment.testName} ${payment.patientName}`
        .toLowerCase()
        .includes(search)
    );
  }, [payments, query]);

  const stats = useMemo(() => {
    return {
      total: payments.length,
      paid: payments.filter(
        (payment) => payment.status === "PAID"
      ).length,
      pending: payments.filter(
        (payment) => payment.status === "PENDING"
      ).length,
      refunded: payments.filter(
        (payment) => payment.status === "REFUNDED"
      ).length,
    };
  }, [payments]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Billing & Money"
        title="Payment History"
        description="View payments, transaction status and invoices."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <PatientStatCard title="Total" value={stats.total} />
        <PatientStatCard title="Paid" value={stats.paid} />
        <PatientStatCard title="Pending" value={stats.pending} />
        <PatientStatCard title="Refunded" value={stats.refunded} />
      </div>

      {payments.length === 0 ? (
        <PatientEmptyState
          icon={<CreditCard size={36} />}
          title="No Payments Found"
          description="Your payment and invoice history will appear here."
        />
      ) : (
        <>
          <PatientSearchBar
            value={query}
            placeholder="Search payment, booking, invoice or test..."
            onChange={setQuery}
          />

          {filteredPayments.length === 0 ? (
            <PatientEmptyState
              icon={<SearchX size={36} />}
              title="No Matching Payments"
              description="Try another payment ID, booking ID, invoice or test name."
              buttonText="Clear Search"
              onButtonClick={() => setQuery("")}
            />
          ) : (
            <div className="space-y-5">
              {filteredPayments.map((payment) => (
                <PaymentCard
                  key={payment.id}
                  payment={payment}
                />
              ))}
            </div>
          )}
        </>
      )}
    </PatientPageContainer>
  );
};