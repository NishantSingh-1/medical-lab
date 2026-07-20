import type { ReactNode } from "react";
import {
  Shield,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import type { UserRole } from "../types/auth.types";
import { useAuthStore } from "../store/useAuthStore";

const roles: Array<{
  role: UserRole;
  title: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    role: "USER",
    title: "Patient",
    description:
      "Book tests, view reports and manage your profile.",
    icon: <UserRound size={20} />,
  },
  {
    role: "MANAGER",
    title: "Manager",
    description:
      "Manage bookings, reports and lab operations.",
    icon: <UsersRound size={20} />,
  },
  {
    role: "ADMIN",
    title: "Admin",
    description:
      "Access system administration and settings.",
    icon: <Shield size={20} />,
  },
];

const roleRoutes: Record<UserRole, string> = {
  USER: "/dashboard",
  MANAGER: "/manager/dashboard",
  ADMIN: "/admin/dashboard",
};

export const RoleSelection = () => {
  const navigate = useNavigate();

  const reset = useAuthStore(
    (state) => state.reset
  );

  const handleRoleSelect = (
    role: UserRole
  ) => {
    navigate(roleRoutes[role], {
      replace: true,
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <AppBadge>
          Multi Role Access
        </AppBadge>

        <h3 className="mt-3 text-xl font-black text-foreground">
          Select your role
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose the account you want to continue with.
        </p>
      </div>

      <div className="space-y-3">
        {roles.map((item) => (
          <AppCard
            key={item.role}
            className="p-0 shadow-none transition hover:border-primary"
          >
            <button
              type="button"
              onClick={() =>
                handleRoleSelect(item.role)
              }
              className="flex w-full items-center gap-4 p-4 text-left"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                {item.icon}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-bold text-foreground">
                  {item.title}
                </span>

                <span className="mt-1 block text-sm text-muted-foreground">
                  {item.description}
                </span>
              </span>
            </button>
          </AppCard>
        ))}
      </div>

      <AppButton
        type="button"
        variant="ghost"
        onClick={reset}
        className="w-full text-primary hover:bg-transparent"
      >
        Back to Login
      </AppButton>
    </div>
  );
};