const doctorImage =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600";

const safetyPoints = [
  "No infection",
  "No multiple needle pricks",
  "Sterile vacutainer tubes give accurate test results",
];

const SafeCollectionBanner = () => {
  return (
    <section className="w-full overflow-hidden bg-[#fdf6ee] py-6 font-sans select-none">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="relative flex min-h-[260px] w-full flex-col items-center justify-between overflow-hidden rounded-[32px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] md:flex-row">
          <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[260px] -translate-x-16 rounded-r-[220px] bg-[#fbeee6] opacity-80" />

          <div className="relative z-10 flex flex-1 flex-col items-center px-6 py-10 text-center md:items-start md:pl-16 md:text-left">
            <h2 className="m-0 text-left leading-tight">
              <span className="block text-3xl font-black tracking-wide text-[#b12b66] sm:text-4xl md:text-[38px]">
                Sample Collection is now
              </span>

              <span className="mt-3 block text-3xl font-normal tracking-wide text-gray-500 sm:text-4xl md:text-[36px]">
                Safe, Easy & Pain Free
              </span>
            </h2>

            <div className="bg-primary mt-4 mb-6 h-[1.5px] w-full max-w-[480px] opacity-80" />

            <div className="rounded-xl border border-[#fae7b5]/60 bg-[#fdf3d8] px-5 py-3 shadow-xs">
              <p className="text-xs font-semibold leading-relaxed tracking-wide text-gray-700 sm:text-sm">
                {safetyPoints.map((point, index) => (
                  <span key={point}>
                    {index > 0 && (
                      <span className="mx-2 text-gray-300">|</span>
                    )}

                    <span
                      className={
                        index === safetyPoints.length - 1
                          ? "mt-0.5 block font-medium text-gray-500 sm:mt-0 sm:inline"
                          : ""
                      }
                    >
                      {point}
                    </span>
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-4 flex h-[240px] w-full shrink-0 items-end justify-center self-end overflow-hidden md:mt-0 md:h-[260px] md:w-[380px] md:justify-end">
            <div className="bg-primary-light absolute bottom-0 right-12 z-0 h-[180px] w-[180px] rounded-full opacity-60 blur-md" />

            <img
              src={doctorImage}
              alt="MedLab diagnostics doctor"
              loading="lazy"
              className="z-10 h-full w-auto translate-y-1 scale-x-[-1] object-contain pointer-events-none md:object-right-bottom"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeCollectionBanner;