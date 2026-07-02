import React from 'react';
import { useNavigate } from 'react-router-dom';

const CareEveryGeneration = () => {
  const navigate = useNavigate();

  // Premium continuous live healthcare photography assets mapping database setup
  const generationData = [
    {
      id: "women",
      title: "Women's Specialty",
      desc: "PCOS, Thyroid, & Hormonal profiles curated carefully for women.",
      image: "https://images.pexels.com/photos/3850689/pexels-photo-3850689.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-purple-950/90 via-purple-900/50 to-transparent"
    },
    {
      id: "men",
      title: "Men's Vitality",
      desc: "Heart health, Performance, & Testosterone screenings metrics.",
      image: "https://images.pexels.com/photos/4384679/pexels-photo-4384679.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-teal-950/90 via-teal-900/50 to-transparent"
    },
    {
      id: "child",
      title: "Child Growth",
      desc: "Immunity, Allergies, & Development growth monitoring templates.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-cyan-950/90 via-cyan-900/50 to-transparent"
    },
    {
      id: "senior",
      title: "Senior Citizen",
      desc: "Arthritis, Blood Sugar tracking, & full body geriatric protocols.",
      image: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-slate-950/90 via-slate-900/50 to-transparent"
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 font-sans select-none text-left">
      <div className="max-w-[1280px] mx-auto space-y-8">
        
        {/* Section Main Header Titles */}
        <div className="px-1">
          <h2 className="text-gray-900 text-2xl md:text-[26px] font-black tracking-tight">
            Care for Every Generation
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-0.5 font-bold">
            Specialized diagnostic screening matrix customized according to age groups
          </p>
        </div>

        {/* 4 Cards Proper Flex Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-1">
          {generationData.map((card) => (
            <div
              key={card.id}
              onClick={() => navigate('/tests')}
              className="group relative h-[360px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-xs flex flex-col justify-end p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-slate-100"
            >
              {/* Real Photography Background Asset Node Layer */}
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=500";
                }}
              />

              {/* Seamless Vignette Overlay Sheet: Makes graphics look premium and ensures texts stay readable */}
              <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-0" />

              {/* Core Text Info Metadata Content */}
              <div className="relative z-10 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-white text-[17px] font-black tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-[11px] leading-relaxed font-bold min-h-[32px] line-clamp-2">
                    {card.desc}
                  </p>
                </div>

                {/* View Active Redirection Interface CTA */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/tests');
                  }}
                  className="bg-white hover:bg-gray-100 text-gray-900 text-[11px] font-black px-4 py-2 rounded-xl transition-all shadow-xs transform active:scale-95 cursor-pointer outline-none border-none"
                >
                  View Packages
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareEveryGeneration;