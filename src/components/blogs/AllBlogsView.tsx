import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { blogsData } from "./HealthBlogs";

const AllBlogsView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // FIXED: Formatted layout container root node background parameters directly under teal codes to vanish the navigation border gap completely
    <div className="w-full bg-[#00807E] font-sans text-left min-h-screen pt-32">

      {/* BANNER CONTENT AREA */}
      <div className="w-full text-white py-6 md:py-8 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider mb-4 transition-colors w-fit bg-transparent border-none outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            MedLab Knowledge Hub — All Articles ({blogsData.length})
          </h1>
        </div>
      </div>

      {/* CORE 20 GRID FLOW CANVAS */}
      <div className="w-full bg-white rounded-t-3xl shadow-2xl py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/blog/${blog.id}`)}
                // FIXED: Embedded left green border highlight line track styles here as well
                className="bg-white rounded-2xl border border-[#00807E] p-4 flex flex-col justify-between shadow-xs relative cursor-pointer group transition-all duration-300 hover:shadow-md hover:border-[#00807E]/20"
              >
                <div>
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mb-3.5 relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2 w-full text-gray-400 text-[11px] font-medium px-0.5">
                    <span className="text-[#0f8a73]/90 font-semibold">{blog.date}</span>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
                  </div>

                  <h3 className="text-gray-800 font-bold text-[14px] leading-snug mb-2 min-h-[40px] line-clamp-2 group-hover:text-[#0f8a73] transition-colors px-0.5">
                    {blog.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-gray-100 text-left text-[#0f8a73] text-[12px] font-bold tracking-tight group-hover:translate-x-0.5 transition-transform duration-150 px-0.5">
                  Read More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllBlogsView;