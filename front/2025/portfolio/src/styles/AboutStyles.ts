import styled from "styled-components";
import { Container, Section } from "./commonStyles";
import { media } from "../utils/media";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { rem } from "../utils/rem";
import { lightTheme } from "./theme";
export const AboutSection = styled(Section)`
    padding: 300px 0;
    position: relative;
    background: ${(props) => props.theme.bgColor};
    z-index: 3;
    @media ${media.tablet} {
        padding: ${rem(500)} 0;
    }
`;
export const MarqueeTop = styled(Marquee)`
    position: absolute;
    top: 30%;
    pointer-events: none;

    @media ${media.tablet} {
        top: 35%;
    }
`;

export const MarqueeBottom = styled(Marquee)`
    position: absolute;
    bottom: -10%;
    pointer-events: none;

    @media ${media.tablet} {
        bottom: -5%;
    }
`;
export const MarqueeTxt = styled.p`
    font-size: 12rem;
    font-weight: bold;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(props) => props.theme.textColor};
    opacity: 0.5;
    white-space: nowrap;
`;
export const ContainerPart = styled(Container)`
    height: 100%;
    color: #fff;
`;

export const IntroducePart = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 400px;

    @media ${media.tablet} {
        text-align: right;
        display: block;
        margin-bottom: ${rem(600)};
    }
`;

export const Desc = styled.p`
    @media ${media.tablet} {
        margin-top: ${rem(150)};
        font-size: ${rem(36)};
    }
    @media ${media.mobile} {
        br {
            display: none;
        }
    }
`;
export const AboutPart = styled.div``;
export const Tabs = styled.ul`
    display: flex;
    justify-content: flex-end;
`;
export const TabList = styled.li`
    cursor: pointer;
    position: relative;
    padding-left: 50px;
    font-weight: bold;
    transition: all 0.2s;
    &::before {
        content: "";
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 18px;
        height: 3px;
        background: ${(props) => props.theme.textColor};
    }
    &.active {
        color: ${(props) => props.theme.accentColor};
        &:before {
            background: ${(props) => props.theme.accentColor};
        }
    }
    @media ${media.desktop_hover} {
        &:hover {
            font-weight: bold;
            color: ${(props) => props.theme.accentColor};
            &:before {
                background: ${(props) => props.theme.accentColor};
            }
        }
    }

    @media ${media.tablet} {
        padding-left: ${rem(100)};

        &::before {
            left: ${rem(40)};
            width: ${rem(36)};
        }
    }
`;
export const TabConts = styled.div``;
export const TabCont = styled.div`
    display: none;
    &.active {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Hidden = styled.span`
    display: none;
    @media ${media.tablet} {
        display: block;
    }
`;

export const TitShow = styled.span`
    font-size: 24px;
    font-weight: bold;
    display: block;

    position: relative;
    z-index: 2;
    &::before {
        content: "";
        background: ${(props) => props.theme.accentColor};
        z-index: -1;
        position: absolute;
        left: 50%;
        bottom: 20%;
        width: 120%;
        height: 3px;
        opacity: 0.5;
        transform: translateX(-50%);
    }

    @media ${media.tablet} {
        font-size: ${rem(36)};
    }
`;

export const Box = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: calc(97% / 4);
    height: 150px;
    margin-right: 1%;
    margin-top: 3%;

    &:nth-of-type(4n + 4) {
        margin-right: 0;
    }
    > div {
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        transition: all 0.2s;
        > div {
            padding: 0 15px;

            width: 100%;
            height: 100%;
            border-radius: 15px;
            background: ${(props) => (props.theme === lightTheme ? "#F0F2F5" : "rgba(255, 255, 255, 0.1);")};
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            p {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
        }
    }

    @media ${media.desktop_hover} {
        &:hover {
            > div {
                top: -10px;
            }
            ${Hidden} {
                display: block;
            }
            ${TitShow} {
                font-size: 18px;
            }
        }
    }

    @media ${media.tablet} {
        width: calc(97% / 2);
        height: ${rem(300)};
        &:nth-of-type(4n + 4) {
            margin-right: 0;
        }
        &:nth-of-type(2n + 2) {
            margin-right: 0;
            margin-left: auto;
        }
        > div {
            > div {
                padding: 0 ${rem(40)};
                p {
                    span {
                        display: inline;
                    }
                }
            }
        }
    }
`;
