import { useEffect, useMemo, useState } from "react";
import { Bell, CheckCheck, SearchX, Trash2 } from "lucide-react";

import { AppButton } from "@/components/common/AppButton";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientSearchBar } from "../../shared/components/PatientSearchBar";

import { demoNotifications } from "../data/demoNotifications";
import { NotificationCard } from "../components/NotificationCard";
import { DeleteNotificationDialog } from "../dialogs/DeleteNotificationDialog";
import { useNotificationStore } from "../store/useNotificationStore";
import type { PatientNotification } from "../types/notification.types";

const LOAD_DEMO_NOTIFICATIONS = true;

export const NotificationsPage = () => {
  const [query, setQuery] = useState("");
  const [hasLoadedDemo, setHasLoadedDemo] = useState(false);

  const [deletingNotification, setDeletingNotification] =
    useState<PatientNotification | null>(null);

  const notifications = useNotificationStore(
    (state) => state.notifications
  );

  const setNotifications = useNotificationStore(
    (state) => state.setNotifications
  );

  const markAsRead = useNotificationStore(
    (state) => state.markAsRead
  );

  const markAllAsRead = useNotificationStore(
    (state) => state.markAllAsRead
  );

  const clearAll = useNotificationStore(
    (state) => state.clearAll
  );

  useEffect(() => {
    if (!LOAD_DEMO_NOTIFICATIONS || hasLoadedDemo) {
      return;
    }

    setNotifications(demoNotifications);
    setHasLoadedDemo(true);
  }, [hasLoadedDemo, setNotifications]);

  const filteredNotifications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return notifications;
    }

    return notifications.filter((notification) =>
      `${notification.title} ${notification.message}`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [notifications, query]);

  const hasNotifications = notifications.length > 0;
  const hasSearchResults = filteredNotifications.length > 0;

  const handleClearAll = () => {
    clearAll();
    setQuery("");
  };

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Notifications"
        title="Notifications"
        description="View booking, payment and report updates."
      />

      {hasNotifications && (
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1">
            <PatientSearchBar
              value={query}
              placeholder="Search notifications..."
              onChange={setQuery}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <AppButton
              type="button"
              variant="outline"
              onClick={markAllAsRead}
            >
              <CheckCheck size={18} />
              Mark All Read
            </AppButton>

            <AppButton
              type="button"
              variant="destructive"
              onClick={handleClearAll}
            >
              <Trash2 size={18} />
              Clear All
            </AppButton>
          </div>
        </div>
      )}

      {!hasNotifications ? (
        <PatientEmptyState
          icon={<Bell size={38} />}
          title="No Notifications Yet"
          description="We'll notify you about bookings, payments and reports."
          buttonText="Book New Test"
          onButtonClick={() => {
            window.location.href = "/dashboard/tests";
          }}
        />
      ) : !hasSearchResults ? (
        <PatientEmptyState
          icon={<SearchX size={38} />}
          title="No Matching Notifications"
          description="No notifications match your search."
          buttonText="Clear Search"
          onButtonClick={() => setQuery("")}
        />
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onRead={markAsRead}
              onDelete={setDeletingNotification}
            />
          ))}
        </div>
      )}

      {deletingNotification && (
        <DeleteNotificationDialog
          notification={deletingNotification}
          onClose={() => setDeletingNotification(null)}
        />
      )}
    </PatientPageContainer>
  );
};