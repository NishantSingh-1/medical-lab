import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  SearchX,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useBookingTrackingStore } from "../store/useBookingTrackingStore";
import type {
  BookingItem,
  BookingStatus,
} from "../types/bookingTracking.types";

import { EmptyBookings } from "./EmptyBookings";
import { RescheduleSuccessDialog } from "./RescheduleSuccessDialog";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";
import { PatientStatCard } from "../../shared/components/PatientStatCard";

const demoBookings: BookingItem[] = [
  {
    id: "BK-1001",
    testName: "Complete Blood Count (CBC)",
    patientName: "Nishant Singh",
    date: "26 Jul 2026",
    time: "09:00 AM",
    address: "HSR Layout, Bangalore",
    amount: 395,
    status: "UPCOMING",
  },
  {
    id: "BK-1002",
    testName: "Thyroid Profile",
    patientName: "Nishant Singh",
    date: "20 Jul 2026",
    time: "10:00 AM",
    address: "BTM Layout, Bangalore",
    amount: 610,
    status: "COMPLETED",
  },
];
const LOAD_DEMO_BOOKINGS = true;

const statusVariant: Record<
  BookingStatus,
  "primary" | "success" | "warning" | "danger"
> = {
  UPCOMING: "primary",
  SAMPLE_COLLECTION: "warning",
  LAB_PROCESSING: "warning",
  REPORT_READY: "success",
  COMPLETED: "success",
  CANCELLED: "danger",
  RESCHEDULED: "warning",
};

export const MyBookingsPage = () => {
  const [query, setQuery] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [rescheduledData] = useState({
    date: "",
    time: "",
  });

  const navigate = useNavigate();

  const bookings = useBookingTrackingStore((state) => state.bookings);
  const setBookings = useBookingTrackingStore(
    (state) => state.setBookings
  );
  const selectBooking = useBookingTrackingStore(
    (state) => state.selectBooking
  );

  useEffect(() => {
    if (LOAD_DEMO_BOOKINGS) {
      setBookings(demoBookings);
    } else {
      setBookings([]);
    }
  }, [setBookings]);

  const filteredBookings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return bookings;
    }

    return bookings.filter((booking) =>
      `${booking.id} ${booking.testName} ${booking.patientName}`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [bookings, query]);

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      upcoming: bookings.filter(
        (booking) => booking.status === "UPCOMING"
      ).length,
      completed: bookings.filter(
        (booking) => booking.status === "COMPLETED"
      ).length,
      cancelled: bookings.filter(
        (booking) => booking.status === "CANCELLED"
      ).length,
    };
  }, [bookings]);

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Bookings & Tracking"
        title="My Bookings"
        description="Manage your upcoming and completed lab test bookings."
        action={
          <AppButton
  type="button"
  onClick={() => navigate("/tests")}
>
  Book New Test
</AppButton>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <PatientStatCard title="Total" value={stats.total} />
        <PatientStatCard title="Upcoming" value={stats.upcoming} />
        <PatientStatCard title="Completed" value={stats.completed} />
        <PatientStatCard title="Cancelled" value={stats.cancelled} />
      </div>

    {bookings.length === 0 ? (
  <EmptyBookings onBookNow={() => navigate("/tests")} />
) : (
        <>
          <PatientSearchBar
            value={query}
            placeholder="Search booking ID, test or patient..."
            onChange={setQuery}
          />

          {filteredBookings.length === 0 ? (
            <PatientEmptyState
              icon={<SearchX size={36} />}
              title="No Matching Bookings"
              description="No booking matches your search. Try another booking ID, test or patient name."
              buttonText="Clear Search"
              onButtonClick={() => setQuery("")}
            />
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <AppCard
                  key={booking.id}
                  className="p-5 transition hover:border-primary/40"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-black text-foreground">
                          {booking.testName}
                        </h3>

                        <AppBadge
                          variant={statusVariant[booking.status]}
                        >
                          {booking.status}
                        </AppBadge>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-muted-foreground">
                        Booking ID: {booking.id}
                      </p>

                      <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 xl:grid-cols-4">
                        <InfoItem
                          icon={<User size={16} />}
                          value={booking.patientName}
                        />

                        <InfoItem
                          icon={<CalendarDays size={16} />}
                          value={booking.date}
                        />

                        <InfoItem
                          icon={<Clock size={16} />}
                          value={booking.time}
                        />

                        <InfoItem
                          icon={<MapPin size={16} />}
                          value={booking.address}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                      <p className="text-2xl font-black text-primary">
                        ₹{booking.amount}
                      </p>

                      <AppButton
                        variant="outline"
                        onClick={() => {
                          selectBooking(booking);
                          navigate("/dashboard/bookings/details");
                        }}
                      >
                        View Details
                      </AppButton>
                    </div>
                  </div>
                </AppCard>
              ))}
            </div>
          )}
        </>
      )}

      {showSuccessDialog && (
        <RescheduleSuccessDialog
          date={rescheduledData.date}
          time={rescheduledData.time}
          onClose={() => setShowSuccessDialog(false)}
        />
      )}
    </PatientPageContainer>
  );
};

type InfoItemProps = {
  icon: ReactNode;
  value: string;
};

const InfoItem = ({ icon, value }: InfoItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary">{icon}</span>
      <span className="truncate">{value}</span>
    </div>
  );
};