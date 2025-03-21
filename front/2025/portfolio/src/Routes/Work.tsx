import { Link } from "react-router-dom";
import { projectSelector } from "../lib/api";
import { useRecoilValueLoadable } from "recoil";
import { BigTit, Container, Main } from "../styles/commonStyles";
import { DateTxt, ImgWrap, MotionDiv, Name, Project, StyledLink, Tag, TagWrap, TopTitle, WorkSection, WrapBottom, WrapInfo, Wrapper } from "../styles/WorkStyles";
import { MdArrowOutward, MdBlock } from "react-icons/md";
import { CgImage } from "react-icons/cg";
import { HomeProps } from "../lib/types";
import { useEffect, useRef, useState } from "react";
import { Popup } from "../styles/Popupstyles";
import { IoMdClose } from "react-icons/io";

const Work = ({ sectionRef }: HomeProps) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [imgIndex, setImgIndex] = useState<number | null>(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("work");
            if (section) {
                const scrollTop = window.scrollY;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const percentage = Math.min(Math.max((scrollTop - sectionTop) / (sectionHeight - window.innerHeight), 0), 1);
                setScrollPercentage(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);

        document.documentElement.style.setProperty("--c", "#fff");
        document.documentElement.style.setProperty("--s", "0.1em");
        document.documentElement.style.setProperty("--_p", `${scrollPercentage * 100}%`);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPercentage]);

    const projectLoadable = useRecoilValueLoadable(projectSelector);

    if (projectLoadable.state === "loading") return <div>Loading...</div>;
    if (projectLoadable.state === "hasError") return <div>Error loading products</div>;

    const openPopup = (id: number) => {
        setImgIndex(id);
        setPopupOpen(true);
        document.body.style.overflowY = "hidden";
    };
    const closePopup = () => {
        setPopupOpen(false);
        document.body.style.overflowY = "auto";
    };

    return (
        <>
            <Main ref={sectionRef}>
                <WorkSection id="work">
                    <TopTitle>
                        <Container>
                            <BigTit
                                style={{
                                    background: `linear-gradient(-90deg, var(--c) 50%, #ffd02f 0) calc(100% - var(--_p)) / 200% 100%, 
                                            linear-gradient(var(--c) 0 0) 0% 100% / var(--_p) var(--s) no-repeat`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    transition: "background 0.3s ease-in-out",
                                    display: "inline-block",
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
                                                    <StyledLink to="#" onClick={() => openPopup(project?.id)}>
                                                        <CgImage />
                                                    </StyledLink>
                                                ) : !project?.link ? (
                                                    <StyledLink to={""} style={{ pointerEvents: "none", cursor: "default" }}>
                                                        <MdBlock style={{ color: "red" }} />
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

            {isPopupOpen && (
                <Popup ref={popupRef}>
                    <div>
                        <button onClick={closePopup}>
                            <IoMdClose />
                        </button>
                        {imgIndex !== null && <img src={`./images/pr/pr_img_${imgIndex}.png`} alt={`Popup ${imgIndex + 1}`} />}
                    </div>
                </Popup>
            )}
        </>
    );
};

export default Work;
