import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { AppButton } from "../common/AppButton";

const PromotionalBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-20 -mt-8 w-full select-none overflow-hidden bg-background py-0 md:-mt-16">
      <div className="relative flex min-h-[300px] w-full items-center bg-primary py-6 shadow-lg md:min-h-[340px] md:py-8">
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/3 rounded-l-full bg-white/[0.03] md:block" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/[0.02] blur-xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 p-8 md:grid-cols-12 md:p-12">
          <div className="flex flex-col justify-center space-y-4 text-left md:col-span-7 md:space-y-5">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              The Excellence of{" "}
              <span className="text-amber-300">MedLab Labs</span>
            </h2>

            <div className="max-w-xl space-y-3 text-xs leading-relaxed text-white/90 md:text-[13px]">
              <p>
                MedLab is one of the most trusted players in diagnostics today,
                with a network of fully automated labs across major cities in
                India, powered with innovative technology, advanced robotics and
                intelligent digital solutions.
              </p>

              <p>
                With an extensive team of highly qualified lab technicians and
                pathologists, our single-minded purpose is to follow the
                strictest quality measures to maintain accuracy for each test we
                perform.
              </p>
            </div>

            <div className="pt-2">
              <AppButton
                type="button"
                variant="secondary"
                onClick={() => navigate("/xpert-health-package")}
                className="group flex w-fit items-center gap-2 rounded-full bg-card px-6 py-2.5 text-xs font-bold text-foreground shadow-md hover:bg-muted active:scale-95"
              >
                Know more
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:translate-x-1" />
              </AppButton>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center md:col-span-5">
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-warning shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600"
                alt="MedLab Laboratory Testing"
                className="h-full w-full object-cover grayscale-25 transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition-all group-hover:bg-black/25" />

              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <span className="flex h-10 w-14 items-center justify-center rounded-xl bg-danger shadow-md shadow-black/20 transition-colors duration-200 hover:opacity-90">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current text-white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>

            <button
              type="button"
              className="mt-3 bg-transparent text-sm font-bold tracking-wide text-white hover:underline"
            >
              Watch video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;