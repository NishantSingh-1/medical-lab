import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  KeyRound,
  Languages,
  RotateCcw,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { ConfirmDialog } from "../../shared/components/ConfirmDialog";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

import { useSettingsStore } from "../store/useSettingsStore";
import type { PatientSettings } from "../types/settings.types";

export const SettingsPage = () => {
  const navigate = useNavigate();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const settings = useSettingsStore((state) => state.settings);
  const updateSetting = useSettingsStore(
    (state) => state.updateSetting
  );
  const resetSettings = useSettingsStore(
    (state) => state.resetSettings
  );

  const handleSave = () => {
    alert("Settings saved successfully.");
  };

  const handleDeleteAccount = () => {
    setShowDeleteDialog(false);

    alert(
      "Account deletion request submitted successfully."
    );

    navigate("/signin");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Preferences"
        title="Settings"
        description="Manage notifications, language, privacy and account security."
        action={
          <AppButton
            type="button"
            variant="outline"
            onClick={resetSettings}
          >
            <RotateCcw size={18} />
            Reset
          </AppButton>
        }
      />

      <PatientSectionCard
        title="Notification Preferences"
        description="Choose which health and account updates you want to receive."
      >
        <div className="space-y-3">
          <SettingToggle
            title="Email Notifications"
            description="Receive booking and account updates by email."
            checked={settings.emailNotifications}
            onChange={(value) =>
              updateSetting("emailNotifications", value)
            }
          />

          <SettingToggle
            title="SMS Notifications"
            description="Receive important updates on your mobile number."
            checked={settings.smsNotifications}
            onChange={(value) =>
              updateSetting("smsNotifications", value)
            }
          />

          <SettingToggle
            title="Booking Reminders"
            description="Get reminders before your scheduled sample collection."
            checked={settings.bookingReminders}
            onChange={(value) =>
              updateSetting("bookingReminders", value)
            }
          />

          <SettingToggle
            title="Report Alerts"
            description="Get notified when a diagnostic report becomes available."
            checked={settings.reportAlerts}
            onChange={(value) =>
              updateSetting("reportAlerts", value)
            }
          />

          <SettingToggle
            title="Marketing Updates"
            description="Receive health package offers and promotional updates."
            checked={(settings as any).marketingUpdates ?? false}
            onChange={(value) =>
              updateSetting(
                "marketingUpdates" as keyof PatientSettings,
                value
              )
            }
          />
        </div>
      </PatientSectionCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <PatientSectionCard
          title="Language"
          description="Choose your preferred portal language."
        >
          <div className="flex items-center gap-3">
            <Languages
              className="shrink-0 text-primary"
              size={22}
            />

            <select
              value={settings.language}
              onChange={(event) =>
                updateSetting(
                  "language",
                  event.target
                    .value as PatientSettings["language"]
                )
              }
              className="h-11 flex-1 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </PatientSectionCard>

        <PatientSectionCard
          title="Privacy"
          description="Control visibility of your patient profile."
        >
          <SettingToggle
            title="Profile Visibility"
            description="Allow your profile details to be used during bookings."
            checked={(settings as any).profileVisibility ?? false}
            onChange={(value) =>
              updateSetting("profileVisibility" as keyof PatientSettings, value as any)
            }
          />
        </PatientSectionCard>
      </div>

      <PatientSectionCard
        title="Security"
        description="Manage your password and registered mobile number."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() =>
              navigate("/dashboard/settings/change-password")
            }
            className="flex items-center gap-4 rounded-xl border border-border p-4 text-left transition hover:border-primary/40 hover:bg-primary/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <KeyRound size={20} />
            </div>

            <div>
              <p className="font-bold text-foreground">
                Change Password
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Update your account password securely.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/change-mobile")}
            className="flex items-center gap-4 rounded-xl border border-border p-4 text-left transition hover:border-primary/40 hover:bg-primary/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="font-bold text-foreground">
                Change Mobile Number
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Verify OTP and update your registered number.
              </p>
            </div>
          </button>
        </div>
      </PatientSectionCard>

      <PatientSectionCard
        title="Danger Zone"
        description="Account deletion is a permanent action."
      >
        <div className="rounded-xl border border-danger/30 bg-danger/10 p-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-danger/10 text-danger">
                <Trash2 size={20} />
              </div>

              <div>
                <h3 className="font-black text-danger">
                  Delete Account
                </h3>

                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Permanently delete your MedLab account and
                  request removal of all associated personal data.
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <AppButton
              type="button"
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 size={18} />
              Delete Account
            </AppButton>
          </div>
        </div>
      </PatientSectionCard>

      <AppCard className="flex flex-col gap-4 p-5 shadow-none md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
            <ShieldCheck size={20} />
          </div>

          <div>
            <h3 className="font-black text-foreground">
              Save Settings
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Apply your latest notification, language and
              privacy preferences.
            </p>
          </div>
        </div>

        <AppButton type="button" onClick={handleSave}>
          <Bell size={18} />
          Save Changes
        </AppButton>
      </AppCard>

      {showDeleteDialog && (
        <ConfirmDialog
          danger
          title="Delete Account?"
          description="Your account and associated data will be permanently deleted. This action cannot be undone."
          confirmText="Delete Account"
          cancelText="Keep Account"
          onCancel={() => setShowDeleteDialog(false)}
          onConfirm={handleDeleteAccount}
        />
      )}
    </PatientPageContainer>
  );
};

type SettingToggleProps = {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const SettingToggle = ({
  title,
  description,
  checked,
  onChange,
}: SettingToggleProps) => {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border p-4 transition hover:border-primary/40">
      <div>
        <p className="font-bold text-foreground">
          {title}
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) =>
          onChange(event.target.checked)
        }
        className="h-5 w-5 shrink-0 accent-primary"
      />
    </label>
  );
};