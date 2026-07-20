import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { AppBadge } from "../common/AppBadge";
import { AppButton } from "../common/AppButton";
import { AppCard } from "../common/AppCard";

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
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-success"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    bgColor: "bg-success-light",
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
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-danger"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4a4 4 0 100 8 4 4 0 000-8zM12 14v7M9 18h6"
        />
      </svg>
    ),
    bgColor: "bg-danger-light",
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
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-danger" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    bgColor: "bg-danger-light",
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
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-info"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h20c0-2-1-4-2.5-5.5" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    bgColor: "bg-info-light",
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
    <section className="relative w-full select-none bg-background px-4 py-12 md:px-8">
      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-8 flex w-full items-center justify-between px-1">
          <div className="text-left">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-[26px]">
              Popular Health Packages
            </h2>

            <p className="mt-0.5 text-xs font-normal text-muted-foreground md:text-sm">
              Comprehensive health checkups tailored for you
            </p>
          </div>

          <AppButton
            type="button"
            variant="outline"
            onClick={() => navigate("/popular-packages")}
            className="px-6 py-2 text-xs"
          >
            View All
          </AppButton>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-[58%] z-30 hidden w-full -translate-y-1/2 justify-between px-2 md:flex">
          <button
            type="button"
            onClick={() => handleSlide("left")}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary transition active:scale-90"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={() => handleSlide("right")}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary transition active:scale-90"
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
            <AppCard
              key={pkg.id}
              className="flex w-full min-w-[275px] max-w-[288px] shrink-0 snap-start flex-col justify-between border-primary p-5 text-left transition-all duration-300 hover:shadow-lg md:min-w-[288px]"
            >
              <div className="mb-4 flex w-full items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${pkg.bgColor}`}
                >
                  {pkg.icon}
                </div>

                <AppBadge>SAFE</AppBadge>
              </div>

              <div className="mb-5 flex flex-1 flex-col">
                <h3 className="mb-2 min-h-[40px] line-clamp-2 text-[14px] font-bold leading-snug tracking-tight text-foreground">
                  {pkg.title}
                </h3>

                <p className="mb-3 min-h-[36px] line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
                  {pkg.desc}
                </p>

                <div className="mb-3 self-start">
                  <AppBadge className="text-[10px]">
                    Home Collection Available
                  </AppBadge>
                </div>

                <p className="text-[11px] font-semibold tracking-tight text-muted-foreground">
                  {pkg.deliveryTime}
                </p>
              </div>

              <div className="mt-auto border-t border-border pt-3">
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-foreground">
                    ₹{pkg.actualPrice}
                  </span>

                  <span className="text-xs font-medium text-muted-foreground line-through">
                    ₹{pkg.marketPrice}
                  </span>

                  <span className="text-[11px] font-bold text-primary">
                    {pkg.discount}
                  </span>
                </div>

                <div className="grid w-full grid-cols-2 gap-2">
                  <AppButton
                    type="button"
                    variant="outline"
                    className="py-2 text-xs"
                  >
                    View Details
                  </AppButton>

                  <AppButton type="button" className="py-2 text-xs">
                    Add To Cart
                  </AppButton>
                </div>
              </div>
            </AppCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularHealthPackages;