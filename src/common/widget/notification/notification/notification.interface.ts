import { Notification } from "@app/common";

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  notification: Notification;
}
