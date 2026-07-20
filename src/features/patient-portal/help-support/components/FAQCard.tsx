import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { AppCard } from "@/components/common/AppCard";

type FAQCardProps = {
  question: string;
  answer: string;
};

export const FAQCard = ({
  question,
  answer,
}: FAQCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AppCard className="overflow-hidden p-0 shadow-none">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between p-5 text-left transition hover:bg-muted/30"
      >
        <h3 className="pr-4 text-base font-bold text-foreground">
          {question}
        </h3>

        {expanded ? (
          <ChevronUp
            size={20}
            className="text-primary"
          />
        ) : (
          <ChevronDown
            size={20}
            className="text-muted-foreground"
          />
        )}
      </button>

      {expanded && (
        <div className="border-t border-border px-5 py-4">
          <p className="text-sm leading-7 text-muted-foreground">
            {answer}
          </p>
        </div>
      )}
    </AppCard>
  );
};