import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

import { useFeedbackStore } from "../store/useFeedbackStore";

export const FeedbackSuccessPage = () => {
  const navigate = useNavigate();

  const resetFeedback = useFeedbackStore(
    (state) => state.resetFeedback
  );

  const handleContinue = () => {
    resetFeedback();

    navigate("/dashboard");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Feedback"
        title="Thank You!"
        description="Your feedback has been submitted successfully."
      />

      <PatientSectionCard>
        <div className="flex flex-col items-center text-center py-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2
              size={52}
              className="text-green-600"
            />
          </div>

          <h2 className="mt-6 text-3xl font-black">
            Thank You
          </h2>

          <p className="mt-3 max-w-md text-muted-foreground">
            We appreciate your feedback. Your suggestions
            help us improve our diagnostic services.
          </p>

          <AppButton
            className="mt-8"
            onClick={handleContinue}
          >
            Back to Dashboard
          </AppButton>
        </div>
      </PatientSectionCard>
    </PatientPageContainer>
  );
};