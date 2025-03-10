import styled, { keyframes } from "styled-components";
import { BigTit, Container, Section } from "../styles/commonStyles";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { lightTheme } from "./theme";
export const rotate = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;
export const IntroSection = styled(Section)`
    background: ${(props) => props.theme.bgColor};

    z-index: 4;
`;
export const WrapMyPhoto = styled.div`
    overflow: hidden;
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    width: 80%;
    height: 61%;
`;
export const Img = styled.img`
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
export const WrapObj = styled.div`
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
        text {
            font-weight: bold;
            fill: ${(props) => (props.theme === lightTheme ? props.theme.accentColor : props.theme.textColor)};
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
export const ContainerPart = styled(Container)`
    height: 1140px;
    position: relative;
    @media ${media.desktop} {
        height: 1050px;
    }

    @media ${media.tablet} {
        height: ${rem(1550)};
    }
`;
export const BigTitPart = styled(BigTit)`
    position: relative;
    top: 200px;

    @media ${media.tablet} {
        top: ${rem(400)};
    }
`;
