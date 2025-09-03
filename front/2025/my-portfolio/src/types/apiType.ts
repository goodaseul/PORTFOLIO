export interface MenuItem {
    id: string;
    name: string;
    num: number;
    path: string;
}

export interface AboutItem {
    title: string;
    date: number;
    located: string;
    description: string;
}

export interface SkillItem {
    title: string;
    classification: string;
}

export type NotionColor = "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red";

interface TagItem {
    name: string;
    color: NotionColor;
}
export interface ProjectItem {
    title: string;
    desc: string;
    url: string;
    lang: string;
    tag: TagItem[];
}
