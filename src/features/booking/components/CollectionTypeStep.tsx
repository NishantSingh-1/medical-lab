import { ArrowLeft, ArrowRight, Home, Building2 } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppBadge } from "@/components/common/AppBadge";

import { useBookingStore } from "../store/useBookingStore";

export const CollectionTypeStep = () => {
  const {
    collectionType,
    setCollectionType,
    setStep,
  } = useBookingStore();

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-black text-foreground">
          Choose Collection Type
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Select how you want to give your sample.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <AppCard
          onClick={() => setCollectionType("HOME")}
          className={`cursor-pointer transition-all ${
            collectionType === "HOME"
              ? "border-primary ring-2 ring-primary-light"
              : ""
          }`}
        >
          <Home className="h-10 w-10 text-primary" />

          <h3 className="mt-4 text-lg font-bold">
            Home Collection
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Certified phlebotomist will visit your home.
          </p>

          <AppBadge className="mt-4">
            Recommended
          </AppBadge>
        </AppCard>

        <AppCard
          onClick={() => setCollectionType("WALK_IN")}
          className={`cursor-pointer transition-all ${
            collectionType === "WALK_IN"
              ? "border-primary ring-2 ring-primary-light"
              : ""
          }`}
        >
          <Building2 className="h-10 w-10 text-primary" />

          <h3 className="mt-4 text-lg font-bold">
            Walk-in Lab
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Visit your nearest MedLab collection center.
          </p>
        </AppCard>

      </div>

      <div className="flex justify-between">

        <AppButton
          variant="outline"
          onClick={() => setStep("PATIENT")}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton
          disabled={!collectionType}
          onClick={() => setStep("ADDRESS")}
        >
          Continue
          <ArrowRight size={18} />
        </AppButton>

      </div>

    </div>
  );
};