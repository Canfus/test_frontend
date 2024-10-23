import { useContext } from "react";

import { NotificationContext, TypeGuards } from "@app/common";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);

  if (TypeGuards.isNil(context)) {
    throw new Error(
      "useNotificationContext must be used within the NotificationContextProvider",
    );
  }

  return context;
};
