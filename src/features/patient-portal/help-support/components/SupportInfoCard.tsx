import { Clock, Headphones } from "lucide-react";

import { AppCard } from "@/components/common/AppCard";

export const SupportInfoCard = () => {
  return (
    <AppCard className="p-6 shadow-none">
      <div className="flex items-center gap-3">
        <Headphones className="text-primary" />

        <h2 className="text-xl font-black text-foreground">
          Support Information
        </h2>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="text-primary" size={18} />

          <div>
            <p className="font-semibold text-foreground">
              Working Hours
            </p>

            <p className="text-sm text-muted-foreground">
              Monday - Saturday (8:00 AM - 8:00 PM)
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-foreground">
            Average Response Time
          </p>

          <p className="text-sm text-muted-foreground">
            Within 15-30 minutes
          </p>
        </div>
      </div>
    </AppCard>
  );
};