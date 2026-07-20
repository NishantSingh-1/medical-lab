import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

/* Public pages */
import HomePage from "./features/booking/pages/HomePage";
import AboutPage from "./features/booking/pages/AboutPage";
import ContactPage from "./features/booking/pages/ContactPage";
import TestsPage from "./features/booking/pages/TestsPage";
import Cart from "./features/booking/pages/Cart";
import BookingPage from "./features/booking/pages/BookingPage";
import ManageTests from "./features/booking/pages/ManageTests";
import BookingSuccessPage from "./features/booking/pages/BookingSuccessPage";
import SearchCategoriesPage from "./features/booking/pages/SearchCategoriesPage";

/* Authentication */
import { AuthFlow } from "./features/auth/AuthFlow";
import { SessionModals } from "./features/auth/security/sessionModals";

import { ForgotPasswordRequest } from "./features/auth/forgot-password/ForgotPasswordRequest";
import { ForgotPasswordSent } from "./features/auth/forgot-password/ForgotPasswordSent";
import { ResetPasswordPage } from "./features/auth/forgot-password/ResetPasswordPage";
import { ResetPasswordInvalid } from "./features/auth/forgot-password/ResetPasswordInvalid";

import { ChangeMobilePage } from "./features/auth/change-mobile/ChangeMobilePage";
import { VerifyMobileOtpPage } from "./features/auth/change-mobile/VerifyMobileOtpPage";
import { MobileUpdatedPage } from "./features/auth/change-mobile/MobileUpdatedPage";

import { AccountLockedPage } from "./features/auth/security/AccountLockedPage";
import { AccountSuspendedPage } from "./features/auth/security/AccountSuspendedPage";

import { RoleSelectionPage } from "./features/auth/role-selection/pages/RoleSelectionPage";
import { SwitchAccountPage } from "./features/auth/role-selection/pages/SwitchAccountPage";

import { SetupTwoFactorPage } from "./features/auth/two-factor/SetupTwoFactorPage";
import { VerifyTwoFactorPage } from "./features/auth/two-factor/VerifyTwoFactorPage";

import { EmailVerificationPage } from "./features/auth/email-verification/EmailVerificationPage";

/* Patient portal layout */
import { PatientLayout } from "@/features/patient-portal/layout/PatientLayout";

/* Patient portal dashboard */
import { PatientPortalDashboard } from "./features/patient-portal/dashboard/components/PatientPortalDashboard";

/* Patient portal tests */
import { PatientTestsPage } from "./features/patient-portal/tests/PatientTestsPage";

/* Patient portal bookings */
import { MyBookingsPage } from "./features/patient-portal/bookings/components/MyBookingsPage";
import { PatientBookingDetailsPage } from "@/features/patient-portal/bookings/components/PatientBookingDetailsPage";
import { LiveTrackingPage } from "./features/patient-portal/bookings/components/LiveTrackingPage";

/* Patient portal reports */
import { ReportsListPage } from "./features/patient-portal/reports/components/ReportsListPage";
import { PatientReportViewerPage } from "./features/patient-portal/reports/components/ReportViewerPage";
import { ReportTrendPage } from "./features/patient-portal/reports/components/ReportTrendPage";

/* Patient portal profile */
import { ProfilePage } from "./features/patient-portal/profile/pages/ProfilePage";
import { EditProfilePage } from "./features/patient-portal/profile/pages/EditProfilePage";

/* Patient portal address and family */
import { SavedAddressesPage } from "@/features/patient-portal/address/components/SavedAddressesPage";
import { FamilyMembersPage } from "./features/patient-portal/family/pages/FamilyMembersPage";

/* Patient portal additional modules */
import { MedicalHistoryPage } from "./features/patient-portal/medical-history/pages/MedicalHistoryPage";
import { NotificationsPage } from "./features/patient-portal/notifications/pages/NotificationsPage";
import { SettingsPage } from "./features/patient-portal/settings/pages/SettingsPage";
import { ChangePasswordPage } from "./features/patient-portal/settings/pages/ChangePasswordPage";

import { HelpSupportPage } from "@/features/patient-portal/help-support/pages/HelpSupportPage";
import { RaiseSupportTicketPage } from "./features/patient-portal/help-support/pages/RaiseSupportTicketPage";
import { SupportTicketDetailPage } from "./features/patient-portal/help-support/pages/SupportTicketDetailPage";

import { PrescriptionsPage } from "./features/patient-portal/prescriptions/pages/PrescriptionsPage";
import { InsurancePage } from "./features/patient-portal/insurance/pages/InsurancePage";

import { ReferFriendPage } from "./features/patient-portal/referral/pages/ReferFriendPage";
import { WalletPage } from "./features/patient-portal/wallet/pages/WalletPage";
import { ActivePackagesPage } from "./features/patient-portal/packages/pages/ActivePackagesPage";

import { FeedbackPage } from "./features/patient-portal/feedback/pages/FeedbackPage";
import { FeedbackSuccessPage } from "./features/patient-portal/feedback/pages/FeedbackSuccessPage";
import { RatePhlebotomistPage } from "./features/patient-portal/feedback/pages/RatePhlebotomistPage";

/* Booking and payment flows */
import { BookingFlow } from "./features/booking/components/BookingFlow";
import { PaymentFlow } from "./features/payment/PaymentFlow";
import { PaymentHistoryPage } from "./features/payment/pages/PaymentHistoryPage";
import { InvoicePage } from "./features/payment/pages/InvoicePage";
import { RefundHistoryPage } from "./features/payment/pages/RefundHistoryPage";
import BookingConfirmationPage from "@/features/booking/pages/BookingConfirmationPage";


/* Website components/pages */
import BlogDetails from "./components/blogs/BlogDetails";
import AllBlogsView from "./components/blogs/AllBlogsView";
import TestDetailsPage from "./components/user/pages/TestDetailsPage";
import MostBookedPackages from "./components/Recommended Packages/MostBookedPackages";
import CareEveryGeneration from "./components/CareEveryGeneration";
import XpertPackageDetails from "./components/production/XpertPackageDetails";
import WomensHealthViewAll from "./components/WomenHealthPackage/WomensHealthViewAll";
import PopularPackagesPage from "./components/Popular Packages/PopularPackagesPage";
import MostBookedTestsPage from "./components/MostBookTest/MostBookedTestsPage";

/* Admin */
import AdminDashboard from "./components/admin/pages/AdminDashboard";
import Patients from "./components/admin/pages/Patients";
import Appointments from "./components/admin/pages/Appointments";
import Tests from "./components/admin/pages/Tests";
import Reports from "./components/admin/pages/Reports";
import Payments from "./components/admin/pages/Payments";
import Notifications from "./components/admin/pages/Notifications";
import Settings from "./components/admin/pages/Settings";
import AdminLogin from "./components/admin/pages/AdminLogin";



const ROUTES_WITHOUT_NAVBAR = [
  "/admin",
  "/dashboard",

  "/signin",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/change-mobile",

  "/verify-email",
  "/select-role",
  "/switch-account",
  "/user/test-details",
  "/setup-2fa",
  "/verify-2fa",

  "/account-locked",
  "/account-suspended",

  "/cart",
  "/search-categories",
  "/booking-success",
  "/booking-confirmation",
  "/booking-flow",
  "/payment-flow",
];


function AppContent() {
  const location = useLocation();

  const hideNavbar = ROUTES_WITHOUT_NAVBAR.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public website */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/blogs" element={<AllBlogsView />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route
          path="/most-booked-packages"
          element={<MostBookedPackages />}
        />

        <Route
          path="/manage-tests"
          element={<ManageTests />}
        />

        <Route
          path="/care-every-generation"
          element={<CareEveryGeneration />}
        />

        <Route
          path="/xpert-health-package"
          element={<XpertPackageDetails />}
        />

        <Route
          path="/womens-health-packages"
          element={<WomensHealthViewAll />}
        />

        <Route
          path="/popular-packages"
          element={<PopularPackagesPage />}
        />

        <Route
          path="/most-booked-tests"
          element={<MostBookedTestsPage />}
        />
        <Route
          path="/booking-flow"
          element={<BookingFlow />}
        />

        <Route
          path="/payment-flow"
          element={<PaymentFlow />}
        />
        <Route
  path="/booking-confirmation"
  element={<BookingConfirmationPage />}
/>

        <Route
          path="/booking-success"
          element={<BookingSuccessPage />}
        />

        <Route
          path="/search-categories"
          element={<SearchCategoriesPage />}
        />

        <Route
          path="/user/test-details"
          element={<TestDetailsPage />}
        />

        {/* Authentication routes */}
        <Route
          path="/signin"
          element={<AuthFlow />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordRequest />}
        />

        <Route
          path="/forgot-password/sent"
          element={<ForgotPasswordSent />}
        />

        <Route
          path="/reset-password"
          element={<ResetPasswordPage />}
        />

        <Route
          path="/reset-password/invalid"
          element={<ResetPasswordInvalid />}
        />

        <Route
          path="/change-mobile"
          element={<ChangeMobilePage />}
        />

        <Route
          path="/change-mobile/verify"
          element={<VerifyMobileOtpPage />}
        />

        <Route
          path="/change-mobile/success"
          element={<MobileUpdatedPage />}
        />

        <Route
          path="/verify-email"
          element={<EmailVerificationPage />}
        />

        <Route
          path="/select-role"
          element={<RoleSelectionPage />}
        />

        <Route
          path="/switch-account"
          element={<SwitchAccountPage />}
        />

        <Route
          path="/setup-2fa"
          element={<SetupTwoFactorPage />}
        />

        <Route
          path="/verify-2fa"
          element={<VerifyTwoFactorPage />}
        />

        <Route
          path="/account-locked"
          element={<AccountLockedPage />}
        />

        <Route
          path="/account-suspended"
          element={<AccountSuspendedPage />}
        />

        {/* Patient portal */}
        <Route
          path="/dashboard"
          element={<PatientLayout />}
        >
          <Route
            index
            element={<PatientPortalDashboard />}
          />

          <Route
            path="tests"
            element={<PatientTestsPage />}
          />

          <Route
            path="bookings"
            element={<MyBookingsPage />}
          />

          <Route
            path="bookings/details"
            element={<PatientBookingDetailsPage />}
          />

          <Route
            path="bookings/tracking"
            element={<LiveTrackingPage />}
          />

          <Route
            path="reports"
            element={<ReportsListPage />}
          />

          <Route
            path="reports/viewer"
            element={<PatientReportViewerPage />}
          />

          <Route
            path="reports/trends"
            element={<ReportTrendPage />}
          />

          <Route
            path="packages"
            element={<ActivePackagesPage />}
          />

          <Route
            path="profile"
            element={<ProfilePage />}
          />

          <Route
            path="profile/edit"
            element={<EditProfilePage />}
          />

          <Route
            path="address"
            element={<SavedAddressesPage />}
          />

          <Route
            path="family"
            element={<FamilyMembersPage />}
          />

          <Route
            path="medical-history"
            element={<MedicalHistoryPage />}
          />

          <Route
            path="prescriptions"
            element={<PrescriptionsPage />}
          />

          <Route
            path="insurance"
            element={<InsurancePage />}
          />

          <Route
            path="refer-friend"
            element={<ReferFriendPage />}
          />

          <Route
            path="payments"
            element={<PaymentHistoryPage />}
          />

          <Route
            path="payments/invoice/:id"
            element={<InvoicePage />}
          />

          <Route
            path="wallet"
            element={<WalletPage />}
          />

          <Route
            path="refunds"
            element={<RefundHistoryPage />}
          />

          <Route
            path="notifications"
            element={<NotificationsPage />}
          />

          <Route
            path="feedback"
            element={<FeedbackPage />}
          />

          <Route
            path="feedback/success"
            element={<FeedbackSuccessPage />}
          />

          <Route
            path="rate-phlebotomist"
            element={<RatePhlebotomistPage />}
          />

          <Route
            path="settings"
            element={<SettingsPage />}
          />

          <Route
            path="settings/change-password"
            element={<ChangePasswordPage />}
          />

          <Route
            path="help"
            element={<HelpSupportPage />}
          />

          <Route
            path="help/raise-ticket"
            element={<RaiseSupportTicketPage />}
          />

          <Route
            path="help/ticket/:ticketId"
            element={<SupportTicketDetailPage />}
          />



        </Route>

        {/* Public booking/payment flows */}
        <Route
          path="/booking-flow"
          element={<BookingFlow />}
        />

        <Route
          path="/payment-flow"
          element={<PaymentFlow />}
        />

        {/* Admin */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/patients"
          element={<Patients />}
        />

        <Route
          path="/admin/appointments"
          element={<Appointments />}
        />

        <Route
          path="/admin/tests"
          element={<Tests />}
        />

        <Route
          path="/admin/reports"
          element={<Reports />}
        />

        <Route
          path="/admin/payments"
          element={<Payments />}
        />

        <Route
          path="/admin/notifications"
          element={<Notifications />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

        {/* Not found */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center bg-background p-6">
              <div className="text-center">
                <h1 className="text-4xl font-black text-foreground">
                  404
                </h1>

                <p className="mt-2 text-muted-foreground">
                  Page not found
                </p>
              </div>
            </div>
          }
        />
      </Routes>

      <SessionModals />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;