import { useCallback } from "react";
import { v4 as uuid } from "uuid";

import { useNotificationContext } from "../use-notification-context";
import { TIMER_AUTO_CLOSE } from "./use-notification.constants";
import type {
  Notification,
  NotificationId,
} from "./use-notification.interface";

export type {
  Notification,
  NotificationId,
  NotificationType,
} from "./use-notification.interface";

export const useNotification = () => {
  const { append, remove } = useNotificationContext();

  const callNotification = useCallback((props: Omit<Notification, "id">) => {
    const uniqueId = uuid();

    append({
      id: uniqueId,
      ...props,
    });

    setTimeout(() => {
      remove(uniqueId);
    }, TIMER_AUTO_CLOSE);
  }, []);

  const closeNotification = useCallback((id: NotificationId) => {
    remove(id);
  }, []);

  return { callNotification, closeNotification };
};
