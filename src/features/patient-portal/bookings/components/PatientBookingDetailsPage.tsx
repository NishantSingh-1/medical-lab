import { useState } from "react";
import {
  CalendarDays,
  Clock,
  CreditCard,
  MapPin,
  User,
  FileText,
  Navigation,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { BookingTimeline } from "./BookingTimeline";
import { PhlebotomistTracking } from "./PhlebotomistTracking";
import { CancelBookingDialog } from "./CancelBookingDialog";
import { useBookingTrackingStore } from "../store/useBookingTrackingStore";
import { RescheduleBookingDialog } from "./RescheduleBookingDialog";

export const PatientBookingDetailsPage = () => {
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showRescheduleDialog, setShowRescheduleDialog] = useState(false);

  const booking = useBookingTrackingStore((state) => state.selectedBooking);
  const updateBookingStatus = useBookingTrackingStore(
    (state) => state.updateBookingStatus
  );
  const navigate = useNavigate();

  if (!booking) {
    return (
      <AppCard className="p-10 text-center">
        <h2 className="text-xl font-black text-foreground">
          Booking not found
        </h2>
      </AppCard>
    );
  }

  return (
    <div className="space-y-6">
      <AppCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-foreground">
              Booking Details
            </h1>
            <p className="mt-1 text-muted-foreground">{booking.id}</p>
          </div>

          <AppBadge>{booking.status}</AppBadge>
        </div>
      </AppCard>

      <AppCard>
        <h3 className="text-lg font-black text-foreground">Patient Details</h3>

        <div className="mt-5 space-y-4 text-foreground">
          <div className="flex gap-3">
            <User className="text-primary" />
            <span>{booking.patientName}</span>
          </div>

          <div className="flex gap-3">
            <CalendarDays className="text-primary" />
            <span>{booking.date}</span>
          </div>

          <div className="flex gap-3">
            <Clock className="text-primary" />
            <span>{booking.time}</span>
          </div>

          <div className="flex gap-3">
            <MapPin className="text-primary" />
            <span>{booking.address}</span>
          </div>
        </div>
      </AppCard>

      <AppCard>
        <h3 className="text-lg font-black text-foreground">Test Details</h3>

        <div className="mt-5 flex items-center justify-between">
          <span>{booking.testName}</span>
          <span className="font-black text-primary">₹{booking.amount}</span>
        </div>
      </AppCard>

      <AppCard>
        <h3 className="text-lg font-black text-foreground">Payment</h3>

        <div className="mt-5 flex gap-3">
          <CreditCard className="text-primary" />
          <span>Paid Online</span>
        </div>
      </AppCard>

      <BookingTimeline />

      <PhlebotomistTracking />

      <div className="grid gap-3 md:grid-cols-3">
        <AppButton>Track Booking</AppButton>

        <AppButton variant="outline">
          <FileText size={18} />
          Invoice
        </AppButton>

        <AppButton
          variant="destructive"
          onClick={() => setShowCancelDialog(true)}
          disabled={booking.status === "CANCELLED"}
        >
          Cancel Booking
        </AppButton>
        <AppButton
          type="button"
          onClick={() => navigate("/dashboard/bookings/tracking")}
        >
          <Navigation size={18} />
          Track Phlebotomist
        </AppButton>

        <AppButton
          variant="outline"
          onClick={() => setShowRescheduleDialog(true)}
          disabled={booking.status === "CANCELLED"}
        >
          Reschedule
        </AppButton>
      </div>

      {showCancelDialog && (
        <CancelBookingDialog
          onClose={() => setShowCancelDialog(false)}
          onConfirm={(reason, note) => {
            console.log("Cancel reason:", reason);
            console.log("Cancel note:", note);

            updateBookingStatus(booking.id, "CANCELLED");
            setShowCancelDialog(false);
            alert("Booking cancelled successfully");
          }}

        />
      )}

      {showRescheduleDialog && (
        <RescheduleBookingDialog
          onClose={() => setShowRescheduleDialog(false)}
          onConfirm={(date, time) => {
            console.log("New date:", date);
            console.log("New time:", time);

            updateBookingStatus(booking.id, "RESCHEDULED");
            setShowRescheduleDialog(false);
            alert("Booking rescheduled successfully");
          }}
        />
      )}
    </div>
  );
};