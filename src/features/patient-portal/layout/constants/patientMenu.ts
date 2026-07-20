import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  User,
  Users,
  MapPin,
  HeartPulse,
  Bell,
  Settings,
  LifeBuoy,
  ShieldCheck,   // NEW
  ClipboardList,
  RefreshCcw,
  CreditCard,
  PackageOpen,
  Star,
  Gift,
  Wallet, // NEW

} from "lucide-react";

export const patientMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "My Bookings",
    icon: CalendarDays,
    path: "/dashboard/bookings",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/dashboard/reports",
  },
  {
    title: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    title: "Family Members",
    icon: Users,
    path: "/dashboard/family",
  },
  {
    title: "Saved Address",
    icon: MapPin,
    path: "/dashboard/address",
  },
  {
    title: "Medical History",
    icon: HeartPulse,
    path: "/dashboard/medical-history",
  },
  {
  title: "Prescriptions",
  icon: ClipboardList,
  path: "/dashboard/prescriptions",
},
{
  title: "Insurance",
  icon: ShieldCheck,
  path: "/dashboard/insurance",
},
{
  title: "Wallet",
  icon: Wallet,
  path: "/dashboard/wallet",
},
{
  title: "Payments",
  icon: CreditCard,
  path: "/dashboard/payments",
},
{
  title: "Refunds",
  icon: RefreshCcw,
  path: "/dashboard/refunds",
},
{
  title: "Health Packages",
  icon: PackageOpen,
  path: "/dashboard/packages",
},
{
  title: "Feedback",
  icon: Star,
  path: "/dashboard/feedback",
},
  {
    title: "Notifications",
    icon: Bell,
    path: "/dashboard/notifications",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
  {
    title: "Help & Support",
    icon: LifeBuoy,
    path: "/dashboard/help",
  },
  {
  title: "Refer a Friend",
  icon: Gift,
  path: "/dashboard/refer-friend",
},
];