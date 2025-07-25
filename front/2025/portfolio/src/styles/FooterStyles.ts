import styled from "styled-components";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { Container, Txt, TxtAf, TxtEffect, TxtFill, TxtFillHover } from "../styles/commonStyles";
import { lightTheme } from "./theme";

export const FooterSection = styled.footer`
    position: sticky;
    z-index: 1;
    bottom: 0;
    width: 100%;
    /* background: #000; */

    background: ${(props) => props.theme.bgColor};
    padding: 100px 0;

    @media ${media.tablet} {
        padding: ${rem(180)} 0;
    }
    @media ${media.mobile} {
        padding: ${rem(250)} 0;
    }
    &.workLight {
        background: #f5f6f7;
    }
`;

export const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoList = styled.dl`
    width: 100%;
    font-size: 32px;
    @media ${media.tablet} {
        font-size: ${rem(60)};
    }
    @media ${media.mobile} {
        font-size: ${rem(40)};
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: baseline;
    width: fit-content;
    margin-top: 30px;

    &:first-child {
        margin-top: 0;
    }
    dd {
        ${TxtFill}
        a {
            i {
                display: block;
                overflow: hidden;
                position: relative;
                top: -0.8rem;
                right: -0.8rem;
            }
            svg {
                /* color: #fff; */
                color: ${(props) => (props.theme === lightTheme ? "#000" : "#fff")};
                transition: all 0.3s;
                transform-style: preserve-3d;
                transform: translate3d(-100%, 100%, 0px) scale3d(1, 1, 1) skew(-90deg);
            }
        }
    }
    @media ${media.desktop_hover} {
        &:hover {
            dd {
                ${TxtFillHover}
                a {
                    svg {
                        transform: translate3d(0, 0, 0);
                    }
                }
            }
        }
    }

    @media ${media.tablet} {
        margin-top: ${rem(50)};

        dd {
            ${TxtFillHover}
            a {
                svg {
                    transform: translate3d(0, 0, 0);
                }
            }
        }
    }
`;

export const InfoTitle = styled.dt`
    font-weight: bold;
    /* color: #fff; */
    color: ${(props) => props.theme.textColor};
`;

export const InfoValue = styled.dd`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
    }
`;

export const TxtDesc = styled.p`
    ${Txt}
`;

export const TxtAfDesc = styled.p`
    ${TxtAf}
`;

export const TxtEffectWrap = styled.div`
    ${TxtEffect}
    width: fit-content;
    margin-left: auto;

    @media ${media.desktop_hover} {
        &:hover {
            p {
                transform: translate3d(-300%, 0, 0);
                &:nth-child(2) {
                    transform: translate3d(0, 0, 0);
                }
            }
        }
    }

    @media ${media.tablet} {
        margin-top: ${rem(120)};
    }
`;
