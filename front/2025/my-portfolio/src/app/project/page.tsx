import { fetchProjectData } from "@/lib/apiList";

const About = async () => {
    const projects = await fetchProjectData();
    console.log(projects);
    return (
        <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
            <div className="min-h-[100vh]"></div>
        </div>
    );
};

export default About;
