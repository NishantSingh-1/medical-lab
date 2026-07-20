import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSectionCard } from "../../shared/components/PatientSectionCard";

const trackingSteps = [
  {
    title: "Booking Confirmed",
    description: "Your sample collection is scheduled.",
    completed: true,
  },
  {
    title: "Phlebotomist Assigned",
    description: "Rahul Kumar has been assigned.",
    completed: true,
  },
  {
    title: "On the Way",
    description: "Expected arrival in approximately 18 minutes.",
    completed: true,
  },
  {
    title: "Arrived",
    description: "The phlebotomist will confirm after reaching your address.",
    completed: false,
  },
  {
    title: "Sample Collected",
    description: "Sample collection is pending.",
    completed: false,
  },
];

export const LiveTrackingPage = () => {
  const navigate = useNavigate();

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Live Tracking"
        title="Track Phlebotomist"
        description="Track your home sample collection in real time."
        action={
          <AppButton
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/bookings")}
          >
            <ArrowLeft size={18} />
            Back
          </AppButton>
        }
      />

      <AppCard className="overflow-hidden p-0 shadow-none">
        <div className="relative flex min-h-[360px] items-center justify-center bg-muted">
          <div className="absolute inset-0 opacity-60">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg">
              <Navigation size={34} />
            </div>

            <h2 className="mt-5 text-2xl font-black text-foreground">
              Live Map Preview
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Google Maps/WebSocket integration Sprint 3 me connect hogi.
            </p>
          </div>

          <div className="absolute left-[25%] top-[35%] flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg">
            <MapPin size={24} />
          </div>

          <div className="absolute right-[20%] top-[48%] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            <Navigation size={22} />
          </div>
        </div>

        <div className="grid gap-4 border-t border-border p-5 md:grid-cols-3">
          <TrackingInfo
            icon={<Clock3 size={20} />}
            label="Estimated Arrival"
            value="18 minutes"
          />

          <TrackingInfo
            icon={<MapPin size={20} />}
            label="Distance"
            value="3.2 km away"
          />

          <TrackingInfo
            icon={<Navigation size={20} />}
            label="Current Status"
            value="On the Way"
          />
        </div>
      </AppCard>

      <PatientSectionCard
        title="Assigned Phlebotomist"
        description="Contact your assigned collection professional."
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
              <UserRound size={30} />
            </div>

            <div>
              <h3 className="text-lg font-black text-foreground">
                Rahul Kumar
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Certified Phlebotomist
              </p>

              <div className="mt-2">
                <AppBadge variant="success">
                  Verified
                </AppBadge>
              </div>
            </div>
          </div>

          <AppButton
            type="button"
            variant="outline"
            onClick={() => {
              window.location.href = "tel:+919876543210";
            }}
          >
            <Phone size={18} />
            Call
          </AppButton>
        </div>
      </PatientSectionCard>

      <PatientSectionCard
        title="Collection Progress"
        description="Follow each stage of your collection journey."
      >
        <div className="space-y-1">
          {trackingSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              {index < trackingSteps.length - 1 && (
                <div
                  className={`absolute left-5 top-10 h-[calc(100%-1rem)] w-0.5 ${
                    step.completed ? "bg-primary" : "bg-border"
                  }`}
                />
              )}

              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  step.completed
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <CheckCircle2 size={19} />
              </div>

              <div className="pt-1">
                <h4 className="font-bold text-foreground">
                  {step.title}
                </h4>

                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PatientSectionCard>

      <AppCard className="p-5 shadow-none">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Collection Verification OTP
            </p>

            <p className="mt-1 text-2xl font-black tracking-[0.3em] text-primary">
              482913
            </p>
          </div>

          <p className="max-w-md text-sm text-muted-foreground">
            Share this OTP only after the phlebotomist reaches your address.
          </p>
        </div>
      </AppCard>
    </PatientPageContainer>
  );
};

type TrackingInfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const TrackingInfo = ({
  icon,
  label,
  value,
}: TrackingInfoProps) => {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border p-4">
      <div className="text-primary">{icon}</div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 font-black text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
};