import { useState } from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "@/components/common/AppButton";

import { ConfirmDialog } from "../../shared/components/ConfirmDialog";

export const SidebarFooter = () => {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    setShowLogoutDialog(false);

    // Auth integration ke baad yahan auth store clear karenge.
    localStorage.removeItem("token");
    sessionStorage.clear();

    navigate("/signin", { replace: true });
  };

  return (
    <>
      <div className="border-t border-border p-4">
        <AppButton
          type="button"
          variant="outline"
          className="w-full justify-start"
          onClick={() => setShowLogoutDialog(true)}
        >
          <LogOut size={18} />
          Logout
        </AppButton>
      </div>

      {showLogoutDialog && (
        <ConfirmDialog
          danger
          title="Logout from MedLab?"
          description="You will need to sign in again to access your patient portal."
          confirmText="Logout"
          cancelText="Cancel"
          onCancel={() => setShowLogoutDialog(false)}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
};