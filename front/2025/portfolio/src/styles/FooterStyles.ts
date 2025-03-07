import styled from "styled-components";
import { media } from "../utils/media";
import { rem } from "../utils/rem";
import { Arrow, ArrowHover, Container, Txt, TxtAf, TxtEffect, TxtFill, TxtFillHover } from "../styles/commonStyles";

export const FooterSection = styled.footer`
    position: sticky;
    z-index: 1;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.bgColor};
    padding: 100px 0;

    @media ${media.tablet} {
        padding: ${rem(180)} 0;
    }
    @media ${media.mobile} {
        padding: ${rem(250)} 0;
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

    @media ${media.tablet} {
        margin-top: ${rem(50)};
    }
`;

export const InfoTitle = styled.dt`
    font-weight: bold;
    color: #fff;
`;

export const InfoValue = styled.dd`
    display: flex;
    align-items: center;
    ${TxtFill}

    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
    }

    @media ${media.desktop_hover} {
        &:hover {
            ${TxtFillHover}
            svg {
                ${ArrowHover}
            }
        }
    }
`;

export const ArrowIcon = styled.div`
    ${Arrow}
    width: 30px;
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
