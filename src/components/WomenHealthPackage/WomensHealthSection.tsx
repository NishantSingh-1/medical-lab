import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export const womensPackagesData = [
  {
    id: "pcod",
    title: "PCOD",
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-slate-50",
  },
  {
    id: "pcos",
    title: "PCOS",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-slate-50",
  },
  {
    id: "pregnancy",
    title: "Pregnancy",
    img: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-slate-50",
  },
  {
    id: "full-body",
    title: "Full Body",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-slate-50",
  },
];

const WomensHealthSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full select-none bg-white px-4 py-10 font-sans md:px-8">
      <div className="border-primary mx-auto max-w-[1240px] rounded-3xl border-2 bg-white p-6 md:p-10">
        <div className="mb-8 flex w-full items-center justify-between px-2">
          <h2 className="text-dark text-xl font-extrabold tracking-tight md:text-2xl">
            Womens Health Packages
          </h2>

          <Button
            type="button"
            onClick={() => navigate("/womens-health-packages")}
            className="rounded-lg px-5 py-1.5 text-xs"
          >
            View All
          </Button>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-2 md:gap-10 lg:grid-cols-4 lg:gap-12 xl:gap-14">
          {womensPackagesData.map((pkg) => (
            <article
              key={pkg.id}
              className={`${pkg.bgColor} group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/60 p-4 transition-all duration-300 hover:shadow-md`}
            >
              <img
                src={pkg.img}
                alt={`${pkg.title} health package`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

              <div className="text-primary relative z-10 w-full rounded-full border border-slate-100 bg-white py-2.5 text-center text-xs font-extrabold uppercase tracking-wider shadow-xs select-none md:text-sm">
                {pkg.title}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomensHealthSection;