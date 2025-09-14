import { NextResponse } from "next/server";
import notionClient from "@/lib/notion";
import type { ProjectItem } from "@/types/apiType";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function GET() {
    try {
        const response = await notionClient.databases.query({
            database_id: process.env.NOTION_DATABASE_PROJECT_ID!,
            // sorts: [{ property: "date", direction: "descending" }],
        });

        const pages = response.results.filter((item): item is PageObjectResponse => item.object === "page");

        const projects: ProjectItem[] = pages.map((page) => {
            const props = page.properties as any;

            return {
                title: props.title?.title[0]?.plain_text || "",
                desc: props.desc?.rich_text[0]?.plain_text || "",
                url: props.url?.rich_text[0]?.plain_text || "",
                lang: props.lang?.rich_text[0]?.plain_text || "",
                tag:
                    props.tag?.multi_select?.map((t: { name: string; color: string }) => ({
                        name: t.name,
                        color: t.color,
                    })) || [],
            };
        });

        return NextResponse.json(projects);
    } catch (error: any) {
        console.error("Error fetching Notion project data:", JSON.stringify(error, null, 2));
        return NextResponse.json({ error: "Failed to fetch project data" }, { status: 500 });
    }
}
