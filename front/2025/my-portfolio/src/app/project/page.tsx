import { fetchProjectData } from "@/lib/apiList";
import { NotionColor } from "@/types/apiType";

const Project = async () => {
    const projects = await fetchProjectData();
    const notionColorToTailwind: Record<NotionColor, string> = {
        red: "bg-red-400",
        blue: "bg-sky-400",
        green: "bg-emerald-400",
        yellow: "bg-amber-300",
        purple: "bg-violet-400",
        pink: "bg-rose-400",
        gray: "bg-gray-400",
        brown: "bg-amber-700",
        orange: "bg-orange-400",
        default: "bg-slate-400",
    };

    console.log(projects);
    return (
        <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
            <div className="inner">
                <div className="flex flex-wrap items-center">
                    <button>All</button>
                    <button>React</button>
                    <button>Next.js</button>
                </div>
                {projects.map((item) => (
                    <li key={item.id} className="list-none">
                        <h2 className="font-semibold">{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.url.startsWith("h") ? (
                            <a href={item.url} target="_blank" className="text-blue-500 underline">
                                {item.url}
                            </a>
                        ) : (
                            <p>{item.url}</p>
                        )}

                        <p>Lang: {item.lang} </p>

                        <p>
                            Tags:
                            {item.tag.map((tagitem, index) => {
                                const bgColor = notionColorToTailwind[tagitem.color];
                                return (
                                    <span key={index} className={`${bgColor} text-white px-2 py-1 rounded mr-2 inline-block text-sm`}>
                                        {tagitem.name}
                                    </span>
                                );
                            })}
                        </p>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Project;
