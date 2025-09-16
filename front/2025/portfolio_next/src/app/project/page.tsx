import { fetchProjectData } from "@/lib/apiList";
import Loading from "@/components/layout/loading";
import ClientProject from "../../components/project/ClientProject";

const ProjectPage = async () => {
    const projects = await fetchProjectData();
    return (
        <Loading>
            <ClientProject projects={projects} />
        </Loading>
    );
};

export default ProjectPage;
