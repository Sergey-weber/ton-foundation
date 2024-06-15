import { InfiniteScrollNfts } from "@/components";
import { fetchNftItems } from "@/actions";


export const revalidate = 10;

export default async function Home() {
  const { nftList, nextPageToken } = await fetchNftItems()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InfiniteScrollNfts nftList={nftList} nextPageToken={nextPageToken} />
    </main>
  );
}
