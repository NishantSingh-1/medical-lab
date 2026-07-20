import { type ReactNode } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  FileText,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "../../common/AppButton";
import { AppCard } from "../../common/AppCard";
import { AppBadge } from "../../common/AppBadge";

const TestDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <AppButton
        type="button"
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 p-0 text-primary hover:bg-transparent"
      >
        <ArrowLeft size={20} />
        Back
      </AppButton>

      <AppCard className="p-8">
        <h1 className="text-3xl font-bold text-foreground">
          CBC Test
        </h1>

        <p className="mt-2 text-muted-foreground">
          Booking ID : BK-1001
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoCard title="Patient Details">
            <p>
              <strong>Name :</strong> Nishant Singh
            </p>

            <p className="mt-2">
              <strong>Phone :</strong> +91 7654129286
            </p>

            <p className="mt-2">
              <strong>Age :</strong> 25
            </p>

            <p className="mt-2">
              <strong>Gender :</strong> Male
            </p>
          </InfoCard>

          <InfoCard title="Appointment">
            <InfoRow icon={<CalendarDays size={18} />} text="26 June 2026" />
            <InfoRow icon={<Clock size={18} />} text="10:30 AM" />
            <InfoRow
              icon={<MapPin size={18} />}
              text="Home Sample Collection"
            />
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <InfoCard title="Payment">
            <p>Total Amount : ₹499</p>

            <AppBadge
              variant="success"
              className="mt-2"
            >
              Paid
            </AppBadge>
          </InfoCard>

          <InfoCard title="Test Status">
            <AppBadge variant="warning">
              Sample Collection Pending
            </AppBadge>
          </InfoCard>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <AppButton className="flex items-center gap-2">
            <FileText size={18} />
            Download Report
          </AppButton>

          <AppButton
            variant="destructive"
            className="text-white"
          >
            Cancel Booking
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

const InfoCard = ({ title, children }: InfoCardProps) => (
  <AppCard className="p-5">
    <h3 className="mb-4 text-lg font-bold text-foreground">
      {title}
    </h3>

    <div className="space-y-2 text-sm text-muted-foreground">
      {children}
    </div>
  </AppCard>
);

type InfoRowProps = {
  icon: ReactNode;
  text: string;
};

const InfoRow = ({ icon, text }: InfoRowProps) => (
  <div className="flex items-center gap-3">
    <span className="text-primary">{icon}</span>
    <span>{text}</span>
  </div>
);

export default TestDetailsPage;