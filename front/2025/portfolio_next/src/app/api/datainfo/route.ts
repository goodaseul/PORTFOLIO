import { NextResponse } from "next/server";
import notionClient from "@/lib/notion";
import type { InfoItem } from "@/types/apiType";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function GET() {
    try {
        const response = await notionClient.databases.query({
            database_id: process.env.NOTION_DATABASE_INFO_ID!,
        });

        const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

        const infos: InfoItem[] = pages.map((page) => {
            const props = page.properties as any;
            return {
                title: props.title?.title?.[0]?.plain_text ?? "",
                info: props.info?.rich_text?.[0]?.plain_text ?? "",
            };
        });

        return NextResponse.json(infos);
    } catch (error: any) {
        console.error("Error fetching Notion skill data:", JSON.stringify(error, null, 2));
        return NextResponse.json({ error: "Failed to fetch skill data" }, { status: 500 });
    }
}
