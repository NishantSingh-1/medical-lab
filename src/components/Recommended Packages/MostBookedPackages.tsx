import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";
import Badge from "../common/Badge";
import { packagesData } from "./RecommendedPackages";

const MostBookedPackages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white px-4 pt-36 text-left font-sans md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="border-primary mb-8 border-b pb-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-primary mb-3 flex items-center gap-2 bg-transparent text-xs font-bold uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>

          <h1 className="text-dark text-2xl font-black tracking-tight">
            Most Booked Packages
          </h1>

          <p className="mt-0.5 text-xs font-normal text-gray-400">
            Showing {packagesData.length} tests found in your selected area configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packagesData.map((pkg) => (
            <Card
              key={pkg.id}
              className="border-primary flex flex-col justify-between p-5 text-left transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-primary-light flex h-12 w-12 items-center justify-center rounded-full">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5A3.375 3.375 0 0010.125 2.25H4.5A2.25 2.25 0 002.25 4.5v15a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V14.25z"
                      />
                    </svg>
                  </div>

                  <Badge>✓ SAFE</Badge>
                </div>

                <h3 className="text-dark mb-2 min-h-[40px] line-clamp-2 text-[14px] font-bold leading-snug">
                  {pkg.title}
                </h3>

                <div className="mb-3">
                  <Badge className="rounded-md">
                    Home Collection Available
                  </Badge>
                </div>

                <p className="mb-4 min-h-[32px] text-[11px] font-normal leading-relaxed text-gray-400">
                  {pkg.features}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className="text-dark text-lg font-black tracking-tight">
                    ₹{pkg.actualPrice}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
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
                    className="rounded-lg py-2 text-xs"
                  >
                    View Details
                  </Button>

                  <Button
                    type="button"
                    variant="primary"
                    className="rounded-lg py-2 text-xs"
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

export default MostBookedPackages;