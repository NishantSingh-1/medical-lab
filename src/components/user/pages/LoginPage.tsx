import { useState, type FormEvent, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

import Button from "../../common/Button";

type AuthStep = "login" | "otp" | "signup";

type LoginPageProps = {
  onClose?: () => void;
};

type SignupData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
};

type InputBoxProps = {
  icon: ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  maxLength?: number;
};

const INITIAL_SIGNUP_DATA: SignupData = {
  name: "",
  email: "",
  mobile: "",
  password: "",
};

const getDigitsOnly = (value: string, maxLength: number) =>
  value.replace(/\D/g, "").slice(0, maxLength);

const isValidMobileNumber = (mobile: string) => mobile.length === 10;

const isValidOtp = (otp: string) => otp.length === 6;

const LoginPage = ({ onClose }: LoginPageProps) => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState<AuthStep>("login");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [signupData, setSignupData] = useState<SignupData>(INITIAL_SIGNUP_DATA);

  const pageContent = {
    login: {
      title: "Login / Register",
      description: "Enter your mobile number to continue.",
    },
    otp: {
      title: "Verify OTP",
      description: `Enter OTP sent to +91 ${mobileNumber}`,
    },
    signup: {
      title: "Create Account",
      description: "Create your MedLab account to manage bookings.",
    },
  }[activeStep];

  const updateSignupField = (field: keyof SignupData, value: string) => {
    setSignupData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  };

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidMobileNumber(mobileNumber)) {
      alert("Please enter valid 10 digit mobile number");
      return;
    }

    alert("OTP sent successfully");
    setActiveStep("otp");
  };

  const handleOtpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidOtp(otpCode)) {
      alert("Please enter valid 6 digit OTP");
      return;
    }

    navigate("/dashboard");
  };

  const handleSignupSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Account created successfully");
    setSignupData(INITIAL_SIGNUP_DATA);
    setActiveStep("login");
  };

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end bg-black/10">
      <button
        type="button"
        aria-label="Close login drawer"
        onClick={onClose}
        className="hidden flex-1 cursor-default border-none bg-transparent md:block"
      />

      <aside className="h-full w-full overflow-y-auto bg-white shadow-2xl sm:w-[430px] md:w-[460px]">
        <div className="flex min-h-full flex-col">
          <DrawerHeader onClose={onClose} />

          <main className="flex-1 px-6 py-4 md:px-8">
            <section className="mb-8">
              <h1 className="text-dark text-3xl font-black tracking-tight">
                {pageContent.title}
              </h1>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {pageContent.description}
              </p>
            </section>

            {activeStep === "login" && (
              <LoginForm
                mobileNumber={mobileNumber}
                onMobileChange={setMobileNumber}
                onSubmit={handleLoginSubmit}
                onSignupClick={() => setActiveStep("signup")}
              />
            )}

            {activeStep === "otp" && (
              <OtpForm
                otpCode={otpCode}
                onOtpChange={setOtpCode}
                onSubmit={handleOtpSubmit}
                onChangeMobileClick={() => setActiveStep("login")}
              />
            )}

            {activeStep === "signup" && (
              <SignupForm
                signupData={signupData}
                onFieldChange={updateSignupField}
                onSubmit={handleSignupSubmit}
                onLoginClick={() => setActiveStep("login")}
              />
            )}
          </main>

          <DrawerFooter />
        </div>
      </aside>
    </div>
  );
};

type DrawerHeaderProps = {
  onClose?: () => void;
};

const DrawerHeader = ({ onClose }: DrawerHeaderProps) => (
  <header className="px-6 pb-5 pt-7 md:px-8">
    <button
      type="button"
      aria-label="Close login drawer"
      onClick={onClose}
      className="flex h-10 w-10 items-center justify-center rounded-full border-none bg-transparent transition hover:bg-slate-100"
    >
      <X size={24} className="text-slate-700" />
    </button>
  </header>
);

type LoginFormProps = {
  mobileNumber: string;
  onMobileChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSignupClick: () => void;
};

const LoginForm = ({
  mobileNumber,
  onMobileChange,
  onSubmit,
  onSignupClick,
}: LoginFormProps) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div>
      <label className="text-xs font-black uppercase tracking-wide text-slate-500">
        Mobile Number
      </label>

      <div className="mt-2 flex h-[58px] items-center rounded-2xl border border-slate-200 bg-slate-100 px-4 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-50">
        <span className="mr-3 font-bold text-slate-700">+91</span>

        <input
          type="tel"
          maxLength={10}
          inputMode="numeric"
          value={mobileNumber}
          onChange={(event) =>
            onMobileChange(getDigitsOnly(event.target.value, 10))
          }
          placeholder="Enter your mobile number"
          className="w-full border-none bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
        />
      </div>

      <p className="mt-2 text-xs font-medium text-slate-500">
        OTP will be sent to this number by SMS.
      </p>
    </div>

    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        defaultChecked
        className="accent-primary mt-1 h-4 w-4"
      />

      <span className="text-sm font-medium leading-relaxed text-slate-600">
        Share health tips, appointment details and offers with me on WhatsApp.
      </span>
    </label>

    <div className="bg-primary-light flex gap-3 rounded-2xl border border-teal-100 p-4">
      <MessageCircle size={20} className="text-primary mt-0.5 shrink-0" />

      <div>
        <p className="text-sm font-semibold text-slate-700">
          We will verify your login securely.
        </p>
        <p className="text-primary mt-1 text-sm font-black">
          Continue after OTP verification ✅
        </p>
      </div>
    </div>

    <div className="pt-10">
      <p className="mb-5 text-center text-xs leading-relaxed text-slate-500">
        By clicking Continue, you agree to MedLab{" "}
        <span className="text-primary font-bold underline">Privacy Policy</span>{" "}
        and{" "}
        <span className="text-primary font-bold underline">
          Terms & Conditions
        </span>
      </p>

      <Button
        type="submit"
        className="flex h-[58px] w-full items-center justify-center gap-2 rounded-2xl text-base font-black"
      >
        Continue <ArrowRight size={18} />
      </Button>
    </div>

    <TextButton onClick={onSignupClick}>Create New Account</TextButton>
  </form>
);

type OtpFormProps = {
  otpCode: string;
  onOtpChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChangeMobileClick: () => void;
};

const OtpForm = ({
  otpCode,
  onOtpChange,
  onSubmit,
  onChangeMobileClick,
}: OtpFormProps) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div>
      <label className="text-xs font-black uppercase tracking-wide text-slate-500">
        Enter OTP
      </label>

      <input
        type="tel"
        maxLength={6}
        inputMode="numeric"
        value={otpCode}
        onChange={(event) => onOtpChange(getDigitsOnly(event.target.value, 6))}
        placeholder="Enter 6 digit OTP"
        className="mt-2 h-[58px] w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 font-semibold outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-teal-50"
      />
    </div>

    <Button
      type="submit"
      className="flex h-[58px] w-full items-center justify-center rounded-2xl text-base font-black"
    >
      Verify OTP
    </Button>

    <TextButton onClick={onChangeMobileClick}>Change Mobile Number</TextButton>
  </form>
);

type SignupFormProps = {
  signupData: SignupData;
  onFieldChange: (field: keyof SignupData, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onLoginClick: () => void;
};

const SignupForm = ({
  signupData,
  onFieldChange,
  onSubmit,
  onLoginClick,
}: SignupFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <InputBox
      icon={<User size={17} />}
      placeholder="Full Name"
      value={signupData.name}
      onChange={(value) => onFieldChange("name", value)}
    />

    <InputBox
      icon={<Phone size={17} />}
      placeholder="Mobile Number"
      value={signupData.mobile}
      maxLength={10}
      onChange={(value) => onFieldChange("mobile", getDigitsOnly(value, 10))}
    />

    <InputBox
      icon={<Mail size={17} />}
      placeholder="Email Address"
      type="email"
      value={signupData.email}
      onChange={(value) => onFieldChange("email", value)}
    />

    <InputBox
      icon={<Lock size={17} />}
      placeholder="Password"
      type="password"
      value={signupData.password}
      onChange={(value) => onFieldChange("password", value)}
    />

    <Button
      type="submit"
      className="mt-5 flex h-[58px] w-full items-center justify-center rounded-2xl text-base font-black"
    >
      Sign Up
    </Button>

    <TextButton onClick={onLoginClick}>Already have an account? Login</TextButton>
  </form>
);

const InputBox = ({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
  maxLength,
}: InputBoxProps) => (
  <div className="flex h-[56px] items-center rounded-2xl border border-slate-200 bg-slate-100 px-4 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-50">
    <span className="mr-3 text-slate-400">{icon}</span>

    <input
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={(event) => onChange(event.target.value)}
      className="w-full border-none bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
      required
    />
  </div>
);

type TextButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const TextButton = ({ children, onClick }: TextButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="text-primary w-full border-none bg-transparent text-center text-sm font-black"
  >
    {children}
  </button>
);

const DrawerFooter = () => (
  <footer className="flex items-center justify-center gap-2 border-t border-slate-100 px-6 py-5 text-xs font-bold text-slate-400 md:px-8">
    <ShieldCheck size={15} className="text-primary" />
    SSL Encrypted
  </footer>
);

export default LoginPage;