import {
  Clock,
  MapPin,
  Phone,
  UserCircle2,
} from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppButton } from "@/components/common/AppButton";
import { AppCard } from "@/components/common/AppCard";

export const PhlebotomistTracking = () => {
  return (
    <AppCard>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Live Sample Collection
          </h2>

          <p className="mt-1 text-muted-foreground">
            Track your phlebotomist in real time.
          </p>

        </div>

        <AppBadge variant="warning">
          On The Way
        </AppBadge>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <div className="space-y-5">

          <div className="flex gap-4">

            <UserCircle2
              className="text-primary"
              size={45}
            />

            <div>

              <h3 className="font-black">
                Rahul Kumar
              </h3>

              <p className="text-sm text-muted-foreground">
                Certified Phlebotomist
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <Clock className="text-primary" />

            <div>

              <p className="font-semibold">
                ETA
              </p>

              <p className="text-muted-foreground">
                15 Minutes
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <MapPin className="text-primary" />

            <div>

              <p className="font-semibold">
                Current Location
              </p>

              <p className="text-muted-foreground">
                Koramangala, Bangalore
              </p>

            </div>

          </div>

          <AppButton>

            <Phone size={18} />

            Call Phlebotomist

          </AppButton>

        </div>

        <div>

          <div className="flex h-[320px] items-center justify-center rounded-2xl border border-dashed border-primary bg-primary-light">

            <div className="text-center">

              <MapPin
                className="mx-auto text-primary"
                size={55}
              />

              <p className="mt-4 font-bold">

                Google Map Placeholder

              </p>

              <p className="mt-2 text-sm text-muted-foreground">

                Backend Integration Remaining

              </p>

            </div>

          </div>

        </div>

      </div>

    </AppCard>
  );
};