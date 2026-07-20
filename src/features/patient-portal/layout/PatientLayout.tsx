import { useState } from "react";
import { Outlet } from "react-router-dom";

import { PatientSidebar } from "./PatientSidebar";
import { PatientTopbar } from "./PatientTopbar";

export const PatientLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-72 shrink-0 border-r border-border bg-card lg:block">
        <div className="h-full overflow-y-auto">
          <PatientSidebar />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="fixed left-0 top-0 z-50 h-screen w-72 bg-card lg:hidden">
            <div className="h-full overflow-y-auto">
              <PatientSidebar />
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Sticky Topbar */}
        <header className="sticky top-0 z-30 shrink-0 border-b border-border bg-background">
          <PatientTopbar
            onMenuClick={() => setSidebarOpen(true)}
          />
        </header>

        {/* Scroll only page content */}
        <main className="min-h-0 flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};