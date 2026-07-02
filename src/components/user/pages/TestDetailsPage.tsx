import { ArrowLeft, CalendarDays, Clock, FileText, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../common/Button";
import Card from "../../common/Card";
import Badge from "../../common/Badge";

const TestDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-primary mb-6 flex items-center gap-2 font-semibold"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <Card className="p-8">
        <h1 className="text-dark text-3xl font-bold">CBC Test</h1>

        <p className="mt-2 text-gray-500">Booking ID : BK-1001</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoCard title="Patient Details">
            <p>
              <b>Name :</b> Nishant Singh
            </p>
            <p className="mt-2">
              <b>Phone :</b> +91 7654129286
            </p>
            <p className="mt-2">
              <b>Age :</b> 25
            </p>
            <p className="mt-2">
              <b>Gender :</b> Male
            </p>
          </InfoCard>

          <InfoCard title="Appointment">
            <InfoRow icon={<CalendarDays />} text="26 June 2026" />
            <InfoRow icon={<Clock />} text="10:30 AM" />
            <InfoRow icon={<MapPin />} text="Home Sample Collection" />
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <InfoCard title="Payment">
            <p>Total Amount : ₹499</p>
            <Badge variant="success" className="mt-2">
              Paid
            </Badge>
          </InfoCard>

          <InfoCard title="Test Status">
            <Badge variant="warning">Sample Collection Pending</Badge>
          </InfoCard>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button className="flex items-center gap-2 rounded-xl px-6 py-3">
            <FileText size={18} />
            Download Report
          </Button>

          <Button className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700">
            Cancel Booking
          </Button>
        </div>
      </Card>
    </div>
  );
};

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="p-5">
      <h3 className="text-dark mb-4 text-lg font-bold">{title}</h3>
      <div className="text-sm text-gray-700">{children}</div>
    </Card>
  );
};

const InfoRow = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="mb-3 flex gap-2 last:mb-0">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default TestDetailsPage;