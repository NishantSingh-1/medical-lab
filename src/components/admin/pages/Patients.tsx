import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";

const Patients = () => {
  const [showForm, setShowForm] = useState(false);

  const patients = [
    ["Nishant Singh", "9876543210", "25", "Male", "CBC Test"],
    ["Rahul Kumar", "9876543211", "30", "Male", "Thyroid Profile"],
    ["Priya Sharma", "9876543212", "28", "Female", "Lipid Profile"],
  ];

  return (
    <AdminLayout>
      <Topbar />

      <div className="bg-white border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Patients Management
            </h2>
            <p className="text-gray-500 text-sm">
              Manage all registered patients
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-teal-700"
          >
            + Add Patient
          </button>
        </div>

        {showForm && (
          <div className="mb-6 bg-slate-50 border rounded-2xl p-5">
            <h3 className="text-lg font-bold mb-4">Add New Patient</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded-xl px-4 py-3" placeholder="Patient Name" />
              <input className="border rounded-xl px-4 py-3" placeholder="Phone Number" />
              <input className="border rounded-xl px-4 py-3" placeholder="Age" />
              <select className="border rounded-xl px-4 py-3">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input className="border rounded-xl px-4 py-3" placeholder="Last Test" />
            </div>

            <div className="flex gap-3 mt-5">
              <button className="bg-teal-600 text-white px-5 py-2 rounded-xl">
                Save Patient
              </button>

              <button
                onClick={() => setShowForm(false)}
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
                <th className="py-3">Patient Name</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Last Test</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  {patient.map((item, i) => (
                    <td key={i} className="py-4 text-gray-700">
                      {item}
                    </td>
                  ))}

                  <td>
                    <button className="text-teal-600 mr-3">View</button>
                    <button className="text-blue-600">Edit</button>
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

export default Patients;