import { NextResponse } from "next/server";
import notionClient from "@/lib/notion";
import type { SkillItem } from "@/types/apiType";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function GET() {
    try {
        // Notion DB에서 skill 데이터 가져오기
        const response = await notionClient.databases.query({
            database_id: process.env.NOTION_DATABASE_SKILL_ID!,
            // sorts: [{ property: "date", direction: "descending" }],
        });

        const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

        const skills: SkillItem[] = pages.map((page) => {
            const props = page.properties as any;
            return {
                title: props.title?.title?.[0]?.plain_text ?? "",
                classification: props.classification?.rich_text?.[0]?.plain_text ?? "",
            };
        });

        return NextResponse.json(skills);
    } catch (error: any) {
        console.error("Error fetching Notion skill data:", JSON.stringify(error, null, 2));
        return NextResponse.json({ error: "Failed to fetch skill data" }, { status: 500 });
    }
}
