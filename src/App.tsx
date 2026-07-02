import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PatientDashboard from "./components/user/pages/PatientDashboard";
import LoginPage from "./components/user/pages/LoginPage";
import BlogDetails from "./components/blogs/BlogDetails";
import AllBlogsView from "./components/blogs/AllBlogsView";

import TestsPage from "./pages/TestsPage";
import Cart from "./pages/Cart";
import BookingPage from "./pages/BookingPage";
import TestDetailsPage from "./components/user/pages/TestDetailsPage";

import MostBookedPackages from "./components/Recommended Packages/MostBookedPackages";

import AdminDashboard from "./components/admin/pages/AdminDashboard";
import ManageTests from "./pages/ManageTests";
import CareEveryGeneration from "./components/CareEveryGeneration";
import XpertPackageDetails from "./components/production/XpertPackageDetails";
import WomensHealthViewAll from "./components/WomenHealthPackage/WomensHealthViewAll";

import PopularPackagesPage from "./components/Popular Packages/PopularPackagesPage";
import MostBookedTestsPage from "./components/MostBookTest/MostBookedTestsPage";
import BookingSuccessPage from "./pages/BookingSuccessPage";
import SearchCategoriesPage from "./pages/SearchCategoriesPage";

import Patients from "./components/admin/pages/Patients";
import Appointments from "./components/admin/pages/Appointments";
import Tests from "./components/admin/pages/Tests";
import Reports from "./components/admin/pages/Reports";
import Payments from "./components/admin/pages/Payments";
import Notifications from "./components/admin/pages/Notifications";
import Settings from "./components/admin/pages/Settings";
import AdminLogin from "./components/admin/pages/AdminLogin";
import ReportViewerPage from "./components/user/pages/ReportViewerPage";
import BookingDetailsPage from "./components/user/pages/BookingDetailsPage";

function AppContent() {
  const location = useLocation();

  // Hide Navbar on Admin & Patient Dashboard
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Patient */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<PatientDashboard />} />

        <Route path="/tests" element={<TestsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route
          path="/user/test-details"
         element={<TestDetailsPage/>}
         />
        <Route path="/blogs" element={<AllBlogsView />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/most-booked-packages" element={<MostBookedPackages />} />
        <Route path="/manage-tests" element={<ManageTests />} />
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
          path="/booking-success"
          element={<BookingSuccessPage />}
        />
        <Route
          path="/search-categories"
          element={<SearchCategoriesPage />}
        />
        <Route path="/user/report-viewer" element={<ReportViewerPage />} />
        <Route path="/user/booking-details" element={<BookingDetailsPage />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/tests" element={<Tests />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
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