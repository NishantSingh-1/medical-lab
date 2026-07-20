import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

import { RatingStars } from "../components/RatingStars";
import { useFeedbackStore } from "../store/useFeedbackStore";

export const FeedbackPage = () => {
  const navigate = useNavigate();

  const { feedback, updateFeedback } =
    useFeedbackStore();

  const handleSubmit = () => {
    if (feedback.overallRating === 0) {
      alert("Please provide your overall rating.");
      return;
    }

    navigate("/dashboard/feedback/success");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Feedback"
        title="Rate Your Experience"
        description="Help us improve our diagnostic services."
      />

      <PatientSectionCard
        title="Experience Survey"
        description="Please rate the following."
      >
        <div className="space-y-6">
          <RatingItem
            title="Overall Experience"
            value={feedback.overallRating}
            onChange={(value) =>
              updateFeedback("overallRating", value)
            }
          />

          <RatingItem
            title="Sample Collection"
            value={feedback.collectionRating}
            onChange={(value) =>
              updateFeedback("collectionRating", value)
            }
          />

          <RatingItem
            title="Staff Behaviour"
            value={feedback.staffRating}
            onChange={(value) =>
              updateFeedback("staffRating", value)
            }
          />

          <AppInput
            placeholder="Share your feedback..."
            value={feedback.comment}
            onChange={(e) =>
              updateFeedback("comment", e.target.value)
            }
          />

          <AppButton onClick={handleSubmit}>
            Submit Feedback
          </AppButton>
        </div>
      </PatientSectionCard>
    </PatientPageContainer>
  );
};

type RatingItemProps = {
  title: string;
  value: number;
  onChange: (value: number) => void;
};

const RatingItem = ({
  title,
  value,
  onChange,
}: RatingItemProps) => (
  <div>
    <h3 className="mb-3 font-bold">{title}</h3>

    <RatingStars
      value={value}
      onChange={onChange}
    />
  </div>
);