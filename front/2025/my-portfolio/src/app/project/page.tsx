import { fetchProjectData } from "@/lib/apiList";
import ClientProject from "../../components/project/ClientProject";

const ProjectPage = async () => {
    const projects = await fetchProjectData();
    return <ClientProject projects={projects} />;
};

export default ProjectPage;
