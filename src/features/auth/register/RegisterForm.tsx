import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import {
  registerSchema,
  type RegisterFormData,
} from "../validations/auth.validation";

export const RegisterForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setServerError(null);

      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (data.email === "test@example.com") {
        throw new Error("An account with this email already exists.");
      }

      alert("Registration successful. Please verify your email.");
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <AppCard className="mx-auto w-full max-w-md p-6">
      <h2 className="text-2xl font-black text-foreground">Create Account</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Register to manage bookings and reports.
      </p>

      {serverError && (
        <div className="mt-5 rounded-xl border border-danger bg-danger-light p-3 text-sm font-semibold text-danger">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <AppInput placeholder="Full Name" {...register("fullName")} />
        {errors.fullName && (
          <p className="text-xs font-medium text-danger">
            {errors.fullName.message}
          </p>
        )}

        <AppInput type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-xs font-medium text-danger">
            {errors.email.message}
          </p>
        )}

        <AppInput
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs font-medium text-danger">
            {errors.password.message}
          </p>
        )}

        <AppInput
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-xs font-medium text-danger">
            {errors.confirmPassword.message}
          </p>
        )}

        <AppButton type="submit" loading={isSubmitting} className="w-full">
          Create Account
        </AppButton>
      </form>
    </AppCard>
  );
};