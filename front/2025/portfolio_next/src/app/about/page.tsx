import Certification from "@/components/about/Certification";
import Work from "@/components/about/Work";
import Info from "@/components/about/Info";
import Skill from "@/components/about/Skill";
import { Suspense } from "react";
import Loader from "@/components/layout/Loader";

const About = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
                <div className="min-h-[100vh]">
                    <Info />
                </div>
                <div className="inner !pb-60">
                    <Work />
                    <Certification />
                    <Skill />
                </div>
            </div>
        </Suspense>
    );
};

export default About;
