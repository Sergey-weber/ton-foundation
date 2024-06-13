import Image from 'next/image'

import { fetchBlockContent, fetchNft } from "@/api";

export const revalidate = 600;

export default async function Home() {
  const plainTexts = await fetchBlockContent();
  console.log('plainTexts: ', plainTexts.length)
  const nftAdresses = plainTexts.slice(1, plainTexts.length);

  console.log('nftAdressesasd: ', nftAdresses.length)

  const nftList = await Promise.all(nftAdresses.map((address: string) => fetchNft(address)))

  console.log('nftListsad: ', nftList.length)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {plainTexts[0]}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {
          nftList?.map((nft) => {
            return <div
              key={nft.friendlyAddress}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <div className='break-all'>{nft.friendlyAddress}</div>
              <div className='break-all'>{nft.rawAddress}</div>
              <div className='break-all'>{nft.ownerAddress}</div>
              <div><Image
                src={nft.img}
                width={100}
                height={100}
                alt="Picture of the author"
              /></div>
              <div>{nft.name}</div>
              <div>{nft.description}</div>
            </div>
          })
        }
      </div>
    </main>
  );
}
