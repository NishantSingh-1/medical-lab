import { ArrowLeft, ArrowRight, UploadCloud, FileText } from "lucide-react";
import { ChangeEvent } from "react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

import { useBookingStore } from "../store/useBookingStore";

export const PrescriptionUploadStep = () => {
  const {
    prescriptionFile,
    setPrescriptionFile,
    setStep,
  } = useBookingStore();

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setPrescriptionFile(file);
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-black">
          Upload Prescription
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Upload doctor's prescription if required.
        </p>
      </div>

      <AppCard className="border-dashed border-2 text-center py-12">

        <UploadCloud
          className="mx-auto text-primary"
          size={50}
        />

        <h3 className="mt-4 font-bold">
          Upload Prescription
        </h3>

        <p className="text-sm text-muted-foreground mt-2">
          JPG, PNG or PDF (Max 5MB)
        </p>

        <label className="mt-5 inline-block">

          <input
            hidden
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleUpload}
          />

          <AppButton type="button">
            Choose File
          </AppButton>

        </label>

        {prescriptionFile && (

          <div className="mt-6 flex justify-center items-center gap-3">

            <FileText
              className="text-primary"
              size={18}
            />

            <span className="font-semibold">
              {prescriptionFile.name}
            </span>

          </div>

        )}

      </AppCard>

      <div className="flex justify-between">

        <AppButton
          variant="outline"
          onClick={() => setStep("SLOT")}
        >
          <ArrowLeft size={18} />
          Back
        </AppButton>

        <AppButton
          onClick={() => setStep("REVIEW")}
        >
          Continue
          <ArrowRight size={18} />
        </AppButton>

      </div>

    </div>
  );
};