import { NotificationContextProvider, RootNotification } from "@app/common";

import type { ProviderProps } from "./root.interface";

export const RootProvider = ({ children }: ProviderProps) => (
  <NotificationContextProvider>
    {children}
    <RootNotification />
  </NotificationContextProvider>
);
