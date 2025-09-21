"use client";
import { fetchInfoData, fetchWorkData, fetchCertiData, fetchSkillData } from "@/lib/apiList";
import Info from "@/components/about/Info";
import DataInfo from "@/components/about/DataInfo";
import Work from "@/components/about/Work";
import Certification from "@/components/about/Certification";
import Skill from "@/components/about/Skill";
import { useEffect, useState } from "react";
import Loader from "@/components/layout/Loader";
import { AboutItem, InfoItem, SkillItem } from "@/types/apiType";

const About: React.FC = () => {
    const [dataInfoData, setDataInfoData] = useState<InfoItem[]>([]);
    const [workData, setWorkData] = useState<AboutItem[]>([]);
    const [certiData, setCertiData] = useState<AboutItem[]>([]);
    const [skillData, setSkillData] = useState<SkillItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([fetchInfoData(), fetchWorkData(), fetchCertiData(), fetchSkillData()])
            .then(([info, work, certi, skill]) => {
                setDataInfoData(info);
                setWorkData(work);
                setCertiData(certi);
                setSkillData(skill);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
            <div className="min-h-[100vh]">
                <Info />
            </div>
            <div className="inner !pb-60">
                <DataInfo data={dataInfoData} />
                <Work data={workData} />
                <Certification data={certiData} />
                <Skill data={skillData} />
            </div>
        </div>
    );
};

export default About;
