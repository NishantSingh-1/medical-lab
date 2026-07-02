import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";

const Notifications = () => {
  const notifications = [
    ["New Booking", "Nishant Singh booked CBC Test", "2 min ago"],
    ["Report Pending", "Rahul Kumar's Thyroid report is pending", "15 min ago"],
    ["Payment Received", "Priya Sharma paid ₹1299", "1 hour ago"],
  ];

  return (
    <AdminLayout>
      <Topbar />

      <div className="bg-white border rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Notifications
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Latest system alerts and updates
        </p>

        <div className="space-y-4">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex items-center justify-between hover:bg-slate-50"
            >
              <div>
                <h3 className="font-semibold text-gray-800">
                  {item[0]}
                </h3>
                <p className="text-sm text-gray-500">
                  {item[1]}
                </p>
              </div>

              <p className="text-xs text-gray-400">
                {item[2]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Notifications;