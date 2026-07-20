import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { AppBadge } from "../common/AppBadge";
import { AppButton } from "../common/AppButton";
import { AppCard } from "../common/AppCard";

const allMostBookedTests = [
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
  {
    id: "kft",
    title: "KIDNEY FUNCTION TEST (KFT)",
    actualPrice: 750,
    marketPrice: 1000,
    discount: "25% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "tsh",
    title: "THYROID STIMULATING HORMONE (TSH)",
    actualPrice: 320,
    marketPrice: 480,
    discount: "33% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "vitamin-d",
    title: "VITAMIN D (25-HYDROXY)",
    actualPrice: 850,
    marketPrice: 1200,
    discount: "29% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "vitamin-b12",
    title: "VITAMIN B12 (CYANOCOBALAMIN)",
    actualPrice: 699,
    marketPrice: 999,
    discount: "30% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "uric-acid",
    title: "URIC ACID, SERUM",
    actualPrice: 250,
    marketPrice: 350,
    discount: "28% off",
    deliveryTime: "Report delivery- Same Day",
  },
  {
    id: "blood-sugar",
    title: "BLOOD SUGAR FASTING (FBS)",
    actualPrice: 150,
    marketPrice: 200,
    discount: "25% off",
    deliveryTime: "Report delivery- Same Day",
  },
];

const MostBookedTestsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full select-none bg-background px-4 pb-12 pt-36 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col space-y-2 text-left">
          <AppButton
            type="button"
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex w-fit items-center gap-2 px-0 text-sm font-bold text-primary hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </AppButton>

          <h1 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Most Booked Tests
          </h1>

          <p className="text-sm font-normal text-muted-foreground">
            Showing 10 tests found in your selected area configurations.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allMostBookedTests.map((pkg) => (
            <AppCard
              key={pkg.id}
              className="flex min-h-[360px] w-full flex-col justify-between border-primary p-6 text-left transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-full shrink-0 items-center justify-between">
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>

                <AppBadge variant="outline" className="text-[11px]">
                  ✓ SAFE
                </AppBadge>
              </div>

              <div className="flex flex-grow flex-col justify-start pt-2 text-left">
                <h3 className="mb-4 min-h-[44px] text-[15px] font-bold leading-snug tracking-tight text-foreground">
                  {pkg.title}
                </h3>

                <div className="mb-4">
                  <AppBadge className="px-3 py-1 text-[11px]">
                    Home Collection Available
                  </AppBadge>
                </div>

                <p className="mt-1 text-[12px] font-medium tracking-tight text-muted-foreground">
                  {pkg.deliveryTime}
                </p>
              </div>

              <div className="shrink-0 border-t border-border pt-4">
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-foreground">
                    ₹{pkg.actualPrice}
                  </span>

                  <span className="text-xs font-medium text-muted-foreground line-through">
                    ₹{pkg.marketPrice}
                  </span>

                  <span className="text-[12px] font-bold text-primary">
                    {pkg.discount}
                  </span>
                </div>

                <div className="grid w-full grid-cols-2 gap-3">
                  <AppButton
                    type="button"
                    variant="outline"
                    className="py-2.5 text-xs"
                  >
                    View Details
                  </AppButton>

                  <AppButton type="button" className="py-2.5 text-xs">
                    Add To Cart
                  </AppButton>
                </div>
              </div>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostBookedTestsPage;