const steps = [
  {
    id: "01",
    title: "Book with Ease",
    desc: "Choose your test, time slot and book instantly.",
    icon: "calendar",
  },
  {
    id: "02",
    title: "Hassle-Free Home Collection",
    desc: "Safe & timely sample collection by trained phlebotomist.",
    icon: "home",
  },
  {
    id: "03",
    title: "Secure Sample Transfer to Labs",
    desc: "Temperature-controlled & safe sample transportation to lab.",
    icon: "van",
  },
  {
    id: "04",
    title: "Quick & Easy Report Access",
    desc: "Get your reports within 6 hours via WhatsApp, SMS and Email.",
    icon: "report",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full select-none overflow-hidden bg-white px-6 py-12 font-sans md:py-16">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center">
        <div className="mb-6 text-center md:mb-16">
          <span className="mb-1 hidden text-[25px] font-semibold tracking-wide text-gray-600 md:block">
            Your MedLab
          </span>

          <h2 className="text-primary m-0 text-2xl font-extrabold tracking-tight sm:text-2xl md:text-[34px]">
            Health Checkup Journey
          </h2>

          <div className="mx-auto mt-3 block h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60 md:hidden" />
        </div>

        <div className="relative mt-4 hidden w-full max-w-[1200px] px-4 md:block">
          <div className="pointer-events-none absolute left-[6%] right-[6%] top-[38px] z-0 hidden h-14 w-[88%] md:block">
            <svg
              viewBox="0 0 1000 60"
              fill="none"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 20 Q 120 45, 240 25 T 490 25 T 740 25 T 1000 20"
                stroke="currentColor"
                className="text-primary"
                strokeWidth="1.8"
                strokeDasharray="4 6"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative flex flex-col items-start text-left"
              >
                <div className="bg-primary-light relative mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white shadow-xs transition-all duration-300 group-hover:scale-105">
                  <StepIcon type={step.icon} />

                  <div className="bg-primary absolute -right-1 top-1/2 z-20 hidden h-2 w-2 -translate-y-1/2 rounded-full opacity-70 md:block" />
                </div>

                <div className="w-full pr-2">
                  <h3 className="text-dark mb-2 flex min-h-[44px] items-center text-[15px] font-bold leading-snug tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-[12px] font-normal leading-relaxed text-gray-400 sm:text-[13px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepIcon = ({ type }: { type: string }) => {
  if (type === "calendar") {
    return (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="border-primary relative flex h-9 w-9 flex-col overflow-hidden rounded-lg border-2 bg-white pt-1.5 shadow-xs">
          <div className="bg-primary absolute left-0 right-0 top-0 h-2" />
          <div className="mt-0.5 grid grid-cols-3 gap-0.5 p-1">
            <div className="h-1 w-1.5 rounded-2xs bg-gray-300" />
            <div className="h-1 w-1.5 rounded-2xs bg-gray-300" />
            <div className="h-1 w-1.5 rounded-2xs bg-gray-300" />
          </div>
        </div>

        <div className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-amber-400 shadow-xs">
          <div className="h-1.5 w-1.5 -translate-y-0.5 rotate-45 border-b border-r border-white" />
        </div>
      </div>
    );
  }

  if (type === "home") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="h-11 w-11 translate-y-0.5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
      >
        <path d="M32 10 L10 27 L17 31.5 L32 19 Z" fill="#f0783c" />
        <path d="M32 10 L54 27 L47 31.5 L32 19 Z" fill="#d65e24" />
        <path d="M15.5 29.5 L32 19 L32 54 L15.5 47.5 Z" fill="#ffffff" />
        <path d="M32 19 L48.5 29.5 L48.5 47.5 L32 54 Z" fill="#e3ded7" />
        <path d="M21.5 40 L28 35.5 L28 50.5 L21.5 48 Z" fill="#a0522d" />
        <path d="M36.5 34 L43.5 37.5 L43.5 44 L36.5 40.5 Z" fill="#9cd3c9" />
        <path
          d="M36.5 34 L43.5 37.5 L43.5 44 L36.5 40.5 Z"
          fill="none"
          stroke="#b0aba2"
          strokeWidth="0.5"
        />
      </svg>
    );
  }

  if (type === "van") {
    return (
      <div className="relative flex h-10 w-12 items-center justify-center">
        <div className="relative flex -translate-y-0.5 items-end justify-center">
          <div className="flex h-5.5 w-6.5 items-center justify-center rounded-l-md bg-amber-400 shadow-xs">
            <div className="h-2.5 w-2.5 rounded-full border border-white/30" />
          </div>
          <div className="relative -ml-0.5 h-4.5 w-4.5 rounded-r-md bg-amber-600 shadow-xs">
            <div className="absolute right-0.5 top-0.5 h-2 w-2 rounded-2xs bg-teal-100" />
          </div>
          <div className="absolute -bottom-1 left-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-800" />
          <div className="absolute -bottom-1 right-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-800" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-12 w-12 items-center justify-center">
      <div className="border-primary relative flex h-8.5 w-7 flex-col gap-0.5 rounded-md border-2 bg-white p-1.5 shadow-xs">
        <div className="bg-primary absolute right-0 top-0 h-2 w-2 rounded-bl-xs" />
        <div className="bg-primary h-0.5 w-3.5 rounded-full opacity-60" />
        <div className="h-0.5 w-4 rounded-full bg-gray-300" />
        <div className="h-0.5 w-2.5 rounded-full bg-gray-300" />
      </div>

      <div className="bg-primary absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full border border-white shadow-xs">
        <svg
          className="h-2 w-2 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
};

export default HowItWorks;