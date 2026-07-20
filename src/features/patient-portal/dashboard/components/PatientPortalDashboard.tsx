import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Download,
  FileText,
  Users,
} from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientStatCard } from "@/features/patient-portal/shared/components/PatientStatCard";
import { PatientSectionCard } from "@/features/patient-portal/shared/components/PatientSectionCard";

export const PatientPortalDashboard = () => {
  const navigate = useNavigate();

  const recentReports = [
    "CBC Report",
    "Thyroid Report",
    "Lipid Profile",
  ];

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Patient Dashboard"
        title="Welcome back, Nishant 👋"
        description="Track your appointments, reports and health records."
      />

      <AppCard className="bg-primary p-6 text-white shadow-none">
        <h2 className="text-2xl font-black">
          Your Health at a Glance
        </h2>

        <p className="mt-2 text-white/80">
          Manage bookings, reports and your complete health profile.
        </p>
      </AppCard>

      <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
        <PatientStatCard
          title="Total Bookings"
          value="12"
          icon={<CalendarDays size={22} />}
        />

        <PatientStatCard
          title="Reports"
          value="8"
          icon={<FileText size={22} />}
        />

        <PatientStatCard
          title="Pending Tests"
          value="2"
          icon={<Clock size={22} />}
        />

        <PatientStatCard
          title="Family Members"
          value="3"
          icon={<Users size={22} />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <PatientSectionCard
          title="Upcoming Appointment"
          description="Your next scheduled lab test."
        >
          <div className="rounded-xl border border-border p-4">
            <p className="font-bold text-foreground">
              Complete Blood Count (CBC)
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              26 June 2026 • 10:30 AM
            </p>

            <div className="mt-3">
              <AppBadge>Home Sample Collection</AppBadge>
            </div>

            <AppButton
              className="mt-4"
              onClick={() => navigate("/dashboard/bookings/details")}
            >
              View Details
            </AppButton>
          </div>
        </PatientSectionCard>

        <PatientSectionCard
          title="Recent Reports"
          description="Recently uploaded diagnostic reports."
          action={
            <AppButton
              variant="outline"
              onClick={() => navigate("/dashboard/reports")}
            >
              View All
            </AppButton>
          }
        >
          <div>
            {recentReports.map((report) => (
              <div
                key={report}
                className="flex items-center justify-between border-b border-border py-3 last:border-b-0"
              >
                <div>
                  <p className="font-semibold text-foreground">
                    {report}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Uploaded
                  </p>
                </div>

                <AppButton
                  type="button"
                  variant="ghost"
                  className="flex items-center gap-1 px-0 font-semibold text-primary hover:bg-transparent"
                  onClick={() =>
                    navigate("/dashboard/reports/viewer")
                  }
                >
                  <Download size={16} />
                  PDF
                </AppButton>
              </div>
            ))}
          </div>
        </PatientSectionCard>
      </div>
    </PatientPageContainer>
  );
};