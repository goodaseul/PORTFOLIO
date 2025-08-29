// src/lib/apiList.ts
import { WorkItem, MenuItem } from "@/types/apiType";
import notionClient from "./notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

/** 메뉴 데이터 가져오기 */
export async function getMenu(): Promise<MenuItem[]> {
    const response = await notionClient.databases.query({
        database_id: process.env.NOTION_DATABASE_MENU_ID!,
        sorts: [{ property: "num", direction: "ascending" }],
    });

    const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

    return pages.map((page) => {
        const props = page.properties as any;
        return {
            id: page.id,
            name: props.name?.title?.[0]?.plain_text ?? "",
            num: props.num?.number ?? 0,
            path: props.path?.url ?? "/",
        };
    });
}

/** Work / 경험 데이터 가져오기 */
export async function getWork(): Promise<WorkItem[]> {
    try {
        const response = await notionClient.databases.query({
            database_id: process.env.NOTION_DATABASE_WORK_ID!,
            sorts: [{ property: "date", direction: "ascending" }],
        });

        console.log("Notion Response:", response.results); // <- 여기 확인

        const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");
        return pages.map((page) => {
            const props = page.properties as any;
            console.log(page);

            return {
                title: props.title?.title?.[0]?.plain_text ?? "",
                date: Number(props.date?.number ?? 0),
                located: props.located?.rich_text?.[0]?.plain_text ?? "",
                description: props.description?.rich_text?.[0]?.plain_text ?? "",
            };
        });
    } catch (err) {
        console.error("getWork error:", err);
        throw err; // <- catch 블록에서 다시 throw 해서 route.ts까지 전파
    }
}
