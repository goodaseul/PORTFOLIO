import { AboutItem, MenuItem, SkillItem } from "@/types/apiType";
import notionClient from "./notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Common Menu 데이터 가져오기
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

// Work 데이터 가져오기
export const fetchWorkData = async (): Promise<(AboutItem & { id: number })[]> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

        const response = await fetch(`${baseUrl}/api/work`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: AboutItem[] = await response.json();

        const works = data.map((item, index) => ({
            id: index, // 필요하면 index → uuid로 교체 가능
            ...item, // title, date, located, description 그대로 유지
        }));

        return works;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data. Please try again later.");
    }
};

// Cerification 데이터 가져오기
export const fetchCertiData = async (): Promise<(AboutItem & { id: number })[]> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

        const response = await fetch(`${baseUrl}/api/certification`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: AboutItem[] = await response.json();

        console.log("certification data:", data);

        const certifications = data.map((item, index) => ({
            id: index, // 필요하면 index → uuid로 교체 가능
            ...item, // title, date, located, description 그대로 유지
        }));

        return certifications;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data. Please try again later.");
    }
};

// Skill 데이터 가져오기
export const fetchSkillData = async (): Promise<(SkillItem & { id: number })[]> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

        const response = await fetch(`${baseUrl}/api/skill`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: SkillItem[] = await response.json();

        console.log("skill data:", data);

        const skills = data.map((item, index) => ({
            id: index, // 필요하면 index → uuid로 교체 가능
            ...item,
        }));

        return skills;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data. Please try again later.");
    }
};
