import { QueryClient } from "@tanstack/react-query";

export const tonClient = {
    queryClient: new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
    }),
    manifestUrl: "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json",
}


