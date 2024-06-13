import { notionConfig } from "@/configs";

type TableRows = {
    table_row: {
        cells: {
            plain_text: any;
        }[][];
    };
}

export const fetchBlockContent = async () => {
    try {
        const response = await fetch(`https://api.notion.com/v1/blocks/${notionConfig.blockId}/children?page_size=6`, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${notionConfig.apiKey}`,
                'Notion-Version': notionConfig.versionApi
            }),
        })

        const { results } = await response.json()

        const plainTexts = results.map((res: TableRows) => {
            return res.table_row.cells[0][0].plain_text
        });

        return plainTexts;
    } catch (e) {
        console.log('Error: ', e)
    }
}