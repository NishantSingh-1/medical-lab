import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import TestCard from "../../../components/TestCard";
import { Search } from "lucide-react";

const tests = [
  {
    title: "Complete Blood Count",
    price: "499",
    reportTime: "24 Hours",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    title: "Liver Function Test",
    price: "899",
    reportTime: "12 Hours",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
  },
  {
    title: "Kidney Function Test",
    price: "999",
    reportTime: "10 Hours",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
  },
  {
    title: "Vitamin D Test",
    price: "699",
    reportTime: "8 Hours",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
];

const TestsPage = () => {
  return (
    <div className="bg-[#fdf6ee] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-[190px] lg:pt-[170px] pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold border border-teal-100">
            Explore Medical Tests
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Book Trusted Lab Tests at Home
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-7">
            Choose from trusted healthcare diagnostic services with fast reports,
            safe sample collection and affordable pricing.
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-center w-full h-[58px] bg-white border border-teal-100 rounded-2xl px-5 shadow-sm">
            <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search medical tests..."
              className="w-full bg-transparent outline-none border-none text-sm text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tests.map((test, index) => (
            <TestCard
              key={index}
              title={test.title}
              price={test.price}
              reportTime={test.reportTime}
              image={test.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestsPage;