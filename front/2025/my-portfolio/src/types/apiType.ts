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

export interface ProjectItem {
    title: string;
    lang: string;
    url: string;
    tag: string;
    desc: string;
}
