import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";

const Appointments = () => {
  const appointments = [
    ["ORD-99281", "Nishant Singh", "CBC Test", "22 Jun 2026", "10:30 AM", "Pending"],
    ["ORD-98104", "Rahul Kumar", "Thyroid Profile", "22 Jun 2026", "11:00 AM", "Confirmed"],
    ["ORD-77421", "Priya Sharma", "Lipid Profile", "22 Jun 2026", "12:15 PM", "Completed"],
  ];

  return (
    <AdminLayout>
      <Topbar />

      <div className="bg-white border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Appointments
            </h2>
            <p className="text-gray-500 text-sm">
              Manage lab bookings and sample collection
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b text-gray-600">
                <th className="py-3">Order ID</th>
                <th>Patient</th>
                <th>Test</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  {item.map((value, i) => (
                    <td key={i} className="py-4 text-gray-700">
                      {value}
                    </td>
                  ))}

                  <td>
                    <button className="text-teal-600 mr-3">View</button>
                    <button className="text-blue-600">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Appointments;