import Certification from "@/components/about/Certification";
import Work from "@/components/about/Work";
import Info from "@/components/about/Info";
import Skill from "@/components/about/Skill";
import Loading from "@/components/layout/loading";
const About = () => {
    return (
        <div className="w-full bg-gray-100 dark:bg-black min-h-[100vh]">
            <div className="min-h-[100vh]">
                <Info />
            </div>
            <div className="inner !pb-60">
                <Loading>
                    <Work />
                    <Certification />
                    <Skill />
                </Loading>
            </div>
        </div>
    );
};

export default About;
