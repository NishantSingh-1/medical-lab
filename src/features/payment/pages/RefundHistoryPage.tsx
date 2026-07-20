import { useEffect } from "react";

import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";

import { refundData } from "../data/refundData";

import { RefundCard } from "../components/RefundCard";

import { useRefundStore } from "../store/useRefundStore";

export const RefundHistoryPage = () => {
  const refunds = useRefundStore(
    (state) => state.refunds
  );

  const setRefunds = useRefundStore(
    (state) => state.setRefunds
  );

  useEffect(() => {
    setRefunds(refundData);
  }, [setRefunds]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Refunds"
        title="Refund History"
        description="Track refund progress."
      />

      <div className="space-y-5">
        {refunds.map((refund) => (
          <RefundCard
            key={refund.id}
            refund={refund}
          />
        ))}
      </div>
    </PatientPageContainer>
  );
};