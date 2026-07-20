import { useState } from "react";
import {
  Shield,
  Stethoscope,
  User,
} from "lucide-react";
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
    description: "Book tests and manage reports.",
  },
  {
    id: "STAFF",
    title: "Lab Staff",
    description: "Manage appointments and reports.",
  },
  {
    id: "ADMIN",
    title: "Administrator",
    description: "Full system management.",
  },
];

export const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] =
    useState<UserRole>("PATIENT");

  const setRole = useRoleStore(
    (state) => state.setRole
  );

  const handleContinue = () => {
    setRole(selectedRole);

    switch (selectedRole) {
      case "PATIENT":
        navigate("/dashboard");
        break;

      case "STAFF":
        navigate("/staff/dashboard");
        break;

      case "ADMIN":
        navigate("/admin/dashboard");
        break;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5">
      <AppCard className="w-full max-w-2xl p-8">
        <h1 className="text-3xl font-black">
          Choose Your Role
        </h1>

        <p className="mt-2 text-muted-foreground">
          Select the role you want to continue with.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {roles.map((role) => {
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
                onClick={() =>
                  setSelectedRole(role.id)
                }
                className={`rounded-xl border p-6 text-left transition ${
                  selectedRole === role.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <Icon
                  size={34}
                  className="text-primary"
                />

                <h3 className="mt-4 font-black">
                  {role.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {role.description}
                </p>
              </button>
            );
          })}
        </div>

        <AppButton
          className="mt-8 w-full"
          onClick={handleContinue}
        >
          Continue
        </AppButton>
      </AppCard>
    </div>
  );
};