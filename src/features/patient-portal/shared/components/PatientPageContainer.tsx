import type { ReactNode } from "react";

type PatientPageContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PatientPageContainer = ({
  children,
  className = "",
}: PatientPageContainerProps) => {
  return (
    <section className="min-h-screen bg-background">
      <div className={`mx-auto w-full max-w-6xl space-y-6 ${className}`}>
        {children}
      </div>
    </section>
  );
};