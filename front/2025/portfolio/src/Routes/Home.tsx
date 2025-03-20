import Intro from "../Components/Intro";
import About from "../Components/About";
import Skills from "../Components/Skills";
import { HomeProps } from "../lib/types";
import { Main } from "../styles/commonStyles";

const Home = ({ sectionRef }: HomeProps) => {
    return (
        <Main ref={sectionRef}>
            <Intro />
            <About />
            <Skills />
        </Main>
    );
};

export default Home;
