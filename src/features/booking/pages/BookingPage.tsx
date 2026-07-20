import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Building2,
  Calendar,
  ClipboardList,
  Home,
  MapPin,
  ShieldCheck,
  User,
} from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";
import { PatientPageContainer } from "@/features/patient-portal/shared/components/PatientPageContainer";
import { PatientPageHeader } from "@/features/patient-portal/shared/components/PatientPageHeader";
import { PatientSectionCard } from "@/features/patient-portal/shared/components/PatientSectionCard";

type CollectionType = "home" | "lab";

const timeSlots = [
  "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "02:00 PM - 03:00 PM",
  "04:00 PM - 05:00 PM",
];

const BookingPage = () => {
  const [collectionType, setCollectionType] =
    useState<CollectionType>("home");

  const [patientData, setPatientData] = useState({
    fullName: "",
    age: "",
    gender: "Male",
    mobile: "",
    selectedDate: "",
    selectedSlot: "08:00 AM - 09:00 AM",
    address: "",
    pinCode: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPatientData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitBooking = (event: FormEvent) => {
    event.preventDefault();
    alert(`Booking confirmed for ${patientData.fullName}`);
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Easy Lab Test Booking"
        title="Book New Test"
        description="Enter patient details and choose your preferred date and time slot."
      />

      <form
        onSubmit={handleSubmitBooking}
        className="grid grid-cols-1 gap-6 lg:grid-cols-12"
      >
        <div className="space-y-6 lg:col-span-8">
          <PatientSectionCard title="Choose Collection Type">
            <div className="grid gap-4 sm:grid-cols-2">
              <CollectionTypeCard
                active={collectionType === "home"}
                icon={<Home size={20} />}
                title="Home Sample Collection"
                description="Technician will visit your home"
                onClick={() => setCollectionType("home")}
              />

              <CollectionTypeCard
                active={collectionType === "lab"}
                icon={<Building2 size={20} />}
                title="Visit Lab Centre"
                description="Visit nearest diagnostic centre"
                onClick={() => setCollectionType("lab")}
              />
            </div>
          </PatientSectionCard>

          <PatientSectionCard
            title="Patient Information"
            description="Add patient basic details."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <AppInput
                name="fullName"
                required
                placeholder="Patient Full Name"
                value={patientData.fullName}
                onChange={handleChange}
              />

              <AppInput
                name="mobile"
                required
                maxLength={10}
                placeholder="Mobile Number"
                value={patientData.mobile}
                onChange={(event) =>
                  setPatientData({
                    ...patientData,
                    mobile: event.target.value.replace(/\D/g, ""),
                  })
                }
              />

              <AppInput
                name="age"
                required
                type="number"
                placeholder="Age"
                value={patientData.age}
                onChange={handleChange}
              />

              <select
                name="gender"
                value={patientData.gender}
                onChange={handleChange}
                className="h-11 rounded-xl border border-border bg-background px-4 text-sm font-semibold outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </PatientSectionCard>

          {collectionType === "home" && (
            <PatientSectionCard
              title="Home Collection Address"
              description="Add sample collection address."
            >
              <div className="grid gap-5 sm:grid-cols-3">
                <AppInput
                  name="address"
                  required
                  placeholder="Flat no, street, landmark"
                  value={patientData.address}
                  onChange={handleChange}
                  className="sm:col-span-2"
                />

                <AppInput
                  name="pinCode"
                  required
                  maxLength={6}
                  placeholder="Pin Code"
                  value={patientData.pinCode}
                  onChange={(event) =>
                    setPatientData({
                      ...patientData,
                      pinCode: event.target.value.replace(/\D/g, ""),
                    })
                  }
                />
              </div>
            </PatientSectionCard>
          )}

          <PatientSectionCard
            title="Appointment Date & Time"
            description="Select preferred date and available slot."
          >
            <div className="max-w-sm">
              <AppInput
                name="selectedDate"
                type="date"
                required
                value={patientData.selectedDate}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() =>
                    setPatientData({
                      ...patientData,
                      selectedSlot: slot,
                    })
                  }
                  className={`h-12 rounded-xl border text-xs font-black transition sm:text-sm ${patientData.selectedSlot === slot
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary"
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </PatientSectionCard>
        </div>

        <div className="lg:col-span-4">
          <AppCard className="p-6 lg:sticky lg:top-24">
            <div className="mb-5 flex items-center gap-2 border-b border-border pb-4">
              <ClipboardList size={20} className="text-primary" />
              <h2 className="text-lg font-black text-foreground">
                Booking Summary
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <SummaryRow
                label="Collection Type"
                value={collectionType === "home" ? "Home Pickup" : "Lab Visit"}
              />

              <SummaryRow
                label="Selected Slot"
                value={patientData.selectedSlot}
              />

              <SummaryRow
                label="Service Fee"
                value={collectionType === "home" ? "₹150" : "FREE"}
              />

              <div className="rounded-2xl border border-primary/20 bg-primary-light p-4">
                <p className="text-xs font-semibold text-muted-foreground">
                  Your selected tests will be confirmed after patient details
                  verification.
                </p>
              </div>
            </div>

            <AppButton type="submit" className="mt-6 w-full">
              Confirm Booking
            </AppButton>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs font-black uppercase text-muted-foreground">
              <ShieldCheck size={14} className="text-primary" />
              NABL Accredited Lab
            </div>
          </AppCard>
        </div>
      </form>
    </PatientPageContainer>
  );
};

const CollectionTypeCard = ({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${active
          ? "border-primary bg-primary-light text-primary"
          : "border-border bg-background text-foreground hover:border-primary"
        }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-card">
        {icon}
      </span>

      <span>
        <span className="block text-sm font-black">{title}</span>
        <span className="mt-1 block text-xs text-muted-foreground">
          {description}
        </span>
      </span>
    </button>
  );
};

const SummaryRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex justify-between gap-4">
      <span className="font-semibold text-muted-foreground">{label}</span>
      <span className="text-right font-black text-foreground">{value}</span>
    </div>
  );
};

export default BookingPage;