import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogsData } from "./HealthBlogs";

const BlogDetails = () => {
  const { id } = useParams();

  // Dynamic window position reset instantly on element mounting sequence
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="w-full text-center py-32 font-sans bg-white">
        <h2 className="text-xl font-bold text-gray-700">Article Not Found</h2>
        <Link to="/" className="text-[#0f8a73] font-semibold mt-4 block hover:underline">Go Back Home</Link>
      </div>
    );
  }

  return (
    // FIXED: Formatted root container with pt-[115px] layout shift bounds to clear top fixed navbar height perfectly
    <div className="w-full bg-[#0f8a73] font-sans text-left min-h-screen pt-[115px]">

      {/* COMPACT COMPONENT GREEN HEADER CARD: Shrunk down padding properties tightly to scale down visual size height */}
      <div className="w-full text-white py-4 md:py-5 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col relative z-10">

          {/* Back trigger action navigator */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider mb-3 transition-colors w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          {/* Shrunk crisp responsive title heading text */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug tracking-tight max-w-4xl text-white">
            {blog.title}
          </h1>

          {/* Trace subrow stamp indicators */}
          <div className="flex items-center gap-2 text-white/70 text-xs font-medium mt-2.5">
            <span className="bg-white/10 px-2.5 py-0.5 rounded-md text-white text-[10px]">
              Departments &gt; Blogs
            </span>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1 text-[11px]">
              <Calendar className="w-3.5 h-3.5" /> {blog.date}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1 text-[11px]">
              <Clock className="w-3.5 h-3.5" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Decorative circular background blueprints vector */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 hidden md:block pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
            <circle cx="80" cy="50" r="30" />
            <circle cx="80" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* WHITE BASE SHEET LAYER */}
      <div className="w-full bg-white rounded-t-3xl shadow-xl min-h-[60vh] mt-2">
        <div className="max-w-4xl mx-auto px-6 py-8">

          {/* Core snapshot image layout container block */}
          <div className="w-full h-64 md:h-[380px] rounded-2xl overflow-hidden mb-8 border border-gray-100 shadow-sm relative z-20">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>

          {/* Structured informative copy block */}
          <article className="prose max-w-none text-gray-700 text-[14px] sm:text-[15px] leading-relaxed space-y-5">
            <p className="font-semibold text-gray-900 text-base">
              {blog.desc}
            </p>
            <p>
              In today's fast-paced environment of life goals and packed timelines, compromising on foundational wellness triggers—such as a balanced nutritious diet, deep restorative sleep cycles, regular target exercises, and wholesome lifestyle tracks—has become incredibly common. Ironically, the pursuit of success often overshadows our primary physical shield.
            </p>
            <p>
              Chronic conditions like sudden cardiovascular spikes or metabolic disorders are no longer anomalies restricted to senior boundaries. Medical insights suggest a growing vulnerability under early age groups due to subtle stress indicators and sedentary loops. Intercepting these anomalies before they build clinical symptoms requires regular, high-precision tracking.
            </p>

            <div className="bg-gray-50 border border-gray-200/60 p-4 rounded-xl my-6">
              <h4 className="text-[#0f8a73] font-bold text-sm mb-1.5">Key Diagnostic Benefits:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600 font-medium">
                <li>Early interception of active metabolic vulnerabilities.</li>
                <li>Complete baseline auditing for critical internal organ groups.</li>
                <li>Turnaround visibility allowing seamless lifestyle revisions.</li>
              </ul>
            </div>
          </article>

        </div>
      </div>

    </div>
  );
};

export default BlogDetails;