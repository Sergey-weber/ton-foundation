"use server"

import { fetchBlockContent, fetchNft } from "./api";

type Params = {
    startCursor?: string;
    initialCall?: boolean;
}

export const fetchNftItems = async ({ startCursor, initialCall }: Params) => {
    const { plainTexts, nextPageToken } = await fetchBlockContent(startCursor);

    const nftAdresses = initialCall ? plainTexts.slice(1, plainTexts.length) : plainTexts;

    const nftList = await Promise.all(nftAdresses.map((address: string) => fetchNft(address)))

    return {
        nftList,
        nextPageToken
    };
}