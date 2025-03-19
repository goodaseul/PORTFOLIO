import styled, { css } from "styled-components";
import { Section, WrapStyles } from "./commonStyles";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { motion } from "framer-motion";
import { lightTheme } from "./theme";

export const WorkSection = styled(Section)`
    padding: 300px 0;
    position: relative;
    background: ${(props) => props.theme.bgColor};
    z-index: 3;
    @media ${media.tablet} {
        padding: ${rem(500)} 0;
    }
`;

export const TopTitle = styled.div`
    position: sticky;
    left: 0;
    top: 85px;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background: rgba(0, 0, 0, 0.1);

    ${(props) => (props.theme === lightTheme ? props.theme.accentColor : props.theme.textColor)};

    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10%;
`;

export const BigTit = styled.h2`
    display: block;
    transition: 0.5s;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    --s: 0.1em;
    --c: #fff;
    background: linear-gradient(90deg, var(--c) 50%, #000 0) calc(100% - var(--_p, 0%)) / 200% 100%, linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
`;

export const Wrapper = styled.div`
    ${WrapStyles}
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const MotionDiv = styled(motion.div)`
    width: calc(96% / 3);
    height: fit-content;

    &:nth-of-type(3n + 2) {
        margin: 0 2%;
        margin-top: 2%;
    }
    &:nth-of-type(3n + 3) {
        margin-top: 4%;
    }
`;
export const Project = styled.div`
    background: ${(props) => props.theme.textColor};
    /* background-color: rgba(255, 255, 255, 0.2); */
    border-radius: 10px;
    padding: 7%;
    position: relative;
    min-height: 230px;
    p {
        color: ${(props) => props.theme.bgColor};
    }
`;
export const Name = styled.p`
    font-weight: bold;
    position: relative;
    padding-left: 3%;
    font-size: 24px;
    margin-bottom: 5%;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: ${(props) => props.theme.accentColor};
    }
`;
export const WrapInfo = styled.div`
    ${WrapStyles}
    justify-content: flex-start;
    p {
        font-size: 16px;
        + p {
            padding-left: 2%;
            margin-left: 2%;
            position: relative;
            &::before {
                content: "";
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1px;
                height: 50%;
                background-color: #000;
                position: absolute;
            }
        }
    }
`;

export const positionStyles = css`
    position: absolute;
    left: 55%;
    transform: translateX(-50%);
    bottom: 5%;
    /* pointer-events: none; */
    width: 300px;
`;
export const ImgWrap = styled.div`
    ${positionStyles}
`;
export const TagWrap = styled.div`
    ${positionStyles}
`;
export const Date = styled.span`
    background: ${(props) => props.theme.bgColor};
    padding: 1%;
    font-size: 16px;
    position: absolute;
    color: ${(props) => props.theme.textColor};
    right: 5%;
    top: 5%;
`;

export const Tag = styled.span`
    display: block;
    width: fit-content;
    background: ${(props) => props.theme.accentColor};
    padding: 1% 3%;
    border-radius: 5px;
    font-size: 16px;
    position: absolute;
    right: 0;
    bottom: 0;
`;
