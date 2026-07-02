import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  FileText,
  Users,
  Clock,
  Download,
  MapPin,
} from "lucide-react";

import UserLayout from "../layouts/UserLayout";
import Button from "../../common/Button";
import Card from "../../common/Card";
import Input from "../../common/Input";
import Badge from "../../common/Badge";

type DashboardTab =
  | "dashboard"
  | "profile"
  | "bookings"
  | "reports"
  | "family"
  | "addresses"
  | "health"
  | "help";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>("dashboard");

  const tabComponents: Record<DashboardTab, ReactNode> = {
    dashboard: <DashboardHome />,
    profile: <MyProfile />,
    bookings: <MyBookings />,
    reports: <MyReports />,
    family: <FamilyMembers />,
    addresses: <ManageAddresses />,
    health: <HealthRecords />,
    help: <HelpSupport />,
  };

  return (
    <UserLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {tabComponents[activeTab] || (
        <Card className="p-6">
          <h2 className="text-dark text-xl font-bold">Coming Soon</h2>
        </Card>
      )}
    </UserLayout>
  );
};

const DashboardHome = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Bookings", value: "12", icon: <CalendarDays /> },
    { title: "Reports", value: "8", icon: <FileText /> },
    { title: "Pending Tests", value: "2", icon: <Clock /> },
    { title: "Family Members", value: "3", icon: <Users /> },
  ];

  const reports = ["CBC Report", "Thyroid Report", "Lipid Profile"];

  return (
    <>
      <section className="bg-primary rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold">Welcome back, Nishant 👋</h2>
        <p className="mt-2 text-white/80">
          Track your appointments, reports and health records.
        </p>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-dark mb-4 text-lg font-bold">
            Upcoming Appointment
          </h3>

          <div className="rounded-xl border border-gray-100 p-4">
            <p className="text-dark font-bold">CBC Test</p>
            <p className="mt-1 text-sm text-gray-500">
              26 June 2026 • 10:30 AM
            </p>

            <div className="mt-2">
              <Badge>Home Sample Collection</Badge>
            </div>

            <Button
              onClick={() => navigate("/user/test-details")}
              className="mt-4 rounded-xl px-4 py-2"
            >
              View Details
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-dark mb-4 text-lg font-bold">Recent Reports</h3>

          {reports.map((report) => (
            <div
              key={report}
              className="flex items-center justify-between border-b py-3 last:border-b-0"
            >
              <div>
                <p className="text-dark font-semibold">{report}</p>
                <p className="text-sm text-gray-500">Uploaded</p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/user/report-viewer")}
                className="text-primary flex items-center gap-1 font-semibold"
              >
                <Download size={16} />
                PDF
              </button>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
};

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: "Abhi",
    mobile: "+91 7654887222",
    email: "abhi@gmail.com",
    gender: "Male",
    age: "25",
    city: "Bangalore",
  });

  const handleSaveProfile = () => {
    if (!profile.name || !profile.mobile || !profile.email) {
      alert("Please fill required fields");
      return;
    }

    alert("Profile updated successfully");
  };

  return (
    <Card className="p-5 md:p-6">
      <h2 className="text-dark text-2xl font-bold">My Profile</h2>
      <p className="mb-6 text-sm text-gray-500">
        Manage your personal information
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          placeholder="Full Name"
        />

        <Input
          value={profile.mobile}
          onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
          placeholder="Mobile Number"
        />

        <Input
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="Email"
        />

        <select
          className="input-field"
          value={profile.gender}
          onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <Input
          value={profile.age}
          onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          placeholder="Age"
        />

        <Input
          value={profile.city}
          onChange={(e) => setProfile({ ...profile, city: e.target.value })}
          placeholder="City"
        />
      </div>

      <Button onClick={handleSaveProfile} className="mt-6 rounded-xl px-5 py-2">
        Save Changes
      </Button>
    </Card>
  );
};

const MyBookings = () => {
  const navigate = useNavigate();

  const bookings = [
    { id: "BK-1001", test: "CBC Test", date: "26 Jun 2026", status: "Upcoming" },
    {
      id: "BK-1002",
      test: "Thyroid Profile",
      date: "20 Jun 2026",
      status: "Completed",
    },
    {
      id: "BK-1003",
      test: "Lipid Profile",
      date: "18 Jun 2026",
      status: "Completed",
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-dark text-2xl font-bold">My Bookings</h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="py-3">Booking ID</th>
              <th>Test</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b last:border-b-0">
                <td className="py-4 text-gray-700">{booking.id}</td>
                <td className="text-gray-700">{booking.test}</td>
                <td className="text-gray-700">{booking.date}</td>
                <td>
                  <Badge>{booking.status}</Badge>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => navigate("/user/booking-details")}
                    className="text-primary font-semibold"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const MyReports = () => {
  const navigate = useNavigate();

  const reports = [
    { title: "CBC Report", date: "26 Jun 2026", status: "Uploaded" },
    { title: "Thyroid Report", date: "20 Jun 2026", status: "Uploaded" },
    { title: "Lipid Profile", date: "18 Jun 2026", status: "Uploaded" },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-dark text-2xl font-bold">My Reports</h2>

      <div className="mt-6 space-y-4">
        {reports.map((report) => (
          <div
            key={report.title}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="text-dark font-bold">{report.title}</p>
              <p className="text-sm text-gray-500">{report.date}</p>
              <Badge variant="success">{report.status}</Badge>
            </div>

            <Button
              onClick={() => navigate("/user/report-viewer")}
              className="rounded-xl px-4 py-2"
            >
              Download PDF
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

const FamilyMembers = () => {
  const [showForm, setShowForm] = useState(false);

  const [members, setMembers] = useState([
    { name: "Father", relation: "Father", age: "55" },
    { name: "Mother", relation: "Mother", age: "50" },
    { name: "Brother", relation: "Brother", age: "22" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    age: "",
  });

  const handleSaveMember = () => {
    if (!formData.name || !formData.relation || !formData.age) {
      alert("Please fill all fields");
      return;
    }

    setMembers([...members, formData]);
    setFormData({ name: "", relation: "", age: "" });
    setShowForm(false);
  };

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-dark text-2xl font-bold">Family Members</h2>

        <Button onClick={() => setShowForm(true)} className="rounded-xl px-4 py-2">
          + Add Member
        </Button>
      </div>

      {showForm && (
        <div className="mb-5 rounded-2xl border bg-slate-50 p-5">
          <h3 className="mb-4 text-lg font-bold">Add Family Member</h3>

          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Input
              placeholder="Relation"
              value={formData.relation}
              onChange={(e) =>
                setFormData({ ...formData, relation: e.target.value })
              }
            />

            <Input
              placeholder="Age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
          </div>

          <div className="mt-5 flex gap-3">
            <Button onClick={handleSaveMember} className="rounded-xl px-5 py-2">
              Save Member
            </Button>

            <Button
              variant="secondary"
              onClick={() => setShowForm(false)}
              className="rounded-xl px-5 py-2"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {members.map((member) => (
          <div key={`${member.name}-${member.age}`} className="rounded-xl border p-5">
            <h3 className="text-dark font-bold">{member.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{member.relation}</p>
            <p className="mt-2 text-xs text-gray-400">Age : {member.age}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

const ManageAddresses = () => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [addresses, setAddresses] = useState([
    {
      fullName: "Nishant Singh",
      mobile: "7654129286",
      house: "Flat No. 302",
      address: "HSR Layout",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560102",
    },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    house: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const resetAddressForm = () => {
    setFormData({
      fullName: "",
      mobile: "",
      house: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  const handleSaveAddress = () => {
    const isInvalid = Object.values(formData).some((value) => !value);

    if (isInvalid) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = formData;
      setAddresses(updatedAddresses);
      setEditIndex(null);
    } else {
      setAddresses([...addresses, formData]);
    }

    resetAddressForm();
    setShowForm(false);
  };

  const handleEditAddress = (index: number) => {
    setFormData(addresses[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDeleteAddress = (index: number) => {
    if (!window.confirm("Delete this address?")) return;

    setAddresses(addresses.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <Card className="p-5 md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-dark text-2xl font-bold">Manage Addresses</h2>
          <p className="text-sm text-gray-500">
            Add or edit your sample collection addresses
          </p>
        </div>

        <Button
          onClick={() => {
            resetAddressForm();
            setShowForm(true);
            setEditIndex(null);
          }}
          className="rounded-xl px-4 py-2"
        >
          + Add Address
        </Button>
      </div>

      {showForm && (
        <div className="mt-5 rounded-2xl border bg-slate-50 p-5">
          <h3 className="mb-4 text-lg font-bold">
            {editIndex !== null ? "Edit Address" : "Add New Address"}
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {(Object.keys(formData) as Array<keyof typeof formData>).map(
              (field) => (
                <Input
                  key={field}
                  placeholder={field}
                  value={formData[field]}
                  maxLength={field === "pincode" ? 6 : undefined}
                  onChange={(e) => {
                    const value = e.target.value;                    
                    if (field === "pincode") {                   
                      if (/^\d*$/.test(value)) {
                        setFormData({ ...formData, [field]: value });
                      }
                    } else {
                      setFormData({ ...formData, [field]: value });
                    }
                  }}
                  className={field === "pincode" ? "md:col-span-2" : ""}
                />
              )
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleSaveAddress} className="rounded-xl px-5 py-2">
              {editIndex !== null ? "Update Address" : "Save Address"}
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                setShowForm(false);
                setEditIndex(null);
              }}
              className="rounded-xl px-5 py-2"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {addresses.map((item, index) => (
          <div key={`${item.mobile}-${index}`} className="rounded-xl border p-5">
            <MapPin className="text-primary" />

            <h3 className="text-dark mt-3 font-bold">{item.fullName}</h3>
            <p className="mt-1 text-sm text-gray-600">+91 {item.mobile}</p>
            <p className="mt-3 text-sm text-gray-500">
              {item.house}, {item.address}
            </p>
            <p className="text-sm text-gray-500">
              {item.city}, {item.state} - {item.pincode}
            </p>

            <div className="mt-4 flex gap-5">
              <button
                type="button"
                onClick={() => handleEditAddress(index)}
                className="text-sm font-semibold text-blue-600"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDeleteAddress(index)}
                className="text-sm font-semibold text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const HealthRecords = () => {
  const records = [
    { test: "CBC Test", date: "26 Jun 2026", status: "Normal" },
    { test: "Thyroid Profile", date: "20 Jun 2026", status: "Uploaded" },
    { test: "Lipid Profile", date: "18 Jun 2026", status: "Normal" },
  ];

  return (
    <Card className="p-5 md:p-6">
      <h2 className="text-dark text-2xl font-bold">Health Records</h2>
      <p className="mt-1 text-sm text-gray-500">
        View your previous health test records
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="py-3">Test Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <tr key={record.test} className="border-b last:border-b-0">
                <td className="text-dark py-4 font-semibold">{record.test}</td>
                <td className="text-gray-600">{record.date}</td>
                <td>
                  <Badge variant="success">{record.status}</Badge>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => alert("Record details coming soon")}
                    className="text-primary font-semibold"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const HelpSupport = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message) {
      alert("Please write your issue");
      return;
    }

    alert("Support request submitted successfully");
    setMessage("");
  };

  const supportItems = [
    { title: "Call Support", value: "+91 9876543210" },
    { title: "Email Support", value: "support@medlab.com" },
    { title: "Working Hours", value: "9 AM - 8 PM" },
  ];

  return (
    <Card className="p-5 md:p-6">
      <h2 className="text-dark text-2xl font-bold">Help & Support</h2>
      <p className="mt-1 text-sm text-gray-500">
        Need help? Raise your issue here
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        {supportItems.map((item) => (
          <div key={item.title} className="rounded-xl border p-5">
            <h3 className="text-dark font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your issue..."
          className="input-field min-h-[120px] w-full"
        />

        <Button onClick={handleSubmit} className="mt-4 rounded-xl px-5 py-2">
          Submit Request
        </Button>
      </div>
    </Card>
  );
};

const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactNode;
}) => {
  return (
    <Card className="p-5">
      <div className="bg-primary-light text-primary flex h-11 w-11 items-center justify-center rounded-xl">
        {icon}
      </div>

      <p className="mt-4 text-sm text-gray-500">{title}</p>
      <h2 className="text-dark mt-1 text-3xl font-bold">{value}</h2>
    </Card>
  );
};

export default PatientDashboard;