import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";
import { AppInput } from "@/components/common/AppInput";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

export const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      alert("New password must be at least 8 characters.");
      return;
    }

    if (currentPassword === newPassword) {
      alert("New password must be different from current password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password changed successfully.");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    navigate("/dashboard/settings");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Security"
        title="Change Password"
        description="Update your account password securely."
      />

      <PatientSectionCard
        title="Password Details"
        description="Use at least 8 characters with letters and numbers."
      >
        <div className="mx-auto max-w-xl space-y-5">
          <PasswordField
            label="Current Password"
            value={currentPassword}
            visible={showCurrentPassword}
            placeholder="Enter current password"
            onChange={setCurrentPassword}
            onToggleVisibility={() =>
              setShowCurrentPassword((current) => !current)
            }
          />

          <PasswordField
            label="New Password"
            value={newPassword}
            visible={showNewPassword}
            placeholder="Enter new password"
            onChange={setNewPassword}
            onToggleVisibility={() =>
              setShowNewPassword((current) => !current)
            }
          />

          <PasswordField
            label="Confirm New Password"
            value={confirmPassword}
            visible={showConfirmPassword}
            placeholder="Confirm new password"
            onChange={setConfirmPassword}
            onToggleVisibility={() =>
              setShowConfirmPassword((current) => !current)
            }
          />

          <div className="rounded-xl border border-primary/20 bg-primary-light p-4">
            <div className="flex gap-3">
              <LockKeyhole className="shrink-0 text-primary" size={20} />

              <div>
                <p className="font-bold text-foreground">
                  Password requirements
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Use 8 or more characters. Avoid using your name, mobile
                  number or an old password.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <AppButton
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard/settings")}
            >
              Cancel
            </AppButton>

            <AppButton type="button" onClick={handleSubmit}>
              Change Password
            </AppButton>
          </div>
        </div>
      </PatientSectionCard>
    </PatientPageContainer>
  );
};

type PasswordFieldProps = {
  label: string;
  value: string;
  visible: boolean;
  placeholder: string;
  onChange: (value: string) => void;
  onToggleVisibility: () => void;
};

const PasswordField = ({
  label,
  value,
  visible,
  placeholder,
  onChange,
  onToggleVisibility,
}: PasswordFieldProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>

      <div className="relative">
        <AppInput
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="pr-12"
        />

        <button
          type="button"
          onClick={onToggleVisibility}
          aria-label={visible ? `Hide ${label}` : `Show ${label}`}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-primary"
        >
          {visible ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>
    </div>
  );
};