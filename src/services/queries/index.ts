import { QueryClient } from "react-query";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            cacheTime: 0,
            retryDelay: 1500,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            staleTime: twentyFourHoursInMs,
        },
    },
});
