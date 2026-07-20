import { Check, Shield, Stethoscope, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useRoleStore } from "../store/useRoleStore";
import type {
  RoleOption,
  UserRole,
} from "../types/role.types";

const roles: RoleOption[] = [
  {
    id: "PATIENT",
    title: "Patient",
    description: "Book tests, track bookings and view reports.",
  },
  {
    id: "STAFF",
    title: "Lab Staff",
    description: "Manage appointments, collections and reports.",
  },
  {
    id: "ADMIN",
    title: "Administrator",
    description: "Manage the full MedLab platform.",
  },
];

const roleDashboard: Record<UserRole, string> = {
  PATIENT: "/dashboard",
  STAFF: "/staff/dashboard",
  ADMIN: "/admin/dashboard",
};

export const SwitchAccountPage = () => {
  const navigate = useNavigate();

  const selectedRole = useRoleStore((state) => state.role);
  const setRole = useRoleStore((state) => state.setRole);

  const handleSwitchRole = (role: UserRole) => {
    setRole(role);
    navigate(roleDashboard[role], { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5">
      <AppCard className="w-full max-w-2xl p-8">
        <h1 className="text-3xl font-black text-foreground">
          Switch Account
        </h1>

        <p className="mt-2 text-muted-foreground">
          Choose the profile or role you want to use.
        </p>

        <div className="mt-8 space-y-4">
          {roles.map((role) => {
            const isSelected = selectedRole === role.id;

            const Icon =
              role.id === "PATIENT"
                ? User
                : role.id === "STAFF"
                  ? Stethoscope
                  : Shield;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => handleSwitchRole(role.id)}
                className={`flex w-full items-center gap-4 rounded-xl border p-5 text-left transition ${
                  isSelected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/10"
                    : "border-border hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-black text-foreground">
                    {role.title}
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </div>

                {isSelected && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={16} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <AppButton
          type="button"
          variant="outline"
          className="mt-8 w-full"
          onClick={() => navigate(-1)}
        >
          Cancel
        </AppButton>
      </AppCard>
    </div>
  );
};