import { useState, type ReactNode } from "react";
import { Bell, Menu, Search, UserCircle, X } from "lucide-react";
import UserSidebar from "../components/UserSidebar";
import Card from "../../common/Card";

type UserLayoutProps = {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const UserLayout = ({ children, activeTab, setActiveTab }: UserLayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const closeSidebar = () => setOpenSidebar(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-white px-4 py-4 lg:hidden">
        <button type="button" onClick={() => setOpenSidebar(true)}>
          <Menu size={24} />
        </button>

        <h1 className="text-primary text-lg font-bold">MedLab</h1>

        <div className="flex items-center gap-3">
          <Bell size={20} />
          <UserCircle size={24} />
        </div>
      </header>

      <aside className="fixed left-0 top-0 hidden h-screen lg:block">
        <UserSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      {openSidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={closeSidebar}
            className="absolute inset-0 bg-black/40"
          />

          <aside className="absolute left-0 top-0 h-full bg-white">
            <button
              type="button"
              aria-label="Close sidebar"
              onClick={closeSidebar}
              className="absolute right-4 top-4 z-10"
            >
              <X size={22} />
            </button>

            <UserSidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                closeSidebar();
              }}
            />
          </aside>
        </div>
      )}

      <main className="p-4 md:p-6 lg:ml-72 lg:p-8">
        <Card className="mb-6 hidden items-center justify-between p-4 lg:flex">
          <div>
            <h1 className="text-dark text-2xl font-bold">
              Patient Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Manage your bookings, reports and profile
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 xl:flex">
              <Search size={18} className="text-gray-500" />
              <input
                placeholder="Search reports, bookings..."
                className="w-56 bg-transparent text-sm outline-none"
              />
            </div>

            <button
              type="button"
              className="relative rounded-xl bg-gray-100 p-2"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                2
              </span>
            </button>

            <UserCircle size={34} className="text-primary" />
          </div>
        </Card>

        {children}
      </main>
    </div>
  );
};

export default UserLayout;