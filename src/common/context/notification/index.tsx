import { createContext, useState, useMemo } from "react";

import type { Notification, NotificationId } from "@app/common";

import type {
  NotificationContextProps,
  NotificationProviderProps,
} from "./context.interface";

export const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps,
);

export const NotificationContextProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const append = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  const remove = (notificationId: NotificationId) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== notificationId),
    );
  };

  const contextValue = useMemo<NotificationContextProps>(
    () => ({ notifications, append, remove }),
    [notifications],
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
