import React, { useState } from "react";
import {
  User,
  Calendar,
  MapPin,
  ClipboardList,
  ShieldCheck,
  Home,
  Building2,
} from "lucide-react";

const BookingPage = () => {
  const [collectionType, setCollectionType] = useState<"home" | "lab">("home");

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

  const timeSlots = [
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
    "04:00 PM - 05:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${patientData.fullName}`);
  };

  const inputClass =
    "w-full h-[50px] px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#0f8a73] focus:bg-white focus:ring-4 focus:ring-teal-50";

  const labelClass =
    "text-[11px] font-black uppercase tracking-wide text-slate-500";

  return (
    <div className="w-full min-h-screen bg-[#fdf6ee] pt-[190px] md:pt-36 pb-16 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-[#0f8a73] text-xs font-black uppercase tracking-widest">
            Easy Lab Test Booking
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Book Your Lab Test
          </h1>

          <p className="mt-2 text-sm md:text-base text-slate-500 font-medium">
            Enter patient details and choose your preferred date and time slot.
          </p>
        </div>

        <form
          onSubmit={handleSubmitBooking}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Left Form */}
          <div className="lg:col-span-8 space-y-6">
            {/* Collection Type */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm">
              <h2 className="text-sm font-black text-slate-800 mb-4">
                Choose Collection Type
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setCollectionType("home")}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition text-left ${
                    collectionType === "home"
                      ? "border-[#0f8a73] bg-teal-50 text-[#0f8a73] shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-teal-200"
                  }`}
                >
                  <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Home size={20} />
                  </span>
                  <span>
                    <span className="block font-black text-sm">
                      Home Sample Collection
                    </span>
                    <span className="block text-xs font-medium opacity-70 mt-1">
                      Technician will visit your home
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setCollectionType("lab")}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition text-left ${
                    collectionType === "lab"
                      ? "border-[#0f8a73] bg-teal-50 text-[#0f8a73] shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-teal-200"
                  }`}
                >
                  <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Building2 size={20} />
                  </span>
                  <span>
                    <span className="block font-black text-sm">
                      Visit Lab Centre
                    </span>
                    <span className="block text-xs font-medium opacity-70 mt-1">
                      Visit nearest diagnostic centre
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Patient Info */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
                <User size={20} className="text-[#0f8a73]" />
                <h2 className="text-lg font-black text-slate-900">
                  Patient Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Patient Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Nishant Singh"
                    value={patientData.fullName}
                    onChange={handleChange}
                    className={`${inputClass} mt-2`}
                  />
                </div>

                <div>
                  <label className={labelClass}>Mobile Number</label>
                  <input
                    name="mobile"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={patientData.mobile}
                    onChange={handleChange}
                    className={`${inputClass} mt-2`}
                  />
                </div>

                <div>
                  <label className={labelClass}>Age</label>
                  <input
                    name="age"
                    type="number"
                    required
                    placeholder="e.g. 21"
                    value={patientData.age}
                    onChange={handleChange}
                    className={`${inputClass} mt-2`}
                  />
                </div>

                <div>
                  <label className={labelClass}>Gender</label>
                  <select
                    name="gender"
                    value={patientData.gender}
                    onChange={handleChange}
                    className={`${inputClass} mt-2`}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address */}
            {collectionType === "home" && (
              <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
                  <MapPin size={20} className="text-[#0f8a73]" />
                  <h2 className="text-lg font-black text-slate-900">
                    Home Collection Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Complete Address</label>
                    <input
                      name="address"
                      type="text"
                      required={collectionType === "home"}
                      placeholder="Flat no, street, landmark"
                      value={patientData.address}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Pin Code</label>
                    <input
                      name="pinCode"
                      type="text"
                      required={collectionType === "home"}
                      placeholder="800001"
                      value={patientData.pinCode}
                      onChange={handleChange}
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Date & Slot */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
                <Calendar size={20} className="text-[#0f8a73]" />
                <h2 className="text-lg font-black text-slate-900">
                  Appointment Date & Time
                </h2>
              </div>

              <div className="max-w-sm mb-5">
                <label className={labelClass}>Select Date</label>
                <input
                  name="selectedDate"
                  type="date"
                  required
                  value={patientData.selectedDate}
                  onChange={handleChange}
                  className={`${inputClass} mt-2`}
                />
              </div>

              <label className={labelClass}>Available Slots</label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() =>
                      setPatientData({ ...patientData, selectedSlot: slot })
                    }
                    className={`h-[48px] rounded-xl border text-xs sm:text-sm font-black transition ${
                      patientData.selectedSlot === slot
                        ? "border-[#0f8a73] bg-teal-50 text-[#0f8a73]"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-teal-200"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-100 rounded-3xl p-5 md:p-6 shadow-sm lg:sticky lg:top-36">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
                <ClipboardList size={20} className="text-[#0f8a73]" />
                <h2 className="text-lg font-black text-slate-900">
                  Booking Summary
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">
                    Collection Type
                  </span>
                  <span className="text-slate-900 font-black text-right">
                    {collectionType === "home" ? "Home Pickup" : "Lab Visit"}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">
                    Selected Slot
                  </span>
                  <span className="text-slate-900 font-black text-right">
                    {patientData.selectedSlot}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-500 font-semibold">
                    Service Fee
                  </span>
                  <span className="text-emerald-600 font-black">
                    {collectionType === "home" ? "₹150" : "FREE"}
                  </span>
                </div>

                <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100 mt-5">
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                    Your selected tests will be confirmed after patient details
                    verification.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-[#0f8a73] hover:bg-[#0c7561] text-white font-black text-sm py-4 rounded-2xl shadow-md shadow-teal-100 transition"
              >
                Confirm Booking
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 tracking-wide uppercase mt-5">
                <ShieldCheck size={14} className="text-[#0f8a73]" />
                <span>NABL Accredited Lab</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;