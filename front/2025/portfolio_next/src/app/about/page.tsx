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
        const fetchAll = async () => {
            try {
                // 모든 fetch가 끝나야 다음 단계로
                const [info, work, certi, skill] = await Promise.all([fetchInfoData(), fetchWorkData(), fetchCertiData(), fetchSkillData()]);

                setDataInfoData(info);
                setWorkData(work);
                setCertiData(certi);
                setSkillData(skill);
            } catch (error) {
                console.error(error);
            } finally {
                // 모든 fetch가 끝난 후 Loader 종료
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    if (loading) return <Loader />; // 모든 데이터 준비될 때까지 Loader

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
