import {
  CheckCircle2,
  Clock3,
  Download,
  AlertTriangle,
} from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";

import type { ReportStatus } from "../types/report.types";

type Props = {
  status: ReportStatus;
};

export const ReportStatus = ({ status }: Props) => {
  switch (status) {
    case "READY":
      return (
        <AppBadge variant="success">
          <CheckCircle2 size={14} />
          Ready
        </AppBadge>
      );

    case "PROCESSING":
      return (
        <AppBadge variant="warning">
          <Clock3 size={14} />
          Processing
        </AppBadge>
      );

    case "DOWNLOADED":
      return (
        <AppBadge variant="primary">
          <Download size={14} />
          Downloaded
        </AppBadge>
      );

    case "EXPIRED":
      return (
        <AppBadge variant="danger">
          <AlertTriangle size={14} />
          Expired
        </AppBadge>
      );

    default:
      return <AppBadge>{status}</AppBadge>;
  }
};