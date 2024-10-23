import type { Notification, NotificationId } from "@app/common";

export interface NotificationContextProps {
  notifications: Notification[];
  append: (notification: Notification) => void;
  remove: (notificationId: NotificationId) => void;
}

export interface NotificationProviderProps {
  children: React.ReactNode;
}
