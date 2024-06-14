import { InfiniteScrollNfts } from "@/components";
import { fetchNftItems } from "@/actions";


export const revalidate = 100;

export default async function Home() {
  const { nftList, nextPageToken } = await fetchNftItems()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <InfiniteScrollNfts initialNfts={nftList} nextPageToken={nextPageToken} />
    </main>
  );
}
