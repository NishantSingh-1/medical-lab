import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";
import Topbar from "../components/Topbar";
import RecentAppointments from "../components/RecentAppointments";
import RecentReports from "../components/RecentReports";
import RevenueChart from "../components/RevenueChart";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Topbar />
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Admin 👋
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatCard
            title="Total Patients"
            value="1,250"
          />

          <StatCard
            title="Today's Bookings"
            value="45"
          />

          <StatCard
            title="Tests Completed"
            value="890"
          />

          <StatCard
            title="Revenue"
            value="₹85,000"
          />
        </div>
        <RevenueChart />
        <RecentAppointments />
        <RecentReports />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;