import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

import { RatingStars } from "../components/RatingStars";
import { usePhlebotomistRatingStore } from "../store/usePhlebotomistRatingStore";

export const RatePhlebotomistPage = () => {
  const navigate = useNavigate();

  const { rating, update, reset } =
    usePhlebotomistRatingStore();

  const handleSubmit = () => {
    if (rating.rating === 0) {
      alert("Please provide a rating.");
      return;
    }

    alert("Thank you for rating our phlebotomist.");

    reset();

    navigate("/dashboard");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Feedback"
        title="Rate Phlebotomist"
        description="Tell us about your sample collection experience."
      />

      <PatientSectionCard
        title="Sample Collection Feedback"
        description="Your feedback helps improve service quality."
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <UserRound
                size={30}
                className="text-primary"
              />
            </div>

            <div>
              <h3 className="text-lg font-black">
                {rating.phlebotomistName}
              </h3>

              <p className="text-sm text-muted-foreground">
                Phlebotomist
              </p>
            </div>
          </div>

          <RatingStars
            value={rating.rating}
            onChange={(value) =>
              update("rating", value)
            }
          />

          <AppInput
            placeholder="Write your experience..."
            value={rating.comment}
            onChange={(e) =>
              update("comment", e.target.value)
            }
          />

          <AppButton onClick={handleSubmit}>
            Submit Rating
          </AppButton>
        </div>
      </PatientSectionCard>
    </PatientPageContainer>
  );
};