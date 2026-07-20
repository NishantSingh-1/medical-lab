import { Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useSessionStore } from "./store/useSessionStore";

export const SessionModals = () => {
  const navigate = useNavigate();

  const sessionExpired = useSessionStore(
    (state) => state.sessionExpired
  );

  const closeSessionExpired = useSessionStore(
    (state) => state.closeSessionExpired
  );

  if (!sessionExpired) {
    return null;
  }

  const handleLoginAgain = () => {
    closeSessionExpired();

    localStorage.removeItem("token");
    sessionStorage.clear();

    navigate("/signin", {
      replace: true,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <AppCard className="w-full max-w-md p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-warning/10 text-warning">
          <Clock3 size={30} />
        </div>

        <h2 className="mt-5 text-2xl font-black text-foreground">
          Session Expired
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Your session has expired for security reasons. Please sign in again
          to continue.
        </p>

        <AppButton
          type="button"
          className="mt-7 w-full"
          onClick={handleLoginAgain}
        >
          Sign In Again
        </AppButton>
      </AppCard>
    </div>
  );
};