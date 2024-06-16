'use client'

import { QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { tonClient } from "@/configs";

import { InfiniteScrollNfts, NftsProps } from "../InfiniteScrollNfts"

export const NftsList = ({ nftList, nextPageToken }: NftsProps) => {
    return (
        <TonConnectUIProvider manifestUrl={tonClient.manifestUrl}>
            <QueryClientProvider client={tonClient.queryClient}>
                {nftList.length && (<InfiniteScrollNfts nftList={nftList} nextPageToken={nextPageToken} />)}
            </QueryClientProvider>
        </TonConnectUIProvider>
    )
}


