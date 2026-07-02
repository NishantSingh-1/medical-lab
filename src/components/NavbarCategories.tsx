import { useState } from "react";
import Button from "./common/Button";
import Card from "./common/Card";
import Badge from "./common/Badge";

const CATEGORY_MEGA_DATA = {
  "Full Body Checkup": {
    heading: "Why Full Body Checkups Matter:",
    benefits: [
      "Popular choice for preventive care.",
      "Early tracking captures critical risks.",
      "Helps maintain regular biological baselines.",
    ],
    packages: [
      {
        title: "Healthy India 2026 Full Body Checkup Lite",
        tests: "80+ Tests",
        time: "36 Hrs",
        price: 1046,
        oldPrice: 4548,
      },
      {
        title: "Make India Healthy Package 2026",
        tests: "7+ Tests",
        time: "24 Hrs",
        price: 99,
        oldPrice: 499,
      },
      {
        title: "Healthians Prime Care Diabetic Checkup",
        tests: "71+ Tests",
        time: "36 Hrs",
        price: 904,
        oldPrice: 3929,
      },
    ],
  },

  Heart: {
    heading: "Why Heart Checkups Matter:",
    benefits: [
      "Heart issues often start silently.",
      "Early tests can save lives.",
      "A healthy heart powers everything.",
    ],
    packages: [
      {
        title: "Cardiac Health Marker Package",
        tests: "11 Tests",
        time: "36 Hrs",
        price: 499,
        oldPrice: 1660,
      },
      {
        title: "Cardiac Health Marker Package Comprehensive",
        tests: "16 Tests",
        time: "36 Hrs",
        price: 1811,
        oldPrice: 6030,
      },
      {
        title: "Healthians Cardiac Risk Special",
        tests: "71 Tests",
        time: "12 Hrs",
        price: 2949,
        oldPrice: 9830,
      },
    ],
  },

  Cancer: {
    heading: "Why Cancer Checkups Matter:",
    benefits: [
      "Early signs are often silent.",
      "Screening can catch risks sooner.",
      "Timely detection saves lives.",
    ],
    packages: [
      {
        title: "Cancer Screening Package For Male",
        tests: "23 Tests",
        time: "23 Hrs",
        price: 699,
        oldPrice: 2330,
      },
      {
        title: "Cancer Screening Package For Female",
        tests: "3 Tests",
        time: "36 Hrs",
        price: 699,
        oldPrice: 2330,
      },
      {
        title: "Comprehensive Cancer Screening Package For Male",
        tests: "5 Tests",
        time: "63 Hrs",
        price: 1427,
        oldPrice: 4750,
      },
    ],
  },

  Thyroid: {
    heading: "Why Thyroid Checkups Matter:",
    benefits: [
      "Tiny gland, big impact.",
      "Imbalances affect mood and energy.",
      "Detect early, stay balanced.",
    ],
    packages: [
      {
        title: "Thyroid Profile-Total (T3, T4 & TSH Ultra-sensitive)",
        tests: "3 Tests",
        time: "23 Hrs",
        price: 427,
        oldPrice: 1420,
      },
      {
        title: "Thyroid Health Assessment Package",
        tests: "5 Tests",
        time: "33 Hrs",
        price: 763,
        oldPrice: 2540,
      },
      {
        title: "Healthians Prime Care Thyroid Plus Checkup Package",
        tests: "79 Tests",
        time: "24 Hrs",
        price: 1277,
        oldPrice: 4250,
      },
    ],
  },

  Diabetes: {
    heading: "Why Diabetes Checkups Matter:",
    benefits: [
      "High sugar harms silently.",
      "Early control prevents damage.",
      "Know your numbers, stay in charge.",
    ],
    packages: [
      {
        title: "Healthians Diabetic Checkup",
        tests: "44 Tests",
        time: "19 Hrs",
        price: 840,
        oldPrice: 2800,
      },
      {
        title: "Advance Diabetes Monitoring (Senior Male)",
        tests: "49 Tests",
        time: "23 Hrs",
        price: 2211,
        oldPrice: 7370,
      },
      {
        title: "Advance Diabetes Monitoring (Senior Female)",
        tests: "50 Tests",
        time: "46 Hrs",
        price: 1959,
        oldPrice: 6530,
      },
    ],
  },

  Pregnancy: {
    heading: "Why Pregnancy Checkup Matters:",
    benefits: [
      "Your health shapes your baby's.",
      "Regular checks ensure safety.",
      "Because motherhood deserves regular monitoring.",
    ],
    packages: [
      {
        title: "Basic Antenatal Care",
        tests: "66 Tests",
        time: "29 Hrs",
        price: 1654,
        oldPrice: 5510,
      },
      {
        title: "Advanced Antenatal Care",
        tests: "72 Tests",
        time: "36 Hrs",
        price: 2170,
        oldPrice: 7230,
      },
      {
        title: "Early Pregnancy Checkup",
        tests: "62 Tests",
        time: "48 Hrs",
        price: 3034,
        oldPrice: 10114,
      },
    ],
  },

  "Allergy/Intolerance": {
    heading: "Why Allergy/Intolerance Checkups Matter:",
    benefits: [
      "Hidden allergies trigger inflammation.",
      "Find your food triggers.",
      "Eat freely, live healthy.",
    ],
    packages: [
      {
        title: "Basic Allergy Package",
        tests: "28 Tests",
        time: "24 Hrs",
        price: 2462,
        oldPrice: 8200,
      },
      {
        title: "Allergy Comprehensive Package By Elisa Method",
        tests: "218 Tests",
        time: "52 Hrs",
        price: 3285,
        oldPrice: 10950,
      },
      {
        title: "Food Intolerance Package",
        tests: "215 Tests",
        time: "72 Hrs",
        price: 5499,
        oldPrice: 18330,
      },
    ],
  },

  Hormone: {
    heading: "Why Hormone Checkups Matters:",
    benefits: [
      "Hormones shape how you feel every day.",
      "Tiny imbalances can cause big changes.",
      "Maintain balance, stay in control.",
    ],
    packages: [
      {
        title: "Healthians Hormonal Imbalance Male Package",
        tests: "24 Tests",
        time: "101 Hrs",
        price: 3831,
        oldPrice: 12770,
      },
      {
        title: "Healthians Hormonal Imbalance Female Package",
        tests: "25 Tests",
        time: "101 Hrs",
        price: 4444,
        oldPrice: 14810,
      },
      {
        title: "Hormone Health Assessment Female",
        tests: "9 Tests",
        time: "101 Hrs",
        price: 5467,
        oldPrice: 18220,
      },
    ],
  },

  "DNA Test": {
    heading: "Discover what your DNA reveals:",
    benefits: [
      "Know your genetic health risks early.",
      "Know inherited health risks.",
      "Take preventive action.",
    ],
    packages: [
      {
        title: "Platinum Cardiac Screening (Heart Health) Package",
        tests: "Genetic & Blood markers",
        time: "Cardiometabolic",
        price: 6999,
        oldPrice: 23330,
      },
      {
        title: "DNA Skin & Beauty Package",
        tests: "Identify genetic triggers",
        time: "Personalized care",
        price: 5999,
        oldPrice: 19990,
      },
      {
        title: "Comprehensive DNA Package",
        tests: "Analyze nutrition and fitness",
        time: "Lifelong health",
        price: 6999,
        oldPrice: 23330,
      },
    ],
  },
};

type CategoryName = keyof typeof CATEGORY_MEGA_DATA;

const categories = Object.keys(CATEGORY_MEGA_DATA) as CategoryName[];

const NavbarCategories = () => {
  const [activeTab, setActiveTab] = useState<CategoryName | null>(null);

  const activeCategoryData = activeTab ? CATEGORY_MEGA_DATA[activeTab] : null;

  return (
    <div
      className="bg-primary relative block w-full select-none border-t border-white/10"
      onMouseLeave={() => setActiveTab(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-5 text-white sm:gap-2">
        <button
          type="button"
          className="p-3 text-xs transition-colors hover:bg-black/10"
          aria-label="Home category"
        >
          🏠
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onMouseEnter={() => setActiveTab(category)}
            className={`flex items-center gap-1 border-b-2 px-3 py-2.5 text-xs font-normal tracking-wide transition-all md:text-[13px] ${
              activeTab === category
                ? "border-orange-500 bg-white text-primary"
                : "border-transparent text-white hover:bg-black/5"
            }`}
          >
            <span>{category}</span>
            <span className="text-[9px] opacity-70">
              {activeTab === category ? "▲" : "▼"}
            </span>
          </button>
        ))}
      </div>

      {activeCategoryData && (
        <>
          <div className="pointer-events-none fixed inset-0 z-40 bg-black/40" />

          <div className="absolute left-0 top-full z-50 min-h-[340px] w-full border-t border-gray-100 bg-white py-6 text-gray-800 shadow-2xl">
            <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5">
              <Card className="col-span-3 flex flex-col justify-between border-teal-100/50 bg-gradient-to-b from-teal-50/50 to-emerald-50/30 p-5">
                <div>
                  <h3 className="text-dark mb-4 text-sm font-bold leading-tight md:text-base">
                    {activeCategoryData.heading}
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {activeCategoryData.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs leading-normal text-gray-600"
                      >
                        <span className="text-primary mt-0.5 shrink-0">●</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-1 rounded-xl bg-orange-500 py-3 text-xs font-bold text-white hover:bg-orange-600"
                >
                  <span>Talk to a Health Advisor</span>
                  <span>➔</span>
                </Button>
              </Card>

              <div className="col-span-9 flex flex-col gap-4">
                <h4 className="border-b border-gray-100 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Preventive Packages for {activeTab}
                </h4>

                <div className="grid grid-cols-3 gap-4">
                  {activeCategoryData.packages.map((pkg) => (
                    <Card
                      key={pkg.title}
                      className="flex min-h-[220px] flex-col justify-between p-4 transition-all hover:border-primary hover:shadow-md"
                    >
                      <div>
                        <h5 className="text-dark min-h-[36px] line-clamp-2 text-xs font-bold leading-snug md:text-[13px]">
                          {pkg.title}
                        </h5>

                        <div className="mt-3 flex items-center gap-3 text-[11px] text-gray-500">
                          <div className="flex items-center gap-1">
                            <span>🧪</span>
                            <span>{pkg.tests}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <span>⏱️</span>
                            <span className="truncate">{pkg.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-dashed border-gray-100 pt-3">
                        <div className="mb-2 flex items-baseline gap-2">
                          <span className="text-[11px] text-gray-400 line-through">
                            ₹{pkg.oldPrice}
                          </span>

                          <span className="text-dark text-base font-extrabold md:text-lg">
                            ₹{pkg.price}
                          </span>

                          <Badge variant="success" className="ml-auto">
                            70% OFF
                          </Badge>
                        </div>

                        <Button
                          type="button"
                          className="w-full rounded-xl py-2.5 text-xs"
                        >
                          Book Now
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarCategories;