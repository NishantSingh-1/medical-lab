import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";
import Badge from "../common/Badge";

const parameters = [
  "Thyroid Profile (T3, T4, TSH)",
  "Liver Function Test (LFT - 11 Parameters)",
  "Kidney Function Test (KFT - 8 Parameters)",
  "Lipid Profile (Cholesterol, Triglycerides)",
  "Complete Blood Count (CBC - 24 Parameters)",
  "Blood Sugar (Fasting & PP)",
  "Vitamin D3 & Vitamin B12 Levels",
  "Iron Deficiency Profile",
];

const bookingSteps = [
  {
    step: "Step 1",
    title: "Schedule home sample collection slot",
  },
  {
    step: "Step 2",
    title: "Certified phlebotomist visits location",
  },
  {
    step: "Step 3",
    title: "Get digital records within 12-24 hours",
  },
];

const XpertPackageDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fcfcfc] px-4 pb-16 pt-36 text-left font-sans md:px-8">
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-primary mb-5 flex items-center gap-2 bg-transparent text-xs font-bold uppercase tracking-wider hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>

        <section className="bg-primary mb-8 rounded-3xl p-6 text-white shadow-md md:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Badge className="bg-white/20 text-white">
                Most Recommended
              </Badge>

              <h1 className="mt-2.5 text-2xl font-black tracking-tight md:text-3xl">
                MedLab Xpert Full Body Package
              </h1>

              <p className="mt-1 text-xs font-medium text-teal-50/70 md:text-sm">
                Complete physiological mapping for preventive wellness auditing
              </p>
            </div>

            <div className="min-w-[130px] shrink-0 rounded-2xl bg-white p-4 text-center">
              <span className="block text-xs font-medium text-gray-400 line-through">
                ₹2,999
              </span>

              <span className="my-0.5 block text-2xl font-black tracking-tight text-gray-900">
                ₹1,499
              </span>

              <Badge>50% Special Off</Badge>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <Card className="p-6">
              <h3 className="text-dark mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 text-base font-extrabold">
                <ClipboardCheck className="text-primary h-5 w-5" />
                Included Test Parameters (85+)
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {parameters.map((parameter) => (
                  <div
                    key={parameter}
                    className="flex items-start gap-2 text-xs font-medium text-gray-600"
                  >
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <span>{parameter}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-dark mb-3 flex items-center gap-2 text-base font-extrabold">
                <ShieldAlert className="text-primary h-5 w-5" />
                Pre-test Preparations
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-xs font-medium leading-relaxed text-gray-500">
                <li>
                  10-12 hours of strict fasting is required overnight before
                  sample collection.
                </li>
                <li>
                  Water can be consumed normally during the fasting period
                  sequence.
                </li>
                <li>
                  Avoid alcohol or heavy fat intake dietary sessions 24 hours
                  prior to screening.
                </li>
              </ul>
            </Card>
          </div>

          <Card className="space-y-4 p-5 text-center md:col-span-4">
            <h4 className="text-dark text-sm font-black uppercase tracking-tight">
              Booking Process
            </h4>

            <div className="space-y-3">
              {bookingSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-left"
                >
                  <span className="text-primary block text-[10px] font-bold uppercase tracking-wider">
                    {item.step}
                  </span>

                  <p className="mt-0.5 text-xs font-bold text-gray-600">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="primary"
              className="mt-2 w-full rounded-xl py-3 text-xs font-extrabold tracking-wide md:text-sm"
            >
              Book Appointment Now
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default XpertPackageDetails;