import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Download,
  Home,
  MapPin,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { PatientEmptyState } from "@/features/patient-portal/shared/components/PatientEmptyState";
import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientSectionCard } from "@/features/patient-portal/shared/components/PatientSectionCard";

import { usePaymentStore } from "../store/usePaymentStore";

export const BookingConfirmation = () => {
  const navigate = useNavigate();
  const booking = usePaymentStore((state) => state.booking);

  if (!booking) {
    return (
      <PatientPageContainer>
        <PatientEmptyState
          icon={<CalendarDays size={36} />}
          title="Booking Not Found"
          description="We could not find the booking confirmation details."
          buttonText="View My Bookings"
          onButtonClick={() => navigate("/dashboard/bookings")}
        />
      </PatientPageContainer>
    );
  }

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Booking Confirmation"
        title="Booking Confirmed 🎉"
        description="Your lab test has been booked successfully."
      />

      <AppCard className="p-8 text-center shadow-none">
        <CheckCircle2
          size={72}
          className="mx-auto text-success"
        />

        <AppBadge variant="success" className="mt-5">
          Booking ID: {booking.bookingId}
        </AppBadge>

        <p className="mt-4 text-sm text-muted-foreground">
          Keep your booking ID safe for tracking and support.
        </p>
      </AppCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <PatientSectionCard
          title="Booking Details"
          description="Patient and collection information."
        >
          <div className="space-y-5">
            <BookingDetailRow
              icon={<User size={20} />}
              label="Patient"
              value={booking.patientName}
            />

            <BookingDetailRow
              icon={<CalendarDays size={20} />}
              label="Collection Slot"
              value={booking.slot}
            />

            <BookingDetailRow
              icon={<MapPin size={20} />}
              label="Address"
              value={booking.address}
            />

            <BookingDetailRow
              icon={<CreditCard size={20} />}
              label="Payment Method"
              value={booking.paymentMethod}
            />
          </div>
        </PatientSectionCard>

        <PatientSectionCard
          title="Payment Summary"
          description="Final payment information."
        >
          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <span className="font-bold text-foreground">
              Amount Paid
            </span>

            <span className="text-3xl font-black text-primary">
              ₹{booking.amount}
            </span>
          </div>

          <div className="mt-5 flex justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-xl border-2 border-dashed border-primary text-sm font-black text-primary">
              QR CODE
            </div>
          </div>
        </PatientSectionCard>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <AppButton
          onClick={() => alert("Invoice download will connect with backend API")}
        >
          <Download size={18} />
          Download Invoice
        </AppButton>

        <AppButton
          variant="outline"
          onClick={() => navigate("/dashboard/bookings")}
        >
          Track Booking
        </AppButton>
      </div>

      <AppButton
        fullWidth
        variant="ghost"
        onClick={() => navigate("/dashboard")}
      >
        <Home size={18} />
        Back To Dashboard
      </AppButton>
    </PatientPageContainer>
  );
};

const BookingDetailRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex gap-3">
      <div className="mt-1 text-primary">{icon}</div>

      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
};