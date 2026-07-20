import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, ShieldCheck, FileText, ArrowRight, Home } from 'lucide-react';

const BookingSuccessPage = () => {
  const navigate = useNavigate();

  // Simulated confirmation tokens directly aligned with PDF Phase 1 automation rules
  const summaryDetails = {
    bookingId: "ML-2026-89742",
    date: "June 17, 2026",
    slot: "08:00 AM - 10:00 AM",
    collectionType: "Home Sample Collection",
    status: "Confirmed & Documented"
  };

  return (
    /* FIXED: Positioned safely at pt-40 to clear fixed header menus without collision artifacts */
    <div className="w-full min-h-screen bg-[#f4faf7]/60 flex items-center justify-center pt-40 pb-16 px-4 md:px-8 font-sans text-left select-none relative">
      <div className="w-full h-[1px] bg-gray-200 absolute top-0 left-0" />

      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-xl text-center flex flex-col items-center">
        
        {/* SUCCESS ICON ANIMATION RING */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-100">
          <CheckCircle size={36} className="text-[#0f8a73]" />
        </div>

        {/* TYPOGRAPHY ANCHORS */}
        <h1 className="text-2xl md:text-3xl font-black text-[#2d3142] tracking-tight">
          Appointment Confirmed
        </h1>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-black mt-1">
          {summaryDetails.status}
        </p>
        <p className="text-sm font-semibold text-gray-500 max-w-md mt-3 leading-relaxed">
          Your diagnostic dispatch token has been initialized inside the system workflow layer. A confirmation layout report log has been transmitted via WhatsApp[cite: 80, 235].
        </p>

        {/* MATRIX INVOICE SUMMARY BOX */}
        <div className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-5 text-left mt-6 space-y-3.5">
          <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-wide">Secure Appointment Registry ID</span>
            <span className="font-mono font-black text-sm text-[#2d3142] bg-white border border-gray-200 px-2.5 py-1 rounded-md">
              {summaryDetails.bookingId}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-bold pt-1">
            <div>
              <p className="text-gray-400 font-extrabold uppercase tracking-wide text-[10px]">Schedule Date</p>
              <p className="text-gray-800 font-black mt-0.5 flex items-center gap-1.5">
                <Calendar size={14} className="text-gray-400" /> {summaryDetails.date}
              </p>
            </div>
            <div>
              <p className="text-gray-400 font-extrabold uppercase tracking-wide text-[10px]">Collection Time Window</p>
              <p className="text-gray-800 font-black mt-0.5">{summaryDetails.slot}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200/60 text-xs font-bold">
            <p className="text-gray-400 font-extrabold uppercase tracking-wide text-[10px]">Dispatch Configuration Mode</p>
            <p className="text-gray-800 font-black mt-0.5">{summaryDetails.collectionType}</p>
          </div>
        </div>

        {/* COMPLIANCE ALERT NOTE */}
        <div className="w-full bg-amber-50/60 border border-amber-100 rounded-xl p-4 text-left text-xs font-bold text-gray-700 mt-5 leading-relaxed">
          <span className="text-amber-800 font-black block mb-0.5">📋 Mandatory Pre-Arrival Step reminder:</span>
          Please keep an international verification identity card active at the counter/phlebotomist visit checkpoint[cite: 57]. Keep parameters fasting restrictions intact according to selected profile instructions[cite: 34].
        </div>

        {/* REDIRECTION CONTROLS CONTAINER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 hover:border-[#0f8a73] hover:text-[#0f8a73] hover:bg-[#f4faf7]/30 rounded-xl py-3 text-xs font-black transition duration-150 bg-white cursor-pointer outline-none"
          >
            <FileText size={14} /> View My Dashboard Profile
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-[#0f8a73] hover:bg-[#0b6352] text-white rounded-xl py-3 text-xs font-black transition duration-150 border-none outline-none cursor-pointer shadow-sm"
          >
            <Home size={14} /> Return to Home Portal <ArrowRight size={14} />
          </button>
        </div>

        {/* SYSTEM ENCRYPT FOOTER LOG */}
        <div className="pt-6 border-t border-gray-100 w-full text-center text-[10px] font-black text-gray-400 tracking-wide uppercase mt-6 flex items-center justify-center gap-1">
          <ShieldCheck size={14} className="text-teal-600" />
          <span>Automated Operations Cycle Process Locked</span>
        </div>

      </div>
    </div>
  );
};

export default BookingSuccessPage;