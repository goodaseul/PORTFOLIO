import styled, { keyframes } from "styled-components";
import { BigTit, Container, Section } from "../styles/commonStyles";
import { media } from "../utils/media";
import { rem } from "../utils/rem";

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
                        <text>
                            <textPath href="#circlePath">I'm &nbsp; Web &nbsp; Publisher &nbsp; Daseul.</textPath>
                        </text>
                    </svg>
                </WrapObj>
            </ContainerPart>
        </IntroSection>
    );
};

const rotate = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;
const IntroSection = styled(Section)`
    background: ${(props) => props.theme.bgColor};
    z-index: 3;
`;
const WrapMyPhoto = styled.div`
    overflow: hidden;
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    width: 80%;
    height: 61%;
`;
const Img = styled.img`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.5s;
    &.active {
        opacity: 1;
    }
    &:nth-of-type(2) {
        top: 25%;
    }
`;
const WrapObj = styled.div`
    position: absolute;
    right: calc(50% - 740px);
    bottom: 0;
    svg {
        --width: 200px;
        --animation-time: 20s;
        position: absolute;
        top: calc(50% - var(--width) / 2);
        left: calc(50% - var(--width) / 2);
        width: var(--width);
        overflow: visible;
        border-radius: 50%;
        transition: all 0.2s ease;
        animation: ${rotate} var(--animation-time) linear infinite;
        path {
            transition: all 0.2s ease;
        }
    }
    @media ${media.desktop} {
        right: 0;
    }

    @media ${media.tablet} {
        svg {
            font-size: 18px;
            --width: 100px;
        }
    }
`;
const ContainerPart = styled(Container)`
    height: 1140px;
    position: relative;
    @media ${media.desktop} {
        height: 1050px;
    }

    @media ${media.tablet} {
        height: ${rem(1550)};
    }
`;
const BigTitPart = styled(BigTit)`
    position: relative;
    top: 200px;
    color: #fff;
    @media ${media.tablet} {
        top: ${rem(400)};
    }
`;
export default Intro;
