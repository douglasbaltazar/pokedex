import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            cacheTime: 0,
            staleTime: 0,
            refetchOnReconnect: true,
            retryDelay: 1500
        }
    }
});