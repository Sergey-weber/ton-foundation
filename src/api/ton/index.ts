export const fetchNft = async (address: string) => {
    try {
        const response = await fetch(`https://tonapi.io/v2/nfts/${address}`)

        const result = await response.json()

        const img = result.previews.find((preview: { resolution: string; }) => preview.resolution === '100x100').url || result.metadata.image

        return {
            friendlyAddress: address,
            rawAddress: result?.address,
            ownerAddress: result.owner.address,
            img,
            name: result.metadata.name,
            description: result.metadata.description,
        };
    } catch (e) {
        console.log('Error: ', e)
    }
}