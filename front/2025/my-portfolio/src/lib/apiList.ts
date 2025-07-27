import { MenuItem } from "@/types/menuType";
import notionClient from "./notion";

import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getMenu(): Promise<MenuItem[]> {
    const response = await notionClient.databases.query({
        database_id: process.env.NOTION_DATABASE_MENU_ID!,
        sorts: [
            {
                property: "num",
                direction: "ascending",
            },
        ],
    });

    // PageObjectResponse만 필터링
    const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

    // Notion 구조 → MenuItem[]로 변환
    const menus: MenuItem[] = pages.map((page) => {
        const props = page.properties as any;
        return {
            id: page.id,
            name: props.name?.title?.[0]?.plain_text ?? "",
            num: props.num?.number ?? 0,
            path: props.path?.url ?? "/",
        };
    });

    return menus;
}

export async function getAbout() {
    const response = await notionClient.databases.query({
        database_id: process.env.NOTION_DATABASE_ABOUT_ID!,
    });
    return response.results;
}
