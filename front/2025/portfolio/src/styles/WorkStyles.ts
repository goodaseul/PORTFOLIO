import styled, { css } from "styled-components";
import { Section, WrapStyles } from "./commonStyles";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { motion } from "framer-motion";
import { lightTheme } from "./theme";
import { Link } from "react-router-dom";

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
    background-color: #fff;
    border-radius: 10px;
    padding: 7%;
    position: relative;
    min-height: 230px;
    p {
        color: #000;
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
    pointer-events: none;
    width: 300px;
`;
export const ImgWrap = styled.div`
    ${positionStyles}
`;
export const TagWrap = styled.div`
    ${positionStyles}
`;
export const DateTxt = styled.p`
    font-size: 13px;
    position: absolute;
    right: 5%;
    top: 5%;
`;
export const Tag = styled.span`
    width: fit-content;
    background: ${(props) => props.theme.accentColor};
    padding: 0 3%;
    height: 30px;
    border-radius: 5px;
    font-size: 16px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-self: center;
`;
export const StyledLink = styled(Link)`
    position: absolute;
    right: 3%;
    bottom: 5%;
    background: #fff;
    color: #000;
    border-radius: 5px;
    padding: 0% 1.5%;
    height: 30px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-self: center;
`;
