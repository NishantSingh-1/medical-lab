import { useState } from "react";
import { X } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";
import { AppInput } from "@/components/common/AppInput";

import { useInsuranceStore } from "../store/useInsuranceStore";
import type {
  InsuranceItem,
  InsuranceStatus,
} from "../types/insurance.types";

type AddInsuranceDialogProps = {
  onClose: () => void;
};

export const AddInsuranceDialog = ({
  onClose,
}: AddInsuranceDialogProps) => {
  const insurance = useInsuranceStore((state) => state.insurance);
  const setInsurance = useInsuranceStore((state) => state.setInsurance);

  const [form, setForm] = useState({
    provider: "",
    policyNumber: "",
    memberId: "",
    validTill: "",
    status: "ACTIVE" as InsuranceStatus,
  });

  const handleSave = () => {
    if (
      !form.provider.trim() ||
      !form.policyNumber.trim() ||
      !form.memberId.trim() ||
      !form.validTill
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newInsurance: InsuranceItem = {
      id: crypto.randomUUID(),
      provider: form.provider.trim(),
      policyNumber: form.policyNumber.trim(),
      memberId: form.memberId.trim(),
      validTill: form.validTill,
      status: form.status,
    };

    setInsurance([...insurance, newInsurance]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <AppCard className="max-h-[90vh] w-full max-w-xl overflow-y-auto p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-foreground">
              Add Insurance
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Add your policy and member information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close add insurance dialog"
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <AppInput
            placeholder="Insurance Provider"
            value={form.provider}
            onChange={(event) =>
              setForm({
                ...form,
                provider: event.target.value,
              })
            }
          />

          <AppInput
            placeholder="Policy Number"
            value={form.policyNumber}
            onChange={(event) =>
              setForm({
                ...form,
                policyNumber: event.target.value,
              })
            }
          />

          <AppInput
            placeholder="Member ID"
            value={form.memberId}
            onChange={(event) =>
              setForm({
                ...form,
                memberId: event.target.value,
              })
            }
          />

          <AppInput
            type="date"
            value={form.validTill}
            onChange={(event) =>
              setForm({
                ...form,
                validTill: event.target.value,
              })
            }
          />

          <select
            value={form.status}
            onChange={(event) =>
              setForm({
                ...form,
                status: event.target.value as InsuranceStatus,
              })
            }
            className="h-11 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 md:col-span-2"
          >
            <option value="ACTIVE">Active</option>
            <option value="EXPIRED">Expired</option>
          </select>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <AppButton
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </AppButton>

          <AppButton type="button" onClick={handleSave}>
            Save Insurance
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};