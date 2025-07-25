import styled from "styled-components";
import { Section, WrapStyles } from "./commonStyles";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { motion } from "framer-motion";
import { lightTheme } from "./theme";
import { Link } from "react-router-dom";

export const WorkSection = styled(Section)`
    padding: 300px 0;
    position: relative;

    ${(props) =>
        props.theme === lightTheme
            ? `
            background : #F5F6F7; 
        `
            : ` background:  #000`};

    z-index: 3;
    @media ${media.desktop} {
        padding: 150px 0;
    }
    @media ${media.tablet} {
        padding: ${rem(500)} 0;
    }
`;
export const TopTitle = styled.div`
    position: sticky;
    z-index: 9;
    left: 0;
    top: 85px;
    padding-top: 2.5%;
    padding-bottom: 2.5%;

    ${(props) => (props.theme === lightTheme ? props.theme.textColor : props.theme.textColor)};

    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    ${(props) =>
        props.theme === lightTheme
            ? `
            background : ${props.theme.accentColor}; 
        `
            : `  background: rgba(0, 0, 0, 0.1)`};
    margin-bottom: 10%;

    @media ${media.tablet} {
        top: 5.2rem;
    }
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

    @media ${media.desktop} {
        width: calc(96% / 2);
        &:nth-of-type(3n + 2) {
            margin: 0;
            margin-top: 0%;
        }
        &:nth-of-type(3n + 3) {
            margin-top: 0%;
        }
        &:nth-of-type(even) {
            margin-left: auto;
            margin-top: 4%;
        }
    }
    @media ${media.tablet} {
        width: 100%;
        & + & {
            margin-top: 4%;
        }
    }
    @media ${media.mobile} {
        & + & {
            margin-top: 6%;
        }
    }
`;
export const Project = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 7%;
    position: relative;
    min-height: 280px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    p {
        color: #000;
    }
`;
export const Name = styled.p`
    font-weight: bold;

    position: relative;
    /* padding-left: 3%; */
    font-size: 24px;
    margin-bottom: 3%;
    /* &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: ${(props) => props.theme.accentColor};
    } */
    @media ${media.tablet} {
        font-size: ${rem(52)};
        margin-top: ${rem(32)};
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

        @media ${media.tablet} {
            font-size: ${rem(32)};
        }
    }
`;
export const WrapBottom = styled.div`
    display: flex;
    align-items: flex-end;
    position: absolute;
    right: 7%;
    bottom: 12%;

    width: -webkit-fill-available;
    justify-content: flex-end;
`;
export const ImgWrap = styled.div`
    width: 300px;
    margin-right: 3%;
    img {
        display: block;
    }
`;
export const TagWrap = styled.div`
    margin-right: 2%;
    width: -webkit-fill-available;
    display: flex;
    justify-content: flex-end;
`;
export const DateTxt = styled.p`
    font-size: 13px;
    position: absolute;
    left: 7%;
    bottom: 10%;
    @media ${media.tablet} {
        font-size: ${rem(28)};
    }
`;
export const Tag = styled.span`
    background: ${(props) => props.theme.accentColor};
    padding: 0 3%;
    height: 30px;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-self: center;
    @media ${media.tablet} {
        font-size: ${rem(28)};
        height: ${rem(60)};
    }
`;
export const StyledLink = styled(Link)`
    background: #fff;
    color: #000;
    border-radius: 5px;
    padding: 0% 1.5%;
    height: 30px;
    /* box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1); */
    display: flex;
    align-items: center;
    justify-self: center;

    @media ${media.tablet} {
        height: ${rem(60)};
    }
`;
