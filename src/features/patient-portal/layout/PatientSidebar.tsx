import { SidebarFooter } from "./components/SidebarFooter";
import { SidebarMenu } from "./components/SidebarMenu";
import { SidebarUserCard } from "./components/SidebarUserCard";

export const PatientSidebar = () => {
  return (
    <div className="flex h-full w-full flex-col bg-card">
      <div className="shrink-0 border-b border-border p-6">
        <h1 className="text-2xl font-black text-primary">
          MedLab
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Patient Portal
        </p>
      </div>

      <div className="shrink-0">
        <SidebarUserCard
          name="Nishant Singh"
          role="Patient"
          profileCompletion={85}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <SidebarMenu />
      </div>

      <div className="shrink-0 border-t border-border">
        <SidebarFooter />
      </div>
    </div>
  );
};