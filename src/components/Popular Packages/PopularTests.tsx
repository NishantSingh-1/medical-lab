import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";
import Badge from "../common/Badge";

const popularPackages = [
  {
    id: "full-body",
    title: "Full Body Checkup",
    desc: "Includes 85+ parameters: Thyroid, Liver, Kidney, Lipid, and more.",
    actualPrice: 1046,
    marketPrice: 1948,
    discount: "45% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    bgColor: "bg-emerald-50",
  },
  {
    id: "women-deluxe",
    title: "Women Health Deluxe",
    desc: "Specialized screening for women including Vitamin D, Iron, and hormone metrics.",
    actualPrice: 1811,
    marketPrice: 2587,
    discount: "30% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 100 8 4 4 0 000-8zM12 14v7M9 18h6" />
      </svg>
    ),
    bgColor: "bg-pink-50",
  },
  {
    id: "healthy-heart",
    title: "Healthy Heart Panel",
    desc: "Advanced lipid profile, cardiac markers, and key enzyme checks for heart health.",
    actualPrice: 2949,
    marketPrice: 3686,
    discount: "20% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-red-500" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    bgColor: "bg-red-50",
  },
  {
    id: "senior-citizen",
    title: "Senior Citizen Advanced",
    desc: "Comprehensive checkup for elders covering blood sugar, arthritis profile, and bone density.",
    actualPrice: 1999,
    marketPrice: 3999,
    discount: "50% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h20c0-2-1-4-2.5-5.5" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
];

const PopularHealthPackages = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSlide = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -295 : 295,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full select-none bg-white px-4 py-12 font-sans md:px-8">
      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-8 flex w-full items-center justify-between px-1">
          <div className="text-left">
            <h2 className="text-dark text-2xl font-bold tracking-tight md:text-[26px]">
              Popular Health Packages
            </h2>

            <p className="text-muted mt-0.5 text-xs font-normal md:text-sm">
              Comprehensive health checkups tailored for you
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/popular-packages")}
            className="rounded-xl px-6 py-2 text-xs"
          >
            View All
          </Button>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-[58%] z-30 hidden w-full -translate-y-1/2 justify-between px-2 md:flex">
          <button
            type="button"
            onClick={() => handleSlide("left")}
            className="bg-primary-light text-primary pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full transition active:scale-90"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={() => handleSlide("right")}
            className="bg-primary-light text-primary pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full transition active:scale-90"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="scrollbar-none flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {popularPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="border-primary flex w-full min-w-[275px] max-w-[288px] shrink-0 snap-start flex-col justify-between p-5 text-left transition-all duration-300 hover:shadow-lg md:min-w-[288px]"
            >
              <div className="mb-4 flex w-full items-center justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${pkg.bgColor}`}>
                  {pkg.icon}
                </div>

                <Badge>SAFE</Badge>
              </div>

              <div className="mb-5 flex flex-1 flex-col">
                <h3 className="text-dark mb-2 min-h-[40px] line-clamp-2 text-[14px] font-bold leading-snug tracking-tight">
                  {pkg.title}
                </h3>

                <p className="mb-3 min-h-[36px] line-clamp-2 text-[12px] font-normal leading-relaxed text-gray-400">
                  {pkg.desc}
                </p>

                <div className="mb-3 self-start">
                  <Badge>Home Collection Available</Badge>
                </div>

                <p className="text-[11px] font-semibold tracking-tight text-gray-400">
                  {pkg.deliveryTime}
                </p>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-3">
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className="text-dark text-xl font-black tracking-tight">
                    ₹{pkg.actualPrice}
                  </span>

                  <span className="text-xs font-medium text-gray-400 line-through">
                    ₹{pkg.marketPrice}
                  </span>

                  <span className="text-primary text-[11px] font-bold">
                    {pkg.discount}
                  </span>
                </div>

                <div className="grid w-full grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center justify-center rounded-lg py-2 text-xs"
                  >
                    View Details
                  </Button>

                  <Button
                    type="button"
                    variant="primary"
                    className="flex items-center justify-center rounded-lg py-2 text-xs"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularHealthPackages;