import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";

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
    <div className="min-h-screen w-full select-none bg-slate-50/50 px-4 pb-12 pt-36 font-sans md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col space-y-2 text-left">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-primary flex w-fit items-center gap-2 bg-transparent text-sm font-bold transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>

          <h1 className="text-dark text-2xl font-black tracking-tight md:text-3xl">
            Most Booked Tests
          </h1>

          <p className="text-muted text-sm font-normal">
            Showing 10 tests found in your selected area configurations.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allMostBookedTests.map((pkg) => (
            <Card
              key={pkg.id}
              className="border-primary flex min-h-[360px] w-full flex-col justify-between p-6 text-left transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-full shrink-0 items-center justify-between">
                <div className="bg-primary-light flex h-14 w-14 items-center justify-center rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="text-primary h-7 w-7"
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

                <span className="text-primary rounded text-[11px] font-bold uppercase tracking-wider">
                  ✓ SAFE
                </span>
              </div>

              <div className="flex flex-grow flex-col justify-start pt-2 text-left">
                <h3 className="text-dark mb-4 min-h-[44px] text-[15px] font-bold leading-snug tracking-tight">
                  {pkg.title}
                </h3>

                <div className="mb-4">
                  <span className="bg-primary-light text-primary inline-block rounded-full px-3 py-1 text-[11px] font-bold">
                    Home Collection Available
                  </span>
                </div>

                <p className="mt-1 text-[12px] font-medium tracking-tight text-gray-400">
                  {pkg.deliveryTime}
                </p>
              </div>

              <div className="shrink-0 border-t border-gray-100 pt-4">
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className="text-dark text-xl font-black tracking-tight">
                    ₹{pkg.actualPrice}
                  </span>

                  <span className="text-xs font-medium text-gray-400 line-through">
                    ₹{pkg.marketPrice}
                  </span>

                  <span className="text-primary text-[12px] font-bold">
                    {pkg.discount}
                  </span>
                </div>

                <div className="grid w-full grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center justify-center rounded-xl py-2.5 text-xs"
                  >
                    View Details
                  </Button>

                  <Button
                    type="button"
                    variant="primary"
                    className="flex items-center justify-center rounded-xl py-2.5 text-xs"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostBookedTestsPage;