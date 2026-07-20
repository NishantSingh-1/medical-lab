import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Target, ShieldAlert, HeartHandshake } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-[#f4faf7]/40 min-h-screen text-left font-sans select-none">

      <Navbar />

      {/* Sleek Medical Title Banner Header */}
      <section className="pt-32 pb-12 bg-[#0f8a73] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center space-y-2">
          <span className="text-[10px] md:text-xs font-black bg-white/10 text-teal-100 border border-white/10 px-3 py-1 rounded-full inline-block uppercase tracking-widest">
            NABL & CAP Accredited Clinical Diagnostics
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight italic">
            About MedLab
          </h1>
          <p className="text-xs md:text-sm text-teal-50/90 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed">
            Pioneering precision clinical pathology and molecular diagnostic frameworks with high-fidelity laboratory instrumentation, algorithmic assay calibrations, and sterile phlebotomy sample acquisition pipelines.
          </p>
        </div>
      </section>

      {/* Corporate Clinical Content Grid & High Contrast Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Doctor Face Profile Image Component */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-3 bg-gradient-to-r from-teal-600/10 to-transparent rounded-3xl blur-xl opacity-50" />
            <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="MedLab Registered Medical Practitioner"
                className="object-cover w-full h-[320px] md:h-[400px] transition-transform duration-500 hover:scale-102"
              />
            </div>
          </div>

          {/* Right Column: High Contrast Pure Medical Terminology Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] font-black text-[#0f8a73] bg-[#f4faf7] border border-teal-600/10 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
              Clinical Quality Operations
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Evidence-Based In-Vitro Diagnostics
            </h2>
            <p className="text-sm text-gray-600 font-semibold leading-relaxed tracking-tight">
              MedLab orchestrates centralized laboratory information management systems (LIMS) synchronizing real-time immunoassays, hematological profiles, and metabolic screening arrays. Every biological specimen map undergoes rigorous automated validation loops before clinical validation sign-offs.
            </p>

            {/* Scale Stats Counters Box Row Grid */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-2xs">
                <div className="flex items-baseline gap-1">
                  <h3 className="text-2xl md:text-3xl font-black text-[#0f8a73] tracking-tight">70M+</h3>
                  <span className="text-xs font-bold text-gray-400">Assays</span>
                </div>
                <p className="mt-1 text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-wider">Patient Panels Processed</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-2xs">
                <div className="flex items-baseline gap-1">
                  <h3 className="text-2xl md:text-3xl font-black text-[#0f8a73] tracking-tight">700+</h3>
                  <span className="text-xs font-bold text-gray-400 font-medium">Nodes</span>
                </div>
                <p className="mt-1 text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-wider">Accredited Processing Hubs</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Enterprise Value Pillars Section */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-12 space-y-1.5">
            <span className="text-[11px] font-black text-[#0f8a73] uppercase tracking-wider block">Bio-Analytical Compliance</span>
            <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">Our Core Diagnostic Pillars</h2>
            <p className="text-xs text-gray-400 font-bold">Standardizing laboratory metrics according to global ISO 15189 compliance benchmarks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-bold text-gray-500">
            {/* Pillar Item Node 1 */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-[#f4faf7] flex items-center justify-center border border-teal-600/10 text-[#0f8a73]">
                <Target size={18} />
              </div>
              <h4 className="text-sm font-black text-gray-900 tracking-tight">Bidirectional Analyzer Automation</h4>
              <p className="font-semibold text-gray-500 leading-relaxed text-[11px] md:text-xs">Direct interfacing with high-throughput analyzers eliminating manual transcript data mutations and sample transposition risks.</p>
            </div>

            {/* Pillar Item Node 2 */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-[#f4faf7] flex items-center justify-center border border-teal-600/10 text-[#0f8a73]">
                <ShieldAlert size={18} />
              </div>
              <h4 className="text-sm font-black text-gray-900 tracking-tight">Cold-Chain Thermal Telemetry</h4>
              <p className="font-semibold text-gray-500 leading-relaxed text-[11px] md:text-xs">Specimen transportation pipelines utilize calibrated loggers protecting analyte stability parameters from environmental thermal degradation.</p>
            </div>

            {/* Pillar Item Node 3 */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-[#f4faf7] flex items-center justify-center border border-teal-600/10 text-[#0f8a73]">
                <HeartHandshake size={18} />
              </div>
              <h4 className="text-sm font-black text-gray-900 tracking-tight">Cryptographic Verification</h4>
              <p className="font-semibold text-gray-500 leading-relaxed text-[11px] md:text-xs">Every authenticated pathology vector embeds interactive verification tags enabling safe cross-timeline longitudinal trend evaluations.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default AboutPage;