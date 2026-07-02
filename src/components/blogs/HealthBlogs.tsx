import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const blogsData = [
  {
    id: "asthma-symptoms-causes",
    title: "Asthma Symptoms, Causes & Treatment",
    tag: "Respiratory Care",
    readTime: "7 min read",
    date: "2026-06-03",
    desc: "Learn about asthma causes, symptoms, types & treatment. Get expert care at...",
    image: "https://images.unsplash.com/photo-1584515933487-7598213f5cda?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "prevention-is-better-than-cure",
    title: "Prevention is better than cure – Importance of regular master checkup",
    tag: "Master Check",
    readTime: "7 min read",
    date: "2026-06-03",
    desc: "In today's time and age of life goals and bucket lists, newer and more thrilling...",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "possible-factors-blood-clots",
    title: "What Are the Possible Factors That Can Lead to Blood Clots?",
    tag: "Hematology",
    readTime: "7 min read",
    date: "2026-06-03",
    desc: "Blood clots are formed as a normal function of blood cells to repair injured blood...",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "blood-clots-causes-symptoms",
    title: "Blood Clots: Causes, Symptoms, Treatment, and Diagnosis",
    tag: "Vascular Care",
    readTime: "7 min read",
    date: "2026-06-03",
    desc: "Blood clots are clumps in the blood that are formed by platelets. These clots help in...",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "diabetes-management-tips",
    title: "Managing Type-2 Diabetes: Lifestyle Changes & Diet Control",
    tag: "Endocrinology",
    readTime: "6 min read",
    date: "2026-06-01",
    desc: "Discover highly efficient dietary mechanisms to stabilize spikes and control glucose metrics...",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=500&q=80"
  }
];

const HealthBlogs = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollTracking = () => {
      if (sliderRef.current) {
        const width = 304; // Matches the scroll snap stride configuration
        const index = Math.round(sliderRef.current.scrollLeft / width);
        setActiveIndex(index);
      }
    };

    const currentSlider = sliderRef.current;
    if (currentSlider) {
      currentSlider.addEventListener("scroll", handleScrollTracking);
    }
    return () => {
      if (currentSlider) {
        currentSlider.removeEventListener("scroll", handleScrollTracking);
      }
    };
  }, []);

  const slideManual = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollStep = 304; // Smooth button slide distance tracking matching the 288px schema
      if (direction === "left") {
        sliderRef.current.scrollLeft -= scrollStep;
      } else {
        sliderRef.current.scrollLeft += scrollStep;
      }
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 font-sans select-none relative">
      <div className="max-w-[1280px] mx-auto relative">

        {/* HEADER BLOCK */}
        <div className="flex items-center justify-between mb-8 w-full px-1">
          <div className="text-left">
            <h2 className="text-gray-800 text-2xl md:text-[26px] font-bold tracking-tight">
              Blogs Corner
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mt-0.5 font-normal">
              Stay informed with medical insights and health blueprints
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="border border-[#00807E] hover:border-[#00807E] text-gray-700 bg-white px-5 py-1.5 rounded-xl text-xs font-semibold transition duration-200 outline-none cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="absolute top-[35%] -translate-y-1/2 left-0 right-0 flex justify-between w-full px-1 z-40 pointer-events-none">
          <button
            type="button"
            onClick={() => slideManual("left")}
            className="w-8 h-8 rounded-full bg-[#f4faf7] text-[#00807E] hover:bg-[#e6f4ee] flex items-center justify-center cursor-pointer pointer-events-auto border-none outline-none shadow-2xs transition active:scale-90"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={() => slideManual("right")}
            className="w-8 h-8 rounded-full bg-[[#f4faf7] text-[#00807E] hover:bg-[#e6f4ee] flex items-center justify-center cursor-pointer pointer-events-auto border-none outline-none shadow-2xs transition active:scale-90"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* CARDS TRACK ROW: EXACT WIDTH SYMMETRY (288px MATCHING HEALTH PACKAGES) */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth w-full px-1 relative z-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
              // EXACT SIZE MATCH LOCKED HERE: min-w-[275px] md:min-w-[288px] max-w-[288px]
              className="bg-white rounded-3xl border border-[#00807E] p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative text-left w-full min-w-[275px] md:min-w-[288px] max-w-[288px] snap-start shrink-0 cursor-pointer group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(15,138,115,0.03)]"
            >
              <div>
                {/* Media Presentation Box */}
                <div className="w-full h-38 rounded-xl overflow-hidden bg-gray-50 border border-[#00807E] mb-3.5 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>

                {/* Timestamps Info Markers Row */}
                <div className="flex items-center gap-2 mb-2 w-full text-gray-400 text-[11px] font-medium px-0.5">
                  <span className="text-[#00807E]/90 font-semibold">{blog.date}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{blog.readTime}</span>
                </div>

                {/* Main Heading Text Hierarchy */}
                <h3 className="text-gray-800 font-bold text-[14px] leading-snug mb-2 min-h-[40px] line-clamp-2 group-hover:text-[#00807E] transition-colors px-0.5">
                  {blog.title}
                </h3>
              </div>

              {/* Read More Anchor Strip Indicator */}
              <div className="pt-3 border-t border-gray-100 text-left text-[#00807E] text-[12px] font-bold tracking-tight group-hover:translate-x-0.5 transition-transform duration-150 px-0.5">
                Read More →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthBlogs;