import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { AppBadge } from "../common/AppBadge";
import { AppButton } from "../common/AppButton";
import { AppCard } from "../common/AppCard";

export const packagesData = [
  {
    id: "senior-citizen-female",
    title: "Xpert Health Senior Citizen- Female",
    actualPrice: 4799,
    marketPrice: 6399,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
  {
    id: "senior-citizen-male",
    title: "Xpert Health Senior Citizen- Male",
    actualPrice: 4799,
    marketPrice: 6399,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
  {
    id: "women-check",
    title: "Xpert Health Women Check",
    actualPrice: 3499,
    marketPrice: 4665,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
  {
    id: "vitamin-check",
    title: "Xpert Vitamin Check",
    actualPrice: 1999,
    marketPrice: 2665,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
  {
    id: "health-basic",
    title: "Xpert Health Basic",
    actualPrice: 1899,
    marketPrice: 2532,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
  {
    id: "health-comprehensive",
    title: "Xpert Health Comprehensive",
    actualPrice: 4499,
    marketPrice: 5999,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
  {
    id: "master-check",
    title: "Xpert Health Master check",
    actualPrice: 3299,
    marketPrice: 4399,
    discount: "25% off",
    features: "Report delivery- Speak to our customer care",
  },
];

const RecommendedPackages = () => {
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
              Recommended Packages
            </h2>

            <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
              Comprehensive health checkups tailored for you
            </p>
          </div>

          <AppButton
            type="button"
            variant="outline"
            onClick={() => navigate("/most-booked-packages")}
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
          {packagesData.map((pkg) => (
            <AppCard
              key={pkg.id}
              className="flex w-full min-w-[275px] max-w-[288px] shrink-0 snap-start flex-col justify-between border-primary p-5 text-left transition-all duration-300 hover:shadow-lg md:min-w-[288px]"
            >
              <div className="mb-4 flex w-full items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>

                <AppBadge>SAFE</AppBadge>
              </div>

              <div className="mb-5 flex flex-1 flex-col">
                <h3 className="mb-2 min-h-[40px] line-clamp-2 text-[14px] font-bold leading-snug tracking-tight text-foreground">
                  {pkg.title}
                </h3>

                <p className="mb-3 min-h-[36px] line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">
                  {pkg.features}
                </p>

                <div className="mb-3 self-start">
                  <AppBadge>Home Collection Available</AppBadge>
                </div>

                <p className="text-[11px] font-semibold tracking-tight text-muted-foreground">
                  Report delivery- Same Day
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

export default RecommendedPackages;