import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  FileText,
  Users,
  Clock,
  Download,
} from "lucide-react";

import { AppButton } from "../../common/AppButton";
import { AppCard } from "../../common/AppCard";
import { AppBadge } from "../../common/AppBadge";

import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientStatCard } from "@/features/patient-portal/shared/components/PatientStatCard";
import { PatientSectionCard } from "@/features/patient-portal/shared/components/PatientSectionCard";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Bookings", value: "12", icon: <CalendarDays /> },
    { title: "Reports", value: "8", icon: <FileText /> },
    { title: "Pending Tests", value: "2", icon: <Clock /> },
    { title: "Family Members", value: "3", icon: <Users /> },
  ];

  const reports = ["CBC Report", "Thyroid Report", "Lipid Profile"];

  return (
    <PatientPageContainer>
      <PatientPageHeader
  badge="Patient Dashboard"
  title="Welcome back, Nishant 👋"
  description="Track your appointments, reports and health records."
/>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <AppCard key={stat.title} className="p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
              {stat.icon}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{stat.title}</p>
            <h2 className="mt-1 text-3xl font-bold text-foreground">
              {stat.value}
            </h2>
          </AppCard>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
  <PatientStatCard
    title="Bookings"
    value="12"
  />

  <PatientStatCard
    title="Reports"
    value="8"
  />

  <PatientStatCard
    title="Pending"
    value="2"
  />

  <PatientStatCard
    title="Family"
    value="3"
  />
</div>

        <PatientSectionCard
  title="Upcoming Appointment"
  description="Your next scheduled lab visit."
>
          <h3 className="mb-4 text-lg font-bold text-foreground">
            Recent Reports
          </h3>

          {reports.map((report) => (
            <div
              key={report}
              className="flex items-center justify-between border-b border-border py-3 last:border-b-0"
            >
              <div>
                <p className="font-semibold text-foreground">{report}</p>
                <p className="text-sm text-muted-foreground">Uploaded</p>
              </div>

              <AppButton
                type="button"
                variant="ghost"
                onClick={() => navigate("/dashboard/reports/viewer")}
                className="flex items-center gap-1 px-0 font-semibold text-primary hover:bg-transparent"
              >
                <Download size={16} />
                PDF
              </AppButton>
            </div>
          ))}
       </PatientSectionCard>
      </div>
    </PatientPageContainer>
  );
};

export default PatientDashboard;