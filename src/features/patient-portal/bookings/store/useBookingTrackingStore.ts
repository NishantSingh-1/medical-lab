import { create } from "zustand";

import type {
  BookingItem,
  BookingStatus,
  TrackingStep,
} from "../types/bookingTracking.types";

type BookingTrackingStore = {
  bookings: BookingItem[];
  selectedBooking: BookingItem | null;
  trackingSteps: TrackingStep[];

  setBookings: (bookings: BookingItem[]) => void;
  selectBooking: (booking: BookingItem | null) => void;

  updateBookingStatus: (
    bookingId: string,
    status: BookingStatus
  ) => void;

  setTrackingSteps: (
    steps: TrackingStep[]
  ) => void;

  reset: () => void;
};

const initialTrackingSteps: TrackingStep[] = [
  {
    id: "1",
    title: "Booking Confirmed",
    description: "Your booking has been confirmed.",
    completed: true,
  },
  {
    id: "2",
    title: "Sample Collection",
    description: "Phlebotomist will collect sample.",
    completed: false,
  },
  {
    id: "3",
    title: "Lab Processing",
    description: "Sample is under processing.",
    completed: false,
  },
  {
    id: "4",
    title: "Report Ready",
    description: "Report available for download.",
    completed: false,
  },
];

export const useBookingTrackingStore =
  create<BookingTrackingStore>((set) => ({
    bookings: [],

    selectedBooking: null,

    trackingSteps: initialTrackingSteps,

    setBookings: (bookings) =>
      set({ bookings }),

    selectBooking: (booking) =>
      set({ selectedBooking: booking }),

    updateBookingStatus: (bookingId, status) =>
      set((state) => ({
        bookings: state.bookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status }
            : booking
        ),
      })),

    setTrackingSteps: (steps) =>
      set({ trackingSteps: steps }),

    reset: () =>
      set({
        bookings: [],
        selectedBooking: null,
        trackingSteps: initialTrackingSteps,
      }),
  }));