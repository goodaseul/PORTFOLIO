import { fetchProjects } from "../lib/api";
import { IProject } from "../lib/types";
import { useQuery } from "react-query";

const Work = () => {
    const { data } = useQuery<IProject[]>("projects", fetchProjects);

    return (
        <>
            <div>
                <h1>Users List</h1>
                <ul>
                    {data?.map((project) => (
                        <li key={project.id}>{project.way}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Work;
