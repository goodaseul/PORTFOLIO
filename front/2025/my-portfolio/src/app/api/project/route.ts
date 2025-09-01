import { NextResponse } from "next/server";
import notionClient from "@/lib/notion";
import type { ProjectItem } from "@/types/apiType";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function GET() {
    try {
        const response = await notionClient.databases.query({
            database_id: process.env.NOTION_DATABASE_PROJECT_ID!,
            sorts: [{ property: "date", direction: "descending" }],
        });

        const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

        const projects: ProjectItem[] = pages.map((page) => {
            const props = page.properties as any;

            return {
                title: props.title?.title?.[0]?.plain_text ?? "",
                // multi_select → 배열을 문자열로 합치기
                lang: props.lang?.rich_text?.[0]?.plain_text ?? "",
                // url 타입은 그냥 url
                url: props.url?.url ?? "",
                // multi_select → 문자열로 합치기
                tag: props.tag?.multi_select?.map((t: any) => t.name) ?? [],
                // rich_text
                desc: props.desc?.rich_text?.[0]?.plain_text ?? "",
            };
        });

        return NextResponse.json(projects);
    } catch (error: any) {
        console.error("Error fetching Notion project data:", JSON.stringify(error, null, 2));
        return NextResponse.json({ error: "Failed to fetch project data" }, { status: 500 });
    }
}
