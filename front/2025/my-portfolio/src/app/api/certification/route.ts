import { NextResponse } from "next/server";
import notionClient from "@/lib/notion";
import type { AboutItem } from "@/types/apiType";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function GET() {
    try {
        const response = await notionClient.databases.query({
            database_id: process.env.NOTION_DATABASE_CERTI_ID!,
            sorts: [{ property: "date", direction: "descending" }],
        });

        const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

        const certifications: AboutItem[] = pages.map((page) => {
            const props = page.properties as any;
            return {
                title: props.title?.title?.[0]?.plain_text ?? "",
                date: props.date?.rich_text?.[0]?.plain_text ?? 0,
                located: props.located?.rich_text?.[0]?.plain_text ?? "",
                description: props.description?.rich_text?.[0]?.plain_text ?? "",
            };
        });

        return NextResponse.json(certifications);
    } catch (error) {
        console.error("Error fetching Notion work data:", error);
        return NextResponse.json({ error: "Failed to fetch work data" }, { status: 500 });
    }
}
