import type { ReactNode } from "react";
import Card from "./common/Card";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

const DashboardCard = ({
  title,
  value,
  icon,
}: DashboardCardProps) => {
  return (
    <Card className="rounded-3xl p-8">
      {icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          {icon}
        </div>
      )}

      <h3 className="text-muted text-lg font-medium">
        {title}
      </h3>

      <h2 className="text-dark mt-3 text-4xl font-bold">
        {value}
      </h2>
    </Card>
  );
};

export default DashboardCard;