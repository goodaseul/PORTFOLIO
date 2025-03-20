import { Link } from "react-router-dom";
import { projectSelector } from "../lib/api";
import { useRecoilValueLoadable } from "recoil";
import { BigTit, Container, Main } from "../styles/commonStyles";
import { DateTxt, ImgWrap, MotionDiv, Name, Project, StyledLink, Tag, TagWrap, TopTitle, WorkSection, WrapBottom, WrapInfo, Wrapper } from "../styles/WorkStyles";
import { MdArrowOutward } from "react-icons/md";
import { CgImage } from "react-icons/cg";
import { HomeProps } from "../lib/types";
import { useEffect, useState } from "react";

const Work = ({ sectionRef }: HomeProps) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("work");
            if (section) {
                const scrollTop = window.scrollY;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const percentage = Math.min(Math.max((scrollTop - sectionTop) / sectionHeight, 0), 1);
                setScrollPercentage(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const projectLoadable = useRecoilValueLoadable(projectSelector);

    if (projectLoadable.state === "loading") return <div>Loading...</div>;
    if (projectLoadable.state === "hasError") return <div>Error loading products</div>;

    return (
        <>
            <Main ref={sectionRef}>
                <WorkSection>
                    <TopTitle>
                        <Container>
                            <BigTit
                                style={{
                                    background: `linear-gradient(to right, rgb(${scrollPercentage * 255}, 0, ${255 - scrollPercentage * 255}), transparent)`,
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    transition: "background 0.2s ease",
                                }}
                            >
                                WEB SITE.
                            </BigTit>
                            <Link target="_blank" to="https://www.notion.so/655ebd86a2e540a698d2595cb39e81d5"></Link>
                        </Container>
                    </TopTitle>
                    <Container>
                        <Wrapper>
                            {projectLoadable.contents?.map((project, index) => {
                                return (
                                    <MotionDiv key={project.id} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }} viewport={{ once: false, amount: 0.1 }}>
                                        <Project>
                                            <Name>{project.name}</Name>
                                            <WrapInfo>
                                                {project?.multilingual && <p>{project?.multilingual}</p>}
                                                <p>{project.contribution}</p>
                                                <p>{project.way}</p>
                                            </WrapInfo>
                                            <WrapBottom>
                                                {project?.logo ? (
                                                    <ImgWrap>
                                                        <img src={`./images/logos/${project?.logo}`} alt={`${project.name} 이미지`} />{" "}
                                                    </ImgWrap>
                                                ) : (
                                                    <TagWrap>
                                                        <Tag>{project?.filter}</Tag>
                                                    </TagWrap>
                                                )}

                                                {project?.filter?.includes("프로모션") ? (
                                                    <StyledLink to={""}>
                                                        <CgImage />
                                                    </StyledLink>
                                                ) : (
                                                    <StyledLink target="_blank" to={project?.link}>
                                                        <MdArrowOutward />
                                                    </StyledLink>
                                                )}
                                            </WrapBottom>
                                            <DateTxt>{project.date}</DateTxt>
                                        </Project>
                                    </MotionDiv>
                                );
                            })}
                        </Wrapper>
                    </Container>
                </WorkSection>
            </Main>
        </>
    );
};

export default Work;
