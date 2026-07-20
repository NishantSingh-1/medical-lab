import { NavLink } from "react-router-dom";

import { patientMenu } from "../constants/patientMenu";

export const SidebarMenu = () => {
  return (
    <nav className="flex-1 overflow-y-auto px-4 py-5">
      <div className="space-y-2">
        {patientMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};