import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";

const Tests = () => {
  const [showForm, setShowForm] = useState(false);
  
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [tests, setTests] = useState([
    ["CBC Test", "Blood Test", "₹499", "Active"],
    ["Thyroid Profile", "Hormone Test", "₹699", "Active"],
    ["Lipid Profile", "Heart Test", "₹799", "Active"],
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    status: "Active",
  });


const handleEditTest = (index: number) => {
  const selectedTest = tests[index];

  setFormData({
    name: selectedTest[0],
    category: selectedTest[1],
    price: selectedTest[2].replace("₹", ""),
    status: selectedTest[3],
  });

  setEditIndex(index);
  setShowForm(true);
};

  const handleSaveTest = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updatedTests = [...tests];

      updatedTests[editIndex] = [
        formData.name,
        formData.category,
        `₹${formData.price}`,
        formData.status,
      ];

      setTests(updatedTests);
    } else {
      setTests([
        ...tests,
        [
          formData.name,
          formData.category,
          `₹${formData.price}`,
          formData.status,
        ],
      ]);
    }

    setFormData({
      name: "",
      category: "",
      price: "",
      status: "Active",
    });

    setEditIndex(null);
    setShowForm(false);
  };

  const handleDeleteTest = (index: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this test?"
    );

    if (confirmDelete) {
      const updatedTests = tests.filter((_, i) => i !== index);
      setTests(updatedTests);
    }
  };

  return (
    <AdminLayout>
      <Topbar />

      <div className="bg-white border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Test Management
            </h2>
            <p className="text-gray-500 text-sm">
              Manage lab tests and pricing
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-teal-600 text-white px-5 py-2 rounded-xl"
          >
            + Add Test
          </button>
        </div>

        {showForm && (
          <div className="mb-6 bg-slate-50 border rounded-2xl p-5">
            <h3 className="text-lg font-bold mb-4">
  {editIndex !== null ? "Edit Test" : "Add New Test"}
</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
                placeholder="Test Name"
              />

              <input
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
                placeholder="Category"
              />

              <input
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
                placeholder="Price"
              />

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="border rounded-xl px-4 py-3"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex gap-3 mt-5">
             <button
          onClick={handleSaveTest}
           className="bg-teal-600 text-white px-5 py-2 rounded-xl"
     >
            {editIndex !== null ? "Update Test" : "Save Test"}
           </button>

              <button
                onClick={() => {
                  setShowForm(false);
                  setEditIndex(null);
                }}
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
                <th className="py-3">Test Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tests.map((test, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  {test.map((item, i) => (
                    <td key={i} className="py-4 text-gray-700">
                      {item}
                    </td>
                  ))}

                  <td>
                    <button 
                      onClick={() => handleEditTest(index)}
                      className="text-teal-600 mr-3"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteTest(index)}
                      className="text-red-600"
                    >
                      Delete
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

export default Tests;