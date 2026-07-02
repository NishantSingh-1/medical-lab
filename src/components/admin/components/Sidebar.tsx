import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  TestTube,
  FileText,
  CreditCard,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // clear any stored auth (adjust key names as needed)
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (e) {
      // ignore
    }
    navigate('/login');
  };
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Patients", icon: Users, path: "/admin/patients" },
    { name: "Appointments", icon: CalendarDays, path: "/admin/appointments" },
    { name: "Tests", icon: TestTube, path: "/admin/tests" },
    { name: "Reports", icon: FileText, path: "/admin/reports" },
    { name: "Payments", icon: CreditCard, path: "/admin/payments" },
    { name: "Notifications", icon: Bell, path: "/admin/notifications" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 relative">
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="text-2xl font-bold text-teal-700">MedLab</h1>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${isActive
                  ? "bg-teal-600 text-white"
                  : "text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-5 left-4 w-56">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;