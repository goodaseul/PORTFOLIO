"use client";

import { useEffect, useState } from "react";
import { fetchProjectData } from "@/lib/apiList";
import ProjectContent from "@/components/project/ProjectContent";
import Loader from "@/components/layout/Loader";

const ClientProject = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProjectData();
            setProjects(data);
            setIsLoading(false);
        };
        getData();
    }, []);

    if (isLoading) return <Loader />;

    return <ProjectContent projects={projects} />;
};

export default ClientProject;
