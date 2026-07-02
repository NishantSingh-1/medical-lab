import {
  Award,
  Building2,
  FlaskConical,
  ShieldCheck,
  Users2,
} from "lucide-react";

const trustItems = [
  {
    id: 1,
    icon: Award,
    title: "700+",
    description: "100% NABL & ISO Certified Labs",
  },
  {
    id: 2,
    icon: FlaskConical,
    title: "70,000+",
    description: "Tests processed every day",
  },
  {
    id: 3,
    icon: Users2,
    title: "70 Million",
    description: "Total customers served",
  },
  {
    id: 4,
    icon: Building2,
    title: "700",
    description: "Collection Centers across India",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "7000+",
    description: "Qualified Phlebotomists",
  },
];

const carouselItems = [...trustItems, ...trustItems];

const TrustCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-[var(--color-primary)] bg-white py-8 font-sans select-none">
      <style>{`
        @keyframes trustScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .trust-scroll {
          display: flex;
          width: max-content;
          animation: trustScroll 20s linear infinite;
        }

        .trust-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

      <div className="trust-scroll gap-6 md:gap-10">
        {carouselItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.id}-${index}`}
              className="flex min-w-[260px] items-center gap-4 rounded-2xl border border-[var(--color-primary)] bg-slate-50/60 px-6 py-4 transition-all duration-300 hover:bg-white hover:shadow-md md:min-w-[300px]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <Icon
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div className="space-y-0.5 text-left">
                <h4 className="text-[var(--color-text-dark)] text-lg font-black leading-none tracking-tight md:text-xl">
                  {item.title}
                </h4>

                <p className="text-[11px] font-bold leading-tight text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustCarousel;