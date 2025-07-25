import { useState } from "react";
import { motion } from "framer-motion";
import { AboutPart, AboutSection, Box, ContainerPart, Desc, Hidden, IntroducePart, MarqueeBottom, MarqueeTop, MarqueeTxt, TabCont, TabConts, TabList, Tabs, TitShow } from "../styles/AboutStyles";
import { Tit } from "../styles/commonStyles";
const descriptions = [
    { title: "긍정", text: "적인 방향으로 프로젝트를 완수합니다." },
    { textInfront: "맡은 몫은", title: "최선", text: "을 다해 이뤄냅니다." },
    { title: "실용", text: "적인 코드를 만들기 위해 노력합니다." },
    { title: "커뮤니케이션", text: "을 중요하게 생각합니다." },
    { textInfront: "동료들과 의견을 제시하고", title: "수용", text: "합니다." },
    { textInfront: "웹", title: "표준, 접근성", text: "을 지킵니다." },
    { textInfront: "깔끔하고, 실용적인", title: "stylesheet", text: "를 지향합니다." },
];

const descriptionsMe = [
    { title: "긍정", text: "적인 생각을 좋아합니다." },
    { title: "시간", text: "약속을 중요시합니다." },
    { title: "새롭게", text: "배우는 것을 좋아합니다." },
    { textInfront: "활발하며", title: "대화", text: "하는 것을 좋아합니다." },
    { textInfront: "동료들과", title: "화합과 융화", text: "를 합니다." },
    { title: "체계적", text: "이며 정돈된 스타일입니다." },
    { title: "웃음", text: "이 많습니다." },
    { title: "활동", text: "적인 것을 좋아합니다." },
];

const About = () => {
    const [activeTab, setActiveTab] = useState(0);
    const onClick = (index: number) => {
        setActiveTab(index);
    };

    const tabs = ["일할 때", "평상 시"];
    const tabContents = [descriptions, descriptionsMe];

    return (
        <AboutSection>
            <MarqueeTop speed={50} gradient={false}>
                <MarqueeTxt>positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, positive, punctuality, newness, lively, harmony, meticulous, laugh, be active</MarqueeTxt>
            </MarqueeTop>

            <ContainerPart>
                <IntroducePart>
                    <Tit>
                        안녕하세요 <mark>!</mark> <br />
                        한사람 몫은 꼭 해내는
                        <br />
                        프론트엔드 <strong>정다슬</strong> 입니다.
                    </Tit>
                    <Desc>
                        프로젝트를 진행하면서 다른 팀원들과 원활한 소통이 가능하며, <br />
                        주어진 대로만 만들어 내는 것이 아닌 주체적으로 의견을 제시하면서 <br />
                        더 좋은 사용성에 대해 끊임없이 고민하면서 코드를 작성하는 것을 지향합니다.
                        <br />
                        <br />
                        앞으로도 끊임없이 고민하고, 발전을 하며 생각의 폭을 넓혀가겠습니다.
                        <br />
                        공부하고, 발전하며, 어제보다는 성장한 내가 될 수 있는 프론트엔드가 되겠습니다.
                    </Desc>
                </IntroducePart>

                <AboutPart>
                    <Tabs>
                        {tabs.map((tab, index) => (
                            <TabList key={index} className={activeTab === index ? "active" : ""} onClick={() => onClick(index)}>
                                {tab}
                            </TabList>
                        ))}
                    </Tabs>
                    <TabConts>
                        {tabContents.map((content, tabIndex) => (
                            <TabCont key={tabIndex} className={activeTab === tabIndex ? "active" : ""}>
                                {content.map(({ title, text, textInfront }, index) => (
                                    <Box key={index}>
                                        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }} viewport={{ once: false, amount: 0.1 }}>
                                            <div>
                                                <p>
                                                    {textInfront && <Hidden>{textInfront}</Hidden>}
                                                    &nbsp;{title && <TitShow>{title}</TitShow>}&nbsp;
                                                    {text && <Hidden>{text}</Hidden>}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </Box>
                                ))}
                            </TabCont>
                        ))}
                    </TabConts>
                </AboutPart>
            </ContainerPart>

            <MarqueeBottom direction="right" speed={50} gradient={false}>
                <MarqueeTxt>positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, positive, punctuality, newness, lively, harmony, meticulous, laugh, be active</MarqueeTxt>
            </MarqueeBottom>
        </AboutSection>
    );
};

export default About;
