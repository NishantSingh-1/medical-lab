import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";

import { AppBadge } from "../common/AppBadge";
import { AppButton } from "../common/AppButton";
import { AppCard } from "../common/AppCard";

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
    <div className="min-h-screen w-full bg-background px-4 pb-16 pt-36 text-left md:px-8">
      <div className="mx-auto max-w-4xl">
        <AppButton
          type="button"
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-5 flex items-center gap-2 px-0 text-xs font-bold uppercase tracking-wider text-primary hover:bg-transparent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </AppButton>

        <section className="mb-8 rounded-3xl bg-primary p-6 text-white shadow-md md:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <AppBadge className="bg-white/20 text-white">
                Most Recommended
              </AppBadge>

              <h1 className="mt-2.5 text-2xl font-black tracking-tight md:text-3xl">
                MedLab Xpert Full Body Package
              </h1>

              <p className="mt-1 text-xs font-medium text-white/75 md:text-sm">
                Complete physiological mapping for preventive wellness auditing
              </p>
            </div>

            <div className="min-w-[130px] shrink-0 rounded-2xl bg-card p-4 text-center">
              <span className="block text-xs font-medium text-muted-foreground line-through">
                ₹2,999
              </span>

              <span className="my-0.5 block text-2xl font-black tracking-tight text-foreground">
                ₹1,499
              </span>

              <AppBadge>50% Special Off</AppBadge>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <AppCard className="p-6">
              <h3 className="mb-4 flex items-center gap-2 border-b border-border pb-3 text-base font-extrabold text-foreground">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                Included Test Parameters (85+)
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {parameters.map((parameter) => (
                  <div
                    key={parameter}
                    className="flex items-start gap-2 text-xs font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{parameter}</span>
                  </div>
                ))}
              </div>
            </AppCard>

            <AppCard className="p-6">
              <h3 className="mb-3 flex items-center gap-2 text-base font-extrabold text-foreground">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Pre-test Preparations
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-xs font-medium leading-relaxed text-muted-foreground">
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
            </AppCard>
          </div>

          <AppCard className="space-y-4 p-5 text-center md:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-tight text-foreground">
              Booking Process
            </h4>

            <div className="space-y-3">
              {bookingSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-border bg-muted p-3 text-left"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-primary">
                    {item.step}
                  </span>

                  <p className="mt-0.5 text-xs font-bold text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <AppButton
              type="button"
              className="mt-2 w-full py-3 text-xs font-extrabold tracking-wide md:text-sm"
            >
              Book Appointment Now
            </AppButton>
          </AppCard>
        </div>
      </div>
    </div>
  );
};

export default XpertPackageDetails;