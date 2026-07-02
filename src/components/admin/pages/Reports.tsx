import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";

const Reports = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);

  const [reports] = useState([
    ["RPT-1001", "Nishant Singh", "CBC Test", "Uploaded", "22 Jun 2026"],
    ["RPT-1002", "Rahul Kumar", "Thyroid Profile", "Pending", "22 Jun 2026"],
    ["RPT-1003", "Priya Sharma", "Lipid Profile", "Uploaded", "21 Jun 2026"],
  ]);

  return (
    <AdminLayout>
      <Topbar />

      <div className="bg-white border rounded-2xl p-6">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
            <p className="text-gray-500 text-sm">
              Upload and manage patient reports
            </p>
          </div>

          {!showUploadForm && (
            <button
              onClick={() => setShowUploadForm(true)}
              className="bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-teal-700"
            >
              + Upload Report
            </button>
          )}
        </div>

        {showUploadForm && (
          <div className="mb-8 bg-slate-50 border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                Upload Report
              </h3>

              <button
                onClick={() => setShowUploadForm(false)}
                className="text-gray-500 hover:text-red-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Patient Name"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Test Type"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="file"
                className="border rounded-xl px-4 py-3"
              />
            </div>

            <div className="flex gap-3 mt-5">
              <button className="bg-teal-600 text-white px-5 py-2 rounded-xl">
                Upload Report
              </button>

              <button
                onClick={() => setShowUploadForm(false)}
                className="bg-gray-200 px-5 py-2 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b text-gray-600">
                <th className="py-3">Report ID</th>
                <th>Patient</th>
                <th>Test</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  {report.map((item, i) => (
                    <td key={i} className="py-4 text-gray-700">
                      {item}
                    </td>
                  ))}

                  <td>
                    <button className="text-teal-600 mr-3">View</button>
                    <button
                      onClick={() => setShowUploadForm(true)}
                      className="text-blue-600"
                    >
                      Upload
                    </button>
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

export default Reports;