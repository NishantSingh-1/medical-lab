import { useState } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import { AppTextarea } from "@/components/common/AppTextarea";

export const RaiseTicketForm = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert("Support ticket submitted successfully.");

    setSubject("");
    setDescription("");
  };

  return (
    <AppCard className="p-6 shadow-none">
      <h2 className="text-xl font-black text-foreground">
        Raise Support Ticket
      </h2>

      <div className="mt-5 space-y-4">
        <AppInput
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <AppTextarea
          placeholder="Describe your issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <AppButton onClick={handleSubmit}>
          Submit Ticket
        </AppButton>
      </div>
    </AppCard>
  );
};