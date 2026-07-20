import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { AppBadge } from "../common/AppBadge";
import { AppButton } from "../common/AppButton";
import { AppCard } from "../common/AppCard";
import { packagesData } from "./RecommendedPackages";

const MostBookedPackages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background px-4 pt-36 text-left md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 border-b border-primary pb-4">
          <AppButton
            type="button"
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-3 flex items-center gap-2 px-0 text-xs font-bold uppercase tracking-wider text-primary hover:bg-transparent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </AppButton>

          <h1 className="text-2xl font-black tracking-tight text-foreground">
            Most Booked Packages
          </h1>

          <p className="mt-0.5 text-xs text-muted-foreground">
            Showing {packagesData.length} tests found in your selected area configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packagesData.map((pkg) => (
            <AppCard
              key={pkg.id}
              className="flex flex-col justify-between border-primary p-5 text-left transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-primary"
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

                  <AppBadge>✓ SAFE</AppBadge>
                </div>

                <h3 className="mb-2 min-h-[40px] line-clamp-2 text-[14px] font-bold leading-snug text-foreground">
                  {pkg.title}
                </h3>

                <div className="mb-3">
                  <AppBadge className="rounded-md">
                    Home Collection Available
                  </AppBadge>
                </div>

                <p className="mb-4 min-h-[32px] text-[11px] leading-relaxed text-muted-foreground">
                  {pkg.features}
                </p>
              </div>

              <div className="border-t border-border pt-3">
                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className="text-lg font-black tracking-tight text-foreground">
                    ₹{pkg.actualPrice}
                  </span>

                  <span className="text-xs text-muted-foreground line-through">
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
    </div>
  );
};

export default MostBookedPackages;