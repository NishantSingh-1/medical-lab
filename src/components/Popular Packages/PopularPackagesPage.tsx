import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { AppBadge } from "../common/AppBadge";
import { AppButton } from "../common/AppButton";
import { AppCard } from "../common/AppCard";

const allPopularPackages = [
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
  {
    id: "diabetes-advanced",
    title: "Diabetes Care Advanced",
    desc: "Includes HbA1c, Fasting Blood Sugar, Insulin, and microalbumin parameters.",
    actualPrice: 799,
    marketPrice: 1199,
    discount: "33% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-warning"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    bgColor: "bg-warning-light",
  },
  {
    id: "thyroid-care",
    title: "Thyroid Profile Total",
    desc: "Complete screening evaluating T3, T4, and Ultra-sensitive TSH hormone parameters.",
    actualPrice: 349,
    marketPrice: 699,
    discount: "50% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-secondary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 10.5C3.5 12 3 14 3 16a5 5 0 0 0 10 0c0-2-.5-4-1.5-5.5" />
        <path d="M19.5 10.5C20.5 12 21 14 21 16a5 5 0 0 1-10 0c0-2 .5-4 1.5-5.5" />
      </svg>
    ),
    bgColor: "bg-secondary-light",
  },
  {
    id: "vitamin-check",
    title: "Vitamin Deficiency Profile",
    desc: "Measures Vitamin D (25-Hydroxy) and Vitamin B12 levels for neural and bone support.",
    actualPrice: 999,
    marketPrice: 1998,
    discount: "50% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-warning"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 10h4a2 2 0 0 1 0 4H9M11 14l2 4" />
      </svg>
    ),
    bgColor: "bg-warning-light",
  },
  {
    id: "healthy-bones",
    title: "Healthy Bone & Joint Panel",
    desc: "Includes Calcium, Phosphorus, Alkaline Phosphatase, and Uric Acid profiling.",
    actualPrice: 499,
    marketPrice: 899,
    discount: "44% off",
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
        <path d="M16 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM8 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
      </svg>
    ),
    bgColor: "bg-info-light",
  },
  {
    id: "kidney-screening",
    title: "Kidney Function Test (KFT)",
    desc: "Evaluates Urea, Creatinine, Uric Acid, and Electrolytes mapping fluid filtration balance.",
    actualPrice: 599,
    marketPrice: 999,
    discount: "40% off",
    deliveryTime: "Report delivery- Same Day",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
    bgColor: "bg-primary-light",
  },
  {
    id: "live-smart-body",
    title: "Live Smart Full Body Fit",
    desc: "90+ tests including Complete Hemogram, Liver, Heart, Lipid, and Diabetic baseline metrics.",
    actualPrice: 1499,
    marketPrice: 2999,
    discount: "50% off",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    bgColor: "bg-success-light",
  },
];

const PopularPackagesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full select-none bg-background px-4 pb-12 pt-32 md:px-8">
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
            All Popular Health Packages
          </h1>

          <p className="text-sm font-normal text-muted-foreground">
            Select from our most comprehensive diagnostics profiles designed for complete analysis.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allPopularPackages.map((pkg) => (
            <AppCard
              key={pkg.id}
              className="flex min-h-[390px] w-full flex-col justify-between border-primary p-5 text-left transition-all duration-300 hover:shadow-lg"
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
                <h3 className="mb-2 min-h-[42px] line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-foreground">
                  {pkg.title}
                </h3>

                <p className="mb-3 min-h-[54px] line-clamp-3 text-[12px] leading-relaxed text-muted-foreground">
                  {pkg.desc}
                </p>

                <div className="mb-3 self-start">
                  <AppBadge>Home Collection Available</AppBadge>
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

                <div className="grid w-full grid-cols-2 gap-2.5">
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
    </div>
  );
};

export default PopularPackagesPage;