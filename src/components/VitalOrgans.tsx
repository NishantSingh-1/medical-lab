import type { ReactNode } from "react";

interface OrganCard {
  id: number;
  name: string;
  icon: ReactNode;
  bgClass: string;
  textClass: string;
}

const organs: OrganCard[] = [
  {
    id: 1,
    name: "Heart",
    bgClass: "bg-blue-50 border-blue-100/50",
    textClass: "text-blue-900",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#ef4444"
        />
        <path
          d="M11.5 3v4M13.5 3v3M10 2.5h1.5M13 2.5h1.5"
          stroke="#991b1b"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M7 6.5c-1.5 0-2.5 1-2.5 2.5"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Thyroid",
    bgClass: "bg-pink-50 border-pink-100/50",
    textClass: "text-rose-800",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
        <path d="M12 4v14" stroke="#f43f5e" strokeWidth="2" strokeDasharray="2 2" />
        <path
          d="M6 5c-1.5 0-3 1.5-3 4.5s1.5 6.5 3 6.5c2.5 0 3.5-3.5 3.5-5.5S8.5 5 6 5z"
          fill="#f43f5e"
          opacity="0.85"
        />
        <path
          d="M18 5c1.5 0 3 1.5 3 4.5s-1.5 6.5-3 6.5c-2.5 0-3.5-3.5-3.5-5.5s1-5.5 3-5.5z"
          fill="#f43f5e"
          opacity="0.85"
        />
        <path
          d="M8.5 11c1.5.5 2 1 3.5 1s2-.5 3.5-1"
          stroke="#be123c"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Joint pain",
    bgClass: "bg-purple-50 border-purple-100/50",
    textClass: "text-purple-800",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
        <path
          d="M12 9c1.38 0 2.5-1.12 2.5-2.5S13.13 3.5 11 3.5s-3 1.5-3 3c0 1.38 1.12 2.5 4 2.5z"
          fill="#a78bfa"
        />
        <path
          d="M12 14c-1.38 0-2.5 1.12-2.5 2.5s1.37 3 3.5 3 3-1.5 3-3c0-1.38-1.12-2.5-4-2.5z"
          fill="#a78bfa"
        />
        <path d="M10.5 8.5v6.5M13.5 8.5v6.5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 11.5h2M15 11.5h2" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Liver",
    bgClass: "bg-amber-50 border-amber-100/50",
    textClass: "text-amber-900",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
        <path
          d="M21 11.5c0-3.5-4-6.5-9-6.5-3.5 0-7.5 2-8.5 4.5C2.3 12.5 3.5 17 7 18.5c4 1.5 11 1 12.5-2 1-2 1.5-3.5 1.5-5z"
          fill="#d97706"
        />
        <path d="M11.5 5.5c-1 2-1 5 .5 7" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 13.5c-1.5.5-2 2-2 2" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Lungs",
    bgClass: "bg-yellow-50 border-yellow-100/50",
    textClass: "text-yellow-900",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
        <path d="M12 4v7m0 0l-3 3m3-3l3 3" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M10.5 7.5C8.5 6 5 6.5 4.5 10s1 6.5 4.5 7.5c2 .5 2-2.5 2-4.5s-.5-4.5-1.5-5.5z"
          fill="#facc15"
          opacity="0.9"
        />
        <path
          d="M13.5 7.5c2-1.5 5.5-1 6 2.5s-1 6.5-4.5 7.5c-2 .5-2-2.5-2-4.5s.5-4.5 1.5-5.5z"
          fill="#facc15"
          opacity="0.9"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Kidney",
    bgClass: "bg-slate-100 border-slate-200/60",
    textClass: "text-slate-800",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none">
        <path d="M12 6v12" stroke="#94a3b8" strokeWidth="1.5" />
        <path
          d="M7.5 7C5.5 7 4 9 4 12s1.5 5 3.5 5c1 0 1.5-1.5 1.5-3V10c0-1.5-.5-3-1.5-3z"
          fill="#64748b"
        />
        <path
          d="M16.5 7c2 0 3.5 2 3.5 5s-1.5 5-3.5 5c-1 0-1.5-1.5-1.5-3V10c0-1.5.5-3 1.5-3z"
          fill="#64748b"
        />
        <path d="M9 11.5h3M12 12.5h3" stroke="#475569" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const VitalOrgans = () => {
  return (
    <section className="w-full select-none bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-6">
          <h2 className="text-dark text-xl font-bold tracking-tight md:text-2xl">
            Checkups based on Vital Organs
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {organs.map((organ) => (
            <article
              key={organ.id}
              className={`${organ.bgClass} flex min-h-[180px] cursor-pointer flex-col items-start justify-between rounded-2xl border p-4 pb-5 pt-5 transition-all duration-300 hover:shadow-md`}
            >
              <span className={`${organ.textClass} text-base font-bold tracking-tight`}>
                {organ.name}
              </span>

              <div className="my-1 mt-2 flex w-full justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:scale-105">
                  {organ.icon}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VitalOrgans;