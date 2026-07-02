import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";

const testPackages = [
  {
    id: "cbc",
    title: "COMPLETE BLOOD COUNT (CBC)",
    actualPrice: 395,
    marketPrice: 527,
    discount: "25% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "hba1c",
    title: "HBA1C, GLYCATED HEMOGLOBIN",
    actualPrice: 610,
    marketPrice: 813,
    discount: "25% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "lipid",
    title: "LIPID PROFILE",
    actualPrice: 800,
    marketPrice: 1067,
    discount: "25% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "lft",
    title: "LIVER FUNCTION TEST (LFT)",
    actualPrice: 800,
    marketPrice: 1067,
    discount: "25% off",
    deliveryTime: "Report delivery- Same Day",
  },
];

const MostBookedCheckups = () => {
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
          <h2 className="text-dark text-2xl font-bold tracking-tight md:text-[26px]">
            Most Booked Tests
          </h2>

          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/most-booked-tests")}
            className="rounded-xl px-6 py-2 text-xs"
          >
            View All
          </Button>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-[55%] z-30 hidden w-full -translate-y-1/2 justify-between px-2 md:flex">
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
          {testPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="border-primary flex w-full min-w-[275px] max-w-[288px] shrink-0 snap-start flex-col justify-between p-5 text-left md:min-w-[288px]"
            >
              <div className="mb-4 flex w-full items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M16 3H8v11a4 4 0 0 0 8 0V3z"
                      fill="#fca5a5"
                      fillOpacity="0.4"
                      stroke="#dc2626"
                      strokeWidth="2"
                    />
                    <path d="M12 7h3M12 11h2" stroke="#dc2626" />
                    <path
                      d="M9 11v3a3 3 0 0 0 6 0v-3H9z"
                      fill="#dc2626"
                      stroke="none"
                    />
                    <path
                      d="M18 13.5c0 1.4-1.1 2.5-2.5 2.5S13 14.9 13 13.5c0-1.4 2.5-4.5 2.5-4.5s2.5 3.1 2.5 4.5z"
                      fill="#dc2626"
                      stroke="none"
                    />
                  </svg>
                </div>

                <div className="bg-primary-light text-primary border-primary flex items-center gap-1 rounded-full border px-2.5 py-1">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>

                  <span className="text-[9px] font-bold uppercase tracking-wider">
                    SAFE
                  </span>
                </div>
              </div>

              <div className="mb-5 flex flex-1 flex-col">
                <h3 className="text-dark mb-3 min-h-[40px] line-clamp-2 text-[14px] font-bold leading-snug tracking-tight">
                  {pkg.title}
                </h3>

                <div className="mb-3 self-start">
                  <span className="bg-primary-light text-primary rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                    Home Collection Available
                  </span>
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

export default MostBookedCheckups;