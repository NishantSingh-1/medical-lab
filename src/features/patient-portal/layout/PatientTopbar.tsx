import { Bell, Menu, UserCircle } from "lucide-react";


type PatientTopbarProps = {
  onMenuClick: () => void;
};

export const PatientTopbar = ({ onMenuClick }: PatientTopbarProps) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card px-4 py-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="text-foreground lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-lg font-black text-foreground">
            Patient Dashboard
          </h2>
          <p className="text-xs text-muted-foreground">
            Manage bookings, reports and profile
          </p>
        </div>
      </div>

     
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-xl bg-background p-2 text-foreground"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] text-white">
            2
          </span>
        </button>

        <UserCircle size={34} className="text-primary" />
      </div>
    </header>
  );
};