import { ShieldCheck, Users, Milestone, Building2, UserCheck } from "lucide-react";

const WhyChooseUs = () => {
  const stats = [
    {
      id: 1,
      title: "700+",
      desc: "100% NABL & ISO Certified Labs",
      icon: <Building2 className="w-5 h-5 text-white" />
    },
    {
      id: 2,
      title: "70,000+",
      desc: "Test processed everyday",
      icon: <Milestone className="w-5 h-5 text-white" />
    },
    {
      id: 3,
      title: "70 Million",
      desc: "Total customer served",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      id: 4,
      title: "700",
      desc: "Collection Centers",
      icon: <ShieldCheck className="w-5 h-5 text-white" />
    },
    {
      id: 5,
      title: "7000",
      desc: "Quality & trained Phlebotomists",
      icon: <UserCheck className="w-5 h-5 text-white" />
    }
  ];

  return (
    // FULL HEIGHT BANNER: Matches the exact padding and spacious footprint of the Apollo mockup
    <section className="w-full bg-[#00807E] text-white py-16 px-4 md:px-8 font-sans relative overflow-hidden select-none text-center">
      
      {/* Decorative side background curves to match the uploaded image background feel */}
      <div className="absolute -left-12 top-0 bottom-0 w-48 bg-white/[0.03] rounded-r-full blur-xl pointer-events-none" />
      <div className="absolute -right-12 bottom-0 w-56 h-56 bg-white/[0.04] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* MAIN HEADER TITLE */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold tracking-tight text-white mb-2">
            Why trust MedLab?
          </h2>
          <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            # One of India's most trusted healthcare platforms
          </p>
        </div>

        {/* TWO-TIER GRID STRUCTURE: 3 Cards Top Row, 2 Cards Bottom Row */}
        <div className="flex flex-col gap-4 md:gap-5 max-w-4xl mx-auto">
          
          {/* TOP ROW: 3 Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {stats.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white/10 border border-white/10 backdrop-blur-xs rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[140px] transition-all duration-200 hover:bg-white/15"
              >
                <div className="mb-2 opacity-80">{item.icon}</div>
                <h3 className="text-white font-black text-xl md:text-2xl tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs font-medium leading-snug max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM ROW: 2 Cards Centered Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto w-full">
            {stats.slice(3, 5).map((item) => (
              <div
                key={item.id}
                className="bg-white/10 border border-white/10 backdrop-blur-xs rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[140px] transition-all duration-200 hover:bg-white/15"
              >
                <div className="mb-2 opacity-80">{item.icon}</div>
                <h3 className="text-white font-black text-xl md:text-2xl tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs font-medium leading-snug max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;