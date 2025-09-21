import { AboutItem, InfoItem, MenuItem, ProjectItem, SkillItem } from "@/types/apiType";
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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

// Work 데이터 가져오기
export const fetchWorkData = async (): Promise<(AboutItem & { id: number })[]> => {
    try {
        const response = await fetch(`${baseUrl}/api/work`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: AboutItem[] = await response.json();

        const works = data.map((item, index) => ({
            id: index,
            ...item,
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
        const response = await fetch(`${baseUrl}/api/certification`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: AboutItem[] = await response.json();
        const certifications = data.map((item, index) => ({
            id: index,
            ...item,
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
        const response = await fetch(`${baseUrl}/api/skill`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: SkillItem[] = await response.json();

        const skills = data.map((item, index) => ({
            id: index,
            ...item,
        }));

        return skills;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data. Please try again later.");
    }
};

// Project 데이터 가져오기
export const fetchProjectData = async (): Promise<(ProjectItem & { id: number })[]> => {
    try {
        const response = await fetch(`${baseUrl}/api/project`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: ProjectItem[] = await response.json();

        const projects = data.map((item, index) => ({
            id: index,
            ...item,
        }));

        return projects;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(`${error},Failed to fetch data. Please try again later.`);
    }
};

// info 데이터 가져오기
export const fetchInfoData = async (): Promise<InfoItem[]> => {
    try {
        const response = await fetch(`${baseUrl}/api/datainfo`, { method: "GET" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: InfoItem[] = await response.json();

        const infos = data.map((item) => ({
            ...item,
        }));

        return infos;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error(`${error},Failed to fetch data. Please try again later.`);
    }
};
