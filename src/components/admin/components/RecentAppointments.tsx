const appointments = [
  {
    patient: "Nishant Singh",
    test: "CBC Test",
    date: "22 Jun 2026",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    patient: "Rahul Kumar",
    test: "Thyroid Profile",
    date: "22 Jun 2026",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    patient: "Priya Sharma",
    test: "Lipid Profile",
    date: "22 Jun 2026",
    time: "12:15 PM",
    status: "Completed",
  },
];

const RecentAppointments = () => {
  return (
    <div className="bg-white border rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Appointments
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left p-3">Patient</th>
              <th className="text-left p-3">Test</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Time</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="p-3 font-medium">{item.patient}</td>
                <td className="p-3">{item.test}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.time}</td>
                <td className="p-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-teal-50 text-teal-700">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAppointments;