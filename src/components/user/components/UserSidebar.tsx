import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  FileText,
  HeartPulse,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MapPin,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export type UserDashboardTab =
  | "dashboard"
  | "profile"
  | "bookings"
  | "reports"
  | "family"
  | "addresses"
  | "health"
  | "help";

type UserSidebarProps = {
  activeTab: UserDashboardTab;
  setActiveTab: (tab: UserDashboardTab) => void;
};

type MenuItem = {
  label: string;
  value: UserDashboardTab;
  icon: LucideIcon;
};

const currentUser = {
  name: "Abhi",
  patientId: "PT-1024",
  phone: "+91 7654887222",
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", value: "dashboard", icon: LayoutDashboard },
  { label: "My Profile", value: "profile", icon: User },
  { label: "My Bookings", value: "bookings", icon: CalendarDays },
  { label: "My Reports", value: "reports", icon: FileText },
  { label: "Family Members", value: "family", icon: Users },
  { label: "Manage Addresses", value: "addresses", icon: MapPin },
  { label: "Health Records", value: "health", icon: HeartPulse },
  { label: "Help & Support", value: "help", icon: HelpCircle },
];

const UserSidebar = ({ activeTab, setActiveTab }: UserSidebarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    // localStorage.removeItem("token");
    navigate("/?login=true");
  };

  return (
    <aside className="min-h-screen w-72 border-r border-gray-200 bg-white p-5">
      <div className="bg-primary mb-6 rounded-2xl p-5 text-white">
        <div className="text-primary flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-3 text-lg font-bold">{currentUser.name}</h2>
        <p className="text-sm text-white/80">
          Patient ID: {currentUser.patientId}
        </p>
        <p className="mt-1 text-xs text-white/80">{currentUser.phone}</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.value}
            item={item}
            isActive={activeTab === item.value}
            onClick={() => setActiveTab(item.value)}
          />
        ))}

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

type SidebarMenuItemProps = {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
};

const SidebarMenuItem = ({
  item,
  isActive,
  onClick,
}: SidebarMenuItemProps) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
        isActive
          ? "bg-primary text-white shadow-sm"
          : "text-gray-600 hover:bg-primary-light hover:text-primary"
      }`}
    >
      <Icon size={20} />
      {item.label}
    </button>
  );
};

export default UserSidebar;