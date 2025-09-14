"use client";

import { useState, useMemo } from "react";
import { NotionColor, ProjectItem } from "@/types/apiType";

const ClientProject = ({ projects }: { projects: ProjectItem[] }) => {
    const [activeTab, setActiveTab] = useState("All");

    const notionColorToTailwind: Record<NotionColor, string> = { red: "bg-red-100 text-red-600", blue: "bg-sky-100 text-sky-600", green: "bg-emerald-100 text-emerald-600", yellow: "bg-amber-100 text-amber-600", purple: "bg-violet-100 text-violet-600", pink: "bg-pink-100 text-pink-600", gray: "bg-gray-100 text-gray-600", brown: "bg-amber-100 text-amber-700", orange: "bg-orange-100 text-orange-600", default: "bg-indigo-100 text-indigo-600" };

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projects;
        return projects.filter((p) => p.lang.toLowerCase() === activeTab.toLowerCase());
    }, [activeTab, projects]);

    const tabs = ["All", "React", "Next.js"];

    return (
        <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
            <div className="inner !pt-28 md:!pt-48">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded text-[rgba(185,157,207,var(--tw-text-opacity))] bg-[rgba(185,157,207,0.1)] hover:bg-[rgba(185,157,207,0.2)] transition
                        ${activeTab === tab ? "bg-[rgba(185,157,207,0.3)] text-white" : "bg-[rgba(185,157,207,0.1)] text-[rgba(185,157,207,var(--tw-text-opacity))]"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((item, index) => (
                        <li key={index} className="p-5 list-none rounded bg-[rgba(185,157,207,0.1)] dark:text-white text-black shadow">
                            <h2 className="mb-5 text-xl font-semibold">{item.title}</h2>
                            <p className="mb-2">{item.desc}</p>
                            <p className="mb-2">
                                Link:&nbsp;
                                {item.url.startsWith("h") ? (
                                    <a href={item.url} target="_blank" className="text-blue-500 underline">
                                        {item.url}
                                    </a>
                                ) : (
                                    <span>{item.url}</span>
                                )}
                            </p>
                            <p className="mb-2">Lang: {item.lang}</p>
                            <p>
                                Tags:&nbsp;
                                {item.tag.map((tagitem, index) => {
                                    const bgColor = notionColorToTailwind[tagitem.color];
                                    return (
                                        <span key={index} className={`${bgColor} font-bold text-black px-2 py-1 rounded mr-2 inline-block text-sm mb-2`}>
                                            {tagitem.name}
                                        </span>
                                    );
                                })}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ClientProject;
