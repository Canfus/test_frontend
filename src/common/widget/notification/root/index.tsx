import { createPortal } from "react-dom";

import { useNotificationContext } from "@app/common";

import { Notification } from "../notification";
import type { RootNotificationProps } from "./root.interface";
import styles from "./root.module.css";

export const RootNotification = ({
  className,
  ...props
}: RootNotificationProps) => {
  const { notifications } = useNotificationContext();

  return createPortal(
    <div {...props} className={[styles.root, className].join(" ")}>
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>,
    document.body,
  );
};
