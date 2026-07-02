import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

const PromotionalBanner = () => {
  return (
    <section className="w-full select-none bg-[#fdf6ee] py-6 font-sans">
      <div className="mx-auto max-w-[1360px] px-5">
        <div className="bg-primary relative flex min-h-[220px] w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-[28px] p-6 text-white shadow-lg md:flex-row md:p-10">
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute -top-20 left-1/3 h-48 w-48 rounded-full bg-white/10 blur-xl" />

          <div className="relative z-10 max-w-2xl flex-1 text-center md:text-left">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
              <span>Awareness Initiative</span>
            </div>

            <h2 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Cervical Cancer{" "}
              <span className="text-orange-300">Doesn&apos;t Wait.</span>
            </h2>

            <p className="mt-2.5 text-sm font-medium leading-relaxed text-white/85 md:text-base">
              Treat it before you know it. Take control of your reproductive
              well-being with timely medical diagnostic screenings today.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/80 md:justify-start">
              <TrustPill icon="🔒" label="Safe & Confidential" />
              <TrustPill icon="📄" label="Certified Lab Reports" />
            </div>
          </div>

          <div className="relative z-10 flex w-full shrink-0 flex-col items-center gap-4 sm:w-auto sm:flex-row md:w-auto md:flex-col lg:flex-row">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold tracking-wide text-white shadow-md transition duration-200 hover:bg-orange-600 sm:w-auto"
            >
              <span>Get Screened Now</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <a
              href="tel:04044442424"
              className="group flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl border border-gray-100 bg-white px-5 py-3.5 text-sm font-extrabold text-gray-800 shadow-md transition duration-200 hover:bg-primary-light hover:text-primary sm:w-auto"
            >
              <span className="bg-primary-light flex h-8 w-8 items-center justify-center rounded-lg transition-colors group-hover:bg-primary-light">
                <Phone className="text-primary h-4 w-4" />
              </span>

              <span className="text-left leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Consult Advisor
                </span>
                <span className="text-sm tracking-tight text-gray-800">
                  040 4444 2424
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustPill = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <div className="flex items-center gap-1.5 rounded-md bg-black/10 px-2.5 py-1">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default PromotionalBanner;