import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { womensPackagesData } from "./WomensHealthSection";

const topTestsList = [
  "Glucose-6-Phosphate Dehydrogenase (G6PD)",
  "C-Peptide Test",
  "Urine Sugar",
  "WIDAL Test",
  "Complete Blood Count (CBC)",
  "HIAA Quantitative",
  "24 HOURS Urinary Copper",
  "24 Hour Urinary Catecholamines",
  "Acetyl Choline Receptor (AChR) Antibody",
  "Complete Urine Examination (CUE)",
  "Alanine Aminotransferase (ALT/SGPT)",
  "Albumin",
  "Alcohol Testing",
  "Creatinine",
  "Aldolase",
  "Aldosterone Test",
  "Alkaline Phosphatase",
  "Alpha Feto Protein Serum",
  "17-hydroxyprogesterone (17 OHPG)",
  "Acetone / Ketone",
  "Double Marker Screening 1st Trimester",
];

const WomensHealthViewAll = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-left font-sans">
      <section className="bg-primary relative w-full overflow-hidden px-4 pb-10 pt-38 text-white md:px-8">
        <div className="absolute bottom-0 right-6 hidden opacity-10 md:block">
          <svg width="180" height="140" viewBox="0 0 100 100" fill="currentColor">
            <path
              d="M20 90 L40 30 L60 30 L80 90 Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="45" r="8" fill="white" />
          </svg>
        </div>

        <div className="mx-auto flex max-w-[1240px] flex-col space-y-1">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mb-2 flex items-center gap-1.5 border-none bg-transparent text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>

          <h1 className="text-2xl font-black tracking-tight md:text-4xl">
            Womens Health Packages
          </h1>

          <p className="text-[11px] font-medium tracking-wide text-white/70 md:text-xs">
            Home &gt; Womens Health Packages
          </p>
        </div>
      </section>

      <main className="mx-auto flex max-w-[1240px] flex-col space-y-14 px-4 py-12">
        <div className="grid w-full grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {womensPackagesData.map((pkg) => (
            <article
              key={pkg.id}
              className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-slate-200/40 bg-slate-100 p-4 shadow-xs"
            >
              <img
                src={pkg.img}
                alt={`${pkg.title} health package`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              <div className="text-dark relative z-10 w-full rounded-full border border-slate-100 bg-white py-2 text-center text-xs font-bold uppercase tracking-wide shadow-xs md:text-sm">
                {pkg.title}
              </div>
            </article>
          ))}
        </div>

        <section className="border-primary w-full border-t pt-8">
          <h3 className="text-dark mb-4 text-left text-lg font-black tracking-tight">
            Top Tests
          </h3>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-left text-xs font-medium leading-relaxed text-gray-500 md:text-[13px]">
            {topTestsList.map((test, index) => (
              <Fragment key={test}>
                <span className="hover:text-primary cursor-pointer transition-colors">
                  {test}
                </span>

                {index < topTestsList.length - 1 && (
                  <span className="select-none font-normal text-gray-300">
                    /
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WomensHealthViewAll;