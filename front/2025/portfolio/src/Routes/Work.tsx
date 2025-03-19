import { Link } from "react-router-dom";
import { projectSelector } from "../lib/api";
import { useRecoilValueLoadable } from "recoil";
import { BigTit, Container } from "../styles/commonStyles";
import { ImgWrap, MotionDiv, Name, Project, Tag, TagWrap, TopTitle, WorkSection, WrapInfo, Wrapper } from "../styles/WorkStyles";

const Work = () => {
    const projectLoadable = useRecoilValueLoadable(projectSelector);

    if (projectLoadable.state === "loading") return <div>Loading...</div>;
    if (projectLoadable.state === "hasError") return <div>Error loading products</div>;

    return (
        <>
            <WorkSection>
                <Container>
                    <TopTitle>
                        <BigTit>WEB SITE.</BigTit>
                        <Link to="https://www.notion.so/655ebd86a2e540a698d2595cb39e81d5"></Link>
                    </TopTitle>
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
                                        <p>
                                            <Link to={project?.link} />
                                        </p>

                                        {project?.logo ? (
                                            <ImgWrap>
                                                <img src={`./images/logos/${project?.logo}`} alt={`${project.name} 이미지`} />{" "}
                                            </ImgWrap>
                                        ) : (
                                            <TagWrap>
                                                <Tag>{project?.filter}</Tag>
                                            </TagWrap>
                                        )}

                                        <Date>{project.date}</Date>
                                    </Project>
                                </MotionDiv>
                            );
                        })}
                    </Wrapper>
                </Container>
            </WorkSection>
        </>
    );
};

export default Work;
