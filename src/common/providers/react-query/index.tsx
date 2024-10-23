import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { ProviderProps } from "../root.interface";

const queryClient = new QueryClient();

export const ReactQueryClientProvider = ({ children }: ProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
