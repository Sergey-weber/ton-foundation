"use server"

import { fetchBlockContent, fetchNft } from "./api";

export const fetchNftItems = async (startCursor?: string) => {
    const { plainTexts, nextPageToken } = await fetchBlockContent(startCursor);

    const nftAdresses = plainTexts.slice(1, plainTexts.length);

    const nftList = await Promise.all(nftAdresses.map((address: string) => fetchNft(address)))

    return {
        nftList,
        nextPageToken
    };
}