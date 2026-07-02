import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";

const Settings = () => {
  return (
    <AdminLayout>
      <Topbar />

      <div className="bg-white border rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <p className="text-gray-500 text-sm mb-6">
          Manage admin profile and system settings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  <input
    className="border rounded-xl px-4 py-3"
    placeholder="Admin Name"
  />

  <input
    className="border rounded-xl px-4 py-3"
    placeholder="Email Address"
  />

  <input
    className="border rounded-xl px-4 py-3"
    placeholder="Lab Name"
  />

  <input
    className="border rounded-xl px-4 py-3"
    placeholder="Phone Number"
  />

  <input
    className="border rounded-xl px-4 py-3"
    placeholder="Lab Address"
  />

  <input
    className="border rounded-xl px-4 py-3"
    placeholder="Opening Hours"
  />

  <input
    type="password"
    className="border rounded-xl px-4 py-3"
    placeholder="New Password"
  />

  <input
    type="password"
    className="border rounded-xl px-4 py-3"
    placeholder="Confirm Password"
  />
</div>
        <button className="mt-6 bg-teal-600 text-white px-5 py-2 rounded-xl">
          Save Settings
        </button>
      </div>
    </AdminLayout>
  );
};

export default Settings;