export type NotificationType = "success" | "error" | "default";
export type NotificationId = string | number;

export interface Notification {
  id: NotificationId;
  content: React.ReactNode;
  type?: NotificationType;
  title?: string;
}
