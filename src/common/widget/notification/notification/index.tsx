import { forwardRef, useMemo, type JSX } from "react";

import { SuccessIcon, RejectIcon, useNotification } from "@app/common";

import type { NotificationProps } from "./notification.interface";
import styles from "./notification.module.css";

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ notification, ...props }, ref) => {
    const { closeNotification } = useNotification();
    const { id, type, title, content } = notification;

    const onCloseNotification = () => {
      closeNotification(id);
    };

    const render = useMemo<JSX.Element>(() => {
      switch (type) {
        case "success":
        default:
          return (
            <>
              <div
                className={[
                  styles.icon__wrapper,
                  styles["icon__wrapper--success"],
                ].join(" ")}
              >
                <SuccessIcon />
              </div>
              <div className={styles.content__wrapper}>
                <p className={styles.content__title}>{title || "Успешно"}</p>
                <p className={styles.content__description}>{content}</p>
              </div>
            </>
          );
        case "error":
          return (
            <>
              <div
                className={[
                  styles.icon__wrapper,
                  styles["icon__wrapper--error"],
                ].join(" ")}
              >
                <RejectIcon />
              </div>
              <div className={styles.content__wrapper}>
                <p className={styles.content__title}>
                  {title || "Произошла ошибка"}
                </p>
                <p className={styles.content__description}>{content}</p>
              </div>
            </>
          );
      }
    }, [type, content, title]);

    return (
      <div
        {...props}
        ref={ref}
        className={styles.notification}
        onClick={onCloseNotification}
        role="alert"
        aria-hidden
      >
        {render}
      </div>
    );
  },
);
Notification.displayName = "Notification";
