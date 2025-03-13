import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContainerPart, TabCont, TabConts, TabList, TitShow } from "../styles/Aboutstyles";
import { BoxBig, Skill, SkillPart, SkillSection, TabsStart } from "../styles/SkillStyles";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiCsswizardry, SiFilezilla, SiNextdotjs, SiNotion, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill, BsFiletypeScss } from "react-icons/bs";
import { TbBrandCss3 } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogoBold } from "react-icons/pi";
import { MdOutlineCreditCard } from "react-icons/md";
import { VscCode } from "react-icons/vsc";

const front = [
    {
        icon: <FaHtml5 />,
        skill: "HTML",
    },

    {
        icon: <SiCsswizardry />,
        skill: "CSS",
    },
    {
        icon: <TbBrandCss3 />,
        skill: "CSS3",
    },

    {
        icon: <BsFiletypeScss />,
        skill: "SCSS",
    },

    {
        icon: <IoLogoJavascript />,
        skill: "Javascript",
    },

    {
        icon: <DiJqueryLogo />,
        skill: "jQuery",
    },

    {
        icon: <BsBootstrapFill />,
        skill: "Bootstrap",
    },

    {
        icon: <SiTypescript />,
        skill: "TypeScript",
    },

    {
        icon: <RiTailwindCssFill />,
        skill: "tailwindcss",
    },
    {
        icon: <FaReact />,
        skill: "React",
    },
    {
        icon: <SiNextdotjs />,
        skill: "Next.js",
    },
];
const tool = [
    {
        icon: <FaGithub />,
        skill: "GitHub",
    },
    {
        icon: <PiFigmaLogoBold />,
        skill: "Figma",
    },
    {
        icon: <SiAdobephotoshop />,
        skill: "Adobe Photoshop",
    },
    {
        icon: <SiNotion />,
        skill: "Notion",
    },

    {
        icon: <MdOutlineCreditCard />,
        skill: "EditPlus",
    },

    {
        icon: <SiFilezilla />,
        skill: "FileZilla",
    },

    {
        icon: <VscCode />,
        skill: "VS code",
    },
];
const all = [...front, ...tool];

const tabData = [
    { id: 0, name: "all", data: all },
    { id: 1, name: "front", data: front },
    { id: 2, name: "tool", data: tool },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.5 }
        );

        const elements = document.querySelectorAll('[data-id^="skill-"]');
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);
    return (
        <SkillSection>
            <ContainerPart>
                <SkillPart>
                    <TabsStart>
                        {tabData.map(({ id, name }) => (
                            <TabList key={id} className={activeTab === id ? "active" : ""} onClick={() => setActiveTab(id)}>
                                {name}
                            </TabList>
                        ))}
                    </TabsStart>
                    <TabConts>
                        {tabData.map(({ id, data }) => (
                            <TabCont key={id} className={activeTab === id ? "active" : ""}>
                                {data.map((skill, index) => (
                                    <BoxBig key={index}>
                                        <motion.div
                                            data-id={`skill-${id}-${index}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: isInView && activeTab === id ? 1 : 0,
                                                y: isInView && activeTab === id ? 0 : 20,
                                            }}
                                            transition={{
                                                delay: index * 0.1,
                                                duration: 0.5,
                                            }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                        >
                                            <div>
                                                <Skill>
                                                    <i> {skill.icon}</i>
                                                    <TitShow>{skill.skill}</TitShow>
                                                </Skill>
                                            </div>
                                        </motion.div>
                                    </BoxBig>
                                ))}
                            </TabCont>
                        ))}
                    </TabConts>
                </SkillPart>
            </ContainerPart>
        </SkillSection>
    );
};

export default Skills;
