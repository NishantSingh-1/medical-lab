import {
  Home,
  User,
  CalendarCheck,
  FileText,
  Users,
  MapPin,
  HeartPulse,
  HelpCircle,
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

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "profile", label: "My Profile", icon: User },
  { id: "bookings", label: "My Bookings", icon: CalendarCheck },
  { id: "reports", label: "My Reports", icon: FileText },
  { id: "family", label: "Family Members", icon: Users },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "health", label: "Health Records", icon: HeartPulse },
  { id: "help", label: "Help & Support", icon: HelpCircle },
] satisfies Array<{
  id: UserDashboardTab;
  label: string;
  icon: typeof Home;
}>;

const UserSidebar = ({ activeTab, setActiveTab }: UserSidebarProps) => {
  return (
    <aside className="h-full w-72 border-r border-border bg-card p-5">
      <h2 className="mb-8 text-2xl font-black text-primary">MedLab</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-primary-light hover:text-primary"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default UserSidebar;