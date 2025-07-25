import { Txt, TxtAf, TxtEffect, WrapStyles } from "../styles/commonStyles";
import styled from "styled-components";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { lightTheme } from "./theme";

export const ToggleDark = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 1%;
`;

export const HeaderSection = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    padding: 30px 0;
    background: ${(props) => props.theme.bgColor};
    @media ${media.tablet} {
        padding: ${rem(60)} 0;
    }
    &.workLight {
        background: #f5f6f7;
    }
`;

export const NavWrap = styled.ul`
    ${WrapStyles}
    flex-wrap: nowrap;
    height: 100%;
`;

export const NavList = styled.li`
    width: 100%;
    transform: translateX(0);
    transition: all 0.3s;
    text-align: right;
    a {
        position: relative;
        display: inline-block;
        font-weight: 500;
        &::after {
            content: "";
            position: absolute;
            background: ${(props) => props.theme.accentColor};
            transition: all 0.3s;
            opacity: 0;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            left: 30%;
            transform: translateX(-50%);
            bottom: -50%;
        }
    }
    &.active {
        transform: translateX(2%);
        a {
            &::after {
                opacity: 1;
                left: 50%;
            }
        }
    }
    @media ${media.desktop_hover} {
        &:hover {
            transform: translateX(2%);
            a {
                &::after {
                    opacity: 1;
                    left: 50%;
                }
            }
        }
    }
    @media ${media.tablet} {
        text-align: center;
    }

    @media ${media.mobile} {
        a {
            &::after {
                width: ${rem(12)};
                height: ${rem(12)};
            }
        }
    }
`;

export const TxtDesc = styled.p`
    ${Txt}
`;

export const TxtAfDesc = styled.p`
    ${TxtAf}
    color: ${(props) => props.theme === lightTheme && props.theme.textColor};
`;

export const TxtEffectWrap = styled.div`
    ${TxtEffect}
    position: fixed;
    left: -30px;
    z-index: 9;
    bottom: 10%;
    color: ${(props) => props.theme.accentColor};
    transform: rotate(90deg);
    transition: opacity 0.2s;
    p {
        letter-spacing: 0.1em;
        font-weight: bold;
        padding: 0 5px;
    }
    @media ${media.desktop_hover} {
        left: -38px;

        &:hover {
            p {
                transform: translate3d(-300%, 0%, 0);
                &:nth-child(2) {
                    transform: translate3d(0, 0, 0);
                }
            }
        }
    }

    @media ${media.tablet} {
        left: ${rem(-120)};
        p {
            padding: 0 ${rem(40)};
        }
    }

    @media ${media.mobile} {
        left: ${rem(-130)};
    }
`;
