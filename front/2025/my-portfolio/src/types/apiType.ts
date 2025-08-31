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
    icon: string;
}
