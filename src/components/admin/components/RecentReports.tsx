const reports = [
  {
    patient: "Nishant Singh",
    test: "CBC Test",
    status: "Uploaded",
    date: "22 Jun 2026",
  },
  {
    patient: "Rahul Kumar",
    test: "Thyroid Profile",
    status: "Pending",
    date: "22 Jun 2026",
  },
  {
    patient: "Priya Sharma",
    test: "Lipid Profile",
    status: "Uploaded",
    date: "21 Jun 2026",
  },
];

const RecentReports = () => {
  return (
    <div className="bg-white border rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Reports
      </h2>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3 last:border-b-0"
          >
            <div>
              <p className="font-semibold text-gray-800">{report.patient}</p>
              <p className="text-sm text-gray-500">{report.test}</p>
            </div>

            <div className="text-right">
              <p
                className={`text-sm font-medium ${
                  report.status === "Uploaded"
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {report.status}
              </p>
              <p className="text-xs text-gray-500">{report.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReports;