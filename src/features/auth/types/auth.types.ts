export type AuthStep =
  | "METHOD_SELECTION"
  | "OTP_REQUEST"
  | "OTP_VERIFY"
  | "PASSWORD_LOGIN"
  | "REGISTER"
  | "ACCOUNT_EXISTS"
  | "ROLE_SELECTION"
  | "SOCIAL_CALLBACK";

export type UserRole = "ADMIN" | "USER" | "MANAGER";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  roles: UserRole[];
};

export type Account = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type AuthStoreState = {
  step: AuthStep;
  identifier: string;
  otpAttempts: number;
  isLocked: boolean;
  isLoading: boolean;
  error: string | null;
  user: AuthUser | null;
};

export type AuthStoreActions = {
  setStep: (step: AuthStep) => void;
  setIdentifier: (identifier: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setUser: (user: AuthUser | null) => void;
  incrementOtpAttempts: () => void;
  resetOtpAttempts: () => void;
  reset: () => void;
};

export type AuthStore = AuthStoreState & AuthStoreActions;