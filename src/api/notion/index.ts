import { notionConfig } from "@/configs";

type TableRows = {
    table_row: {
        cells: {
            plain_text: any;
        }[][];
    };
}

export const fetchBlockContent = async (startCursor?: string) => {
    try {
        const start_cursor = `&start_cursor=${startCursor}`
        const url = `https://api.notion.com/v1/blocks/${notionConfig.blockId}/children?page_size=6${startCursor ? start_cursor : ''}`

        const response = await fetch(url, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${notionConfig.apiKey} `,
                'Notion-Version': notionConfig.versionApi
            }),
        })

        const { results, next_cursor } = await response.json()

        const plainTexts = results.map((res: TableRows) => {
            return res.table_row.cells[0][0].plain_text
        });

        return {
            plainTexts,
            nextPageToken: next_cursor
        };
    } catch (e) {
        console.log('Error: ', e)

        return {
            plainTexts: [],
        };
    }
}