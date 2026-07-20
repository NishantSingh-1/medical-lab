import {
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Download,
  FlaskConical,
  Home,
  MapPin,
  ReceiptText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

type Address = {
  fullName: string;
  mobile: string;
  houseNumber: string;
  street: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
};

type SelectedSlot = {
  dateLabel: string;
  time: string;
};

type PaymentMethod = {
  id: "cod" | "online" | "upi";
  title: string;
  description?: string;
};

type BookingItem = {
  id: string;
  title: string;
  price: number;
  type?: "test" | "package";
};

type BookingPricing = {
  subtotal: number;
  discount: number;
  gst: number;
  total: number;
};

type BookingLocationState = {
  cartItems: BookingItem[];
  address: Address;
  slot: SelectedSlot;
  paymentMethod: PaymentMethod;
  pricing: BookingPricing;
  bookingId?: string;
};

const BookingConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData =
    location.state as BookingLocationState | null;

  if (
    !bookingData?.address ||
    !bookingData?.slot ||
    !bookingData?.paymentMethod ||
    !bookingData?.pricing
  ) {
    return <Navigate to="/cart" replace />;
  }

  const {
    address,
    slot,
    paymentMethod,
    pricing,
    cartItems = [],
  } = bookingData;

  const bookingId =
    bookingData.bookingId ??
    `ML-${new Date()
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;

  const handleViewInvoice = () => {
  navigate(`/dashboard/payments/invoice/${bookingId}`, {
    state: {
      bookingId,
      ...bookingData,
    },
  });
};

  const handleGoToDashboard = () => {
    navigate("/user/dashboard");
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Confirmation Hero */}
        <section className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-primary">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
              <Check size={30} strokeWidth={3} />
            </div>
          </div>

          <AppBadge
            variant="success"
            className="mt-5"
          >
            Booking Confirmed
          </AppBadge>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Your appointment is scheduled
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Your home sample collection has been confirmed.
            Our phlebotomist will visit you during the
            selected appointment slot.
          </p>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Booking Details */}
          <section className="space-y-6 lg:col-span-8">
            <AppCard className="p-5 shadow-none sm:p-6">
              <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <ReceiptText size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Booking ID
                    </p>

                    <h2 className="mt-1 text-lg font-black text-foreground">
                      {bookingId}
                    </h2>
                  </div>
                </div>

                <AppBadge variant="success">
                  Confirmed
                </AppBadge>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <DetailCard
                  icon={<UserRound size={19} />}
                  label="Patient"
                  value={address.fullName}
                  description={address.mobile}
                />

                <DetailCard
                  icon={<CalendarDays size={19} />}
                  label="Appointment Date"
                  value={slot.dateLabel}
                />

                <DetailCard
                  icon={<Clock size={19} />}
                  label="Collection Time"
                  value={slot.time}
                  description="Home sample collection"
                />

                <DetailCard
                  icon={<ReceiptText size={19} />}
                  label="Payment Method"
                  value={paymentMethod.title}
                  description={
                    paymentMethod.id === "cod"
                      ? "Pay during sample collection"
                      : "Online payment selected"
                  }
                />
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Collection Address
                    </p>

                    <p className="mt-1 font-black text-foreground">
                      {address.fullName}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {address.houseNumber}, {address.street}
                      {address.landmark ? `, ${address.landmark}` : ""}
                      , {address.city}, {address.state} -{" "}
                      {address.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </AppCard>

            {/* Selected Tests */}
            <AppCard className="p-5 shadow-none sm:p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <FlaskConical size={20} />
                </div>

                <div>
                  <h2 className="text-lg font-black text-foreground">
                    Selected Tests
                  </h2>

                  <p className="text-xs text-muted-foreground">
                    {cartItems.length} item
                    {cartItems.length !== 1 ? "s" : ""} booked
                  </p>
                </div>
              </div>

              <div className="mt-4 divide-y divide-border">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-wide text-primary">
                        {item.type === "package"
                          ? "Health Package"
                          : "Diagnostic Test"}
                      </p>

                      <h3 className="mt-1 truncate font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <p className="shrink-0 font-black text-foreground">
                      ₹{item.price}
                    </p>
                  </div>
                ))}
              </div>
            </AppCard>

            {/* Booking Timeline */}
            <AppCard className="p-5 shadow-none sm:p-6">
              <h2 className="text-lg font-black text-foreground">
                Booking Progress
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Track each stage of your diagnostic booking.
              </p>

              <div className="mt-6">
                <TimelineItem
                  title="Booking Confirmed"
                  description="Your appointment has been successfully scheduled."
                  status="completed"
                />

                <TimelineItem
                  title="Sample Collection"
                  description={`${slot.dateLabel} at ${slot.time}`}
                  status="current"
                />

                <TimelineItem
                  title="Lab Processing"
                  description="Your sample will be processed at the lab."
                  status="pending"
                />

                <TimelineItem
                  title="Report Ready"
                  description="Your report will appear in the patient dashboard."
                  status="pending"
                  isLast
                />
              </div>
            </AppCard>
          </section>

          {/* Price & Actions */}
          <aside className="lg:col-span-4">
            <AppCard className="p-5 shadow-none sm:p-6 lg:sticky lg:top-8">
              <h2 className="text-lg font-black text-foreground">
                Payment Summary
              </h2>

              <div className="mt-5 space-y-4 text-sm">
                <PriceRow
                  label="Subtotal"
                  value={`₹${pricing.subtotal}`}
                />

                <PriceRow
                  label="Discount"
                  value={`-₹${pricing.discount}`}
                />

                <PriceRow
                  label="GST"
                  value={`₹${pricing.gst}`}
                />

                <PriceRow
                  label="Home Collection"
                  value="FREE"
                />

                <div className="border-t border-border pt-4">
                  <PriceRow
                    label="Total Amount"
                    value={`₹${pricing.total}`}
                    emphasized
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <AppButton
                  type="button"
                  className="w-full"
                  onClick={handleViewInvoice}
                >
                  <Download size={18} />
                  View Invoice
                </AppButton>

                <AppButton
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleGoToDashboard}
                >
                  <Home size={18} />
                  Go to Dashboard
                </AppButton>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-muted-foreground">
                <ShieldCheck
                  size={14}
                  className="shrink-0 text-primary"
                />
                Booking information is safe and encrypted
              </div>
            </AppCard>
          </aside>
        </div>
      </div>
    </main>
  );
};

type DetailCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  description?: string;
};

const DetailCard = ({
  icon,
  label,
  value,
  description,
}: DetailCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {label}
          </p>

          <p className="mt-1 font-black text-foreground">
            {value}
          </p>

          {description && (
            <p className="mt-1 text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

type PriceRowProps = {
  label: string;
  value: string;
  emphasized?: boolean;
};

const PriceRow = ({
  label,
  value,
  emphasized = false,
}: PriceRowProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={
          emphasized
            ? "font-black text-foreground"
            : "font-semibold text-muted-foreground"
        }
      >
        {label}
      </span>

      <span
        className={
          emphasized
            ? "text-xl font-black text-foreground"
            : "font-bold text-foreground"
        }
      >
        {value}
      </span>
    </div>
  );
};

type TimelineStatus =
  | "completed"
  | "current"
  | "pending";

type TimelineItemProps = {
  title: string;
  description: string;
  status: TimelineStatus;
  isLast?: boolean;
};

const TimelineItem = ({
  title,
  description,
  status,
  isLast = false,
}: TimelineItemProps) => {
  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  return (
    <div className="relative flex gap-4">
      {!isLast && (
        <div className="absolute left-[17px] top-9 h-full w-px bg-border" />
      )}

      <div
        className={[
          "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
          isCompleted
            ? "border-primary bg-primary text-white"
            : isCurrent
              ? "border-primary bg-primary-light text-primary"
              : "border-border bg-background text-muted-foreground",
        ].join(" ")}
      >
        {isCompleted ? (
          <Check size={17} strokeWidth={3} />
        ) : isCurrent ? (
          <ChevronRight size={17} />
        ) : (
          <div className="h-2 w-2 rounded-full bg-current" />
        )}
      </div>

      <div className={isLast ? "pb-0" : "pb-7"}>
        <p
          className={
            isCompleted || isCurrent
              ? "font-black text-foreground"
              : "font-bold text-muted-foreground"
          }
        >
          {title}
        </p>

        <p className="mt-1 text-sm leading-5 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;