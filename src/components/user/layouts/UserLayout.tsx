import { useState, type ReactNode } from "react";
import { Bell, Menu, Search, UserCircle, X } from "lucide-react";

import { AppButton } from "../../common/AppButton";
import { AppCard } from "../../common/AppCard";
import { AppInput } from "../../common/AppInput";
import UserSidebar, { type UserDashboardTab } from "../components/UserSidebar";

type UserLayoutProps = {
  children: ReactNode;
  activeTab: UserDashboardTab;
  setActiveTab: (tab: UserDashboardTab) => void;
};

const UserLayout = ({ children, activeTab, setActiveTab }: UserLayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const closeSidebar = () => setOpenSidebar(false);

  return (
    <div className="min-h-screen bg-mute">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card px-4 py-4 lg:hidden">
        <AppButton
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setOpenSidebar(true)}
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </AppButton>

        <h1 className="text-lg font-bold text-primary">MedLab</h1>

        <div className="flex items-center gap-2 text-foreground">
          <AppButton type="button" variant="ghost" size="icon">
            <Bell size={20} />
          </AppButton>

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

          <aside className="absolute left-0 top-0 h-full bg-card">
            <AppButton
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close sidebar"
              onClick={closeSidebar}
              className="absolute right-4 top-4 z-10"
            >
              <X size={22} />
            </AppButton>

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
        <AppCard className="mb-6 hidden items-center justify-between p-4 lg:flex">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Patient Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your bookings, reports and profile
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 xl:flex">
              <Search size={18} className="text-muted-foreground" />
              <AppInput
              name="dashboardSearch"
                placeholder="Search reports, bookings..."
                className="h-auto w-56 border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
              />
            </div>

            <AppButton
              type="button"
              variant="ghost"
              size="icon"
              className="relative bg-muted"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] text-white">
                2
              </span>
            </AppButton>

            <UserCircle size={34} className="text-primary" />
          </div>
        </AppCard>

        {children}
      </main>
    </div>
  );
};

export default UserLayout;