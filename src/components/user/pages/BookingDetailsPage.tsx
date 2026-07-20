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

import { AppBadge } from "../../common/AppBadge";
import { AppButton } from "../../common/AppButton";
import { AppCard } from "../../common/AppCard";

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
    <div className="min-h-screen bg-background p-4 md:p-6">
      <AppButton
        type="button"
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-5 flex items-center gap-2 px-0 font-semibold text-primary hover:bg-transparent"
      >
        <ArrowLeft size={20} />
        Back
      </AppButton>

      <AppCard className="p-4 md:p-6">
        <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground md:text-2xl">
              CBC Test Booking
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Booking ID: BK-1001
            </p>
          </div>

          <AppBadge variant={isCancelled ? "warning" : "primary"}>
            {bookingStatus}
          </AppBadge>
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
            <p className="mt-2 text-sm text-muted-foreground">
              Home Sample Collection
            </p>
          </InfoCard>

          <InfoCard title="Payment">
            <p className="flex items-center gap-2">
              <CreditCard size={18} /> ₹499 Paid
            </p>
            <p className="mt-2 font-semibold text-success">
              Payment Successful
            </p>
          </InfoCard>
        </div>

        <AppCard className="mt-6 p-4 md:p-5">
          <h2 className="mb-5 font-bold text-foreground">Booking Progress</h2>

          <div className="space-y-5">
            {bookingSteps.map((step, index) => {
              const isCompleted = index === 0;

              return (
                <div key={step} className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-4 w-4 shrink-0 rounded-full ${
                      isCancelled
                        ? "bg-danger"
                        : isCompleted
                        ? "bg-primary"
                        : "bg-border"
                    }`}
                  />

                  <div>
                    <p
                      className={`font-semibold ${
                        isCancelled
                          ? "text-danger"
                          : isCompleted
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {isCancelled && index > 0 ? "Cancelled" : step}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {index === 0
                        ? "Your booking has been confirmed."
                        : "Status will update soon."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AppCard>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <AppButton
            onClick={() => navigate("/user/report-viewer")}
            className="flex w-full items-center justify-center gap-2 px-5 py-3"
          >
            <FileText size={18} />
            View Report
          </AppButton>

          <AppButton
            variant="secondary"
            onClick={handleDownloadInvoice}
            className="flex w-full items-center justify-center gap-2 px-5 py-3"
          >
            <Download size={18} />
            Invoice
          </AppButton>

          <AppButton
            variant="danger"
            onClick={() => setShowCancelModal(true)}
            disabled={isCancelled}
            className="w-full px-5 py-3"
          >
            Cancel Booking
          </AppButton>
        </div>
      </AppCard>

      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <AppCard className="w-full max-w-md p-5 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-foreground">
                Cancel Booking?
              </h2>

              <AppButton
                type="button"
                variant="ghost"
                onClick={() => setShowCancelModal(false)}
                className="rounded-full p-2 hover:bg-muted"
              >
                <X size={20} />
              </AppButton>
            </div>

            <p className="mt-3 text-muted-foreground">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <AppButton
                variant="danger"
                onClick={handleCancelBooking}
                className="px-5 py-3"
              >
                Yes, Cancel
              </AppButton>

              <AppButton
                variant="secondary"
                onClick={() => setShowCancelModal(false)}
                className="px-5 py-3"
              >
                Keep Booking
              </AppButton>
            </div>
          </AppCard>
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
    <AppCard className="p-4 md:p-5">
      <h2 className="mb-3 font-bold text-foreground">{title}</h2>
      <div className="space-y-2 text-sm text-foreground">{children}</div>
    </AppCard>
  );
};

export default BookingDetailsPage;