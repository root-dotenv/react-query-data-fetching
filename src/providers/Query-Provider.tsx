// * This file (component serves as the wrapper/provider for the query client tool for the entire application import it to the main.tsx file and use the compponent to wrap the whole application)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import type { ReactNode } from "react";

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // - - - Hii itafanya data kuwa refetch kwa kila muda ambao component itakua on focus to allow possible new data to be fetched (it is not recommended if data are not so regularly updated)
      retry: 2, // - - - Itafetch data for another one time kama first attempt kutakua na request denial for any reason kama network error au bad request, u name the rest
      staleTime: 5 * 60 * 1000, // - - - Huu ni muda ambao react-query itangoja kabla ya kutuma request nyingine ya kufetch data kama data zilizopo hazina tofauti na data za backend, you can put 2 light years hapa the sky is the limit.
    },
  },
});

interface MainQueryProviderProps {
  children: ReactNode;
}

export default function MainQueryProvider({
  children,
}: MainQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
