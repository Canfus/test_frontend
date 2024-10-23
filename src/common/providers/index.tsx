import { NotificationContextProvider, RootNotification } from "@app/common";

import { ReactQueryClientProvider } from "./react-query";
import type { ProviderProps } from "./root.interface";

export const RootProvider = ({ children }: ProviderProps) => (
  <ReactQueryClientProvider>
    <NotificationContextProvider>
      {children}
      <RootNotification />
    </NotificationContextProvider>
  </ReactQueryClientProvider>
);
