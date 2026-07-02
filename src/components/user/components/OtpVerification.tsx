import type { FormEvent } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Button from "../../common/Button";

type OtpVerificationProps = {
  mobile: string;
  otp: string;
  setOtp: (value: string) => void;
  onVerify: (event: FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
};

const getDigitsOnly = (value: string) => value.replace(/\D/g, "").slice(0, 6);

const OtpVerification = ({
  mobile,
  otp,
  setOtp,
  onVerify,
  onBack,
}: OtpVerificationProps) => {
  return (
    <form onSubmit={onVerify} className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="text-primary flex items-center gap-2 border-none bg-transparent text-sm font-black"
      >
        <ArrowLeft size={17} />
        Change Mobile Number
      </button>

      <div className="bg-primary-light rounded-2xl border border-teal-100 p-4">
        <div className="flex gap-3">
          <ShieldCheck size={22} className="text-primary shrink-0" />

          <div>
            <p className="text-sm font-bold text-slate-800">
              OTP sent to +91 {mobile}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Enter the 6 digit verification code.
            </p>
          </div>
        </div>
      </div>

      <input
        type="tel"
        maxLength={6}
        inputMode="numeric"
        value={otp}
        onChange={(event) => setOtp(getDigitsOnly(event.target.value))}
        placeholder="Enter 6 digit OTP"
        className="h-[58px] w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 text-center text-lg font-black tracking-[10px] outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-teal-50"
      />

      <Button
        type="submit"
        className="h-[58px] w-full rounded-2xl font-black"
      >
        Verify OTP
      </Button>
    </form>
  );
};

export default OtpVerification;