"use client";
import { useEffect, useState } from "react";
import type { WorkItem } from "@/types/apiType";

const About = () => {
    const [work, setWork] = useState<WorkItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWork() {
            try {
                const res = await fetch("/api/work");
                if (!res.ok) throw new Error("API fetch failed");
                const data: WorkItem[] = await res.json();
                setWork(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchWork();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {work.map((item) => (
                <dl key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.date}</dd>
                    <dd>{item.located}</dd>
                    <dd>{item.description}</dd>
                </dl>
            ))}
        </div>
    );
};

export default About;
