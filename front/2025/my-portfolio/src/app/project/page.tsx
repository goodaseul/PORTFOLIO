import { fetchProjectData } from "@/lib/apiList";

const Project = async () => {
    const projects = await fetchProjectData();
    console.log(projects);
    return (
        <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
            <div className="min-h-[100vh]">
                {projects.map((item, index) => (
                    <li key={index} className="p-2 mb-2 border rounded">
                        <h2 className="font-semibold">{item.title}</h2>
                        {/* <p>{item.desc}</p> */}
                        <a href={item.url} target="_blank" className="text-blue-500 underline">
                            {item.url}
                        </a>
                        <p>Lang: {item.lang} </p>
                        {/* <p>Tags: {item.tag.join(", ")}</p> */}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Project;
