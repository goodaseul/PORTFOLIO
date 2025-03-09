import { useEffect, useState } from "react";
import { ContainerPart, BigTitPart, Img, IntroSection, WrapMyPhoto, WrapObj } from "../styles/IntroStyles";

const Intro = () => {
    const [IsActiveImg, setIsActiveImg] = useState(0);

    const images = ["/images/me_1.jpg", "/images/me_2.jpg", "/images/me_3.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActiveImg((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    });
    return (
        <IntroSection>
            <ContainerPart>
                <BigTitPart>
                    Hello <mark>!</mark>
                    <br />
                    My name is Daseul
                </BigTitPart>

                <WrapMyPhoto>
                    <Img className={IsActiveImg === 0 ? "active" : ""} src={images[0]} alt="Me 1" />
                    <Img className={IsActiveImg === 1 ? "active" : ""} src={images[1]} alt="Me 2" />
                    <Img className={IsActiveImg === 2 ? "active" : ""} src={images[2]} alt="Me 3" />
                </WrapMyPhoto>

                <WrapObj>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                        <text>
                            <textPath href="#circlePath">I'm &nbsp; Web &nbsp; Front-end &nbsp; Daseul.</textPath>
                        </text>
                    </svg>
                </WrapObj>
            </ContainerPart>
        </IntroSection>
    );
};

export default Intro;
