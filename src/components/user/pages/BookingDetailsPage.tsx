import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  CreditCard,
  FileText,
  Download,
  X,
} from "lucide-react";

import Button from "../../common/Button";
import Card from "../../common/Card";
import Badge from "../../common/Badge";

const bookingSteps = [
  "Booking Confirmed",
  "Sample Collection Pending",
  "Lab Processing",
  "Report Ready",
];

const BookingDetailsPage = () => {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [bookingStatus, setBookingStatus] = useState("Upcoming");

  const isCancelled = bookingStatus === "Cancelled";

  const handleDownloadInvoice = () => {
    alert("Invoice download started");
  };

  const handleCancelBooking = () => {
    setBookingStatus("Cancelled");
    setShowCancelModal(false);
    alert("Booking cancelled successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-primary mb-5 flex items-center gap-2 font-semibold"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <Card className="p-4 md:p-6">
        <div className="flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-dark text-xl font-bold md:text-2xl">
              CBC Test Booking
            </h1>
            <p className="mt-1 text-sm text-gray-500">Booking ID: BK-1001</p>
          </div>

          <Badge variant={isCancelled ? "warning" : "primary"}>
            {bookingStatus}
          </Badge>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <InfoCard title="Patient Details">
            <p>
              <b>Name:</b> Nishant Singh
            </p>
            <p>
              <b>Age:</b> 25
            </p>
            <p>
              <b>Gender:</b> Male
            </p>
            <p>
              <b>Mobile:</b> +91 9876543210
            </p>
          </InfoCard>

          <InfoCard title="Appointment">
            <p className="flex items-center gap-2">
              <CalendarDays size={18} /> 26 Jun 2026
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Clock size={18} /> 10:30 AM
            </p>
          </InfoCard>

          <InfoCard title="Collection Address">
            <p className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              Bangalore, Karnataka
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Home Sample Collection
            </p>
          </InfoCard>

          <InfoCard title="Payment">
            <p className="flex items-center gap-2">
              <CreditCard size={18} /> ₹499 Paid
            </p>
            <p className="mt-2 font-semibold text-emerald-600">
              Payment Successful
            </p>
          </InfoCard>
        </div>

        <Card className="mt-6 p-4 md:p-5">
          <h2 className="text-dark mb-5 font-bold">Booking Progress</h2>

          <div className="space-y-5">
            {bookingSteps.map((step, index) => {
              const isCompleted = index === 0;

              return (
                <div key={step} className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-4 w-4 shrink-0 rounded-full ${
                      isCancelled
                        ? "bg-red-400"
                        : isCompleted
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                  />

                  <div>
                    <p
                      className={`font-semibold ${
                        isCancelled
                          ? "text-red-600"
                          : isCompleted
                          ? "text-primary"
                          : "text-gray-500"
                      }`}
                    >
                      {isCancelled && index > 0 ? "Cancelled" : step}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {index === 0
                        ? "Your booking has been confirmed."
                        : "Status will update soon."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Button
            onClick={() => navigate("/user/report-viewer")}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3"
          >
            <FileText size={18} />
            View Report
          </Button>

          <Button
            variant="secondary"
            onClick={handleDownloadInvoice}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3"
          >
            <Download size={18} />
            Invoice
          </Button>

          <Button
            onClick={() => setShowCancelModal(true)}
            disabled={isCancelled}
            className={`w-full rounded-xl px-5 py-3 ${
              isCancelled
                ? "cursor-not-allowed bg-gray-200 text-gray-400 hover:bg-gray-200"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            Cancel Booking
          </Button>
        </div>
      </Card>

      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <Card className="w-full max-w-md p-5 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-dark text-xl font-bold">Cancel Booking?</h2>

              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-3 text-gray-500">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button
                onClick={handleCancelBooking}
                className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
              >
                Yes, Cancel
              </Button>

              <Button
                variant="secondary"
                onClick={() => setShowCancelModal(false)}
                className="rounded-xl px-5 py-3"
              >
                Keep Booking
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Card className="p-4 md:p-5">
      <h2 className="text-dark mb-3 font-bold">{title}</h2>
      <div className="space-y-2 text-sm text-gray-700">{children}</div>
    </Card>
  );
};

export default BookingDetailsPage;