import styled from "styled-components";
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
`;
export const MotionDiv = styled(motion.div)`
    width: calc(96% / 3);
    height: fit-content;
    &:nth-of-type(3n + 2) {
        margin: 0 2%;
    }
`;
export const Project = styled.div`
    background: ${(props) => props.theme.textColor};
    /* background-color: rgba(255, 255, 255, 0.2); */
    border-radius: 10px;
    padding: 5%;
    position: relative;
    p {
        color: ${(props) => props.theme.bgColor};
    }
`;
export const WrapInfo = styled.div`
    ${WrapStyles}
    justify-content: flex-start;
`;
export const ImgWrap = styled.p`
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const Date = styled.span`
    background: ${(props) => props.theme.bgColor};
    padding: 1%;
    border-radius: 5px;
    font-size: 16px;
    position: absolute;
    color: ${(props) => props.theme.textColor};
    right: 5%;
    top: 5%;
`;
