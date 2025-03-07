import styled from "styled-components";
import Intro from "../Components/Intro";
import About from "../Components/About";

const Home = () => {
    return (
        <Main>
            <Intro />
            <About />
        </Main>
    );
};
const Main = styled.main`
    overflow: clip;
`;

export default Home;
