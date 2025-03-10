import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContainerPart, TabCont, TabConts, TabList, TitShow } from "../styles/Aboutstyles";
import { BoxBig, SkillPart, SkillSection, TabsStart } from "../styles/SkillStyles";

const front = ["HTML", "CSS", "SCSS", "Javascript", "jQuery", "Bootstrap", "TypeScript", "React", "Next.js"];
const tool = ["GitHub", "Figma", "Adobe Photoshop", "Notion", "EditPlus", "FileZilla", "VS code"];
const all = [...front, ...tool];

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);
    const onClick = (index: number) => {
        setActiveTab(index);
    };
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
                        <TabList className={activeTab === 0 ? "active" : ""} onClick={() => onClick(0)}>
                            ALL
                        </TabList>
                        <TabList className={activeTab === 1 ? "active" : ""} onClick={() => onClick(1)}>
                            Front-end
                        </TabList>

                        <TabList className={activeTab === 2 ? "active" : ""} onClick={() => onClick(2)}>
                            Tools
                        </TabList>
                    </TabsStart>
                    <TabConts>
                        <TabCont className={activeTab === 0 ? "active" : ""}>
                            {all.map((skill, index) => (
                                <BoxBig key={index}>
                                    <motion.div
                                        data-id={`skill-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isInView && activeTab ? 1 : 0,
                                            y: isInView && activeTab ? 0 : 20,
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                        }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                    >
                                        <div>
                                            <p>
                                                <TitShow>{skill}</TitShow>
                                            </p>
                                        </div>
                                    </motion.div>
                                </BoxBig>
                            ))}
                        </TabCont>

                        <TabCont className={activeTab === 1 ? "active" : ""}>
                            {front.map((skill, index) => (
                                <BoxBig key={index}>
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isInView && activeTab === 1 ? 1 : 0,
                                            y: isInView && activeTab === 1 ? 0 : 20,
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                        }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                    >
                                        <div>
                                            <p>
                                                <TitShow>{skill}</TitShow>
                                            </p>
                                        </div>
                                    </motion.div>
                                </BoxBig>
                            ))}
                        </TabCont>

                        <TabCont className={activeTab === 2 ? "active" : ""}>
                            {tool.map((skill, index) => (
                                <BoxBig key={index}>
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isInView && activeTab === 2 ? 1 : 0,
                                            y: isInView && activeTab === 2 ? 0 : 20,
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                        }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                    >
                                        <div>
                                            <p>
                                                <TitShow>{skill}</TitShow>
                                            </p>
                                        </div>
                                    </motion.div>
                                </BoxBig>
                            ))}
                        </TabCont>
                    </TabConts>
                </SkillPart>
            </ContainerPart>
        </SkillSection>
    );
};

export default Skills;
