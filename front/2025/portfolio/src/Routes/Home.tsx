import styled from "styled-components";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Skills from "../Components/Skills";

interface HomeProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

const Home = ({ sectionRef }: HomeProps) => {
    return (
        <Main ref={sectionRef}>
            <Intro />
            <About />
            <Skills />
        </Main>
    );
};
const Main = styled.main`
    overflow: clip;
`;

export default Home;
