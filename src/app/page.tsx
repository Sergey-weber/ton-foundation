import { fetchNftItems } from "@/actions";
import { NftsList } from "@/components/NftsList/NftsList";

import "./globals.css";


export const revalidate = 20;

export default async function Home() {
  const { nftList, nextPageToken } = await fetchNftItems({ initialCall: true })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NftsList nftList={nftList} nextPageToken={nextPageToken} />
    </main>
  );
}
