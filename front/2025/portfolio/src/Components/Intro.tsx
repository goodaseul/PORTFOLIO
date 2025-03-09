import { ContainerPart, BigTitPart, Img, IntroSection, WrapMyPhoto, WrapObj } from "../styles/IntroStyles";

const Intro = () => {
    return (
        <IntroSection>
            <ContainerPart>
                <BigTitPart>
                    Hello <mark>!</mark>
                    <br />
                    My name is Daseul
                </BigTitPart>

                <WrapMyPhoto>
                    <Img className="active" src="/images/me_1.jpg" alt="Me 1" />
                    <Img src="/images/me_2.jpg" alt="Me 2" />
                    <Img src="/images/me_3.jpg" alt="Me 3" />
                </WrapMyPhoto>

                <WrapObj>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                        <text style={{ fontWeight: "bold", fill: "#fff" }}>
                            <textPath href="#circlePath">I'm &nbsp; Web &nbsp; Front-end &nbsp; Daseul.</textPath>
                        </text>
                    </svg>
                </WrapObj>
            </ContainerPart>
        </IntroSection>
    );
};

export default Intro;
