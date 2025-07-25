export interface HomeProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

export interface IProject {
    id: number;
    name: string;
    multilingual: string;
    contribution: string;
    way: string;
    link: string;
    logo: string;
    date: string;
    filter: string;
}
